import PageHero from '../../components/PageHero';

export default function Terms() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Terms of Service</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-base text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-xl text-zinc-900">1. Acceptance of Terms</h2>
          <p>By accessing or using templ, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">2. Use of Service</h2>
          <p>You may use templ only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">3. Intellectual Property</h2>
          <p>All content, features, and functionality of templ are owned by Violetide and are protected by copyright, trademark, and other intellectual property laws.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">4. Limitation of Liability</h2>
          <p>In no event shall Violetide be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">5. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </div>
  );
}
