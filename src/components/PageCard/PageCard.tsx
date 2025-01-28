import classNames from 'classnames';

import { Tabs } from '@/components//ui/tabs';
import { Card } from '@/components/ui/card';

interface PageCardProps extends React.PropsWithChildren {
  className?: string;
  defaultValue?: string;
}

export const PageCard: React.FC<PageCardProps> = ({
  className,
  children,
  defaultValue,
}) => {
  return (
    <Card
      className={classNames('flex flex-col p-8', className, 'PageCard-root')}
    >
      <Tabs defaultValue={defaultValue}>{children}</Tabs>
    </Card>
  );
};
