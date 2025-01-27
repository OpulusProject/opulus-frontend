import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

interface PieGraphData {
  label: string;
  percent: number;
  fill: string;
}

interface PieGraphSegment {
  label: string;
  value: number;
  fill: string;
}

interface PieGraphProps {
  segments: PieGraphSegment[];
}

export function PieGraph({ segments }: PieGraphProps) {
  const totalValue = React.useMemo(() => {
    return segments.reduce((sum, segment) => sum + segment.value, 0);
  }, [segments]);

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={segments}
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
                  className="font-inter"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy || 0 - 12}
                    className="text-sm leading-5 font-medium fill-muted-foreground"
                  >
                    Transactions
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy || 0 + 12}
                    className="text-xl leading-8 font-semibold fill-foreground"
                  >
                    {totalValue.toLocaleString()}
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
