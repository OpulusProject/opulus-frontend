import type { Meta, StoryObj } from '@storybook/react';

import { BalanceChange } from './BalanceChange';

const meta: Meta<typeof BalanceChange> = {
  title: 'Components/BalanceChange',
  component: BalanceChange,
};

export default meta;
type Story = StoryObj<typeof BalanceChange>;

export const Negative: Story = {
  render: () => (
    <BalanceChange
      currentValue={200}
      previousValue={1000}
      timePeriod={'month'}
    />
  ),
};

export const Neutral: Story = {
  render: () => (
    <BalanceChange
      currentValue={1200}
      previousValue={1200}
      timePeriod={'month'}
    />
  ),
};

export const Positive: Story = {
  render: () => (
    <BalanceChange
      currentValue={1200}
      previousValue={1000}
      timePeriod={'month'}
    />
  ),
};
