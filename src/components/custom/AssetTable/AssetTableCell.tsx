import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography';
import { TableCell } from '@/components/ui/table';

interface AssetTableCellProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTableCell: React.FC<AssetTableCellProps> = ({
  className,
  children,
}) => {
  return (
    <TableCell className={classNames('p-0 pl-3', className, 'AssetTableCell-root')}>
      <Typography variant="p3">{children}</Typography>
    </TableCell>
  );
};
