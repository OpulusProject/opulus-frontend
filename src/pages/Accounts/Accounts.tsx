import { Plus } from 'lucide-react';
import React from 'react';

import { Typography } from '@/components/custom/Typography/Typography';
import { LaunchLink } from '@/components/src/LaunchLink/LaunchLink';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './Accounts.module.scss';

export const Accounts: React.FC = () => {
  const [linkOpened, setLinkOpened] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h1">Accounts</Typography>
        <Button className={styles.button} onClick={() => setLinkOpened(true)}>
          <Plus size={16} />
          Add account
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
      {linkOpened && <LaunchLink onClose={() => setLinkOpened(false)} />}
    </div>
  );
};
