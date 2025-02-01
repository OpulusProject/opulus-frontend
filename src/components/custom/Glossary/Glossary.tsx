import classNames from 'classnames';

import { Table } from '@/components/ui/table';

interface GlossaryProps extends React.PropsWithChildren {
  className?: string;
}

export const Glossary: React.FC<GlossaryProps> = ({ className, children }) => {
  return (
    <Table
      className={classNames(
        'flex flex-row gap-10 w-full',
        className,
        'Glossary-root'
      )}
    >
      {children}
    </Table>
  );
};
