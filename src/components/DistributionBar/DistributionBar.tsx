import React from 'react';

type DistributionBarProps = {
  values: number[]; // Array of percentages
  colors: string[]; // Corresponding colors
};

export const DistributionBar: React.FC<DistributionBarProps> = ({
  values,
  colors,
}) => {
  // Validate input lengths
  if (values.length !== colors.length) {
    console.error('The number of values must match the number of colors.');
    return null;
  }

  // Ensure percentages sum to 100% or less
  const total = values.reduce((sum, val) => sum + val, 0);
  if (total > 100) {
    console.error('Progress values exceed 100%.');
    return null;
  }

  const gap = 4;

  // Calculate adjusted widths to account for gaps
  const adjustedValues = values.map((value) => {
    // Reduce each value's width proportionally by the total gap space
    const totalGapsPercentage = (gap / 100) * (values.length - 1);
    return value - value * totalGapsPercentage;
  });

  return (
    <div className="relative w-full h-4 rounded-[4px] overflow-hidden flex">
      {adjustedValues.map((value, index) => (
        <div
          key={index}
          style={{
            width: `${value}%`, // Adjusted width
            backgroundColor: colors[index],
            marginLeft: index === 0 ? 0 : `${gap}px`, // Add gap between segments
          }}
          className="h-full rounded-[4px]" // Add rounded corners to individual segments
        />
      ))}
    </div>
  );
};
