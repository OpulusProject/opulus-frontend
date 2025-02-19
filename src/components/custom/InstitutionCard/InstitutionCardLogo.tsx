import classNames from 'classnames';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface InstitutionCardLogoProps {
  className?: string;
  src: string;
}

export const InstitutionCardLogo: React.FC<InstitutionCardLogoProps> = ({
  className,
  src,
}) => {
  return (
    <Avatar
      className={classNames(
        'w-20 h-20 mb-8',
        className,
        'InstitutionCardLogo-root'
      )}
    >
      <AvatarImage src={`data:image/png;base64,${src}`} />
    </Avatar>
  );
};
