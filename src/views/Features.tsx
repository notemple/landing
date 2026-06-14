import React, { useState } from 'react';
import {
  Keyboard,
  Sparkle,
  CloudArrowUp,
  TextT,
  Browsers,
  BookOpen
} from '@phosphor-icons/react';
import PageHero from '../components/PageHero';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: 'editing' | 'organization' | 'ai';
  description: string;
  shortcut?: string;
  example: string;
}

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'editing' | 'organization' | 'ai'>('all');
  const [selectedFeature, setSelectedFeature] = useState<string>('editor');

  const featuresList: FeatureItem[] = [
    {
      id: 'editor',
      icon: <TextT size={20} className="text-zinc-500" />,
      title: 'Block-Based Lexical Editor',
      category: 'editing',
      description: 'A modern, distraction-free writing environment built on Meta\'s Lexical framework. Supports floating toolbars, checking lists, code blocks, tables, slash commands, and link previews natively.',
      shortcut: 'CMD + B / I / U',
      example: 'Highlight any text to reveal the inline formatting toolbar, or type standard markdown to create block types.'
    },
    {
      id: 'slash',
      icon: <Keyboard size={20} className="text-zinc-500" />,
      title: 'Slash Command & Markdown',
      category: 'editing',
      description: 'Write at the speed of thought. Trigger the rich block menu via the "/" key to insert table grids, markdown checklists, blockquotes, and emojis without your fingers leaving the home row.',
      shortcut: '/',
      example: 'Type "/" inside an empty line -> Select "List / Checklist" or "Table" to dynamically inject elements.'
    },
    {
      id: 'glance',
      icon: <Browsers size={20} className="text-zinc-500" />,
      title: '"At a Glance" Hub & Capture',
      category: 'organization',
      description: 'Your central productivity cockpit. Get a quick daily summary of your editing activity, recent files, focus timelines, outstanding checklist items, and a rapid scratchpad to dump fleeting ideas.',
      shortcut: 'Hover Overlays',
      example: 'Hover on the sidebar margins to slide open secondary control rails without leaving your active workspace.'
    },
    {
      id: 'collections',
      icon: <BookOpen size={20} className="text-zinc-500" />,
      title: 'Structured Collections Dashboard',
      category: 'organization',
      description: 'Go beyond loose pages. Organize your workspace using metadata-rich collection tables. Set custom tag labels, monitor workflow statuses, and link relevant items into structured records.',
      shortcut: 'Grid view',
      example: 'Create a new collection, assign custom tag categories, and sort documents based on urgency.'
    },
    {
      id: 'ai',
      icon: <Sparkle size={20} className="text-zinc-500" />,
      title: 'Context-Aware AI Assistant',
      category: 'ai',
      description: 'An embedded companion to speed up drafting and editing. Highlight sections to trigger custom rewrite actions, ask follow-up questions in the side panel, or run prompt operations on selected blocks.',
      shortcut: 'AI Chat Panel',
      example: 'Select paragraphs -> click "Ask AI" -> Ask to summarize or convert the text to structured action items.'
    },
    {
      id: 'dailynotes',
      icon: <CloudArrowUp size={20} className="text-zinc-500" />,
      title: 'Timeline & Daily Notes',
      category: 'organization',
      description: 'Maintain a chronological log of daily goals, standups, and progress. The focus timeline tracks your workspace activity automatically, logging when documents were modified.',
      shortcut: 'Daily Note Tab',
      example: 'Open the Daily Notes tab to auto-generate today\'s clean canvas linked directly into your timeline history.'
    }
  ];

  const filteredFeatures = activeCategory === 'all'
    ? featuresList
    : featuresList.filter(f => f.category === activeCategory);

  const previewFeature = featuresList.find(f => f.id === selectedFeature) || featuresList[0];

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

      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 text-left">

        {/* Categories Toggle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left Side: Features Checklist & Toggle */}
          <div className="md:col-span-7 space-y-8">

            {/* Tabs */}
            <div className="flex bg-zinc-200/50 p-1 rounded-md border border-zinc-300/60 w-fit">
              {(['all', 'editing', 'organization', 'ai'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`py-1 px-3 text-xs font-heading font-semibold rounded uppercase tracking-wider transition-all ${activeCategory === tab
                      ? 'bg-zinc-950 text-white border border-zinc-950 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Feature List row */}
            <div className="space-y-4">
              {filteredFeatures.map((feat) => {
                const isSelected = selectedFeature === feat.id;
                return (
                  <div
                    key={feat.id}
                    onClick={() => setSelectedFeature(feat.id)}
                    className={`border p-4 rounded-md cursor-pointer transition-all ${isSelected
                        ? 'border-zinc-900 bg-white ring-1 ring-zinc-150'
                        : 'border-zinc-200 hover:border-zinc-350 bg-white/40'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 border border-zinc-150 bg-zinc-100/50 rounded">
                        {feat.icon}
                      </div>
                      <div className="flex-grow space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-medium text-sm text-zinc-900">
                            {feat.title}
                          </span>
                          {feat.shortcut && (
                            <span className="font-mono text-[9px] bg-zinc-50 px-1.5 py-0.5 border border-zinc-200 text-zinc-650 rounded">
                              {feat.shortcut}
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side: Interactive Mockup Spec Block */}
          <div className="md:col-span-12 lg:col-span-5 sticky top-24 space-y-6">
            <div className="border border-zinc-200 bg-white p-6 rounded-md shadow-xs">
              <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                Interactive Inspector
              </span>
              <h3 className="font-heading font-medium text-lg text-zinc-900 mt-1 border-b border-zinc-150 pb-2 mb-4">
                {previewFeature.title}
              </h3>

              {/* Spec render area */}
              <div className="space-y-4 font-sans text-xs">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-mono text-zinc-500">Category</div>
                  <div className="text-zinc-900 font-semibold uppercase font-heading tracking-wider">
                    {previewFeature.category} block system
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="text-[10px] uppercase font-mono text-zinc-500">Actionable Example</div>
                  <div className="bg-zinc-100 p-3 text-zinc-800 italic rounded border border-zinc-200 font-mono leading-relaxed text-[11px]">
                    {previewFeature.example}
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="text-[10px] uppercase font-mono text-zinc-500">System Telemetry</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="font-mono text-[10px] text-zinc-600">Compiled successfully, active listeners ready.</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

