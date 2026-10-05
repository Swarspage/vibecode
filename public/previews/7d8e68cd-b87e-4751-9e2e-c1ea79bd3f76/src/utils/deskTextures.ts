import * as THREE from 'three';

interface Surface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

function surface(width: number, height: number): Surface {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  return { canvas, ctx };
}

function toTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function roundRect(
ctx: CanvasRenderingContext2D,
x: number,
y: number,
w: number,
h: number,
r: number)
: void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Long walnut plank with grain, knots and a worked-in patina. */
export function makeWoodTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = surface(1024, 1024);
  ctx.fillStyle = '#6a4527';
  ctx.fillRect(0, 0, 1024, 1024);

  for (let i = 0; i < 700; i += 1) {
    const y = Math.random() * 1024;
    const amp = 4 + Math.random() * 26;
    const freq = 0.004 + Math.random() * 0.01;
    const light = Math.random() > 0.55;
    ctx.strokeStyle = light ?
    `rgba(146, 103, 62, ${0.05 + Math.random() * 0.16})` :
    `rgba(58, 35, 18, ${0.05 + Math.random() * 0.2})`;
    ctx.lineWidth = 0.6 + Math.random() * 3.4;
    ctx.beginPath();
    for (let x = 0; x <= 1024; x += 16) {
      const yy = y + Math.sin(x * freq + i) * amp;
      if (x === 0) ctx.moveTo(x, yy);else
      ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  for (let k = 0; k < 5; k += 1) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 1024;
    for (let r = 3; r < 42; r += 3.2) {
      ctx.strokeStyle = `rgba(48, 28, 14, ${0.24 - r * 0.004})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.52, k, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  for (let s = 0; s < 900; s += 1) {
    ctx.fillStyle = `rgba(30, 18, 8, ${Math.random() * 0.05})`;
    ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2);
  }

  const texture = toTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 5);
  return texture;
}

/** Soft paper fibre for pages, cards and stacked sheets. */
export function makePaperTexture(base = '#f2ead9'): THREE.CanvasTexture {
  const { canvas, ctx } = surface(512, 512);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i += 1) {
    ctx.fillStyle = `rgba(120, 100, 74, ${Math.random() * 0.06})`;
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 1.6, 1.6);
  }
  const texture = toTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function makeStickyTexture(label: string, base: string): THREE.CanvasTexture {
  const { canvas, ctx } = surface(256, 256);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fillRect(0, 214, 256, 42);
  for (let i = 0; i < 500; i += 1) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.08})`;
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  ctx.fillStyle = '#3a2a16';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const words = label.split(' ');
  const lineHeight = 34;
  ctx.font = '600 30px Inter, sans-serif';
  words.forEach((word, i) => {
    ctx.fillText(word, 128, 128 - (words.length - 1) * lineHeight / 2 + i * lineHeight);
  });
  return toTexture(canvas);
}

export function makeNotebookCoverTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = surface(512, 640);
  ctx.fillStyle = '#243642';
  ctx.fillRect(0, 0, 512, 640);
  for (let i = 0; i < 5000; i += 1) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.035})`;
    ctx.fillRect(Math.random() * 512, Math.random() * 640, 2, 2);
  }
  ctx.strokeStyle = 'rgba(224, 138, 60, 0.65)';
  ctx.lineWidth = 3;
  ctx.strokeRect(48, 60, 416, 520);
  ctx.fillStyle = '#f0e6d6';
  ctx.textAlign = 'center';
  ctx.font = 'italic 62px "Instrument Serif", Georgia, serif';
  ctx.fillText('Field Notes', 256, 300);
  ctx.font = '500 20px Inter, sans-serif';
  ctx.fillStyle = 'rgba(240, 230, 214, 0.6)';
  ctx.fillText('VOL. IV  ·  2024—25', 256, 344);
  return toTexture(canvas);
}

export function makePhoneScreenTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = surface(512, 1024);
  ctx.fillStyle = '#08222c';
  ctx.fillRect(0, 0, 512, 1024);

  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.font = '500 22px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('6:04', 36, 56);
  ctx.textAlign = 'right';
  ctx.fillText('Tidepool', 476, 56);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#7fe6d0';
  ctx.font = '500 24px "JetBrains Mono", monospace';
  ctx.fillText('CARCAVELOS', 36, 150);

  ctx.fillStyle = '#f4f8f7';
  ctx.font = '160px "Instrument Serif", Georgia, serif';
  ctx.fillText('14.2°', 30, 300);

  ctx.fillStyle = '#7fe6d0';
  roundRect(ctx, 36, 340, 250, 58, 29);
  ctx.fill();
  ctx.fillStyle = '#06232c';
  ctx.font = '600 24px Inter, sans-serif';
  ctx.fillText('SAFE TO SWIM', 62, 377);

  const rows = ['Swell 0.6m', 'Wind 8kt NE', 'High tide 07:41', 'Water 14.2°C'];
  rows.forEach((row, i) => {
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    roundRect(ctx, 36, 440 + i * 92, 440, 74, 18);
    ctx.fill();
    ctx.fillStyle = 'rgba(244,248,247,0.9)';
    ctx.font = '500 26px Inter, sans-serif';
    ctx.fillText(row, 60, 486 + i * 92);
  });

  ctx.strokeStyle = 'rgba(127, 230, 208, 0.9)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let x = 0; x <= 440; x += 10) {
    const y = 900 + Math.sin(x * 0.028) * 34;
    if (x === 0) ctx.moveTo(36 + x, y);else
    ctx.lineTo(36 + x, y);
  }
  ctx.stroke();

  return toTexture(canvas);
}

export function makeCardTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = surface(768, 448);
  ctx.fillStyle = '#f5eee1';
  ctx.fillRect(0, 0, 768, 448);
  for (let i = 0; i < 2400; i += 1) {
    ctx.fillStyle = `rgba(120, 100, 74, ${Math.random() * 0.05})`;
    ctx.fillRect(Math.random() * 768, Math.random() * 448, 2, 2);
  }
  ctx.fillStyle = '#1c130c';
  ctx.font = '64px "Instrument Serif", Georgia, serif';
  ctx.fillText('Ellis Nakamura', 56, 170);
  ctx.fillStyle = '#7a6a55';
  ctx.font = '500 24px Inter, sans-serif';
  ctx.fillText('Product design  ·  Front-end', 58, 218);
  ctx.fillStyle = '#b9662a';
  ctx.fillRect(58, 258, 96, 4);
  ctx.fillStyle = '#4a3d2e';
  ctx.font = '400 24px "JetBrains Mono", monospace';
  ctx.fillText('ellis@nakamura.studio', 58, 330);
  ctx.fillText('Lisbon, PT', 58, 372);
  return toTexture(canvas);
}

interface CodeToken {
  text: string;
  color: string;
}

const CODE_LINES: CodeToken[][] = [
[
{ text: 'export ', color: '#c792ea' },
{ text: 'function ', color: '#c792ea' },
{ text: 'useDispatchBoard', color: '#82aaff' },
{ text: '(', color: '#8ba0b3' },
{ text: 'depot', color: '#f5eee1' },
{ text: ') {', color: '#8ba0b3' }],

[
{ text: '  const ', color: '#c792ea' },
{ text: 'rows ', color: '#f5eee1' },
{ text: '= ', color: '#8ba0b3' },
{ text: 'useLiveRows', color: '#82aaff' },
{ text: '(depot.id)', color: '#8ba0b3' }],

[
{ text: '  const ', color: '#c792ea' },
{ text: 'late ', color: '#f5eee1' },
{ text: '= rows.', color: '#8ba0b3' },
{ text: 'filter', color: '#82aaff' },
{ text: '(r => r.eta > r.due)', color: '#8ba0b3' }],

[{ text: '', color: '#8ba0b3' }],
[
{ text: '  useFrame', color: '#82aaff' },
{ text: '(() => {', color: '#8ba0b3' }],

[
{ text: '    virtualiser.', color: '#8ba0b3' },
{ text: 'sync', color: '#82aaff' },
{ text: '(rows, ', color: '#8ba0b3' },
{ text: '{ overscan: 12 }', color: '#ffcb6b' },
{ text: ')', color: '#8ba0b3' }],

[{ text: '  })', color: '#8ba0b3' }],
[{ text: '', color: '#8ba0b3' }],
[
{ text: '  return ', color: '#c792ea' },
{ text: '{ rows, late, ', color: '#8ba0b3' },
{ text: 'status', color: '#f5eee1' },
{ text: ': ', color: '#8ba0b3' },
{ text: "'live'", color: '#c3e88d' },
{ text: ' }', color: '#8ba0b3' }],

[{ text: '}', color: '#8ba0b3' }]];


export interface AnimatedTexture {
  texture: THREE.CanvasTexture;
  update: (delta: number) => void;
}

/** An editor pane that types itself out, loops, and blinks a caret. */
export function makeCodeScreenTexture(): AnimatedTexture {
  const { canvas, ctx } = surface(1024, 640);
  const texture = toTexture(canvas);
  const total = CODE_LINES.reduce(
    (sum, line) => sum + line.reduce((s, t) => s + t.text.length, 0) + 1,
    0
  );

  let revealed = 0;
  let elapsed = 0;
  let accumulator = 0;

  const draw = (): void => {
    ctx.fillStyle = '#0e1620';
    ctx.fillRect(0, 0, 1024, 640);

    ctx.fillStyle = '#0a111a';
    ctx.fillRect(0, 0, 1024, 48);
    const dots = ['#e06c75', '#e5c07b', '#98c379'];
    dots.forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(30 + i * 26, 24, 7, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = 'rgba(245,238,225,0.4)';
    ctx.font = '400 20px "JetBrains Mono", monospace';
    ctx.fillText('halyard / useDispatchBoard.ts', 130, 31);

    ctx.font = '400 26px "JetBrains Mono", monospace';
    ctx.textBaseline = 'middle';
    let budget = revealed;
    let caretX = 60;
    let caretY = 92;

    CODE_LINES.forEach((line, index) => {
      const y = 92 + index * 50;
      ctx.fillStyle = 'rgba(245,238,225,0.22)';
      ctx.fillText(String(index + 1).padStart(2, '0'), 22, y);
      let x = 76;
      line.forEach((token) => {
        if (budget <= 0) return;
        const visible = token.text.slice(0, Math.max(0, Math.floor(budget)));
        ctx.fillStyle = token.color;
        ctx.fillText(visible, x, y);
        x += ctx.measureText(visible).width;
        budget -= token.text.length;
      });
      if (budget > 0) {
        budget -= 1;
        caretX = 76;
        caretY = y + 50;
      } else {
        caretX = x;
        caretY = y;
      }
    });

    if (Math.floor(elapsed * 2) % 2 === 0) {
      ctx.fillStyle = '#e08a3c';
      ctx.fillRect(caretX + 2, caretY - 16, 3, 32);
    }

    ctx.fillStyle = 'rgba(224,138,60,0.10)';
    ctx.fillRect(0, 596, 1024, 44);
    ctx.fillStyle = 'rgba(224,138,60,0.85)';
    ctx.font = '400 20px "JetBrains Mono", monospace';
    ctx.fillText('● 40,182 rows live   ·   60 fps', 22, 619);

    texture.needsUpdate = true;
  };

  draw();

  return {
    texture,
    update: (delta: number) => {
      elapsed += delta;
      accumulator += delta;
      if (accumulator < 0.06) return;
      accumulator = 0;
      revealed += 3;
      if (revealed > total + 90) revealed = 0;
      draw();
    }
  };
}