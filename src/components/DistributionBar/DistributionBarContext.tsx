import React, { createContext, useContext } from 'react';

const DistributionBarContext = createContext<number | undefined>(undefined);

export const DistributionBarProvider: React.FC<{
  total: number;
  children: React.ReactNode;
}> = ({ total, children }) => {
  return (
    <DistributionBarContext.Provider value={total}>
      {children}
    </DistributionBarContext.Provider>
  );
};

export const useDistributionBarContext = () => {
  const context = useContext(DistributionBarContext);
  if (!context) {
    throw new Error(
      'useDistributionBarContext must be used within a DistributionBarProvider'
    );
  }
  return context;
};
