import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import styles from './Overview.module.scss';
import {OverviewCard} from '@/components/Chart/OverviewCard'

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
      <Chart width={1448} height={600} />
      <OverviewCard assetClass={'Assets'} amount={123.45}></OverviewCard>
      
      
    </div>
  );
};
