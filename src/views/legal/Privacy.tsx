import PageHero from '../../components/PageHero';

export default function Privacy() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Privacy Policy</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-base text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-xl text-zinc-900">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as account details, notes, and content you create within templ. We also collect usage data to improve our service.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">2. How We Use Your Information</h2>
          <p>We use your information to provide, maintain, and improve templ, to send you service-related communications, and to ensure the security of our platform.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">3. Data Sharing</h2>
          <p>We do not sell your personal data. We may share information with trusted third-party service providers who assist in operating our service, subject to confidentiality agreements.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
        </div>
      </div>
    </div>
  );
}
