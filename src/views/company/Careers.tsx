import PageHero from '../../components/PageHero';

export default function Careers() {
  return (
    <div className="space-y-12">
      <PageHero
        title={<>Careers</>}
        description="Join us in building a calmer, more thoughtful productivity tool."
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-sm text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-lg text-zinc-900">Why Work With Us</h2>
          <p>We're a small team with big ambitions. We value craftsmanship, intentionality, and building software that genuinely helps people focus and do their best work.</p>

          <h2 className="font-heading font-semibold text-lg text-zinc-900">Open Positions</h2>

          <div className="border border-zinc-200 rounded p-5 bg-white space-y-2">
            <h3 className="font-heading font-medium text-sm text-zinc-900">Frontend Engineer</h3>
            <p className="text-zinc-500">Build and refine the core editing experience. React, TypeScript, and a passion for detail required.</p>
          </div>

          <div className="border border-zinc-200 rounded p-5 bg-white space-y-2">
            <h3 className="font-heading font-medium text-sm text-zinc-900">Product Designer</h3>
            <p className="text-zinc-500">Shape the visual language and interaction patterns of a calm, focused workspace.</p>
          </div>

          <div className="border border-zinc-200 rounded p-5 bg-white space-y-2">
            <h3 className="font-heading font-medium text-sm text-zinc-900">Backend Engineer</h3>
            <p className="text-zinc-500">Design and scale the infrastructure that powers real-time collaboration and data sync.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
