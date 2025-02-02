import React from 'react';

import {
  Card,
  DistributionBar,
  DistributionBarSegment,
  Page,
  PageContent,
  PageDate,
  PageHeader,
  PageHeaderTitle,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';
import { LineChart } from '@/components/charts/LineChart/LineChart';

export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Hello Mr {user?.firstName}</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className="flex flex-row gap-8 h-[70%]">
          <Card className="w-[65%] h-full p-0">
            <LineChart
              className="h-full"
              data={DATA}
              dataKey="value"
              label="Net Worth"
            />
          </Card>
          <Card className="w-[35%] h-full">
            <DistributionBar total={100}>
              <DistributionBarSegment value={65} color="#65FC9F" />
              <DistributionBarSegment value={25} color="#A2FDC5" />
              <DistributionBarSegment value={10} color="#E0FEEC" />
            </DistributionBar>
          </Card>
        </div>
      </PageContent>
    </Page>
  );
};

const DATA = [
  { date: new Date(2023, 0, 1), value: 500 },
  { date: new Date(2023, 1, 1), value: 400 },
  { date: new Date(2023, 2, 1), value: 300 },
  { date: new Date(2023, 3, 1), value: 600 },
  { date: new Date(2023, 4, 1), value: 700 },
  { date: new Date(2023, 5, 1), value: 800 },
  { date: new Date(2023, 6, 1), value: 950 },
  { date: new Date(2023, 7, 1), value: 850 },
  { date: new Date(2023, 8, 1), value: 1000 },
  { date: new Date(2023, 9, 1), value: 950 },
  { date: new Date(2023, 10, 1), value: 900 },
  { date: new Date(2023, 11, 1), value: 700 },
  { date: new Date(2024, 0, 1), value: 500 },
  { date: new Date(2024, 1, 1), value: 600 },
  { date: new Date(2024, 2, 1), value: 700 },
  { date: new Date(2024, 3, 1), value: 800 },
  { date: new Date(2024, 4, 1), value: 900 },
  { date: new Date(2024, 5, 1), value: 1000 },
  { date: new Date(2024, 6, 1), value: 1100 },
  { date: new Date(2024, 7, 1), value: 1400 },
  { date: new Date(2024, 8, 1), value: 1300 },
  { date: new Date(2024, 9, 1), value: 1200 },
];
