import React from 'react';
import { z } from 'zod';

import { Typography } from '@/components/custom/Typography/Typography';
import { columns } from '@/pages/Transactions/components/columns';
import { DataTable } from '@/pages/Transactions/components/data-table';
import { taskSchema } from '@/pages/Transactions/data/schema';

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
  const tasks = z.array(taskSchema).parse(data);
  return (
    <div>
      <Typography variant="h1">Transactions</Typography>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};
