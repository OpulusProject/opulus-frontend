import classNames from 'classnames';
import React from 'react';

import { TableCell } from '@/components/ui/table';

interface GlossaryRowColorProps {
  color: string;
  className?: string;
}

export const GlossaryRowColor: React.FC<GlossaryRowColorProps> = ({
  color,
  className,
}) => {
  return (
    <TableCell
      className={classNames(
        `p-0 w-[8px] h-[8px] rounded-full bg-[${color}]`,
        className
      )}
    />
  );
};
