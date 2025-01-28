import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TabsTrigger } from '@/components/ui/tabs';

interface CardHeaderTabsTriggerProps {
  value: string;
  className?: string;
}

export const CardHeaderTabsTrigger: React.FC<CardHeaderTabsTriggerProps> = ({
  value,
  className,
}) => {
  return (
    <TabsTrigger
      value={value}
      className={classNames(
        'data-[state=active]:shadow-none',
        className,
        'CardHeaderTabsTrigger-root'
      )}
    >
      <Typography variant="s2">{value}</Typography>
    </TabsTrigger>
  );
};
