import classNames from 'classnames';

import { TableRow } from '@/components/ui/table';

interface AssetTableRowProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTableRow: React.FC<AssetTableRowProps> = ({
  className,
  children,
}) => {
  return (
    <TableRow className={classNames('flex flex-row items-center my-3', className, 'AssetTableRow-root')}>
      {children}
    </TableRow>
  );
};
