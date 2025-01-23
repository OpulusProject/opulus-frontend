import classNames from 'classnames';
import React from 'react';

import { useDistributionBarContext } from './DistributionBarContext';

type DistributionBarSegmentProps = {
  value: number;
  color: string;
  className?: string;
};

export const DistributionBarSegment: React.FC<DistributionBarSegmentProps> = ({
  value,
  color,
  className,
}) => {
  const total = useDistributionBarContext();
  const widthPercentage = (value / total) * 100;

  return (
    <div
      className={classNames(
        'rounded',
        className,
        'DistributionBarSegment-root'
      )}
      style={{ width: `${widthPercentage}%`, backgroundColor: color }}
    />
  );
};
