import classNames from 'classnames';

import { TableBody } from '@/components/ui/table';

interface AssetTableBodyProps extends React.PropsWithChildren {
  className?: string;
}

export const AssetTableBody: React.FC<AssetTableBodyProps> = ({
  className,
  children,
}) => {
  return (
    <TableBody className={classNames('', className, 'AssetTableHeader-root')}>
      {children}
    </TableBody>
  );
};
