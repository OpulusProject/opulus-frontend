import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TableCell } from '@/components/ui/table';

interface GlossaryValueProps {
  className?: string;
  text?: string;
}

export const GlossaryValue: React.FC<GlossaryValueProps> = ({
  className,
  text,
}) => {
  return (
    <TableCell className="px-0">
      <Typography variant="p3" className={classNames('text-right', className)}>
        {text}
      </Typography>
    </TableCell>
  );
};
