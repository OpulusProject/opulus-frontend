import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

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
  const percentChange = previousValue === 0 ? '' : ((delta / previousValue) * 100).toFixed(2);
  const sign = delta >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(delta).toLocaleString()}`;

  let textColor = 'text-popover-foreground';
  if (delta < 0) {
    textColor = 'text-red-500'; //fix color with hsl once available
  } else if (delta > 0) {
    textColor = 'text-[#65FC9F]'; //fix color with hsl once available
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
        {formattedDifference} ({percentChange}%)
      </Typography>
      <Typography variant="p2" className="ml-1 text-popover-foreground">
        {`since last ${timePeriod}`}
      </Typography>
    </span>
  );
};
