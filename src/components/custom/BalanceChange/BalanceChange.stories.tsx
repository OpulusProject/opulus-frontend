import type { Meta, StoryObj } from '@storybook/react';

import { BalanceChange } from './BalanceChange';

const meta: Meta<typeof BalanceChange> = {
  title: 'Components/BalanceChange',
  component: BalanceChange,
};

export default meta;
type Story = StoryObj<typeof BalanceChange>;

export const Default: Story = {
  render: () => (
    <BalanceChange
      delta={2000}
      percentChange={'12.01%'}
      timePeriod={'last week'}
    />
  ),
};
