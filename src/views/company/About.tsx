import PageHero from '../../components/PageHero';

export default function About() {
  return (
    <div className="space-y-12">
      <PageHero
        title={<>About Us</>}
        description="We're building a calmer, more intentional productivity tool for people who value focus."
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-sm text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-lg text-zinc-900">Our Mission</h2>
          <p>templnote was born from a simple frustration: productivity tools have become noisy, cluttered, and demanding of attention. We believe the best workspace is one that gets out of your way and lets you focus on what matters.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">What We Believe</h2>
          <p>We believe in quiet software. Tools that respect your attention, don't bombard you with notifications, and don't track your every move. A workspace should feel like a calm room, not a busy highway.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">The Team</h2>
          <p>templnote is built by a small, focused team of developers and designers who are passionate about craft, simplicity, and building software that serves the user first.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">Open Values</h2>
          <p>We are committed to transparency, privacy, and building in the open where possible. Your data is yours, and our roadmap is shaped by the people who use templnote every day.</p>
        </div>
      </div>
    </div>
  );
}
