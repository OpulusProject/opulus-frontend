import classNames from 'classnames';
import React from 'react';

interface GlossaryRowColorProps {
  color: string;
  className?: string;
}

export const GlossaryRowColor: React.FC<GlossaryRowColorProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={classNames(
        'w-2 h-2 rounded-full',
        className,
        'GlossaryRowColor-root'
      )}
      style={{
        backgroundColor: color,
      }}
    />
  );
};
