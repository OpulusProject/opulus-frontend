import React from 'react';

import {
  Page,
  PageContent,
  PageDate,
  PageHeader,
  PageHeaderTitle,
} from '@/components/custom';
import { useGetUser } from '@/hooks/user/useGetUser';

import { AssetsCard } from './AssetsCard';
import { CashFlowCard } from './CashFlowCard';

export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Hello Mr {user?.firstName}</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className="flex flex-row gap-8">
          <CashFlowCard
            dollarValue={1486980.56}
            previousValue={1484980.56}
            previousDate={new Date(2025, 0, 1)}
          />
          <AssetsCard
            dollarValue={1486980.56}
            previousValue={1484980.56}
            previousDate={new Date(2025, 0, 1)}
          />
        </div>
      </PageContent>
    </Page>
  );
};
