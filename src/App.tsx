import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from '@/layouts/Auth';
import { Dashboard } from '@/layouts/Dashboard';
import { Login } from '@/pages/Login';
import { Overview } from '@/pages/Overview';
import { ROUTES } from '@/pages/routes';
import { Transactions } from '@/pages/Transactions';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes with Auth layout */}
          <Route path={ROUTES.ROOT} element={<Auth />}>
            <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Route>

          {/* Protected routes with Dashboard layout */}
          <Route path={ROUTES.HOME} element={<Dashboard />}>
            <Route index element={<Navigate to={ROUTES.OVERVIEW} replace />} />
            <Route path={ROUTES.OVERVIEW} element={<Overview />} />
            <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
