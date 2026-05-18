import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { IdentityPage } from '@/pages/IdentityPage';
import { SessionsPage } from '@/pages/SessionsPage';
import { WorldsPage } from '@/pages/WorldsPage';
import { WorksPage } from '@/pages/WorksPage';
import { LumoPage } from '@/pages/LumoPage';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white/10 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        Skip to main content
      </a>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/worlds" element={<WorldsPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/work/lumo" element={<LumoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
