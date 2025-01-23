import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TableCell } from '@/components/ui/table';

interface GlossaryLabelProps {
  className?: string;
  text?: string;
}

export const GlossaryLabel: React.FC<GlossaryLabelProps> = ({
  className,
  text,
}) => {
  return (
    <TableCell className={classNames(className)}>
      <Typography variant="l3">{text}</Typography>
    </TableCell>
  );
};
