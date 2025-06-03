import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';

interface PageHeaderTitleProps extends React.PropsWithChildren {
  className?: string;
}

export const PageHeaderTitle: React.FC<PageHeaderTitleProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      className={classNames('', className, 'PageHeaderTitle-root')}
      variant={'h1'}
    >
      {children}
    </Typography>
  );
};
