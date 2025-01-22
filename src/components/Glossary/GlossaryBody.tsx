import classNames from 'classnames';
import { TableBody } from '../ui/table';


interface GlossaryBodyProps {
  className?: string;
  children?: React.ReactNode;
}

export const GlossaryBody: React.FC<GlossaryBodyProps> = ({
  className,
  children,
}) => {

  return (
    <TableBody className={classNames(className)}>
        {children}
    </TableBody>
  );
};
