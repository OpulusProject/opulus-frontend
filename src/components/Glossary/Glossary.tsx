import classNames from 'classnames';
import { Table } from '../ui/table';


interface GlossaryProps {
  className?: string;
  children?: React.ReactNode;
}

export const Glossary: React.FC<GlossaryProps> = ({
  className,
  children,
}) => {

  return (
    <Table className={classNames(className)}>
        {children}
    </Table>
  );
};
