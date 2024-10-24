import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLinkButton = ({ token }: { token: string }) => {
  const onSuccess = useCallback((public_token: string, metadata: any) => {
    // send public_token to your server
    console.log('Public Token:', public_token);
    console.log('Metadata:', metadata);
  }, []);

  const config = {
    token, // Pass in the link token from your backend
    onSuccess,
    onExit: (error: any, metadata: any) => {
      // handle the case when the user exits the link flow
      console.log('Exit Metadata:', metadata);
    },
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a Bank Account
    </button>
  );
};

export default PlaidLinkButton;
