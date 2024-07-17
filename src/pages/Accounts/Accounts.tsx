import React from 'react';

import { Typography } from '@/components/Typography';
import { Layout } from '@/pages/Layout';

import styles from './Dashboard.module.scss';

export const Accounts: React.FC = () => {
  return (
    <Layout currentPage="accounts">
      <Typography variant="extra-extra-large">Accounts</Typography>
    </Layout>
  );
};
