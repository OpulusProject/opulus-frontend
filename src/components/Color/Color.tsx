import classNames from 'classnames';
import React from 'react';

interface ColorProps {
  color: string;
  className?: string;
}

export const Color: React.FC<ColorProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={classNames(
        'w-2 h-2 rounded-full',
        className,
        'Color-root'
      )}
      style={{
        backgroundColor: color,
      }}
    />
  );
};