import React from 'react';
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart as LineGraph,
  XAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type LineChartProps = {
  data: { month: string; [key: string]: number }[];
  dataKey: string;
  label: string;
  color?: string;
  showXAxis?: boolean;
  showGridLines?: boolean;
};

export const LineChart: React.FC<LineChartProps> = ({
  data,
  dataKey,
  label,
  color = '#00FFAF',
  showXAxis = false,
  showGridLines = false,
}) => {
  const chartConfig: ChartConfig = {
    [dataKey]: {
      label,
      color,
    },
  };

  // Find the highest and lowest Y-values
  const maxData = Math.max(...data.map((d) => d[dataKey]));
  const minData = Math.min(...data.map((d) => d[dataKey]));

  // Find the index of the most recent occurrence of the max and min data values
  const maxIndex = data
    .slice()
    .reverse()
    .findIndex((d) => d[dataKey] === maxData);
  const minIndex = data
    .slice()
    .reverse()
    .findIndex((d) => d[dataKey] === minData);

  // Get the corresponding data for max and min (most recent)
  const maxDataPoint = data[data.length - 1 - maxIndex];
  const minDataPoint = data[data.length - 1 - minIndex];

  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <LineGraph
        accessibilityLayer
        data={data}
        margin={{
          top: 200,
        }}
      >
        {showGridLines && <CartesianGrid vertical={false} />}{' '}
        {/* Conditionally render gridlines */}
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
        >
          {/* Label the highest point (most recent occurrence) */}
          <LabelList
            dataKey={dataKey}
            position="top"
            content={({ x, y, value, index }) =>
              value === maxData && data[index].month === maxDataPoint.month ? (
                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  fill={'#808080'}
                  fontSize={12}
                >
                  {`${maxData}`}
                </text>
              ) : null
            }
          />
          {/* Label the lowest point (most recent occurrence) */}
          <LabelList
            dataKey={dataKey}
            position="bottom"
            content={({ x, y, value, index }) =>
              value === minData && data[index].month === minDataPoint.month ? (
                <text
                  x={x}
                  y={y + 20}
                  textAnchor="middle"
                  fill={'#808080'}
                  fontSize={12}
                >
                  {`${minData}`}
                </text>
              ) : null
            }
          />
        </Line>
      </LineGraph>
    </ChartContainer>
  );
};
