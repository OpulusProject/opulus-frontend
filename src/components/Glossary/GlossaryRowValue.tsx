import classNames from 'classnames';

import { Typography } from '@/components/Typography';

interface GlossaryRowValueProps {
  className?: string;
  text?: string;
}

export const GlossaryRowValue: React.FC<GlossaryRowValueProps> = ({
  className,
  text,
}) => {
  return (
    <Typography
      variant="p3"
      className={classNames('text-right', className, 'GlossaryRowValue-root')}
    >
      {text}
    </Typography>
  );
};
