import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';
import { Navrail } from '@/components/Navrail';
import { useMe } from '@/hooks/user/useMe';
import { ROUTES } from '@/pages/routes';

import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  const { data: user, isSuccess } = useMe();
  const isLoggedIn = isSuccess && user !== undefined;

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <div className={styles.dashboardLayout}>
      <SidebarProvider>
        <Navrail/>
      </SidebarProvider>
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  );
};
