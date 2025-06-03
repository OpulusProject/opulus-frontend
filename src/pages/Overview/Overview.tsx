import React from 'react';

import { Typography } from '@/components/custom/Typography/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';
import {
  Page,
  PageContent,
  PageDate,
  PageHeader,
  PageHeaderTitle,
} from '@/components/custom';

import { AssetsCard } from './AssetsCard';
import { CashFlowCard } from './CashFlowCard';

export const Overview: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Overview</PageHeaderTitle>
      </PageHeader>
      <PageContent className="flex-row gap-8">
        <CashFlowCard
          currentValue={1486980.65}
          previousValue={1483029.41}
          timePeriod={'week'}
        />
        <AssetsCard
          currentValue={1486980.65}
          previousValue={1483029.41}
          timePeriod={'week'}
        />
      </PageContent>
    </Page>
  );
};
