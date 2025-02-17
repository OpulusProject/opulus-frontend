import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface AmountChangeProps {
  delta: number;
  timePeriod: string;
  className?: string;
}

export const AmountChange: React.FC<AmountChangeProps> = ({
  delta,
  timePeriod,
  className,
}) => {
  const sign = delta >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(delta).toLocaleString()}`;

  const percentChange =
    delta === 0 ? '0.00' : ((delta / Math.abs(delta)) * 100).toFixed(2);

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
