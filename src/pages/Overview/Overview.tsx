import React from 'react';

import { CashFlow } from '@/components/CashFlow';
import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
      <Chart width={1448} height={600} />
      <CashFlow
        data={[
          { label: 'January', value: 186 },
          { label: 'February', value: 205 },
          { label: 'March', value: -207 },
          { label: 'April', value: 173 },
          { label: 'May', value: -209 },
          { label: 'June', value: 214 },
        ]}
        positiveColor="hsl(var(--chart-1))"
        negativeColor="hsl(var(--chart-2))"
        title="Monthly Visitors"
        description="Visitor trends from January to June 2024"
        footer={
          <div>
            <div className="flex gap-2 font-medium">
              Trending up by 5.2% this month
            </div>
            <div className="text-muted-foreground">Last 6 months data</div>
          </div>
        }
      />
    </div>
  );
};
