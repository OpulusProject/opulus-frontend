import React from 'react';

import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
    </div>
  );
};
