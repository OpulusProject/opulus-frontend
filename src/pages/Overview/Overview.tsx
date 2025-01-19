import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant={'h1'}>Hello Mr {user?.firstName}</Typography>
      <Chart width={1448} height={600} />
    </div>
  );
};
