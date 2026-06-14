import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Keyboard,
  Sparkle,
  CloudArrowUp,
  TextT,
  Browsers,
  BookOpen,
  CheckCircle,
} from '@phosphor-icons/react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  shortcut?: string;
  example: string;
  accentColor: string;
}

const categories = [
  { id: 'writing', label: 'Writing & Editing', sublabel: 'WRITE' },
  { id: 'organization', label: 'Organization & AI', sublabel: 'ORGANIZE' },
] as const;

type CategoryId = typeof categories[number]['id'];

const featuresByCategory: Record<CategoryId, FeatureItem[]> = {
  writing: [
    {
      id: 'editor',
      icon: <TextT size={16} weight="bold" />,
      title: 'Block-Based Editor',
      description: 'A modern, distraction-free writing environment built on Lexical. Supports floating toolbars, checklists, code blocks, tables, and slash commands.',
      shortcut: 'CMD + B / I / U',
      example: 'Highlight text to reveal the inline formatting toolbar, or type markdown to create block types.',
      accentColor: '#9aa3f7',
    },
    {
      id: 'slash',
      icon: <Keyboard size={16} weight="bold" />,
      title: 'Slash Commands',
      description: 'Trigger the rich block menu via "/" to insert tables, checklists, blockquotes, and emojis without leaving the home row.',
      shortcut: '/',
      example: 'Type "/" in an empty line and select "List" or "Table" to inject elements.',
      accentColor: '#dc70ab',
    },
    {
      id: 'ai',
      icon: <Sparkle size={16} weight="bold" />,
      title: 'AI Assistant',
      description: 'Highlight sections to trigger rewrite actions, ask follow-up questions in the side panel, or run prompt operations on selected blocks.',
      shortcut: 'AI Panel',
      example: 'Select paragraphs, click "Ask AI", and request a summary or action items.',
      accentColor: '#a855f7',
    },
  ],
  organization: [
    {
      id: 'glance',
      icon: <Browsers size={16} weight="bold" />,
      title: 'At a Glance Hub',
      description: 'Your productivity cockpit. Get a daily summary of activity, recent files, focus timelines, and a rapid scratchpad for fleeting ideas.',
      shortcut: 'Hover Overlays',
      example: 'Hover on sidebar margins to slide open secondary controls without leaving your workspace.',
      accentColor: '#ea648d',
    },
    {
      id: 'collections',
      icon: <BookOpen size={16} weight="bold" />,
      title: 'Collections Dashboard',
      description: 'Organize your workspace with metadata-rich tables. Set custom tags, monitor statuses, and link items into structured records.',
      shortcut: 'Grid View',
      example: 'Create a collection, assign tag categories, and sort documents by urgency.',
      accentColor: '#9aa3f7',
    },
    {
      id: 'dailynotes',
      icon: <CloudArrowUp size={16} weight="bold" />,
      title: 'Timeline & Daily Notes',
      description: 'Maintain a chronological log of goals, standups, and progress. Focus timeline tracks workspace activity automatically.',
      shortcut: 'Daily Note Tab',
      example: "Open Daily Notes to auto-generate today's canvas linked to your timeline.",
      accentColor: '#dc70ab',
    },
  ],
};

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('writing');
  const [selectedFeature, setSelectedFeature] = useState<string>('editor');

  const currentFeatures = featuresByCategory[activeCategory];
  const previewFeature = currentFeatures.find(f => f.id === selectedFeature) || currentFeatures[0];

  const handleCategoryChange = (catId: CategoryId) => {
    setActiveCategory(catId);
    setSelectedFeature(featuresByCategory[catId][0].id);
  };

  return (
    <div className="space-y-12">
      <PageHero
        title={
          <>
            Pristine Features, <br /> Quiet Focus
          </>
        }
        description="A smart productivity app built specifically for quiet, distraction-free writing without unrequested visual tabs or telemetry noises."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Category Titles */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] font-heading font-semibold text-zinc-400">
                EXPLORE
              </span>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl text-zinc-900 leading-tight">
                Everything you need
              </h2>
              <svg className="w-full h-3 -mt-1" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M2 10 C75 2, 150 2, 298 10" stroke="#dc70ab" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="font-sans text-base text-zinc-500 leading-relaxed">
                Powerful features wrapped in a calm interface. Switch between categories to explore what matters most.
              </p>
            </div>

            <div className="space-y-3">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left p-5 rounded border transition-all ${
                      isActive
                        ? 'border-zinc-900 bg-zinc-950 text-white shadow-lg'
                        : 'border-zinc-200 bg-white hover:border-zinc-300 text-zinc-700'
                    }`}
                  >
                    <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${isActive ? 'text-zinc-400' : 'text-zinc-400'}`}>
                      {cat.sublabel}
                    </span>
                    <h3 className={`font-heading font-semibold text-lg mt-1 ${isActive ? 'text-white' : 'text-zinc-900'}`}>
                      {cat.label}
                    </h3>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/pricing"
                className="inline-block px-5 py-2 font-heading font-medium text-xs tracking-wide rounded border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-700"
              >
                See pricing
              </Link>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {currentFeatures.map((feat, idx) => {
                const isSelected = selectedFeature === feat.id;
                return (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    onClick={() => setSelectedFeature(feat.id)}
                    className={`border p-5 rounded cursor-pointer transition-all h-[260px] flex flex-col justify-between overflow-hidden select-none ${
                      isSelected
                        ? 'border-zinc-200 bg-[#fafaf7] shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] ring-1 ring-zinc-200'
                        : 'border-zinc-100/80 bg-[#fafaf7] shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] hover:shadow-[6px_6px_16px_rgba(160,165,175,0.18),-6px_-6px_16px_rgba(255,255,255,1)]'
                    }`}
                  >
                    <div className="flex flex-col h-full overflow-hidden">
                      {/* Card Title */}
                      <div className="mb-4 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="p-2 rounded"
                            style={{ backgroundColor: `${feat.accentColor}15`, color: feat.accentColor }}
                          >
                            {feat.icon}
                          </div>
                          <h3 className="font-heading font-semibold text-base text-zinc-500 tracking-wide">
                            {feat.title}
                          </h3>
                        </div>
                        <svg className="w-16 h-2 mt-2" viewBox="0 0 60 8" fill="none">
                          <path d="M2 6 C15 2, 30 2, 58 6" stroke={feat.accentColor} strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="flex-grow overflow-hidden">
                        <p className="font-sans text-xs text-zinc-600 leading-relaxed mb-3">
                          {feat.description}
                        </p>

                        {feat.shortcut && (
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-mono text-[9px] bg-zinc-100 px-2 py-0.5 border border-zinc-200 text-zinc-600 rounded">
                              {feat.shortcut}
                            </span>
                          </div>
                        )}

                        <div className="bg-white rounded border border-zinc-200/80 p-3">
                          <div className="text-[9px] uppercase font-mono text-zinc-400 mb-1.5">Example</div>
                          <p className="font-mono text-[10px] text-zinc-600 leading-relaxed italic">
                            {feat.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
