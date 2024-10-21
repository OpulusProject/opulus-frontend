import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Cover } from '@/components/Cover';
import { useMe } from '@/hooks/user/useMe';
import { Loading } from '@/pages/Loading';
import { ROUTES } from '@/pages/routes';

import styles from './Auth.module.scss';

export const Auth: React.FC = () => {
  const { data: user, isLoading, isSuccess } = useMe();
  const isLoggedIn = isSuccess && user !== undefined;

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  if (isLoading) {
    return <Loading />;
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
