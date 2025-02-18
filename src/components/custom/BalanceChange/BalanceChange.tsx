import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

enum TimePeriod {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

interface BalanceChangeProps {
  currentValue: number;
  previousValue: number;
  timePeriod: TimePeriod;
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
    previousValue === 0 ? '0.00' : ((delta / previousValue) * 100).toFixed(2);
  const sign = delta >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(delta).toLocaleString()}`;

  let textColor = '';
  if (delta < 0) {
    textColor = 'text-red-500';
  } else if (delta > 0) {
    textColor = 'text-[#65FC9F]';
    textColor = 'text-popover-foreground';
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
