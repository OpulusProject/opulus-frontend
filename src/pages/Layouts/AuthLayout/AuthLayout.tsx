import React from 'react';

import { Cover } from '@/components/Cover';

import styles from './AuthLayout.module.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <Cover />
      <div className={styles.children}>{children}</div>
    </div>
  );
};
