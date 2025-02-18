import classNames from 'classnames';
import React from 'react';

import { FontVariant, Typography } from '@/components/custom/Typography';

interface BalanceDisplayProps {
  value: number;
  className?: string;
  variant?: FontVariant;
}

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({
  value,
  className,
  variant = 'h1',
}) => {
  const amount = value.toFixed(2);
  const [dollars, cents] = amount.split('.');
  const formattedDollars = Number(dollars).toLocaleString();

  return (
    <span
      className={classNames('flex flex-row', className, 'BalanceDisplay-root')}
    >
      <Typography variant={variant} className="text-foreground">
        ${formattedDollars}.
      </Typography>
      <Typography variant={variant} className="text-muted-foreground">
        {cents}
      </Typography>
    </span>
  );
};
