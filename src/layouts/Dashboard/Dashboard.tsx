import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/Sidebar';

import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar currentPage={''} />
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  );
};
