import type { Meta, StoryObj } from '@storybook/react';

import { BalanceDisplay } from './BalanceDisplay';

const meta: Meta<typeof BalanceDisplay> = {
  title: 'Components/BalanceDisplay',
  component: BalanceDisplay,
};

export default meta;
type Story = StoryObj<typeof BalanceDisplay>;

export const Default: Story = {
  render: () => <BalanceDisplay value={1486980.65} />,
};
