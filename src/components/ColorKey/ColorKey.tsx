import React from 'react';

interface ColorKeyProps {
  color: string;
}

export const ColorKey: React.FC<ColorKeyProps> = ({ color }) => {
  return (
    <div
      style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: color,
      }}
    />
  );
};
