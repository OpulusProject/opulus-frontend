import classNames from 'classnames';

import { Tabs } from '@/components//ui/tabs';
import { Card as ShadCard } from '@/components/ui/card';

interface CardProps extends React.PropsWithChildren {
  className?: string;
  defaultValue?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  defaultValue,
}) => {
  return (
    <ShadCard
      className={classNames('flex flex-col p-8', className, 'Card-root')}
    >
      <Tabs defaultValue={defaultValue}>{children}</Tabs>
    </ShadCard>
  );
};
