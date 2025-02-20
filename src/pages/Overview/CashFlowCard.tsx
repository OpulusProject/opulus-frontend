import { LineChart } from '@/components/charts/LineChart/LineChart';
import {
  BalanceChange,
  BalanceDisplay,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Color,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography';

const DATA = [
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

interface CashFlowCardProps {
  currentValue: number;
  previousValue: number;
  timePeriod: 'day' | 'week' | 'month' | 'year';
}

export const CashFlowCard: React.FC<CashFlowCardProps> = ({
  currentValue,
  previousValue,
  timePeriod,
}) => {
  return (
    <Card className="w-[65%] h-full p-0 relative">
      <CardHeader className="ml-8 mt-8">Cash Flow</CardHeader>
      <CardContent className="mt-4">
        <BalanceDisplay className="ml-8" value={1486980.65} />
        <BalanceChange
          className="ml-8"
          currentValue={currentValue}
          previousValue={previousValue}
          timePeriod={timePeriod}
        />
        <LineChart data={DATA} dataKey="value" label="Net Worth" />
      </CardContent>
      {/* TODO: Update hex codes with HSL */}
      <CardFooter className="absolute bottom-8 right-8 flex justify-end items-center gap-3">
        <Color color="#65FC9F" />
        <Typography variant="p3" className="text-[#FFFFFF4C]">
          last updated 12:01 AM
        </Typography>
      </CardFooter>
    </Card>
  );
};
