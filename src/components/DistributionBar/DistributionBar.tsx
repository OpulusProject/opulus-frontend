import classNames from 'classnames';
import React from 'react';

import { DistributionBarProvider } from './DistributionBarContext';

type DistributionBarProps = React.PropsWithChildren<{
  total: number;
  className?: string;
}>;

export const DistributionBar: React.FC<DistributionBarProps> = ({
  total,
  className,
  children,
}) => {
  return (
    <DistributionBarProvider total={total}>
      <div
        className={classNames(
          'h-4 gap-1 flex flex-row',
          className,
          'DistributionBar-root'
        )}
      >
        {children}
      </div>
    </DistributionBarProvider>
  );
};
