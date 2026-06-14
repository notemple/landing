import PageHero from '../../components/PageHero';

export default function Help() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Help Center</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-sm text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-lg text-zinc-900">Getting Started</h2>
          <p>Create an account, set up your first workspace, and start writing. templnote is designed to be intuitive from the moment you open it.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">Keyboard Shortcuts</h2>
          <p>Use <span className="font-mono text-xs bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">/</span> to open the slash command menu, and standard markdown shortcuts like <span className="font-mono text-xs bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">CMD+B</span> for bold.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">Managing Collections</h2>
          <p>Organize your notes into collections with custom tags and statuses. Use the grid view to sort and filter your content.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">AI Features</h2>
          <p>Select any text and click "Ask AI" to summarize, rewrite, or generate action items. The AI assistant works contextually on your content.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">Daily Notes</h2>
          <p>Open the Daily Notes tab to create or view your daily workspace. Your activity is automatically logged in the timeline.</p>
        </div>
      </div>
    </div>
  );
}
