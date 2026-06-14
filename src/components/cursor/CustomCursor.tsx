import { useCursor, type CursorType } from './CursorContext';
import {
  Target,
  CheckSquare,
  Brain,
  Clock,
  Lightbulb,
  Star,
  Coffee,
  Sparkle,
  Calendar,
  Heart,
  Compass,
  Hourglass,
  PaperPlane,
  Sun,
  MapPin,
  Flame,
  ListChecks,
  Flower
} from '@phosphor-icons/react';

function CursorIcon({ type }: { type: CursorType }) {
  const size = 22;
  const weight: 'regular' | 'bold' = 'regular';

  switch (type) {
    case 'paperplane':
      return <PaperPlane size={size} weight={weight} className="text-sky-600 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" />;
    case 'target':
      return <Target size={size} weight={weight} className="text-amber-600 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />;
    case 'checksquare':
      return <CheckSquare size={size} weight={weight} className="text-blue-600 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]" />;
    case 'brain':
      return <Brain size={size} weight={weight} className="text-purple-600 drop-shadow-[0_0_6px_rgba(147,51,234,0.5)]" />;
    case 'clock':
      return <Clock size={size} weight={weight} className="text-slate-600 drop-shadow-[0_0_6px_rgba(100,116,139,0.5)]" />;
    case 'lightbulb':
      return <Lightbulb size={size} weight={weight} className="text-amber-600 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />;
    case 'star':
      return <Star size={size} weight={weight} className="text-teal-600 drop-shadow-[0_0_6px_rgba(13,148,136,0.5)]" />;
    case 'coffee':
      return <Coffee size={size} weight={weight} className="text-orange-600 drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]" />;
    case 'sparkle':
      return <Sparkle size={size} weight={weight} className="text-fuchsia-600 drop-shadow-[0_0_6px_rgba(192,38,211,0.5)]" />;
    case 'calendar':
      return <Calendar size={size} weight={weight} className="text-indigo-600 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />;
    case 'heart':
      return <Heart size={size} weight={weight} className="text-rose-600 drop-shadow-[0_0_6px_rgba(225,29,72,0.5)]" />;
    case 'compass':
      return <Compass size={size} weight={weight} className="text-cyan-600 drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]" />;
    case 'hourglass':
      return <Hourglass size={size} weight={weight} className="text-amber-700 drop-shadow-[0_0_6px_rgba(180,83,9,0.5)]" />;
    case 'sun':
      return <Sun size={size} weight={weight} className="text-yellow-600 drop-shadow-[0_0_6px_rgba(202,138,4,0.5)]" />;
    case 'mappin':
      return <MapPin size={size} weight={weight} className="text-rose-600 drop-shadow-[0_0_6px_rgba(225,29,72,0.5)]" />;
    case 'flame':
      return <Flame size={size} weight={weight} className="text-orange-600 drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]" />;
    case 'listchecks':
      return <ListChecks size={size} weight={weight} className="text-indigo-600 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />;
    case 'flower':
      return <Flower size={size} weight={weight} className="text-emerald-600 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]" />;
    case 'curve':
      return (
        <svg className="w-[22px] h-[22px] text-indigo-600 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 16 C30 8, 50 12, 48 26 C46 34, 34 38, 26 32" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 28 L26 32 L32 28" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ecg':
      return (
        <svg className="w-[22px] h-[22px] text-emerald-600 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16h6l3-8 4 18 3-13 2 3h6" />
        </svg>
      );
    default:
      return <PaperPlane size={size} weight={weight} className="text-sky-600" />;
  }
}

function getBaseRotation(type: CursorType): number {
  switch (type) {
    case 'paperplane': return 90;
    case 'mappin': return 90;
    default: return 0;
  }
}

export default function CustomCursor() {
  const { activeCursor, mousePos, cursorAngle } = useCursor();
  const baseRotation = getBaseRotation(activeCursor);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%) rotate(${cursorAngle + baseRotation}deg)`,
        willChange: 'transform'
      }}
    >
      <CursorIcon type={activeCursor} />
    </div>
  );
}
