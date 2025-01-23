import classNames from 'classnames';

import { Typography } from '@/components/Typography';

interface GlossaryRowValueProps extends React.PropsWithChildren {
  className?: string;
}

export const GlossaryRowValue: React.FC<GlossaryRowValueProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      variant="p3"
      className={classNames(className, 'GlossaryRowValue-root')}
    >
      {children}
    </Typography>
  );
};
