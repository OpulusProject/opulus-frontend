import classNames from 'classnames';

interface CardHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('flex flex-row', className, 'CardHeader-root')}>
      {children}
    </div>
  );
};
