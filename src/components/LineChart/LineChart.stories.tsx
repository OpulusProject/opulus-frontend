import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from '@/components/LineChart/LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'Components/TrendLine',
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const days = [
  { month: 'January', value: 500 },
  { month: 'February', value: 400 },
  { month: 'March', value: 300 },
  { month: 'April', value: 600 },
  { month: 'May', value: 700 },
  { month: 'June', value: 800 },
  { month: 'July', value: 950 },
  { month: 'August', value: 850 },
  { month: 'September', value: 1000 },
  { month: 'October', value: 950 },
  { month: 'January', value: 900 },
  { month: 'February', value: 700 },
  { month: 'March', value: 500 },
  { month: 'April', value: 600 },
  { month: 'May', value: 700 },
  { month: 'June', value: 800 },
  { month: 'July', value: 950 },
  { month: 'August', value: 850 },
  { month: 'September', value: 900 },
  { month: 'October', value: 950 },
  { month: 'January', value: 1000 },
  { month: 'February', value: 1200 },
  { month: 'March', value: 1250 },
  { month: 'April', value: 1100 },
  { month: 'May', value: 1000 },
  { month: 'June', value: 1050 },
  { month: 'July', value: 1100 },
  { month: 'August', value: 1200 },
  { month: 'September', value: 1400 },
  { month: 'October', value: 1200 },
];

export const General: Story = {
  render: () => (
    <LineChart
      data={days}
      dataKey="value"
      label="Net Worth"
      showXAxis={true}
      showGridLines={false}
    />
  ),
};
