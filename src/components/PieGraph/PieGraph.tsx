import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

interface PieData {
  category: string;
  percent: number;
  fill: string;
}

interface PieGraphProps {
  percentValues: number[];
  transactionCount: number;
  colors?: string[];
}

const defaultCategories = [
  'Housing',
  'Debt & Fees',
  'Food',
  'Shopping',
  'Entertainment',
  'Transport & Travel',
  'Health & Wellness',
  'Other',
];

const defaultColors = [
  '#14B8A6',
  '#F4A261',
  '#E35D6A',
  '#3B82F6',
  '#6366F1',
  '#EC4899',
  '#F59E0B',
  '#FACC15',
];

export function PieGraph({
  percentValues,
  transactionCount,
  colors = defaultColors,
}: PieGraphProps) {
  if (percentValues.length !== defaultCategories.length) {
    throw new Error(
      `percentValues must have ${defaultCategories.length} elements`
    );
  }

  const chartData: PieData[] = React.useMemo(() => {
    return defaultCategories.map((category, index) => ({
      category,
      percent: percentValues[index],
      fill: colors[index],
    }));
  }, [percentValues, colors]);

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="percent"
        nameKey="category"
        outerRadius={100}
        innerRadius={70}
        strokeWidth={2.5}
        style={{
          outline: 'none',
        }}
      >
        <Label
          content={({ viewBox }) => {
            if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy + 12}
                    className="font-inter text-xl leading-8 font-semibold fill-foreground"
                  >
                    {transactionCount.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) - 12}
                    className="font-inter text-sm leading-5 font-medium fill-muted-foreground"
                  >
                    Transactions
                  </tspan>
                </text>
              );
            }
          }}
        />
      </Pie>
    </PieChart>
  );
}
