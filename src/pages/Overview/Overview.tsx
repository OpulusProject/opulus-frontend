import React from 'react';

import {
  Page,
  PageContent,
  PageContentSection,
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
      <PageContent>
        <PageContentSection>
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
        </PageContentSection>
      </PageContent>
    </Page>
  );
};
