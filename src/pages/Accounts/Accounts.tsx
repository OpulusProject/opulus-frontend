import { Plus } from 'lucide-react';
import React from 'react';

import { DistributionBar } from '@/components/DistributionBar';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './Accounts.module.scss';

export const Accounts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="extra-extra-large">Accounts</Typography>
        <Button className={styles.button}>
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

      <div className="p-6">
        <h1 className="text-white">Distribution</h1>
        <DistributionBar
          values={[33, 44, 23]} // Percentages
          colors={['#FF5733', '#3498DB', '#2ECC71']} // Red, Blue, Green
        />
      </div>
    </div>
  );
};
