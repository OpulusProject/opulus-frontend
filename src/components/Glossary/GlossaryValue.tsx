import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TableCell } from '@/components/ui/table';

interface GlossaryValueProps {
  fontVariant?: string;
  className?: string;
  text?: string;
}

export const GlossaryValue: React.FC<GlossaryValueProps> = ({
  fontVariant = 'p3',
  className,
  text,
}) => {
  return (
    <TableCell className="px-0">
      <Typography
        variant={fontVariant}
        className={classNames('text-right', className)}
      >
        {text}
      </Typography>
    </TableCell>
  );
};
