import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import React from 'react';

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

type TrendLineProps = {
  title?: string;
  description?: string;
  data: { month: string; [key: string]: number }[];
  dataKey: string;
  label: string;
  color: string;
  footerText?: string;
  showXAxis?: boolean; 
  showGridLines?: boolean; 
};

export const TrendLine: React.FC<TrendLineProps> = ({
  title,
  description,
  data,
  dataKey,
  label,
  color,
  footerText,
  showXAxis = false,
  showGridLines = false,
}) => {
  const chartConfig: ChartConfig = {
    [dataKey]: {
      label,
      color,
    },
  };

  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {showGridLines && <CartesianGrid vertical={false} />} {/* Conditionally render gridlines */}
            {showXAxis && (
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)} // Shorten the month name (e.g., "January" -> "Jan")
              />
            )}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={dataKey}
              type="linear"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {footerText && <div className="leading-none text-muted-foreground">{footerText}</div>}
      </CardFooter>
    </Card>
  );
};
