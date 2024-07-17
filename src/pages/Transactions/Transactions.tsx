import React from 'react';

import { Typography } from '@/components/Typography';
import { Layout } from '@/pages/Layout';

import styles from './Transactions.module.scss';

export const Transactions: React.FC = () => {
  return (
    <Layout currentPage="transactions">
      <Typography variant="extra-extra-large">Transactions</Typography>
    </Layout>
  );
};
