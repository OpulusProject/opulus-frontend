import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/Card/Card';

import { Page } from './Page';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { PageHeaderDate } from './PageHeaderDate';
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
      <PageHeader>
        <PageHeaderDate />
        <PageHeaderTitle>Accounts</PageHeaderTitle>
      </PageHeader>
      <PageContent className="gap-8">
        <Card className="w-[100%] h-[530px] sm:w-full" />
      </PageContent>
    </Page>
  ),
};
