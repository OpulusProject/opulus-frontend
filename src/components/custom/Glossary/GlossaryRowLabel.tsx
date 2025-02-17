import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography';

interface GlossaryRowLabelProps extends React.PropsWithChildren {
  className?: string;
}

export const GlossaryRowLabel: React.FC<GlossaryRowLabelProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      variant="p3"
      className={classNames('w-full', className, 'GlossaryRowLabel-root')}
    >
      {children}
    </Typography>
  );
};
