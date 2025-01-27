import classNames from 'classnames';

interface PageCardHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const PageCardHeader: React.FC<PageCardHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames('flex flex-row', className, 'PageCardHeader-root')}
    >
      {children}
    </div>
  );
};

/*

<PageCard>
    <PageCardHeader>
        <PageCardHeaderTabsList>
            <PageCardHeaderTabsTrigger>
            <PageCardHeaderTabsTrigger>
        </PageCardHeaderTabsList>
    </PageCardHeader>
    <PageCardContent>

*/
