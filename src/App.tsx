import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { IdentityPage } from '@/pages/IdentityPage';
import { SessionsPage } from '@/pages/SessionsPage';
import { WorldsPage } from '@/pages/WorldsPage';
import { WorksPage } from '@/pages/WorksPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/worlds" element={<WorldsPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
