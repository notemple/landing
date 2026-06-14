import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  DiscordLogo,
  TwitterLogo,
  RedditLogo,
  InstagramLogo
} from '@phosphor-icons/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isIntegratedPage = ['/', '/features', '/pricing'].includes(location.pathname);
  const isAtTop = scrollY < 40;

  // Compute dynamic transition categories
  let headerClasses = "fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ";
  let containerClasses = "mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ";
  let logoClasses = "font-heading font-bold bg-gradient-to-r from-[#9aa3f7] via-[#dc70ab] to-[#ea648d] bg-clip-text text-transparent transition-all duration-500 hover:opacity-90 antialiased tracking-tight select-none ";
  let capsuleBgClasses = "backdrop-blur-md rounded p-1 inline-flex items-center gap-1 shadow-xs w-auto transition-all duration-500 ";

  if (isIntegratedPage) {
    if (isAtTop) {
      // Inline hero mode! Fits precisely at the top of the hero card to align with the visual grid placeholders, with completely transparent background to avoid separate panel appearance
      headerClasses += "top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 rounded-t rounded-b-none border border-transparent bg-transparent shadow-none py-4 md:py-5";
      containerClasses += "max-w-full";
      logoClasses += "text-3xl md:text-3xl";
      capsuleBgClasses += "bg-white/80 border border-zinc-205/60";
    } else {
      // Beautiful white small blurred glassy frosty smooth background after scroll transition
      headerClasses += "top-0 left-0 right-0 w-full rounded-none border-b border-zinc-200/50 bg-white/70 backdrop-blur-md shadow-xs py-3 md:py-4";
      containerClasses += "max-w-6xl px-4";
      logoClasses += "text-2xl md:text-3xl";
      capsuleBgClasses += "bg-white/85 border border-zinc-200/60";
    }
  } else {
    // Non-home pages
    if (isAtTop) {
      // Floating capsule navbar (white glassy frosty)
      headerClasses += "top-3 md:top-4 left-1/2 -translate-x-1/2 max-w-5xl w-[92%] md:w-[88%] rounded border border-zinc-200/80 bg-white/70 backdrop-blur-md shadow-sm py-2";
      containerClasses += "max-w-full";
      logoClasses += "text-2xl md:text-3xl";
      capsuleBgClasses += "bg-white/85 border border-zinc-200/60";
    } else {
      // Sticky white glassy mode
      headerClasses += "top-0 left-0 right-0 w-full rounded-none border-b border-zinc-200/50 bg-white/70 backdrop-blur-md shadow-xs py-3 md:py-4";
      containerClasses += "max-w-6xl px-4";
      logoClasses += "text-2xl md:text-3xl";
      capsuleBgClasses += "bg-white/85 border border-zinc-200/60";
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-white/10 selection:text-white">
      {/* 
        ONE SYSTEM: Header Navigation 
        Dynamic morphing navbar supporting clean aesthetic state transitions.
      */}
      <header className={headerClasses}>
        <div className={containerClasses}>

          {/* Brand Logo - templ in elegant gradient Outfit text */}
          <div className="flex items-center justify-center md:justify-start w-full">
            <Link to="/" className="inline-block group">
              <span className={logoClasses}>
                templ
              </span>
            </Link>
          </div>

          {/* Center Glass Capsule Navigation */}
          <div className="flex justify-center w-full">
            <div className={capsuleBgClasses}>
              <Link
                to="/"
                className={`px-3 sm:px-4 py-1.5 rounded text-[10.5px] sm:text-[11.5px] font-heading font-semibold transition-all whitespace-nowrap ${location.pathname === '/'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/65'
                  }`}
              >
                Work
              </Link>
              <Link
                to="/features"
                className={`px-3 sm:px-4 py-1.5 rounded text-[10.5px] sm:text-[11.5px] font-heading font-semibold transition-all whitespace-nowrap ${location.pathname === '/features'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/65'
                  }`}
              >
                Features
              </Link>

              <Link
                to="/pricing"
                className={`px-3 sm:px-4 py-1.5 rounded text-[10.5px] sm:text-[11.5px] font-heading font-semibold transition-all whitespace-nowrap ${location.pathname === '/pricing'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/65'
                  }`}
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Spacer for balance */}
          <div className="hidden md:block"></div>

        </div>
      </header>

      {/* Main Screen Content with Transitions */}
      <main className="flex-grow">
        {!isIntegratedPage && <div className="h-16 sm:h-20" />}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Monochromatic Footer */}
      <footer className="mx-2 sm:mx-3 md:mx-4 mt-12 sm:mt-16 md:mt-20 mb-2 sm:mb-3 md:mb-4 relative rounded overflow-hidden border border-zinc-700 shadow-xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 py-14 px-6 sm:px-10 md:px-12 select-none">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">

          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading font-bold text-3xl bg-gradient-to-r from-[#9aa3f7] via-[#dc70ab] to-[#ea648d] bg-clip-text text-transparent tracking-tight select-none">
                templ
              </span>
            </Link>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xs text-white tracking-wider pb-2 border-b border-zinc-800 mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
                  Product Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-zinc-400 hover:text-white transition-colors">
                  Features List
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="text-zinc-400 hover:text-white transition-colors">
                  Product Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xs text-white tracking-wider pb-2 border-b border-zinc-800 mb-4 uppercase">
              Community
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  Slack
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  Reddit Community
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  X / Twitter
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xs text-white tracking-wider pb-2 border-b border-zinc-800 mb-4 uppercase">
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/support/help" className="text-zinc-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/support/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xs text-white tracking-wider pb-2 border-b border-zinc-800 mb-4 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/company/about" className="text-zinc-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/company/blog" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-zinc-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-xs text-white tracking-wider pb-2 border-b border-zinc-800 mb-4 uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/legal/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/security" className="text-zinc-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            templnote™
            <br />
            © 2026 Violetide. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <DiscordLogo size={16} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <TwitterLogo size={16} />
            </a>
            <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <RedditLogo size={16} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <InstagramLogo size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

