import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import { TrendLine } from '@/components/TrendLine';
import { Card } from '@/components/ui/card';
import { DistributionBar } from '@/components/DistributionBar';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  const days = [
    { month: 'January', value: 500 },
    { month: 'February', value: 400 },
    { month: 'March', value: 300 },
    { month: 'April', value: 600 },
    { month: 'May', value: 700 },
    { month: 'June', value: 800 },
    { month: 'July', value: 950 },
    { month: 'August', value: 850 },
    { month: 'September', value: 1000 },
    { month: 'October', value: 950 },
    { month: 'January', value: 900 },
    { month: 'February', value: 700 },
    { month: 'March', value: 500 },
    { month: 'April', value: 600 },
    { month: 'May', value: 700 },
    { month: 'June', value: 800 },
    { month: 'July', value: 950 },
    { month: 'August', value: 850 },
    { month: 'September', value: 900 },
    { month: 'October', value: 950 },
    { month: 'January', value: 1000 },
    { month: 'February', value: 1200 },
    { month: 'March', value: 1250 },
    { month: 'April', value: 1100 },
    { month: 'May', value: 1000 },
    { month: 'June', value: 1050 },
    { month: 'July', value: 1100 },
    { month: 'August', value: 1200 },
    { month: 'September', value: 1400 },
    { month: 'October', value: 1200 },
  ];

  return (
    <div>
      <Typography variant="extra-extra-large" className="m-4">
        Hello Mr {user?.firstName}
      </Typography>
      <div class="flex flex-row">
        <Card className="w-[872px] h-[510px] m-4">
          <TrendLine
            data={days}
            dataKey="value"
            label="Net Worth"
            color="#1f77b4"
            showXAxis={false}
            showGridLines={false}
          />
        </Card>
        <Card className="w-[440px] h-[510px] m-4 p-4 pt-16"></Card>
      </div>
    </div>
  );
};
