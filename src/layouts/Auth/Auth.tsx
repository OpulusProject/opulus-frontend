import React from 'react';
import { Outlet } from 'react-router-dom';

import { Cover } from '@/components/Cover';

import styles from './Auth.module.scss';

export const Auth: React.FC = () => {
  // some weird stuff with staying in Auth layout while onboarding, since user needs to be logged in to input their first and last name and link their bank account
  // const { data: user, isSuccess } = useMe();
  // const isLoggedIn = isSuccess && user !== undefined;

  // if (isLoggedIn) {
  //   return <Navigate to={ROUTES.HOME} />;
  // }

  return (
    <div className={styles.authLayout}>
      <Cover />
      <div className={styles.authContent}>
        <Outlet />
      </div>
    </div>
  );
};
