import { Separator } from '@radix-ui/react-separator';
import { LineChart } from 'lucide-react';
import React from 'react';
import { z } from 'zod';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Color,
  DistributionBar,
  DistributionBarSegment,
  Glossary,
  GlossaryColumn,
  GlossaryRow,
  GlossaryRowLabel,
  GlossaryRowValue,
  Page,
  PageContent,
  PageDate,
  PageHeader,
  PageHeaderTitle,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography';
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
  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Transactions</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className="flex flex-row gap-8 h-[70%]">
          <Card className="w-[65%] h-full">
            <CardHeader>Cash Flow</CardHeader>
            <CardContent className="mt-4"></CardContent>
          </Card>
          <Card className="w-[35%] h-full">
            <CardHeader>Assets</CardHeader>
            <CardContent className="mt-4"></CardContent>
          </Card>
        </div>
      </PageContent>
    </Page>
  );
};
