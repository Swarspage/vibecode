import * as THREE from 'three';
import type { StationId } from '../types/desk';
import {
  makeCardTexture,
  makeCodeScreenTexture,
  makeNotebookCoverTexture,
  makePaperTexture,
  makePhoneScreenTexture,
  makeStickyTexture,
  makeWoodTexture } from
'./deskTextures';

export interface Interactive {
  id: StationId;
  group: THREE.Group;
  baseY: number;
  baseRotation: number;
}

export interface BuiltScene {
  root: THREE.Group;
  interactives: Interactive[];
  screenLight: THREE.PointLight;
  update: (delta: number) => void;
  dispose: () => void;
}

function tagStation(group: THREE.Group, id: StationId): void {
  group.userData.stationId = id;
  group.traverse((child) => {
    child.userData.stationId = id;
  });
}

function shadowed(mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function buildDesk(wood: THREE.Texture): THREE.Group {
  const group = new THREE.Group();

  const topMaterial = new THREE.MeshStandardMaterial({
    map: wood,
    roughness: 0.68,
    metalness: 0.02,
    color: '#c8a882'
  });
  const top = shadowed(
    new THREE.Mesh(new THREE.BoxGeometry(22, 0.6, 52), topMaterial)
  );
  top.position.set(0, -0.3, -14);
  group.add(top);

  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: '#3d2a1a',
    roughness: 0.8
  });
  const lip = new THREE.Mesh(new THREE.BoxGeometry(22.3, 0.16, 52.3), edgeMaterial);
  lip.position.set(0, -0.62, -14);
  group.add(lip);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 120),
    new THREE.MeshStandardMaterial({ color: '#180f0a', roughness: 1 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, -3.4, -14);
  floor.receiveShadow = true;
  group.add(floor);

  return group;
}

function buildLamp(): THREE.Group {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({
    color: '#2f2a25',
    roughness: 0.42,
    metalness: 0.72
  });

  const base = shadowed(
    new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.14, 32), metal)
  );
  base.position.y = 0.07;
  group.add(base);

  const lowerArm = shadowed(
    new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.1, 16), metal)
  );
  lowerArm.position.set(0, 1.6, 0);
  lowerArm.rotation.z = 0.22;
  group.add(lowerArm);

  const upperArm = shadowed(
    new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 16), metal)
  );
  upperArm.position.set(0.9, 3.05, 0.7);
  upperArm.rotation.set(-0.7, 0, -0.55);
  group.add(upperArm);

  const shade = shadowed(
    new THREE.Mesh(
      new THREE.ConeGeometry(0.72, 0.9, 28, 1, true),
      new THREE.MeshStandardMaterial({
        color: '#3a332c',
        roughness: 0.5,
        metalness: 0.5,
        side: THREE.DoubleSide
      })
    )
  );
  shade.position.set(1.55, 3.55, 1.4);
  shade.rotation.set(1.05, 0, -0.35);
  group.add(shade);

  const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ffd9a0' })
  );
  bulb.position.set(1.62, 3.35, 1.6);
  group.add(bulb);

  const lampLight = new THREE.PointLight('#ffb765', 26, 22, 2);
  lampLight.position.set(1.7, 3.2, 1.9);
  lampLight.castShadow = true;
  lampLight.shadow.mapSize.set(1024, 1024);
  group.add(lampLight);

  return group;
}

function buildLaptop(): {group: THREE.Group;update: (d: number) => void;light: THREE.PointLight;} {
  const group = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({
    color: '#31363d',
    roughness: 0.34,
    metalness: 0.78
  });

  const base = shadowed(new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.13, 2.4), shell));
  base.position.y = 0.065;
  group.add(base);

  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(3.0, 0.02, 1.28),
    new THREE.MeshStandardMaterial({ color: '#181c21', roughness: 0.7 })
  );
  deck.position.set(0, 0.135, -0.28);
  group.add(deck);

  const keyGeometry = new THREE.BoxGeometry(0.16, 0.035, 0.16);
  const keyMaterial = new THREE.MeshStandardMaterial({ color: '#0e1116', roughness: 0.85 });
  const keys = new THREE.InstancedMesh(keyGeometry, keyMaterial, 14 * 5);
  const dummy = new THREE.Object3D();
  let index = 0;
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 14; col += 1) {
      dummy.position.set(-1.36 + col * 0.21, 0.155, -0.75 + row * 0.21);
      dummy.updateMatrix();
      keys.setMatrixAt(index, dummy.matrix);
      index += 1;
    }
  }
  keys.instanceMatrix.needsUpdate = true;
  group.add(keys);

  const trackpad = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 0.015, 0.72),
    new THREE.MeshStandardMaterial({ color: '#22272e', roughness: 0.5 })
  );
  trackpad.position.set(0, 0.14, 0.66);
  group.add(trackpad);

  const hinge = new THREE.Group();
  hinge.position.set(0, 0.12, -1.16);
  hinge.rotation.x = -0.26;
  group.add(hinge);

  const panel = shadowed(new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, 0.09), shell));
  panel.position.y = 1.1;
  hinge.add(panel);

  const code = makeCodeScreenTexture();
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(3.16, 1.98),
    new THREE.MeshBasicMaterial({ map: code.texture, toneMapped: false })
  );
  screen.position.set(0, 1.1, 0.05);
  hinge.add(screen);

  const light = new THREE.PointLight('#8fb7ff', 9, 9, 2);
  light.position.set(0, 1.5, 0.9);
  hinge.add(light);

  return { group, update: code.update, light };
}

function buildNotebook(paper: THREE.Texture): THREE.Group {
  const group = new THREE.Group();
  const cover = new THREE.MeshStandardMaterial({
    map: makeNotebookCoverTexture(),
    roughness: 0.62
  });
  const plainCover = new THREE.MeshStandardMaterial({ color: '#243642', roughness: 0.62 });

  const back = shadowed(
    new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 2.95), plainCover)
  );
  back.position.y = 0.03;
  group.add(back);

  const pages = shadowed(
    new THREE.Mesh(
      new THREE.BoxGeometry(2.08, 0.2, 2.82),
      new THREE.MeshStandardMaterial({ map: paper, color: '#f3ecdd', roughness: 0.92 })
    )
  );
  pages.position.y = 0.16;
  group.add(pages);

  const front = shadowed(
    new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.07, 2.95), [
    plainCover,
    plainCover,
    cover,
    plainCover,
    plainCover,
    plainCover]
    )
  );
  front.position.y = 0.3;
  group.add(front);

  const band = new THREE.Mesh(
    new THREE.BoxGeometry(0.07, 0.4, 3.02),
    new THREE.MeshStandardMaterial({ color: '#151a1f', roughness: 0.75 })
  );
  band.position.set(0.74, 0.16, 0);
  group.add(band);

  const pen = shadowed(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.055, 1.7, 16),
      new THREE.MeshStandardMaterial({ color: '#101418', roughness: 0.3, metalness: 0.5 })
    )
  );
  pen.rotation.set(0, 0.4, Math.PI / 2);
  pen.position.set(-0.1, 0.4, 0.4);
  group.add(pen);

  return group;
}

function buildPhone(): THREE.Group {
  const group = new THREE.Group();
  const body = shadowed(
    new THREE.Mesh(
      new THREE.BoxGeometry(1.06, 0.1, 2.12),
      new THREE.MeshStandardMaterial({ color: '#15181c', roughness: 0.28, metalness: 0.62 })
    )
  );
  body.position.y = 0.05;
  group.add(body);

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96, 1.98),
    new THREE.MeshBasicMaterial({ map: makePhoneScreenTexture(), toneMapped: false })
  );
  screen.rotation.x = -Math.PI / 2;
  screen.position.y = 0.101;
  group.add(screen);

  const glow = new THREE.PointLight('#5fd6c0', 3.5, 4.2, 2);
  glow.position.set(0, 0.6, 0);
  group.add(glow);

  return group;
}

const SKILLS: {label: string;color: string;}[] = [
{ label: 'Design systems', color: '#f2d64b' },
{ label: 'TypeScript', color: '#8fd6f7' },
{ label: 'Motion', color: '#f7a1b8' },
{ label: 'WebGL', color: '#a8e6a0' },
{ label: 'Accessibility', color: '#f7c48f' },
{ label: 'Prototyping', color: '#d3c0f5' }];


function buildStickyNotes(): THREE.Group {
  const group = new THREE.Group();
  const layout: [number, number, number][] = [
  [-0.95, -0.55, -0.18],
  [0.05, -0.62, 0.1],
  [1.05, -0.5, -0.32],
  [-0.62, 0.55, 0.22],
  [0.42, 0.62, -0.12],
  [1.4, 0.48, 0.36]];

  SKILLS.forEach((skill, i) => {
    const [x, z, rot] = layout[i];
    const note = shadowed(
      new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.018, 0.86), [
      new THREE.MeshStandardMaterial({ color: skill.color, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: skill.color, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ map: makeStickyTexture(skill.label, skill.color), roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: skill.color, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: skill.color, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: skill.color, roughness: 0.95 })]
      )
    );
    note.position.set(x, 0.01 + i * 0.004, z);
    note.rotation.y = rot;
    group.add(note);
  });
  return group;
}

function buildCoffee(): THREE.Group {
  const group = new THREE.Group();
  const ceramic = new THREE.MeshStandardMaterial({
    color: '#f0e7da',
    roughness: 0.32,
    side: THREE.DoubleSide
  });

  const saucer = shadowed(
    new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.66, 0.06, 40), ceramic)
  );
  saucer.position.y = 0.03;
  group.add(saucer);

  const cup = shadowed(
    new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.34, 0.62, 40, 1, true), ceramic)
  );
  cup.position.y = 0.37;
  group.add(cup);

  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.34, 32), ceramic);
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = 0.07;
  group.add(bottom);

  const coffee = new THREE.Mesh(
    new THREE.CircleGeometry(0.4, 40),
    new THREE.MeshStandardMaterial({ color: '#3a2114', roughness: 0.15, metalness: 0.1 })
  );
  coffee.rotation.x = -Math.PI / 2;
  coffee.position.y = 0.58;
  group.add(coffee);

  const handle = shadowed(
    new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 12, 30, Math.PI * 1.35), ceramic)
  );
  handle.position.set(0.46, 0.4, 0);
  handle.rotation.set(0, Math.PI / 2, -0.4);
  group.add(handle);

  return group;
}

function buildCard(): THREE.Group {
  const group = new THREE.Group();
  const blank = new THREE.MeshStandardMaterial({ color: '#e9e0d0', roughness: 0.9 });
  const card = shadowed(
    new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.03, 1.34), [
    blank,
    blank,
    new THREE.MeshStandardMaterial({ map: makeCardTexture(), roughness: 0.88 }),
    blank,
    blank,
    blank]
    )
  );
  card.position.y = 0.02;
  group.add(card);

  const under = shadowed(new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.03, 1.34), blank));
  under.position.set(0.06, 0.005, 0.07);
  under.rotation.y = 0.06;
  group.add(under);

  return group;
}

function buildProps(paper: THREE.Texture): THREE.Group {
  const group = new THREE.Group();

  const mouse = shadowed(
    new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 24, 16),
      new THREE.MeshStandardMaterial({ color: '#2a2f36', roughness: 0.4, metalness: 0.4 })
    )
  );
  mouse.scale.set(1, 0.42, 1.5);
  mouse.position.set(2.3, 0.14, -0.6);
  group.add(mouse);

  const cup = shadowed(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.3, 0.9, 24, 1, true),
      new THREE.MeshStandardMaterial({
        color: '#463a2c',
        roughness: 0.7,
        side: THREE.DoubleSide
      })
    )
  );
  cup.position.set(-3.4, 0.45, -3.6);
  group.add(cup);

  const penColors = ['#e0dcd2', '#c9502f', '#1d232b'];
  penColors.forEach((color, i) => {
    const pen = shadowed(
      new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.045, 1.5, 12),
        new THREE.MeshStandardMaterial({ color, roughness: 0.45 })
      )
    );
    pen.position.set(-3.4 + (i - 1) * 0.13, 1.0, -3.6 + (i - 1) * 0.1);
    pen.rotation.set(0.12 * (i - 1), 0, 0.1 * (i - 1));
    group.add(pen);
  });

  for (let i = 0; i < 6; i += 1) {
    const sheet = shadowed(
      new THREE.Mesh(
        new THREE.BoxGeometry(2.1, 0.014, 2.9),
        new THREE.MeshStandardMaterial({ map: paper, color: '#efe7d7', roughness: 0.95 })
      )
    );
    sheet.position.set(4.4 + Math.random() * 0.06, 0.01 + i * 0.016, -12.4);
    sheet.rotation.y = (Math.random() - 0.5) * 0.14;
    group.add(sheet);
  }

  const pot = shadowed(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.38, 0.7, 24),
      new THREE.MeshStandardMaterial({ color: '#8a5a3d', roughness: 0.9 })
    )
  );
  pot.position.set(-4.3, 0.35, -17.4);
  group.add(pot);

  for (let i = 0; i < 7; i += 1) {
    const leaf = shadowed(
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.3, 0),
        new THREE.MeshStandardMaterial({ color: '#3f6b45', roughness: 0.85, flatShading: true })
      )
    );
    const angle = i / 7 * Math.PI * 2;
    leaf.position.set(
      -4.3 + Math.cos(angle) * 0.34,
      0.85 + i % 3 * 0.24,
      -17.4 + Math.sin(angle) * 0.34
    );
    leaf.scale.setScalar(0.7 + Math.random() * 0.5);
    group.add(leaf);
  }

  const coaster = shadowed(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 0.05, 32),
      new THREE.MeshStandardMaterial({ color: '#3d2a1a', roughness: 0.85 })
    )
  );
  coaster.position.set(3.1, 0.025, -19.6);
  group.add(coaster);

  return group;
}

export function buildDeskScene(): BuiltScene {
  const root = new THREE.Group();
  const wood = makeWoodTexture();
  const paper = makePaperTexture();

  root.add(buildDesk(wood));

  const lamp = buildLamp();
  lamp.position.set(-4.6, 0, -2.2);
  lamp.rotation.y = 0.5;
  root.add(lamp);

  root.add(buildProps(paper));

  const interactives: Interactive[] = [];
  const register = (id: StationId, group: THREE.Group): void => {
    tagStation(group, id);
    root.add(group);
    interactives.push({
      id,
      group,
      baseY: group.position.y,
      baseRotation: group.rotation.y
    });
  };

  const laptop = buildLaptop();
  laptop.group.position.set(-0.3, 0, -1.2);
  laptop.group.rotation.y = 0.14;
  register('laptop', laptop.group);

  const notebook = buildNotebook(paper);
  notebook.position.set(2.6, 0, -7.2);
  notebook.rotation.y = -0.34;
  register('notebook', notebook);

  const phone = buildPhone();
  phone.position.set(-2.4, 0, -11.2);
  phone.rotation.y = 0.42;
  register('phone', phone);

  const notes = buildStickyNotes();
  notes.position.set(2.2, 0, -15.2);
  notes.rotation.y = -0.18;
  register('notes', notes);

  const coffee = buildCoffee();
  coffee.position.set(-1.9, 0, -19.2);
  register('coffee', coffee);

  const card = buildCard();
  card.position.set(0.4, 0, -23.4);
  card.rotation.y = 0.1;
  register('card', card);

  const dispose = (): void => {
    root.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(material)) material.forEach((m) => m.dispose());else
      if (material) material.dispose();
    });
    wood.dispose();
    paper.dispose();
  };

  return {
    root,
    interactives,
    screenLight: laptop.light,
    update: laptop.update,
    dispose
  };
}