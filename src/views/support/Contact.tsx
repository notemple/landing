import PageHero from '../../components/PageHero';

export default function Contact() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Contact Support</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-base text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-xl text-zinc-900">Get in Touch</h2>
          <p>Whether you have a question, need help with your account, or want to report an issue, we're here to help.</p>

          <div className="border border-zinc-200 rounded p-6 bg-white space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest">Email</span>
              <p className="text-zinc-900 font-medium">support@templ.com</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest">Response Time</span>
              <p className="text-zinc-900 font-medium">Within 24 hours on business days</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest">Community</span>
              <p className="text-zinc-900 font-medium">Join our Discord for quick help from the community</p>
            </div>
          </div>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Bug Reports</h2>
          <p>If you've found a bug, please include steps to reproduce, your browser, and any relevant screenshots when contacting us.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Feature Requests</h2>
          <p>We love hearing ideas from our users. Reach out with any suggestions for how we can improve templ.</p>
        </div>
      </div>
    </div>
  );
}
