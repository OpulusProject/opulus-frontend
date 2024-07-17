import React from 'react';

import { Sidebar } from '@/components/Sidebar';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className={styles.LayoutPage}>
      <Sidebar currentPage={currentPage} />
      <div className={styles.LayoutContainer}>{children}</div>
    </div>
  );
};
