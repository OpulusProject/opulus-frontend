import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from '@/layouts/Auth';
import { Dashboard } from '@/layouts/Dashboard';
import { Login } from '@/pages/Login';
import { Overview } from '@/pages/Overview';
import { Transactions } from '@/pages/Transactions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes with Auth layout */}
          <Route path="/" element={<Auth />}>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Protected routes with Dashboard layout */}
          <Route path="/home" element={<Dashboard />}>
            <Route index element={<Navigate to="/home/overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
