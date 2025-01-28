import classNames from 'classnames';
import React from 'react';

import { Separator } from '@/components/ui/separator';
import { TabsList } from '@/components/ui/tabs';

interface CardHeaderTabsListProps extends React.PropsWithChildren {
  defaultValue: string;
  className?: string;
}

export const CardHeaderTabsList: React.FC<CardHeaderTabsListProps> = ({
  defaultValue,
  className,
  children,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <TabsList
      defaultValue={defaultValue}
      className={classNames(
        'border-none bg-transparant',
        className,
        'CardHeaderTabsList-root'
      )}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <Separator className="h-1/2" orientation="vertical" />
          )}
        </React.Fragment>
      ))}
    </TabsList>
  );
};
