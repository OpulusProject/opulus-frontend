import classNames from 'classnames';

import { Typography } from '@/components/Typography';

interface PageHeaderDateProps {
  className?: string;
}
const currentDate = new Date();

const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long', // "Sunday"
  month: 'short', // "Nov"
  day: '2-digit', // "24"
}).format(currentDate);

export const PageHeaderDate: React.FC<PageHeaderDateProps> = ({
  className,
}) => {
  return (
    <Typography
      className={classNames('', className, 'PageHeaderDate-root')}
      variant={'l2'}
    >
      {formattedDate}
    </Typography>
  );
};
