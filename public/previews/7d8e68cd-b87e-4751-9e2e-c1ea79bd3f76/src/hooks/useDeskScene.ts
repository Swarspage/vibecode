import { useEffect, useRef, type RefObject } from 'react';
import * as THREE from 'three';
import { buildDeskScene, type Interactive } from '../utils/deskObjects';
import type { Station, StationId } from '../types/desk';

interface DeskSceneOptions {
  stations: Station[];
  onProgress: (progress: number) => void;
  onHover: (id: StationId | null) => void;
  onSelect: (id: StationId) => void;
  onReady: () => void;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollProgress(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

/**
 * Owns the whole Three.js workspace: builds the desk, drives the camera dive
 * from page scroll, adds pointer parallax and picks up objects on hover.
 */
export function useDeskScene(
mountRef: RefObject<HTMLDivElement>,
options: DeskSceneOptions)
: void {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { stations } = optionsRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#120c08');
    scene.fog = new THREE.Fog('#120c08', 14, 40);

    const camera = new THREE.PerspectiveCamera(
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      140
    );
    camera.position.set(0.2, 5.4, 9.6);

    const hemi = new THREE.HemisphereLight('#8fa5c4', '#2a1a10', 0.55);
    scene.add(hemi);

    const key = new THREE.DirectionalLight('#ffd7ac', 1.5);
    key.position.set(-6, 9, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 60;
    key.shadow.camera.left = -18;
    key.shadow.camera.right = 18;
    key.shadow.camera.top = 22;
    key.shadow.camera.bottom = -42;
    key.shadow.bias = -0.0006;
    scene.add(key);

    const fill = new THREE.DirectionalLight('#7fa0d0', 0.35);
    fill.position.set(8, 6, -14);
    scene.add(fill);

    const built = buildDeskScene();
    scene.add(built.root);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(0, 0);
    const parallax = new THREE.Vector2(0, 0);
    const parallaxTarget = new THREE.Vector2(0, 0);
    const pickables = built.interactives.map((item) => item.group);
    const hoverAmount = new Map<StationId, number>();
    built.interactives.forEach((item) => hoverAmount.set(item.id, 0));

    let hovered: StationId | null = null;
    let pointerInside = false;
    let pointerMoved = false;
    let frame = 0;
    let smoothed = scrollProgress();
    let reported = -1;
    let pressX = 0;
    let pressY = 0;

    const positionA = new THREE.Vector3();
    const positionB = new THREE.Vector3();
    const targetA = new THREE.Vector3();
    const targetB = new THREE.Vector3();
    const lookAt = new THREE.Vector3();

    const setHover = (next: StationId | null): void => {
      if (next === hovered) return;
      hovered = next;
      renderer.domElement.style.cursor = next ? 'pointer' : 'default';
      optionsRef.current.onHover(next);
    };

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      parallaxTarget.set(pointer.x, pointer.y);
      pointerInside = true;
      pointerMoved = true;
    };

    const handlePointerLeave = (): void => {
      pointerInside = false;
      parallaxTarget.set(0, 0);
      setHover(null);
    };

    const handlePointerDown = (event: PointerEvent): void => {
      pressX = event.clientX;
      pressY = event.clientY;
    };

    const handlePointerUp = (event: PointerEvent): void => {
      const travelled = Math.hypot(event.clientX - pressX, event.clientY - pressY);
      if (travelled > 8) return;
      handlePointerMove(event);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(pickables, true);
      const id = hits.length > 0 ? hits[0].object.userData.stationId as StationId | undefined : undefined;
      if (id) optionsRef.current.onSelect(id);
    };

    const handleResize = (): void => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let raf = 0;

    const applyCamera = (progress: number): void => {
      const segments = stations.length - 1;
      const scaled = Math.min(progress, 0.99999) * segments;
      const index = Math.floor(scaled);
      const local = easeInOut(scaled - index);
      const from = stations[Math.min(index, segments)];
      const to = stations[Math.min(index + 1, segments)];

      positionA.fromArray(from.camera.position);
      positionB.fromArray(to.camera.position);
      targetA.fromArray(from.camera.target);
      targetB.fromArray(to.camera.target);

      positionA.lerp(positionB, local);
      targetA.lerp(targetB, local);

      camera.position.set(
        positionA.x + parallax.x * 0.7,
        positionA.y + parallax.y * 0.34,
        positionA.z
      );
      lookAt.set(
        targetA.x + parallax.x * 0.28,
        targetA.y + parallax.y * 0.12,
        targetA.z
      );
      camera.lookAt(lookAt);
    };

    const tick = (): void => {
      raf = requestAnimationFrame(tick);
      const delta = Math.min(clock.getDelta(), 0.05);
      frame += 1;

      const target = scrollProgress();
      smoothed += (target - smoothed) * Math.min(1, delta * (reducedMotion ? 20 : 5.5));

      if (Math.abs(smoothed - reported) > 0.004) {
        reported = smoothed;
        optionsRef.current.onProgress(smoothed);
      }

      if (!reducedMotion) {
        parallax.lerp(parallaxTarget, Math.min(1, delta * 3));
      }

      applyCamera(smoothed);

      if (pointerInside && pointerMoved && frame % 3 === 0) {
        pointerMoved = false;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(pickables, true);
        const id = hits.length > 0 ? hits[0].object.userData.stationId as StationId | undefined : undefined;
        setHover(id ?? null);
      }

      built.interactives.forEach((item: Interactive) => {
        const goal = hovered === item.id ? 1 : 0;
        const current = hoverAmount.get(item.id) ?? 0;
        const next = current + (goal - current) * Math.min(1, delta * 9);
        hoverAmount.set(item.id, next);
        item.group.position.y = item.baseY + next * 0.13;
        item.group.rotation.y = item.baseRotation + next * 0.06;
      });

      built.update(delta);
      renderer.render(scene, camera);
    };

    tick();
    optionsRef.current.onReady();

    return () => {
      cancelAnimationFrame(raf);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      built.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [mountRef]);
}