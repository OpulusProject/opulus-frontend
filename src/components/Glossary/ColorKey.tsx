import React from 'react';

interface GlossaryRowColorProps {
  color: string;
}

export const GlossaryRowColor: React.FC<GlossaryRowColorProps> = ({ color }) => {
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
