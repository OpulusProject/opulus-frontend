import React from 'react';

import { Typography } from '@/components/custom/Typography/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';

export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <div>
      <Typography variant="h1">Hello Mr {user?.firstName}</Typography>
    </div>
  );
};
