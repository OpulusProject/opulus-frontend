import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type BarChartProps = {
  data: { label: string; value: number }[];
  positiveColor: string;
  negativeColor: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  gap?: number;
};

export const CashFlow: React.FC<BarChartProps> = ({
  data,
  positiveColor,
  negativeColor,
  title = 'Bar Chart',
  description,
  footer,
  gap = 8,
}) => {
  if (!data || data.length === 0) {
    console.error('The data array must not be empty.');
    return null;
  }

  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
  } satisfies ChartConfig;

  return (
    <Card style={{ gap: `${gap}px` }}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="value">
              <LabelList dataKey="label" position="top" />
              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={item.value > 0 ? positiveColor : negativeColor}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {footer && (
        <CardFooter className="flex-col items-start text-sm">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};
