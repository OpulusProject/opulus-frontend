import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/Sidebar';
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
      <Sidebar currentPage={''} />
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  );
};
