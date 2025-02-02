import React from 'react';
import { z } from 'zod';

import { Typography } from '@/components/custom/Typography';
import { columns } from '@/pages/Transactions/components/columns';
import { DataTable } from '@/pages/Transactions/components/data-table';
import { taskSchema } from '@/pages/Transactions/data/schema';
import { Page, PageDate, PageHeader, PageHeaderTitle, PageContent, Card, Color, Glossary, GlossaryColumn, GlossaryRow, GlossaryRowLabel, GlossaryRowValue } from '@/components/custom/index';

const data = [
  {
    accountName: 'Plaid checking',
    date: '2024-06-23',
    type: 'Supermarkets and Groceries',
    merchantName: 'Walmart',
    merchantLogo: 'https://plaid-merchant-logos.plaid.com/walmart_1100.png',
    amount: -15.607323,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-23',
    type: 'General Services',
    merchantName: 'Internal Revenue Service',
    merchantLogo: null,
    amount: -744,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-24',
    type: 'Restaurants',
    merchantName: 'Tropical Smoothie Cafe',
    merchantLogo:
      'https://plaid-merchant-logos.plaid.com/tropical_smoothie_cafe_1047.png',
    amount: -69,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-24',
    type: 'Gas Stations',
    merchantName: 'Citgo',
    merchantLogo: 'https://plaid-merchant-logos.plaid.com/citgo_214.png',
    amount: -30.900715,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-25',
    type: 'Restaurants',
    merchantName: 'Blaze Pizza',
    merchantLogo: 'https://plaid-merchant-logos.plaid.com/blaze_pizza_122.png',
    amount: -5,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-25',
    type: 'Digital Purchase',
    merchantName: 'Amazon',
    merchantLogo: 'https://plaid-merchant-logos.plaid.com/amazon_44.png',
    amount: -10.021521,
    currencyCode: 'USD',
  },
  {
    accountName: 'Plaid checking',
    date: '2024-06-26',
    type: 'Parking',
    merchantName: 'PayByPhone',
    merchantLogo: 'https://plaid-merchant-logos.plaid.com/paybyphone_729.png',
    amount: -133.55963,
    currencyCode: 'USD',
  },
];

export const Transactions: React.FC = () => {
  // const tasks = z.array(taskSchema).parse(data);
  return (
    <div>
      <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Transactions</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className = 'flex flex-row'>
        <Card>

        </Card>
        <Card>
          
        </Card>
        </div>
      </PageContent>
    </Page>
      {/* <DataTable data={tasks} columns={columns} /> */}
    </div>
  );
};

const PIEGLOSSARY: React.FC = () => (
  <Glossary>
    <GlossaryColumn>
      <GlossaryRow>
        <Color color={'#14B8A6'} />
        <GlossaryRowLabel>Housing</GlossaryRowLabel>
        <GlossaryRowValue>36.1%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#F4A261'} />
        <GlossaryRowLabel>Debt & Fees</GlossaryRowLabel>
        <GlossaryRowValue>13.3%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#E35D6A'} />
        <GlossaryRowLabel>Food</GlossaryRowLabel>
        <GlossaryRowValue>13.2%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#3B82F6'} />
        <GlossaryRowLabel>Shopping</GlossaryRowLabel>
        <GlossaryRowValue>12.6%</GlossaryRowValue>
      </GlossaryRow>
    </GlossaryColumn>
    <GlossaryColumn>
      <GlossaryRow>
        <Color color={'#6366F1'} />
        <GlossaryRowLabel>Entertainment</GlossaryRowLabel>
        <GlossaryRowValue>10.9%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#EC4899'} />
        <GlossaryRowLabel>Transport & Travel</GlossaryRowLabel>
        <GlossaryRowValue>5.2%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#F59E0B'} />
        <GlossaryRowLabel>Health & Wellness</GlossaryRowLabel>
        <GlossaryRowValue>5.7%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#FACC15'} />
        <GlossaryRowLabel>Other</GlossaryRowLabel>
        <GlossaryRowValue>2.8%</GlossaryRowValue>
      </GlossaryRow>
    </GlossaryColumn>
  </Glossary>
);

const SEGMENTS = [
  { label: 'Housing', value: 202, fill: '#14B8A6' }, // 15% of 1350
  { label: 'Debt & Fees', value: 135, fill: '#F4A261' }, // 10% of 1350
  { label: 'Food', value: 338, fill: '#E35D6A' }, // 25% of 1350
  { label: 'Shopping', value: 270, fill: '#3B82F6' }, // 20% of 1350
  { label: 'Entertainment', value: 135, fill: '#6366F1' }, // 10% of 1350
  { label: 'Transport & Travel', value: 135, fill: '#EC4899' }, // 10% of 1350
  { label: 'Health & Wellness', value: 68, fill: '#F59E0B' }, // 5% of 1350
  { label: 'Other', value: 68, fill: '#FACC15' }, // 5% of 1350
];
