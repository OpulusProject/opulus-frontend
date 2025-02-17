import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface DollarValueChangeProps {
  currentValue: number;
  previousValue: number;
  previousDate: Date;
  className?: string;
}

export const AmountChange: React.FC<DollarValueChangeProps> = ({
  currentValue,
  previousValue,
  previousDate,
  className,
}) => {
  const difference = currentValue - previousValue;

  const percentChange = ((difference / previousValue) * 100).toFixed(2);

  const sign = difference >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(difference).toLocaleString()}`;

  // Calculate the number of days between the current and previous date
  const currentDate = new Date();
  const timeDifferenceInMillis = currentDate.getTime() - previousDate.getTime();
  const daysDifference = Math.floor(
    timeDifferenceInMillis / (1000 * 3600 * 24)
  );

  // Determine the time period to display based on the days difference
  let timePeriod = '';
  if (daysDifference < 1) {
    timePeriod = 'yesterday';
  } else if (daysDifference < 7) {
    timePeriod = 'last week';
  } else if (daysDifference < 30) {
    timePeriod = 'last month';
  } else if (daysDifference < 365) {
    timePeriod = 'last year';
  } else {
    timePeriod = 'over a year ago';
  }

  return (
    <span
      className={classNames(
        'flex flex-row mt-2',
        className,
        'DollarValueChange-root'
      )}
    >
      <Typography variant="p2" className="text-[#65FC9F]">
        {formattedDifference} ({percentChange}%)
      </Typography>
      <Typography variant="p2" className="ml-1 text-popover-foreground">
        {`since ${timePeriod}`}
      </Typography>
    </span>
  );
};
