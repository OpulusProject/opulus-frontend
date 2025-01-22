import classNames from 'classnames';
import { TableRow } from '../ui/table';


interface GlossaryRowProps {
  className?: string;
  children?: React.ReactNode;
}

export const GlossaryRow: React.FC<GlossaryRowProps> = ({
  className,
  children,
}) => {

  return (
    <TableRow className={classNames(
        'pointer-events-none',
        className
      )}>
        {children}
    </TableRow>
  );
};
