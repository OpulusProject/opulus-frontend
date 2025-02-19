import classNames from 'classnames';

import { Card } from '@/components/ui/card';

interface InstitutionCardProps extends React.PropsWithChildren {
  className?: string;
}

export const InstitutionCard: React.FC<InstitutionCardProps> = ({
  className,
  children,
}) => {
  return (
    <Card
      className={classNames(
        'flex flex-col items-center px-8 py-10 w-[310px]',
        className,
        'InstitutionCard-root'
      )}
    >
      {children}
    </Card>
  );
};
