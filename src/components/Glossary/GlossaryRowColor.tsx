import classNames from 'classnames';
import React from 'react';

import { Color } from '@/components/Color/Color';

interface GlossaryRowColorProps {
  color: string;
  className?: string;
}

export const GlossaryRowColor: React.FC<GlossaryRowColorProps> = ({
  color,
  className,
}) => {
  return (
    <Color
      className={classNames('', className, 'GlossaryRowColor-root')}
      color={color}
    />
  );
};
