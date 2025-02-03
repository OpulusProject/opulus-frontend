import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface DollarValueChangeProps {
  value: string | number;
  delta: string | number;
  className?: string;
  variant?: string;
}

export const DollarValueChange: React.FC<DollarValueChangeProps> = ({
  value,
  delta,
  className,
  variant = 'l2',
}) => {
  const originalValue = parseFloat(value.toString());
  const difference = parseFloat(delta.toString());

  // Calculate percent change
  const percentChange = ((difference / originalValue) * 100).toFixed(2);

  // Format the delta with a + or - sign and add commas every 3 digits
  const sign = difference >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(difference).toLocaleString()}`;

  return (
    <span
      className={classNames(
        'flex flex-row',
        className,
        'DollarValueChange-root'
      )}
    >
      <Typography variant={variant} className="text-[#65FC9F]">
        {formattedDifference} ({percentChange}%)
      </Typography>
      <Typography variant={variant} className="ml-1">
        since last week
      </Typography>
    </span>
  );
};
