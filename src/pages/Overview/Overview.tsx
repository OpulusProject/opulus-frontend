import React, { useEffect, useState } from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useLinkToken } from '@/hooks/plaid/useLinkToken';
import { useMe } from '@/hooks/user/useMe';

import styles from './Overview.module.scss';
import PlaidLinkButton from './PlaidLinkButton';

export const Overview: React.FC = () => {
  const { data: user } = useMe();
  const { mutate: createLinkToken, isSuccess } = useLinkToken();

  const [linkToken, setLinkToken] = useState('');

  useEffect(() => {
    if (user) {
      createLinkToken(
        { userID: user.id.toString() },
        {
          onSuccess: (data) => {
            setLinkToken(data.data.link_token);
          },
        }
      );
    }
  }, [user, createLinkToken]);

  return (
    <div>
      <Typography variant="extra-extra-large">
        Hello Mr {user?.firstName}
      </Typography>
      {/* <Chart width={1448} height={600} /> */}
      {isSuccess && linkToken && <PlaidLinkButton token={linkToken} />}
    </div>
  );
};
