import classNames from 'classnames';

import { Typography } from '@/components/Typography';
import { TabsTrigger } from '@/components/ui/tabs';

interface PageCardHeaderTabsTriggerProps {
  value: string;
  className?: string;
}

export const PageCardHeaderTabsTrigger: React.FC<
  PageCardHeaderTabsTriggerProps
> = ({ value, className }) => {
  return (
    <TabsTrigger
      value={value}
      className={classNames('', className, 'PageCardHeaderTabsTrigger-root')}
    >
      <Typography variant="s2">{value}</Typography>
    </TabsTrigger>
  );
};

/*

<PageCard>
    <PageCardHeader>
        <PageCardHeaderTabsList>
            <PageCardHeaderTabsTrigger>
            <PageCardHeaderTabsTrigger>
        </PageCardHeaderTabsList>
    </PageCardHeader>
    <PageCardContent>

*/
