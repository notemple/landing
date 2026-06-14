interface BillingControlsProps {
  billingCycle: 'monthly' | 'yearly';
  onCycleChange: (cycle: 'monthly' | 'yearly') => void;
}

export default function BillingControls({ billingCycle, onCycleChange }: BillingControlsProps) {
  return (
    <div className="border-b border-zinc-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="space-y-1">
        <h2 className="font-heading font-medium text-2xl text-zinc-950 tracking-tight">
          A Plan For Every Scale
        </h2>
        <p className="font-sans text-xs text-zinc-500">
          Pay solely for offline synchronization handshakes or team shared domain features.
        </p>
      </div>

      {/* Dynamic Billing Cycle Selector */}
      <div className="flex bg-zinc-200/50 p-1 rounded-md border border-zinc-300/60 w-fit shrink-0">
        <button
          onClick={() => onCycleChange('monthly')}
          className={`py-1.5 px-3 text-xs font-heading font-semibold rounded uppercase tracking-wider transition-all cursor-pointer ${billingCycle === 'monthly'
              ? 'bg-zinc-950 text-white border border-zinc-950 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'
            }`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => onCycleChange('yearly')}
          className={`py-1.5 px-3 text-xs font-heading font-semibold rounded uppercase tracking-wider transition-all cursor-pointer ${billingCycle === 'yearly'
              ? 'bg-zinc-950 text-white border border-zinc-950 shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'
            }`}
        >
          Yearly (Save 20%)
        </button>
      </div>
    </div>
  );
}
