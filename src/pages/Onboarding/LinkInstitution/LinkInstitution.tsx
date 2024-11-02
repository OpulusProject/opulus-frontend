import React, { useCallback, useEffect } from 'react';
import { PlaidEmbeddedLink } from 'react-plaid-link';

import { useLinkToken } from '@/hooks/plaid/useLinkToken';
import { useMe } from '@/hooks/user/useMe';

export const LinkInstitution: React.FC = () => {
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
    token: 'plaid-token-123',
    onSuccess,
    onEvent,
    onExit,
  };

  return <PlaidEmbeddedLink {...config} />;
};
