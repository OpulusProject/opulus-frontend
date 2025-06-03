import classNames from 'classnames';
import { AlertTriangle } from 'lucide-react';

import { Typography } from '@/components/custom/Typography/Typography';
import { Badge } from '@/components/ui/badge';

interface InstitutionCardBadgeProps extends React.PropsWithChildren {
  className?: string;
  variant?: 'default' | 'error';
}

export const InstitutionCardBadge: React.FC<InstitutionCardBadgeProps> = ({
  className,
  children,
  variant = 'default',
}) => {
  // default color is a guess
  const textColor =
    variant === 'default' ? 'text-popover-foreground' : 'text-destructive';

  return (
    <Badge
      variant="secondary"
      className={classNames(
        `pointer-events-none flex flex-row rounded-lg mt-4 gap-2 secondary ${textColor}`,
        className,
        'InstitutionCardBadge-root'
      )}
    >
      {variant === 'error' && <AlertTriangle size={16} />}
      <Typography variant="l2">{children}</Typography>
    </Badge>
  );
};
