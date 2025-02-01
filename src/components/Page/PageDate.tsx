import classNames from 'classnames';

import { Typography } from '@/components/Typography';

interface PageDateProps {
  className?: string;
}
const currentDate = new Date();

const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'short',
  day: '2-digit',
}).format(currentDate);

export const PageDate: React.FC<PageDateProps> = ({ className }) => {
  return (
    <Typography
      className={classNames('', className, 'PageHeaderDate-root')}
      variant={'l2'}
    >
      {formattedDate}
    </Typography>
  );
};
