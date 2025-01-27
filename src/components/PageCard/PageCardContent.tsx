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
      className={classNames('', className, 'PageCardContent-root')}
    >
      {children}
    </TabsContent>
  );
};
