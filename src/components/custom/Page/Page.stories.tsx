import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/custom/Card/Card';

import { Page } from './Page';
import { PageContent } from './PageContent';
import { PageDate } from './PageDate';
import { PageHeader } from './PageHeader';
import { PageHeaderTitle } from './PageHeaderTitle';

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Accounts: Story = {
  render: () => (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Accounts</PageHeaderTitle>
      </PageHeader>
      <PageContent className="gap-8">
        <Card className="w-[100%] h-[530px] sm:w-full" />
      </PageContent>
    </Page>
  ),
};
