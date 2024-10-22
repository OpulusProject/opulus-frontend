import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Cover } from '@/components/Cover';
import { useMe } from '@/hooks/user/useMe';
import { ROUTES } from '@/pages/routes';

import styles from './Auth.module.scss';

export const Auth: React.FC = () => {
  const { data: user, isSuccess } = useMe();
  const isLoggedIn = isSuccess && user !== undefined;

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <div className={styles.authLayout}>
      <Cover />
      <div className={styles.authContent}>
        <Outlet />
      </div>
    </div>
  );
};
