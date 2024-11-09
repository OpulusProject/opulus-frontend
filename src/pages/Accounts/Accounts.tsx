import React from 'react';

import { Typography } from '@/components/Typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './Accounts.module.scss';

export const Accounts: React.FC = () => {
  return (
    <>
      <Typography variant="extra-extra-large">Accounts</Typography>

      <Tabs defaultValue="all" className={styles.tab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="cashandsavings">Cash and Savings</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="Loans">Loans</TabsTrigger>
          <TabsTrigger value="creditcards">Credit Cards</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};
