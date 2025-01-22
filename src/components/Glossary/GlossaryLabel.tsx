import classNames from 'classnames';
import { ReactNode } from 'react';
import { Typography } from '../Typography';
import { TableCell } from '../ui/table';


interface GlossaryLabelProps {
  fontVariant?: string;
  className?: string;
  text?: string;
}

export const GlossaryLabel: React.FC<GlossaryLabelProps> = ({
  fontVariant = 'l3',
  className,
  text,
}) => {


  return (
    <TableCell>
      <Typography variant={fontVariant} className={classNames(className)}>
        {text}
      </Typography>
    </TableCell>
  );
};
