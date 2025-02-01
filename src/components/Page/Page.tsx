import classNames from 'classnames';

interface PageProps extends React.PropsWithChildren {
  className?: string;
}

export const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-8 px-[160px] py-[48px]',
        className,
        'Page-root'
      )}
    >
      {children}
    </div>
  );
};
