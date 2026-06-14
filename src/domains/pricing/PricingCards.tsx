import { Check, Sparkle, ArrowUpRight } from '@phosphor-icons/react';

interface PricingTier {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

interface PricingCardsProps {
  billingCycle: 'monthly' | 'yearly';
}

const tiers: PricingTier[] = [
  {
    name: 'Drawer (Basic)',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'The standard local scratchpad for quiet and focused personal outline journaling.',
    features: [
      'Local SQLite & database cache',
      'Standard block types (Heading, Quote, Bullet, Checklist)',
      '3 active custom templates',
      'Up to 10 page nodes total',
      'Local file backups exports'
    ],
    ctaText: 'Access Workspace'
  },
  {
    name: 'Palace (Pro)',
    priceMonthly: 8,
    priceYearly: 6,
    description: 'Unlock structured workflows, infinite page hierarchies, and comprehensive system search.',
    features: [
      'Everything in Drawer',
      'Infinite note-taking document nodes',
      'Full custom spreadsheet collections database',
      'Advanced templates catalog access',
      'Priority handshakes for offline resolution',
      'Collaborative read/write sync (2 devices)'
    ],
    ctaText: 'Upgrade with Calm',
    isPopular: true
  },
  {
    name: 'Empire (Team)',
    priceMonthly: 16,
    priceYearly: 12,
    description: 'The ultimate space coordinating shared team files with absolute granular control.',
    features: [
      'Everything in Palace',
      'Unlimited seat licenses & custom sub-teams',
      'Advanced cloud synchronization',
      'Audit logs & credential telemetry locks',
      'Dedicated 1-on-1 team setup guide',
      'Custom workspace domains'
    ],
    ctaText: 'Establish Team Hub'
  }
];

export default function PricingCards({ billingCycle }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {tiers.map((tier) => {
        const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceYearly;
        return (
          <div
            key={tier.name}
            className={`border rounded-md p-6 flex flex-col justify-between transition-all relative ${tier.isPopular
                ? 'border-zinc-900 bg-white shadow-md ring-1 ring-zinc-200'
                : 'border-zinc-200 bg-white/50 hover:border-zinc-300 shadow-xs'
              }`}
          >
            {/* Popular pill */}
            {tier.isPopular && (
              <span className="absolute -top-3 left-6 flex items-center gap-1 bg-zinc-950 text-white text-[9px] uppercase tracking-widest font-heading font-bold px-2.5 py-1 rounded border border-zinc-950">
                <Sparkle size={10} className="text-yellow-405" />
                Highly Recommended
              </span>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-zinc-900">
                  {tier.name}
                </h3>
                <p className="font-sans text-xs text-zinc-650 leading-relaxed mt-1">
                  {tier.description}
                </p>
              </div>

              {/* Pricing section with dynamic currency cycle */}
              <div className="flex items-baseline gap-1 text-zinc-950 border-b border-zinc-150 pb-4">
                <span className="font-heading font-light text-4xl">$</span>
                <span className="font-heading font-bold text-5xl tracking-tighter transition-all">
                  {price}
                </span>
                <span className="font-sans text-xs text-zinc-500 ml-1">
                  / license / month
                </span>
              </div>

              {/* Features detail checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Included capabilities:
                </div>
                <ul className="space-y-2.5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs font-sans text-zinc-700">
                      <Check size={13} className="text-zinc-500 mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              {tier.name.includes('Basic') ? (
                <button
                  onClick={() => alert(`Basic offline capabilities require no setup. Simply copy template structures locally and start drafting!`)}
                  className="w-full flex items-center justify-center gap-1 py-2.5 border border-zinc-200 hover:bg-zinc-100/55 text-zinc-800 text-xs font-semibold rounded-md shadow-sm cursor-pointer"
                >
                  <span>{tier.ctaText}</span>
                </button>
              ) : (
                <button
                  onClick={() => alert(`Subscription checkout simulated for ${tier.name}. Thank you for supporting templ!`)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-zinc-950 text-white hover:opacity-95 font-heading font-semibold text-xs rounded-md shadow-sm transition-all cursor-pointer"
                  id={`purchase-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight size={13} />
                </button>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}
