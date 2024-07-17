import React from 'react';

import { Sidebar } from '@/components/Sidebar';
import { Typography } from '@/components/Typography';

import styles from './Transactions.module.scss';

export const Transactions: React.FC = () => {
  return (
    <div className={styles.TransactionsPage}>
      <Sidebar />
      <div className={styles.TransactionsContainer}>
        <Typography variant="extra-extra-large">Transactions</Typography>
      </div>
    </div>
  );
};
