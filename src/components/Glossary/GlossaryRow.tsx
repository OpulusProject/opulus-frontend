import classNames from 'classnames';

import { TableRow } from '@/components/ui/table';

interface GlossaryRowProps extends React.PropsWithChildren {
  className?: string;
}

export const GlossaryRow: React.FC<GlossaryRowProps> = ({
  className,
  children,
}) => {
  return (
    <TableRow className={classNames('pointer-events-none border-0', className)}>
      {children}
    </TableRow>
  );
};
