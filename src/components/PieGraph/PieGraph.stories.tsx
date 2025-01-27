import type { Meta, StoryObj } from '@storybook/react';

import { PieGraph } from './PieGraph';

const meta: Meta<typeof PieGraph> = {
  title: 'Components/PieGraph',
  component: PieGraph,
};
export default meta;
type Story = StoryObj<typeof PieGraph>;

const segments = [
  { label: 'Housing', value: 202, fill: '#14B8A6' }, // 15% of 1350
  { label: 'Debt & Fees', value: 135, fill: '#F4A261' }, // 10% of 1350
  { label: 'Food', value: 338, fill: '#E35D6A' }, // 25% of 1350
  { label: 'Shopping', value: 270, fill: '#3B82F6' }, // 20% of 1350
  { label: 'Entertainment', value: 135, fill: '#6366F1' }, // 10% of 1350
  { label: 'Transport & Travel', value: 135, fill: '#EC4899' }, // 10% of 1350
  { label: 'Health & Wellness', value: 68, fill: '#F59E0B' }, // 5% of 1350
  { label: 'Other', value: 68, fill: '#FACC15' }, // 5% of 1350
];


export const Transactions: Story = {
  render: () => (
    <PieGraph
    segments={segments}
    ></PieGraph>
  ),
};
