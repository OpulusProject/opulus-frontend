import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import { TrendLine } from '@/components/TrendLine';

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 186 },
  { month: 'August', desktop: 305 },
  { month: 'September', desktop: 237 },
  { month: 'October', desktop: 73 },
  { month: 'November', desktop: 209 },
  { month: 'December', desktop: 73 },
];

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
      <TrendLine
        data={chartData}
        dataKey="desktop" // This is the key we want to plot
        label="Desktop"
      />
    </div>
  );
};
