import type { Meta, StoryObj } from '@storybook/react';
import { DollarValue } from './DollarValue';

const meta: Meta<typeof DollarValue> = {
  title: 'Components/DollarValue',
  component: DollarValue,
};
export default meta;
type Story = StoryObj<typeof DollarValue>;

export const Accounts: Story = {
  render: () => 
  <DollarValue value={'1234.50'}></DollarValue>,
};
