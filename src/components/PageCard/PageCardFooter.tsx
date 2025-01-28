import classNames from 'classnames';

interface PageCardFooterProps extends React.PropsWithChildren {
  className?: string;
}

export const PageCardFooter: React.FC<PageCardFooterProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames('flex flex-row', className, 'PageCardFooter-root')}
    >
      {children}
    </div>
  );
};
