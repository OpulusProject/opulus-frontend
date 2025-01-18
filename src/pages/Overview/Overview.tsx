import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import { MetricChange } from '@/components/MetricChange';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
      <Chart width={1448} height={600} />
      <MetricChange amount={5005.59} amountChange={5.79} percentChange={2.01}></MetricChange>
    </div>
  );
};
