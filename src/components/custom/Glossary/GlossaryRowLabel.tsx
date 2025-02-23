import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';

interface GlossaryRowLabelProps extends React.PropsWithChildren {
  className?: string;
}

export const GlossaryRowLabel: React.FC<GlossaryRowLabelProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      variant="l3"
      className={classNames('w-full', className, 'GlossaryRowLabel-root')}
    >
      {children}
    </Typography>
  );
};
