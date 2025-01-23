import type { Meta, StoryObj } from '@storybook/react';

import { DistributionBar } from './DistributionBar';
import { DistributionBarSegment } from './DistributionBarSegment';

const meta: Meta<typeof DistributionBar> = {
  title: 'Components/DistributionBar',
  component: DistributionBar,
};

export default meta;
type Story = StoryObj<typeof DistributionBar>;

export const MultipleSegments: Story = {
  render: () => (
    <DistributionBar total={100}>
      <DistributionBarSegment value={65} color="#65FC9F" />
      <DistributionBarSegment value={25} color="#A2FDC5" />
      <DistributionBarSegment value={10} color="#E0FEEC" />
    </DistributionBar>
  ),
};

export const SingleSegment: Story = {
  render: () => (
    <DistributionBar total={100}>
      <DistributionBarSegment value={100} color="#65FC9F" />
    </DistributionBar>
  ),
};
