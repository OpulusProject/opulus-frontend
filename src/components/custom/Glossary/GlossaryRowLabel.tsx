import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography';

interface GlossaryRowLabelProps extends React.PropsWithChildren {
  className?: string;
  variant?: string;
}

export const GlossaryRowLabel: React.FC<GlossaryRowLabelProps> = ({
  className,
  children,
  variant = 'p3',
}) => {
  return (
    <Typography
      variant={variant}
      className={classNames('w-full', className, 'GlossaryRowLabel-root')}
    >
      {children}
    </Typography>
  );
};
