import classNames from 'classnames';

import { Table } from '@/components/ui/table';

interface AssetTableProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTable: React.FC<AssetTableProps> = ({
  className,
  children,
}) => {
  return (
    <Table className={classNames('', className, 'AssetTable-root')}>
      {children}
    </Table>
  );
};
