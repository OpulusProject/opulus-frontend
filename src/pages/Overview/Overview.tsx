import React from 'react';

import { Typography } from '@/components/Typography';
import { Layout } from '@/pages/Layout';

import styles from './Dashboard.module.scss';

export const Overview: React.FC = () => {
  return (
    <Layout currentPage="overview">
      <Typography variant="extra-extra-large">Overview</Typography>
    </Layout>
  );
};
