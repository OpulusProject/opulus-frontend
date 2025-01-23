import type { Meta, StoryObj } from '@storybook/react';

import { PieGraph } from './PieGraph';

const meta: Meta<typeof PieGraph> = {
  title: 'Components/PieGraph',
  component: PieGraph,
};
export default meta;
type Story = StoryObj<typeof PieGraph>;

export const Transactions: Story = {
  render: () => (
    <PieGraph
      percentValues={[15, 10, 25, 20, 10, 10, 5, 5]}
      transactionCount={1350}
    ></PieGraph>
  ),
};
