import React from 'react';

import { Typography } from '@/components/Typography';
import { PageLayout } from '@/pages/Layouts/PageLayout';

import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  return (
    <PageLayout currentPage="overview">
      <Typography variant="extra-extra-large">Overview</Typography>
    </PageLayout>
  );
};
