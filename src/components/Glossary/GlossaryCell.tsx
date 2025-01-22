import classNames from 'classnames';
import { ReactNode } from 'react';
import { Typography } from '../Typography';
import { TableCell } from '../ui/table';

type CellVariant =
  | 'text'
  | 'value';

interface GlossaryCellProps {
  fontVariant?: string;
  className?: string;
  text?: string;
  type?: CellVariant;
}

export const GlossaryCell: React.FC<GlossaryCellProps> = ({
  fontVariant = 'l3',
  className,
  text,
  type = 'text',
}) => {

  const cellClassName = classNames(className, {
    'text-right': type === 'value',
  });

  return (
    <TableCell>
      <Typography variant={fontVariant} className={cellClassName}>
        {text}
      </Typography>
    </TableCell>
  );
};
