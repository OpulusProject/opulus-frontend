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
            currentValue={1486980.65}
            previousValue={1483029.41}
            timePeriod={'week'}
          />
          <AssetsCard
            currentValue={1486980.65}
            previousValue={1483029.41}
            timePeriod={'week'}
          />
        </div>
      </PageContent>
    </Page>
  );
};
