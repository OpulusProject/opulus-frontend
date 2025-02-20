import classNames from 'classnames';

import { TableHeader } from '@/components/ui/table';

interface AssetTableHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTableHeader: React.FC<AssetTableHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <TableHeader className={classNames('', className, 'AssetTableHeader-root')}>
      {children}
    </TableHeader>
  );
};
