import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Plus,
  Trash,
  BookOpen,
  Cards,
  Calendar,
  Sparkle,
  SuitcaseSimple,
  BookmarkSimple,
  ArrowRight
} from '@phosphor-icons/react';
import type { NoteBlock } from '../types';
import PageHero from '../components/PageHero';

interface TemplateDoc {
  id: string;
  title: string;
  category: string;
  description: string;
  doc_icon: string;
  blocks: NoteBlock[];
}

export default function Templates() {
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const sampleTemplates: TemplateDoc[] = [
    {
      id: 'retro',
      title: 'Sprint Retrospective',
      category: 'Productivity',
      description: 'Review sprints with columns matching things that went well, hurdles crossed, and concrete revisions.',
      doc_icon: '🧠',
      blocks: [
        { id: '1', type: 'h1', content: 'Sprint Retrospective' },
        { id: '2', type: 'quote', content: '"Continuous improvement is better than delayed perfection." — Mark Twain' },
        { id: '3', type: 'h2', content: 'What Went Well' },
        { id: '4', type: 'bullet', content: 'Shipped the local SQLite cache framework flawlessly' },
        { id: '5', type: 'bullet', content: 'Integrated native Outfit display typefaces perfectly' },
        { id: '6', type: 'h2', content: 'Improvement Vectors' },
        { id: '7', type: 'todo', content: 'Optimize initial asset loading bundles', completed: false },
        { id: '8', type: 'todo', content: 'Enforce stricter lint checks on nested routes', completed: true },
      ]
    },
    {
      id: 'standup',
      title: 'Daily Standup Sync',
      category: 'Coordination',
      description: 'Keep logs of tasks completed yesterday, priorities mapped for today, and impediments resolved.',
      doc_icon: '📆',
      blocks: [
        { id: '1', type: 'h1', content: 'Daily Standup & Priorities' },
        { id: '2', type: 'p', content: 'Date: ' + new Date().toLocaleDateString() },
        { id: '3', type: 'h2', content: 'Yesterday Accomplishments' },
        { id: '4', type: 'bullet', content: 'Configured router files and nested state' },
        { id: '5', type: 'h2', content: 'Today Focus Items' },
        { id: '6', type: 'todo', content: 'Code absolute bento grids for organize columns', completed: false },
        { id: '7', type: 'todo', content: 'Finalize sandbox slash command palette', completed: false },
      ]
    },
    {
      id: 'journal',
      title: 'Morning Reflections',
      category: 'Personal Practice',
      description: 'Start days with quiet mental logging, three gratitudes, and a single core daily focus.',
      doc_icon: '🧘',
      blocks: [
        { id: '1', type: 'h1', content: 'Morning Mind Mapping' },
        { id: '2', type: 'quote', content: '"A quiet mind is able to hear what is truly important."' },
        { id: '3', type: 'h2', content: 'Mind State & Air Quality' },
        { id: '4', type: 'p', content: 'Feeling rested, slightly cool ambient workspace breeze.' },
        { id: '5', type: 'h2', content: 'Three Gratitudes' },
        { id: '6', type: 'bullet', content: 'Crisp coffee beans sourced from local roaster' },
        { id: '7', type: 'bullet', content: 'The silence of 06:00 writing hours' },
        { id: '8', type: 'bullet', content: 'Robust compile-on-save tooling layers' },
      ]
    },
    {
      id: 'code-notes',
      title: 'API Architecture Scratchpad',
      category: 'Design',
      description: 'Structure REST/gRPC endpoint architectures, data models, or code ideas in structured segments.',
      doc_icon: '🤖',
      blocks: [
        { id: '1', type: 'h1', content: 'API Schema Draft & Routes' },
        { id: '2', type: 'p', content: 'Drizzle ORM entities mapping files.' },
        { id: '3', type: 'quote', content: 'All tables require unique index ID hashes for local synchronizations.' },
        { id: '4', type: 'h2', content: 'Endpoints Checklist' },
        { id: '5', type: 'todo', content: 'GET /api/notes - fetch all pages', completed: true },
        { id: '6', type: 'todo', content: 'POST /api/notes/block - write single node slice', completed: false },
      ]
    }
  ];

  const handleImport = (template: TemplateDoc) => {
    let md = `# ${template.doc_icon} ${template.title}\n\n`;
    template.blocks.forEach(b => {
      switch (b.type) {
        case 'h1':
          md += `# ${b.content}\n\n`;
          break;
        case 'h2':
          md += `## ${b.content}\n\n`;
          break;
        case 'quote':
          md += `> ${b.content}\n\n`;
          break;
        case 'bullet':
          md += `* ${b.content}\n`;
          break;
        case 'todo':
          md += `- [ ] ${b.content}\n`;
          break;
        default:
          md += `${b.content}\n\n`;
      }
    });

    navigator.clipboard.writeText(md);
    setToastMessage(`Copied "${template.title}" as Markdown to your clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="space-y-12 relative">
      {/* Toast message wrapper */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-zinc-950 text-white text-xs px-4 py-2.5 rounded shadow-md border border-zinc-800 flex items-center gap-2 font-mono tracking-wider tracking-wide animate-fade-in">
          <span>{toastMessage}</span>
        </div>
      )}

      <PageHero
        title={
          <>
            Ready to Import <br /> Structuring Maps
          </>
        }
        description="Select ready-made blueprints that fit your creative thinking. Click any template to copy its raw markdown structure instantly."
      />

      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 text-left">

        {/* Grid of Templates cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTemplates.map((template) => (
            <div
              key={template.id}
              className="border border-zinc-200 bg-white p-6 rounded-md hover:border-zinc-350 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl leading-none">{template.doc_icon}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-zinc-100 text-zinc-605 px-2 py-0.5 rounded border border-zinc-200">
                    {template.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-lg text-zinc-900">
                    {template.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed mt-1">
                    {template.description}
                  </p>
                </div>

                {/* Preview of block skeleton */}
                <div className="bg-zinc-50 p-3.5 rounded border border-zinc-200 space-y-1.5 font-sans">
                  <div className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase mb-1">
                    Document Blocks List:
                  </div>
                  {template.blocks.slice(0, 3).map((b, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-[11px] text-zinc-650 truncate">
                      <span className="font-mono text-[9px] text-zinc-405 w-8">{b.type.toUpperCase()}:</span>
                      <span className="truncate">{b.content}</span>
                    </div>
                  ))}
                  {template.blocks.length > 3 && (
                    <div className="text-[9px] font-mono text-zinc-405 italic">
                      + {template.blocks.length - 3} additional nested blocks included...
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100">
                <button
                  onClick={() => handleImport(template)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-zinc-950 text-white hover:opacity-95 font-heading font-semibold text-xs rounded-md shadow-sm transition-all cursor-pointer"
                  id={`import-${template.id}`}
                >
                  <span>Copy Blueprint Markdown</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

