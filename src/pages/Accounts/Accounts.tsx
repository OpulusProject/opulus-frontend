import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLinkToken } from '@/hooks/plaid/useLinkToken';

import styles from './Accounts.module.scss';

export const Accounts: React.FC = () => {
  // State for Plaid link token
  const [token, setToken] = useState<string | null>(null);

  // Fetch link token using the custom hook
  const { data: linkTokenData, isLoading, isError } = useLinkToken();

  // Update the token state when linkTokenData changes
  useEffect(() => {
    if (linkTokenData?.linkToken) {
      setToken(linkTokenData.linkToken);
    }
  }, [linkTokenData]);

  // Initialize Plaid Link
  const { open, ready } = usePlaidLink({
    token: token ?? '', // Provide the token (fallback to an empty string if null)
    onSuccess: (public_token, metadata) => {
      console.log('Plaid link success:', public_token, metadata);
      // Add your server call to exchange the public token here
    },
  });

  // Render the component
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="extra-extra-large">Accounts</Typography>
        <Button
          className={styles.button}
          onClick={() => open()}
          disabled={!ready || isLoading || isError} // Disable the button when not ready or loading
        >
          <Plus size={16} />
          {isLoading ? 'Loading...' : 'Add account'}
        </Button>
      </div>

      <Tabs defaultValue="all" className={styles.tab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="cashandsavings">Cash and Savings</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="Loans">Loans</TabsTrigger>
          <TabsTrigger value="creditcards">Credit Cards</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
