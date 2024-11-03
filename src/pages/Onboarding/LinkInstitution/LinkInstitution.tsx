import React, { useCallback } from 'react';
import { PlaidLink } from 'react-plaid-link';

import { useLinkToken } from '@/hooks/plaid/useLinkToken';
import { useMe } from '@/hooks/user/useMe';

export const LinkInstitution: React.FC = () => {
  const { data: user } = useMe();
  const { data: linkTokenData, isSuccess } = useLinkToken(user?.id);

  const onSuccess = useCallback(
    (token, metadata) => console.log('onSuccess', token, metadata),
    []
  );

  const onEvent = useCallback(
    (eventName, metadata) => console.log('onEvent', eventName, metadata),
    []
  );

  const onExit = useCallback(
    (err, metadata) => console.log('onExit', err, metadata),
    []
  );

  const config = {
    token: linkTokenData?.linkToken ?? null,
    onSuccess,
    onEvent,
    onExit,
  };

};
