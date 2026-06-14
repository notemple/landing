import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

export type CursorType =
  | 'paperplane'
  | 'target'
  | 'curve'
  | 'checksquare'
  | 'ecg'
  | 'brain'
  | 'clock'
  | 'lightbulb'
  | 'star'
  | 'coffee'
  | 'sparkle'
  | 'calendar'
  | 'heart'
  | 'compass'
  | 'hourglass'
  | 'sun'
  | 'mappin'
  | 'flame'
  | 'listchecks'
  | 'flower';

export interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

interface CursorContextValue {
  activeCursor: CursorType;
  setCursor: (id: CursorType) => void;
  mousePos: { x: number; y: number };
  trail: TrailPoint[];
  cursorAngle: number;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error('useCursor must be used within CursorProvider');
  return ctx;
}

const TRAIL_LENGTH = 20;

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [activeCursor, setActiveCursor] = useState<CursorType>('paperplane');
  const mousePos = useRef({ x: -100, y: -100 });
  const [mouseState, setMouseState] = useState({ x: -100, y: -100 });
  const trailRef = useRef<TrailPoint[]>([]);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const rafRef = useRef<number>(0);
  const prevPosRef = useRef({ x: -100, y: -100 });
  const angleRef = useRef(0);
  const [cursorAngle, setCursorAngle] = useState(0);
  const isMovingRef = useRef(false);

  const setCursor = useCallback((id: CursorType) => {
    setActiveCursor(id);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      const pos = mousePos.current;
      setMouseState({ x: pos.x, y: pos.y });

      // Compute movement direction angle
      const dx = pos.x - prevPosRef.current.x;
      const dy = pos.y - prevPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 2) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Lerp toward target, handling wrap-around
        let diff = targetAngle - angleRef.current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        angleRef.current += diff * 0.08;
        if (angleRef.current > 180) angleRef.current -= 360;
        if (angleRef.current < -180) angleRef.current += 360;
        isMovingRef.current = true;
      } else if (isMovingRef.current) {
        // Keep last angle — don't decay
        isMovingRef.current = false;
      }

      prevPosRef.current = { x: pos.x, y: pos.y };
      setCursorAngle(angleRef.current);

      const now = performance.now();
      trailRef.current.push({ x: pos.x, y: pos.y, t: now });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current = trailRef.current.slice(-TRAIL_LENGTH);
      }
      setTrail([...trailRef.current]);

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ activeCursor, setCursor, mousePos: mouseState, trail, cursorAngle }}>
      {children}
    </CursorContext.Provider>
  );
}
