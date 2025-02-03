import type { Meta, StoryObj } from '@storybook/react';
import { DollarValue } from './DollarValue';
import { DollarValueChange } from './DollarValueChange';

const meta: Meta<typeof DollarValue> = {
  title: 'Components/DollarValue',
  component: DollarValue,
};
export default meta;
type Story = StoryObj<typeof DollarValue>;

export const Default: Story = {
  render: () => (
    <div>
      <DollarValue value={'1234.50'}></DollarValue>
      <DollarValueChange delta={200}></DollarValueChange>
    </div>
  ),
};
