import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from 'recharts';

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
  inflow: { label: string; value: number }[];
  outflow: { label: string; value: number }[];
  positiveColor: string;
  negativeColor: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  gap?: number;
};

export const CashFlow: React.FC<BarChartProps> = ({
  inflow,
  outflow,
  positiveColor,
  negativeColor,
  title = 'Cash Flow Chart',
  description,
  footer,
  gap = 8,
}) => {
  if (!inflow || inflow.length === 0 || !outflow || outflow.length === 0) {
    console.error('Both inflow and outflow data arrays must not be empty.');
    return null;
  }

  const chartConfig = {
    inflow: { label: 'Inflow', color: positiveColor },
    outflow: { label: 'Outflow', color: negativeColor },
  } satisfies ChartConfig;

  // Combine inflow and outflow data into a single dataset, adding the 'total' field
  const combinedData = inflow.map((inItem, idx) => {
    const outItem = outflow[idx];
    const total = inItem.value + (outItem?.value || 0); // Correct total calculation with negative outflows
    return {
      label: inItem.label,
      inflow: inItem.value,
      outflow: outItem?.value || 0,
      total: total, // Add total (net cash flow)
    };
  });

  return (
    <Card style={{ gap: `${gap}px` }}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {/* Wrapping the BarChart in a ChartContainer */}
        <ChartContainer config={chartConfig}>
          <BarChart
            data={combinedData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 30, bottom: 40 }}
            stackOffset="sign"
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => {
                    const total = item.payload.total; // Access the 'total' field from the payload
                    return (
                      <>
                        {/* Render the color box based on the data key */}
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor:
                              name === 'inflow'
                                ? chartConfig.inflow.color
                                : chartConfig.outflow.color,
                          }}
                        />
                        {/* Render individual values for Inflow and Outflow */}
                        {chartConfig[name as keyof typeof chartConfig]?.label || name}
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                          {value}
                          <span className="font-normal text-muted-foreground">
                            USD
                          </span>
                        </div>
                        {/* Display total (net cash flow) */}
                        {index === 1 && (
                          <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                            Total
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {total}
                              <span className="font-normal text-muted-foreground">
                                USD
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  }}
                />
              }
            />
            {/* Inflow Bar */}
            <Bar
              dataKey="inflow"
              name={chartConfig.inflow.label}
              stackId="cashFlow"
              radius={16}
            >
              {combinedData.map((item, index) => (
                <Cell key={`inflow-${index}`} fill={chartConfig.inflow.color} />
              ))}
            </Bar>
            {/* Outflow Bar */}
            <Bar
              dataKey="outflow"
              name={chartConfig.outflow.label}
              stackId="cashFlow"
              radius={16}
            >
              {combinedData.map((item, index) => (
                <Cell
                  key={`outflow-${index}`}
                  fill={chartConfig.outflow.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* Wrapping the LineChart in a separate container for proper layout */}
        <ChartContainer config={chartConfig}>
          <LineChart
            data={combinedData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 30, bottom: 40 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => {
                    const total = item.payload.total;
                    return (
                      <>
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: 'var(--color-primary)', // Use a color for the total line
                          }}
                        />
                        Total
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                          {total}
                          <span className="font-normal text-muted-foreground">USD</span>
                        </div>
                      </>
                    );
                  }}
                />
              }
            />
            {/* Total Line */}
            <Line
              dataKey="total"
              type="monotone"
              stroke="hsl(var(--chart-1))" // You can replace with any color you want
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
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
