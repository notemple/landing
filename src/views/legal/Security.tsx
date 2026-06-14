import PageHero from '../../components/PageHero';

export default function Security() {
  return (
    <div className="space-y-12">
      <PageHero
        compact
        title={<>Security</>}
      />
      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8 text-left">
        <div className="space-y-4 font-sans text-base text-zinc-600 leading-relaxed">
          <h2 className="font-heading font-semibold text-xl text-zinc-900">Encryption</h2>
          <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Your notes and content are protected with bank-level encryption.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Infrastructure</h2>
          <p>We host our services on reputable cloud providers with SOC 2 Type II compliance, ensuring high availability and physical security of data centers.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Access Controls</h2>
          <p>We enforce strict access controls internally. Only authorized personnel can access production systems, and all access is logged and audited.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Incident Response</h2>
          <p>We maintain a comprehensive incident response plan. In the event of a security breach, we will notify affected users promptly in accordance with applicable law.</p>

          <h2 className="font-heading font-semibold text-xl text-zinc-900">Reporting Vulnerabilities</h2>
          <p>If you discover a security vulnerability, please report it responsibly by contacting our security team. We appreciate your help in keeping templ safe.</p>
        </div>
      </div>
    </div>
  );
}
