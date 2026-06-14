import { useRef, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function WaitlistForm() {
  const [state, handleSubmit] = useForm("xwvjaqkl");
  const mountTime = useRef(Date.now());

  function handleSafeSubmit(e: FormEvent<HTMLFormElement>) {
    const elapsed = Date.now() - mountTime.current;
    if (elapsed < 3000) return;
    handleSubmit(e);
  }

  if (state.succeeded) {
    return (
      <div className="text-center py-6">
        <p className="font-heading text-zinc-900 text-sm sm:text-base font-medium">
          Thanks for joining!
        </p>
        <p className="font-heading text-zinc-500 text-xs sm:text-sm mt-1">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSafeSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      {/* Honeypot - hidden from humans, bots will fill it */}
      <div
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full bg-white border border-zinc-200 rounded-md px-3.5 py-2.5 text-xs sm:text-[13px] font-heading text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full bg-white border border-zinc-200 rounded-md px-3.5 py-2.5 text-xs sm:text-[13px] font-heading text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-zinc-950 hover:bg-zinc-850 text-white text-xs sm:text-[13px] font-heading font-semibold tracking-wide rounded-md px-7 py-3 transition-all shadow-sm active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Joining...' : 'Join Waitlist'}
      </button>
      <p className="text-center text-zinc-400 text-[10px] sm:text-[11px] font-heading mt-1">
        Form is secured by Formspree
      </p>
    </form>
  );
}
