import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface AmountDisplayProps {
  value: number;
  className?: string;
  variant?: string;
}

export const AmountDisplay: React.FC<AmountDisplayProps> = ({
  value,
  className,
  variant = 'h1',
}) => {
  const amount = value.toFixed(2);

  const [dollars, cents] = amount.split('.');

  const formattedDollars = Number(dollars).toLocaleString();

  return (
    <span
      className={classNames('flex flex-row', className, 'DollarValue-root')}
    >
      <Typography variant={variant}>${formattedDollars}.</Typography>
      <Typography variant={variant} className="text-popover-foreground">
        {cents}
      </Typography>
    </span>
  );
};
