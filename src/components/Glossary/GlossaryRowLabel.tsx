import classNames from 'classnames';

import { Typography } from '@/components/Typography';

interface GlossaryRowLabelProps {
  className?: string;
  text?: string;
}

export const GlossaryRowLabel: React.FC<GlossaryRowLabelProps> = ({
  className,
  text,
}) => {
  return (
    <Typography
      variant="l3"
      className={classNames('w-full', className, 'GlossaryRowLabel-root')}
    >
      {text}
    </Typography>
  );
};
