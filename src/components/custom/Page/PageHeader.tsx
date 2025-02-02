import classNames from 'classnames';

interface PageHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-row justify-between mb-8',
        className,
        'PageHeader-root'
      )}
    >
      {children}
    </div>
  );
};
