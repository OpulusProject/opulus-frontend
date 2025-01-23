import classNames from 'classnames';

import { TableBody } from '@/components/ui/table';

interface GlossaryColumnProps extends React.PropsWithChildren {
  className?: string;
}

export const GlossaryColumn: React.FC<GlossaryColumnProps> = ({
  className,
  children,
}) => {
  return (
    <TableBody
      className={classNames('w-full', className, 'GlossaryColumn-root')}
    >
      {children}
    </TableBody>
  );
};
