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

  return (
    <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden flex">
      {values.map((value, index) => (
        <div
          key={index}
          style={{
            width: `${value}%`,
            backgroundColor: colors[index],
          }}
          className="h-full"
        />
      ))}
    </div>
  );
};
