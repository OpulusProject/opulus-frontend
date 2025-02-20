import classNames from 'classnames';

interface PageContentSectionProps extends React.PropsWithChildren {
  className?: string;
}

export const PageContentSection: React.FC<PageContentSectionProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-row gap-8',
        className,
        'PageContentSection-root'
      )}
    >
      {children}
    </div>
  );
};
