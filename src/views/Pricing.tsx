import { useState } from 'react';
import PageHero from '../components/PageHero';
import BillingControls from '../domains/pricing/BillingControls';
import PricingCards from '../domains/pricing/PricingCards';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-12">
      <PageHero
        title={
          <>
            Transparent, <br /> Simple Pricing
          </>
        }
        description="No credit card tricks, no unsolicited pop-up dialogs. Choose dynamic options designed solely for persistent synchronization needs."
      />

      <div className="pb-16 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 text-left">
        <BillingControls billingCycle={billingCycle} onCycleChange={setBillingCycle} />
        <PricingCards billingCycle={billingCycle} />
      </div>
    </div>
  );
}
