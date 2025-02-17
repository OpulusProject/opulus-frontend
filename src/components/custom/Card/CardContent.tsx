import classNames from 'classnames';

import { TabsContent } from '@/components/ui/tabs';

interface CardContentProps extends React.PropsWithChildren {
  value: string;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  value,
  className,
  children,
}) => {
  return (
    <TabsContent
      value={value}
      className={classNames(
        'flex flex-col mt-4',
        className,
        'CardContent-root'
      )}
    >
      {children}
    </TabsContent>
  );
};
