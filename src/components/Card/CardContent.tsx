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
        'flex flex-col gap-8 items-center justify-center mt-8',
        className,
        'CardContent-root'
      )}
    >
      {children}
    </TabsContent>
  );
};
