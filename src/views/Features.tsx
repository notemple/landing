import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Keyboard,
  Sparkle,
  CloudArrowUp,
  TextT,
  Browsers,
  BookOpen,
  ArrowRight
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: 'editing' | 'keyboard' | 'sync';
  description: string;
  shortcut?: string;
  example: string;
}

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'editing' | 'keyboard' | 'sync'>('all');
  const [selectedFeature, setSelectedFeature] = useState<string>('slash');

  const featuresList: FeatureItem[] = [
    {
      id: 'slash',
      icon: <TextT size={20} className="text-zinc-500" />,
      title: 'Slash Command Palette',
      category: 'editing',
      description: 'Type "/" inside any blank paragraph block to toggle the insert palette. Convert blocks into headings, unchecked checklists, quotes, or table collections on the fly.',
      shortcut: '/',
      example: 'Type "/" -> Select "Header 1" -> Your text becomes an Outfit display heading.'
    },
    {
      id: 'kboard',
      icon: <Keyboard size={20} className="text-zinc-500" />,
      title: 'Global Markdown Shortcuts',
      category: 'keyboard',
      description: 'Write raw markdown syntaxes natively. Standard hash characters (#), brackets ([]), or dashes (-) instantly transform the block representation without lifting hands off your keys.',
      shortcut: 'Space after # / [ ]',
      example: 'Type "# [Space] Meeting" to trigger h1, or "[] [Space] Pack luggage" to trigger task checklist.'
    },
    {
      id: 'focus',
      icon: <Browsers size={20} className="text-zinc-500" />,
      title: 'Distraction-Free Focus Rails',
      category: 'editing',
      description: 'Collapse all system sidebars, headers, and metadata trackers to enter standard writing state. Only the current text block glows slightly, leaving the remainder of the card in a neutral state.',
      shortcut: 'CMD + \\',
      example: 'Press CMD + \\ to hide sidebars and focus on the beautiful single-column page.'
    },
    {
      id: 'sync',
      icon: <CloudArrowUp size={20} className="text-zinc-500" />,
      title: 'Local Privacy & SQLite Cache',
      category: 'sync',
      description: 'Your notes belong entirely to you. templ mirrors all actions locally before cloud operations. Work offline flawlessly—updates synchronize automatically on server handshake.',
      shortcut: 'Autosave',
      example: 'Disconnect internet, keep typing, re-connect: pages resolve seamlessly.'
    },
    {
      id: 'command',
      icon: <Sparkle size={20} className="text-zinc-500" />,
      title: 'Command Menu Search',
      category: 'keyboard',
      description: 'Access any page, tag, task, or setting in the workspace with instant search caching.',
      shortcut: 'CMD + K',
      example: 'Type CMD + K -> Begin typing "weekly" -> Instantly jump to weekly grocery checklist.'
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
              {(['all', 'editing', 'keyboard', 'sync'] as const).map((tab) => (
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

