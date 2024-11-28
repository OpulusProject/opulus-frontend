import React from 'react';

import styles from './DistributionBar.module.scss';

type DistributionBarProps = {
  values: number[];
  colors: string[];
  gap?: number; //Default 4px
};

type CSSWithCustomProps = React.CSSProperties & {
  '--segment-gap'?: string;
};

export const DistributionBar: React.FC<DistributionBarProps> = ({
  values,
  colors,
  gap = 4,
}) => {
  if (values.length !== colors.length) {
    console.error('The number of values must match the number of colors.');
    return null;
  }

  const total = values.reduce((sum, val) => sum + val, 0);
  if (total !== 100) {
    console.error('Progress values do not add up to 100%.');
    return null;
  }

  const totalGapSpace = (values.length - 1) * gap;
  const remainingWidth = 100 - totalGapSpace;

  const adjustedValues = values.map(
    (value) => (value / total) * remainingWidth
  );

  return (
    <div className={styles.distributionBar}>
      {adjustedValues.map((value, index) => (
        <div
          key={index}
          style={
            {
              width: `${value}%`,
              backgroundColor: colors[index],
              '--segment-gap': `${gap}px`,
            } as CSSWithCustomProps
          }
          className={`${styles.distributionSegment} ${
            index !== 0 ? styles.segmentWithGap : ''
          }`}
        />
      ))}
    </div>
  );
};
