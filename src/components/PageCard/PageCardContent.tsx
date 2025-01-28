import classNames from 'classnames';

import { TabsContent } from '@/components/ui/tabs';

interface PageCardContentProps extends React.PropsWithChildren {
  value: string;
  className?: string;
}

export const PageCardContent: React.FC<PageCardContentProps> = ({
  value,
  className,
  children,
}) => {
  return (
    <TabsContent
      value={value}
      className={classNames(
        'flex flex-col gap-8 items-center justify-center',
        className,
        'PageCardContent-root'
      )}
    >
      {children}
    </TabsContent>
  );
};
