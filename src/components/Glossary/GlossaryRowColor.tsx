import classNames from 'classnames';
import React from 'react';

import { TableCell } from '@/components/ui/table';

interface GlossaryRowColorProps {
  color: string;
  className?: string;
}

export const GlossaryRowColor: React.FC<GlossaryRowColorProps> = ({
  color,
  className = 'p-0',
}) => {
  return (
    <TableCell className={classNames(className)}>
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
    </TableCell>
  );
};
