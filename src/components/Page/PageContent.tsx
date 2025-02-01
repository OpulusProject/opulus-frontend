import classNames from 'classnames';

interface PageContentProps extends React.PropsWithChildren {
  className?: string;
}

export const PageContent: React.FC<PageContentProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('flex', className, 'PageContent-root')}>
      {children}
    </div>
  );
};
