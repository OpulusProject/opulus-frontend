import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/components/custom/Typography';

interface DollarValueProps {
  value: string | number;
  className?: string;
  variant?: string;
}

export const DollarValue: React.FC<DollarValueProps> = ({
  value,
  className,
  variant = 'h1',
}) => {
  const amount = parseFloat(value.toString()).toFixed(2);

  const [dollars, cents] = amount.split('.');

  return (
    <span
      className={classNames('flex flex-row', className, 'DollarValue-root')}
    >
      <Typography variant={variant}>{dollars}.</Typography>
      <Typography variant={variant} className="text-[#000000B3]">
        {cents}
      </Typography>
    </span>
  );
};
