import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';

interface InstitutionCardNameProps extends React.PropsWithChildren {
  className?: string;
}

export const InstitutionCardName: React.FC<InstitutionCardNameProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      className={classNames(
        'mb-4 text-popover-foreground', // this color is a guess...
        className,
        'InstitutionCardName-root'
      )}
      variant={'s1'}
    >
      {children}
    </Typography>
  );
};
