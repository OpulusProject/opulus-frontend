import React from 'react';

import { Typography } from '@/components/Typography';
import { PageLayout } from '@/pages/Layouts/PageLayout';

import styles from './Transactions.module.scss';

export const Transactions: React.FC = () => {
  return (
    <PageLayout currentPage="transactions">
      <Typography variant="extra-extra-large">Transactions</Typography>
    </PageLayout>
  );
};
