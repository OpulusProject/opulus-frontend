import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TableCell } from '@/components/ui/table';

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
