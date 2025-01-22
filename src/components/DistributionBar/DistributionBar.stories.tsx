import type { Meta, StoryObj } from '@storybook/react';

import { DistributionBar } from './DistributionBar';

const meta: Meta<typeof DistributionBar> = {
  title: 'Components/DistributionBar',
  component: DistributionBar,
};

export default meta;
type Story = StoryObj<typeof DistributionBar>;

export const Primary: Story = {
  render: () => (
    <DistributionBar
      values={[10, 40, 50]}
      colors={['#ff0000', '#00ff00', '#0000ff']}
    />
  ),
};
