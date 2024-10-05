import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';

import styles from './Overview.module.scss';

export const Overview: React.FC = () => {
  return (
    <div>
      <Typography variant="extra-extra-large">Overview</Typography>
      <Chart width={1448} height={600} />
    </div>
  );
};
