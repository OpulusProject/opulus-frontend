import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

interface PieGraphSegment {
  label: string;
  value: number;
  fill: string; //todo: fill should not be passed as a prop, it should be instead selected from a const list. Find a way to generate colours as more values exist in segments.
}

interface PieGraphProps {
  title: string;
  segments: PieGraphSegment[];
  width?: number;
  height?: number;
}

export function PieGraph({
  title,
  segments,
  width = 200,
  height = 200,
}: PieGraphProps) {
  const totalValue = React.useMemo(() => {
    return segments.reduce((sum, segment) => sum + segment.value, 0);
  }, [segments]);

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={segments}
        nameKey="label"
        dataKey="value"
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
                    y={(viewBox.cy || 0) - 12}
                    className="text-sm leading-5 font-medium fill-muted-foreground"
                  >
                    {title}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 12}
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
