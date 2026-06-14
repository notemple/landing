import PageHero from '../../components/PageHero';

export default function Blog() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Blog</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-6">
          <div className="border border-zinc-200 rounded p-6 bg-white hover:border-zinc-300 transition-colors">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">June 10, 2026</span>
            <h3 className="font-heading font-semibold text-xl text-zinc-900 mt-1">Why We Built templ</h3>
            <p className="font-sans text-base text-zinc-500 mt-2 leading-relaxed">The story behind our decision to create a quieter productivity tool in a world full of noise.</p>
          </div>

          <div className="border border-zinc-200 rounded p-6 bg-white hover:border-zinc-300 transition-colors">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">June 3, 2026</span>
            <h3 className="font-heading font-semibold text-xl text-zinc-900 mt-1">Design Principles for Calm Software</h3>
            <p className="font-sans text-base text-zinc-500 mt-2 leading-relaxed">Lessons we've learned about reducing cognitive load and building interfaces that respect attention.</p>
          </div>

          <div className="border border-zinc-200 rounded p-6 bg-white hover:border-zinc-300 transition-colors">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">May 25, 2026</span>
            <h3 className="font-heading font-semibold text-xl text-zinc-900 mt-1">The Case Against Feature Bloat</h3>
            <p className="font-sans text-base text-zinc-500 mt-2 leading-relaxed">How we decide what to build — and more importantly, what not to build.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
