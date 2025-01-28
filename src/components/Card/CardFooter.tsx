import classNames from 'classnames';

interface CardFooterProps extends React.PropsWithChildren {
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('flex flex-row', className, 'CardFooter-root')}>
      {children}
    </div>
  );
};
