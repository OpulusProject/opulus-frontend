import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography';
import { TableHead } from '@/components/ui/table';

interface AssetTableHeadProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTableHead: React.FC<AssetTableHeadProps> = ({
  className,
  children,
}) => {
  return (
    <TableHead className={classNames('p-0', className, 'AssetTableHead-root')}>
      <Typography variant="p3">{children}</Typography>
    </TableHead>
  );
};
