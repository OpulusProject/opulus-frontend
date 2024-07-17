import React from 'react';

import { Typography } from '@/components/Typography';
import { PageLayout } from '@/pages/Layouts/PageLayout';

import styles from './Dashboard.module.scss';

export const Accounts: React.FC = () => {
  return (
    <PageLayout currentPage="accounts">
      <Typography variant="extra-extra-large">Accounts</Typography>
    </PageLayout>
  );
};
