import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import { useGetUser } from '@/hooks/user/useGetUser';
import { Auth } from '@/layouts/Auth';
import { Dashboard } from '@/layouts/Dashboard';
import { Accounts } from '@/pages/Accounts';
import { Login } from '@/pages/Login';
import { Onboarding } from '@/pages/Onboarding';
import { Overview } from '@/pages/Overview';
import { ROUTES } from '@/pages/routes';
import { Signup } from '@/pages/Signup';
import { Transactions } from '@/pages/Transactions';

const PublicRoute: React.FC = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) {
    return;
  }

  return !user ? <Outlet /> : <Navigate to="/home" />;
};

const ProtectedRoute: React.FC = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) {
    return;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes with Auth layout */}
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.ROOT} element={<Auth />}>
              <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGNUP} element={<Signup />} />
            </Route>
          </Route>

          {/* Protected routes with Dashboard layout */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.ROOT} element={<Auth />}>
              <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
            </Route>

            <Route path={ROUTES.HOME} element={<Dashboard />}>
              <Route
                index
                element={<Navigate to={ROUTES.OVERVIEW} replace />}
              />
              <Route path={ROUTES.OVERVIEW} element={<Overview />} />
              <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
              <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
            </Route>
          </Route>

          {/* 404 Catch-All */}
          <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
