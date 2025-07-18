import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography/Typography';

interface BalanceChangeProps {
  currentValue: number;
  previousValue: number;
  timePeriod: 'day' | 'week' | 'month' | 'year';
  className?: string;
}

export const BalanceChange: React.FC<BalanceChangeProps> = ({
  currentValue,
  previousValue,
  timePeriod,
  className,
}) => {
  const delta = currentValue - previousValue;
  const percentChange =
    previousValue === 0
      ? ''
      : `(${((delta / previousValue) * 100).toFixed(2)})%`;
  const sign = delta >= 0 ? '+' : '-';
  const formattedDifference = `${sign}${Math.abs(delta).toLocaleString()}`;

  //TODO: fix color with hsl once available
  let textColor = 'text-popover-foreground';
  if (delta < 0) {
    textColor = 'text-red-500';
  } else if (delta > 0) {
    textColor = 'text-[#65FC9F]';
  }

  return (
    <span
      className={classNames(
        'flex flex-row mt-2',
        className,
        'BalanceChange-root'
      )}
    >
      <Typography variant="p2" className={textColor}>
        {formattedDifference} {percentChange}
      </Typography>
      <Typography variant="p2" className="ml-1 text-popover-foreground">
        since last {timePeriod}
      </Typography>
    </span>
  );
};
