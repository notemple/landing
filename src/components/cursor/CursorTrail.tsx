import { useState, useRef, useEffect } from 'react';
import { useCursor, type CursorType } from './CursorContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  rotation?: number;
  rotationSpeed?: number;
  shape?: 'circle' | 'heart' | 'star' | 'sparkle' | 'ring' | 'petal' | 'check' | 'drop' | 'line' | 'rect';
}

function getTrailColor(cursor: CursorType): string {
  switch (cursor) {
    case 'paperplane': return 'rgba(56,189,248,0.6)';
    case 'heart': return 'rgba(225,29,72,0.6)';
    case 'star': return 'rgba(13,148,136,0.6)';
    case 'flame': return 'rgba(234,88,12,0.6)';
    case 'sparkle': return 'rgba(192,38,211,0.6)';
    case 'target': return 'rgba(245,158,11,0.6)';
    case 'brain': return 'rgba(147,51,234,0.6)';
    case 'clock': return 'rgba(100,116,139,0.6)';
    case 'lightbulb': return 'rgba(245,158,11,0.6)';
    case 'coffee': return 'rgba(234,88,12,0.6)';
    case 'calendar': return 'rgba(99,102,241,0.6)';
    case 'compass': return 'rgba(6,182,212,0.6)';
    case 'hourglass': return 'rgba(180,83,9,0.6)';
    case 'sun': return 'rgba(202,138,4,0.6)';
    case 'mappin': return 'rgba(225,29,72,0.6)';
    case 'listchecks': return 'rgba(99,102,241,0.6)';
    case 'flower': return 'rgba(16,185,129,0.6)';
    case 'checksquare': return 'rgba(59,130,246,0.6)';
    case 'ecg': return 'rgba(16,185,129,0.6)';
    case 'curve': return 'rgba(99,102,241,0.6)';
    default: return 'rgba(56,189,248,0.6)';
  }
}

function getTrailShape(cursor: CursorType): Particle['shape'] {
  switch (cursor) {
    case 'heart': return 'heart';
    case 'star': return 'star';
    case 'sparkle': return 'sparkle';
    case 'target': return 'ring';
    case 'flower': return 'petal';
    case 'listchecks': case 'checksquare': return 'check';
    case 'flame': case 'coffee': return 'drop';
    case 'sun': case 'lightbulb': return 'line';
    case 'mappin': case 'clock': case 'hourglass': case 'calendar': return 'circle';
    case 'brain': case 'compass': return 'circle';
    case 'ecg': case 'curve': return 'line';
    default: return 'circle';
  }
}

function spawnParticle(x: number, y: number, cursor: CursorType): Particle {
  const color = getTrailColor(cursor);
  const shape = getTrailShape(cursor);
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.3 + Math.random() * 1.2;

  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - (cursor === 'flame' || cursor === 'coffee' || cursor === 'flower' ? 1.5 : 0),
    life: 1,
    maxLife: 0.4 + Math.random() * 0.5,
    size: 2 + Math.random() * 4,
    color,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.1,
    shape
  };
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
  const alpha = Math.max(0, p.life);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = p.color;
  ctx.strokeStyle = p.color;
  ctx.lineWidth = 1.5;
  ctx.translate(p.x, p.y);
  if (p.rotation) ctx.rotate(p.rotation);

  switch (p.shape) {
    case 'heart': {
      const s = p.size * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s, -s * 0.3, -s, -s, 0, -s * 0.5);
      ctx.bezierCurveTo(s, -s, s, -s * 0.3, 0, s * 0.3);
      ctx.fill();
      break;
    }
    case 'star': {
      const s = p.size * 0.5;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
        const a2 = a + (2 * Math.PI) / 5;
        ctx.lineTo(Math.cos(a2) * s * 0.4, Math.sin(a2) * s * 0.4);
      }
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'sparkle': {
      const s = p.size * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.2, -s * 0.2);
      ctx.lineTo(s, 0);
      ctx.lineTo(s * 0.2, s * 0.2);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.2, s * 0.2);
      ctx.lineTo(-s, 0);
      ctx.lineTo(-s * 0.2, -s * 0.2);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'ring': {
      const s = p.size * 0.8;
      ctx.beginPath();
      ctx.arc(0, 0, s, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case 'petal': {
      const s = p.size * 0.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'check': {
      const s = p.size * 0.4;
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(-s * 0.3, s * 0.5);
      ctx.lineTo(s, -s * 0.5);
      ctx.stroke();
      break;
    }
    case 'drop': {
      const s = p.size * 0.4;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(-s, s * 0.3, -s, s, 0, s);
      ctx.bezierCurveTo(s, s, s, s * 0.3, 0, -s);
      ctx.fill();
      break;
    }
    case 'line': {
      const s = p.size * 0.6;
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(s, 0);
      ctx.stroke();
      break;
    }
    default: {
      const s = p.size * 0.35;
      ctx.beginPath();
      ctx.arc(0, 0, s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const prevPosRef = useRef<{ x: number; y: number } | null>(null);
  const { activeCursor, mousePosRef, trailRef } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;

    const animate = () => {
      const mousePos = mousePosRef.current;
      const trail = trailRef.current;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();

      // Draw the trail line for paperplane (default)
      if (activeCursor === 'paperplane' && trail.length > 2) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(56,189,248,0.35)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          const p = trail[i];
          const age = (now - p.t) / 400;
          const alpha = Math.max(0, 1 - age);
          ctx.globalAlpha = alpha * 0.6;
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Spawn particles based on cursor type
      if (mousePos.x > 0 && mousePos.y > 0) {
        const prev = prevPosRef.current;
        const dx = prev ? mousePos.x - prev.x : 0;
        const dy = prev ? mousePos.y - prev.y : 0;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 3) {
          const spawnCount = activeCursor === 'paperplane' ? 0 :
            activeCursor === 'flame' ? 3 :
            activeCursor === 'sparkle' ? 2 :
            activeCursor === 'flower' ? 2 : 1;

          for (let i = 0; i < spawnCount; i++) {
            particlesRef.current.push(spawnParticle(mousePos.x, mousePos.y, activeCursor));
          }
        }
      }

      prevPosRef.current = { x: mousePos.x, y: mousePos.y };

      // Update and draw particles
      const dt = 0.016;
      particlesRef.current = particlesRef.current.filter(p => {
        p.life -= dt / p.maxLife;
        if (p.life <= 0) return false;

        p.x += p.vx;
        p.y += p.vy;
        if (p.rotation !== undefined && p.rotationSpeed) p.rotation += p.rotationSpeed;

        if (p.shape === 'drop' || p.shape === 'heart') {
          p.vy += 0.02;
        }
        if (activeCursor === 'flame' || activeCursor === 'coffee') {
          p.vy -= 0.03;
          p.vx *= 0.98;
        }

        drawParticle(ctx, p);
        return true;
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [activeCursor, mousePosRef, trailRef, isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
