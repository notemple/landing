/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import { ThemeProvider } from './components/ThemeContext';
import { CursorProvider } from './components/cursor/CursorContext';
import CustomCursor from './components/cursor/CustomCursor';
import CursorTrail from './components/cursor/CursorTrail';
import Layout from './components/Layout';

// Direct page views imports
import Home from './views/Home';
import Features from './views/Features';
import Pricing from './views/Pricing';

// Legal
import Terms from './views/legal/Terms';
import Privacy from './views/legal/Privacy';
import Security from './views/legal/Security';

// Company
import About from './views/company/About';
import Blog from './views/company/Blog';
import Careers from './views/company/Careers';

// Support
import Help from './views/support/Help';
import Contact from './views/support/Contact';

export default function App() {
  return (
    <FormspreeProvider>
    <ThemeProvider>
      <CursorProvider>
        <CustomCursor />
        <CursorTrail />
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />

              {/* Legal */}
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/security" element={<Security />} />

              {/* Company */}
              <Route path="/company/about" element={<About />} />
              <Route path="/company/blog" element={<Blog />} />
              <Route path="/company/careers" element={<Careers />} />

              {/* Support */}
              <Route path="/support/help" element={<Help />} />
              <Route path="/support/contact" element={<Contact />} />

              {/* Fallback to index */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </HashRouter>
      </CursorProvider>
    </ThemeProvider>
    </FormspreeProvider>
  );
}
