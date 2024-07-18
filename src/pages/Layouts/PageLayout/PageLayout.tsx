import React from 'react';

import { Sidebar } from '@/components/Sidebar';

import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  currentPage,
}) => {
  return (
    <div className={styles.pageLayout}>
      <Sidebar currentPage={currentPage} />
      <div className={styles.children}>{children}</div>
    </div>
  );
};
