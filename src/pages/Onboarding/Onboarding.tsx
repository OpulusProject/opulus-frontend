import { useState } from 'react';

import { PersonalDetails } from '@/pages/Onboarding/Steps/PersonalDetails';

import styles from './Onboarding.module.scss';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.onboardingContainer}>
      <PersonalDetails step={step} setStep={setStep} />
    </div>
  );
};
