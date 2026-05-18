import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { LoadingScreen } from '@/components/LoadingScreen';

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const IdentityPage = lazy(() => import('@/pages/IdentityPage').then((m) => ({ default: m.IdentityPage })));
const SessionsPage = lazy(() => import('@/pages/SessionsPage').then((m) => ({ default: m.SessionsPage })));
const WorldsPage = lazy(() => import('@/pages/WorldsPage').then((m) => ({ default: m.WorldsPage })));
const WorksPage = lazy(() => import('@/pages/WorksPage').then((m) => ({ default: m.WorksPage })));
const LumoPage = lazy(() => import('@/pages/LumoPage').then((m) => ({ default: m.LumoPage })));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/worlds" element={<WorldsPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/work/lumo" element={<LumoPage />} />
        </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
