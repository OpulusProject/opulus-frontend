import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import generateDateValue, {
  DateValue,
} from '@visx/mock-data/lib/generators/genDateValue';
import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent, max } from '@visx/vendor/d3-array';
import React from 'react';

const series = generateDateValue(25, /* seed= */ 0 / 72).sort(
  (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()
);

// data accessors
const getX = (d: DateValue) => d.date;
const getY = (d: DateValue) => d.value;

// scales
const xScale = scaleTime<number>({
  domain: extent(series, getX) as [Date, Date],
});
const yScale = scaleLinear<number>({
  domain: [0, max(series, getY) as number],
});

export const Chart: React.FC<CurveProps> = ({ width, height }) => {
  const svgHeight = height;

  // update scale output ranges
  xScale.range([0, width - 50]);
  yScale.range([svgHeight - 2, 0]);

  return (
    <div className="visx-curves-demo">
      <svg width={width} height={svgHeight}>
        <rect width={width} height={svgHeight} fill="#efefef" rx={14} ry={14} />
        {width > 8 && (
          <Group>
            <LinePath<DateValue>
              curve={allCurves.curveNatural}
              data={series}
              x={(d) => xScale(getX(d)) ?? 0}
              y={(d) => yScale(getY(d)) ?? 0}
              stroke="#333"
              strokeWidth={2}
              strokeOpacity={0.6}
              shapeRendering="geometricPrecision"
              markerMid="url(#marker-circle)"
              markerStart="url(#marker-cross)"
              markerEnd="url(#marker-arrow)"
            />
          </Group>
        )}
      </svg>
    </div>
  );
};

export type CurveProps = {
  width: number;
  height: number;
};
