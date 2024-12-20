import React from 'react';
import {
  ComposedChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Line,
  Legend,
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
    // The total represents net cash flow (inflow - outflow)
    const total = inItem.value + (outItem?.value || 0);
    return {
      label: inItem.label,
      inflow: inItem.value,
      outflow: outItem?.value || 0, // Treat outflow as a negative value
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
        {/* Wrapping the chart in a ChartContainer */}
        <ChartContainer config={chartConfig}>
          <ComposedChart
            data={combinedData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 30, bottom: 40 }}
          >
            <CartesianGrid vertical={false} />
            {/* Shared X and Y Axis */}
            <XAxis
              xAxisId="inflow"
              dataKey="label"
              tickLine={false}
              axisLine={false}
              position="bottom"
            />
            <XAxis xAxisId="outflow" dataKey="label" hide={true} />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={['auto', 'auto']}
            />
            <Tooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => {
                    const total = item.payload.total; // Access the 'total' field from the payload

                    // Check if the item is part of the 'line' and exclude it from the tooltip
                    if (name === 'total') return null;

                    return (
                      <>
                        {/* Render the color box based on the data key */}
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor:
                              name === 'Inflow'
                                ? positiveColor
                                : negativeColor,
                          }}
                        />
                        {/* Render individual values for Inflow and Outflow */}
                        {chartConfig[name as keyof typeof chartConfig]?.label ||
                          name}
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
              xAxisId="inflow"
              dataKey="inflow"
              name={chartConfig.inflow.label}
              radius={[8, 8, 0, 0]}
              barSize={64} // Adjust the size of the inflow bar
            >
              {combinedData.map((item, index) => (
                <Cell key={`inflow-${index}`} fill={chartConfig.inflow.color} />
              ))}
            </Bar>
            {/* Outflow Bar (shifted to the left) */}
            <Bar
              xAxisId="outflow"
              dataKey="outflow"
              name={chartConfig.outflow.label}
              radius={[8, 8, 0, 0]}
              barSize={64} // Adjust the size of the outflow bar
              offset={-8} // Shift the outflow bar to the left (use negative value)
            >
              {combinedData.map((item, index) => (
                <Cell
                  key={`outflow-${index}`}
                  fill={chartConfig.outflow.color}
                />
              ))}
            </Bar>
            {/* Total Line */}
            <Line
              xAxisId="inflow"
              dataKey="total"
              type="monotone"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              activeDot={{
                r: 6,
              }}
              zIndex={10} // Ensure the line is on top of bars
            />
          </ComposedChart>
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
