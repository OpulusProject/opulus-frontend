import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface BalanceChangeProps {
  delta: number;
  percentChange: string;
  timePeriod: string;
  className?: string;
}

export const BalanceChange: React.FC<BalanceChangeProps> = ({
  delta,
  percentChange,
  timePeriod,
  className,
}) => {
  const sign = delta >= 0 ? '+' : '-';
  const formattedDifference = `${sign} ${Math.abs(delta).toLocaleString()}`;

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