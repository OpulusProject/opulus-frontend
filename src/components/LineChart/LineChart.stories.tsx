import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from '@/components/LineChart/LineChart';
import { Card } from '../ui/card';

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const days = [
  { date: new Date(2023, 0, 1), value: 500 },
  { date: new Date(2023, 1, 1), value: 400 },
  { date: new Date(2023, 2, 1), value: 300 },
  { date: new Date(2023, 3, 1), value: 600 }, 
  { date: new Date(2023, 4, 1), value: 700 }, 
  { date: new Date(2023, 5, 1), value: 800 }, 
  { date: new Date(2023, 6, 1), value: 950 },
  { date: new Date(2023, 7, 1), value: 850 },
  { date: new Date(2023, 8, 1), value: 1000 },
  { date: new Date(2023, 9, 1), value: 950 }, 
  { date: new Date(2023, 10, 1), value: 900 },
  { date: new Date(2023, 11, 1), value: 700 },
  { date: new Date(2024, 0, 1), value: 500 }, 
  { date: new Date(2024, 1, 1), value: 600 }, 
  { date: new Date(2024, 2, 1), value: 700 }, 
  { date: new Date(2024, 3, 1), value: 800 }, 
  { date: new Date(2024, 4, 1), value: 900 }, 
  { date: new Date(2024, 5, 1), value: 1000 },
  { date: new Date(2024, 6, 1), value: 1100 },
  { date: new Date(2024, 7, 1), value: 1400 },
  { date: new Date(2024, 8, 1), value: 1300 },
  { date: new Date(2024, 9, 1), value: 1200 },
];

export const Default: Story = {
  render: () => (
    <Card className='w-[530px] h-[530px]'>
    <LineChart
      data={days}
      dataKey="value"
      label="Net Worth"
    />
    </Card>
  ),
};
