import classNames from 'classnames';

import { TableRow } from '@/components/ui/table';

interface GlossaryRowProps {
  className?: string;
  children?: React.ReactNode;
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
