import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/system/PageTransition';
import { HomePage } from '@/pages/HomePage';
import { IdentityPage } from '@/pages/IdentityPage';
import { SessionsPage } from '@/pages/SessionsPage';
import { WorldsPage } from '@/pages/WorldsPage';
import { WorksPage } from '@/pages/WorksPage';
import { LumoPage } from '@/pages/LumoPage';
import { StudioPage } from '@/pages/StudioPage';
import { ContactPage } from '@/pages/ContactPage';
import { SystemsPage } from '@/pages/SystemsPage';
import { ArchivePage } from '@/pages/ArchivePage';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/identity" element={<IdentityPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/worlds" element={<WorldsPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/lumo" element={<LumoPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <a
          href="#main-content"
          className="ei-type-color-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white/10 focus:rounded focus:outline-none focus:ring-2 focus:ring-white/55"
        >
          Skip to main content
        </a>
        <Layout>
          <PageTransition>
            <AppRoutes />
          </PageTransition>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
