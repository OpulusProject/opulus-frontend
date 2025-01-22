import classNames from 'classnames';
import { ReactNode } from 'react';
import { Typography } from '../Typography';
import { TableCell } from '../ui/table';


interface GlossaryValueProps {
  fontVariant?: string;
  className?: string;
  text?: string;
}

export const GlossaryValue: React.FC<GlossaryValueProps> = ({
  fontVariant = 'l3',
  className,
  text,
}) => {

  return (
    <TableCell>
      <Typography variant={fontVariant}  className={classNames(
        'text-right',
        className
      )}>
        {text}
      </Typography>
    </TableCell>
  );
};
