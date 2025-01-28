import classNames from 'classnames';

import { TabsList } from '@/components/ui/tabs';

interface PageCardHeaderTabsListProps extends React.PropsWithChildren {
  defaultValue: string;
  className?: string;
}

export const PageCardHeaderTabsList: React.FC<PageCardHeaderTabsListProps> = ({
  defaultValue,
  className,
  children,
}) => {
  return (
    <TabsList
      defaultValue={defaultValue}
      className={classNames(
        'border-none bg-transparent',
        className,
        'PageCardHeaderTabsList-root'
      )}
    >
      {children}
    </TabsList>
  );
};
