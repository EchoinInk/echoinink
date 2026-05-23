import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { PageTransition } from '@/components/PageTransition';
import { Home } from '@/pages/Home';
import Identity from '@/pages/Identity';
import SessionsPage from '@/pages/SessionsPage';
import WorldsPage from '@/pages/WorldsPage';
import { WorksPage } from '@/pages/WorksPage';
import { LumoPage } from '@/pages/LumoPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/worlds" element={<WorldsPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/lumo" element={<LumoPage />} />
        <Route path="/studio" element={<Studio />} />

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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white/10 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white/30"
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
