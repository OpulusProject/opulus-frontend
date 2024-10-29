import { useState } from 'react';

import { PersonalDetails } from '@/pages/Signup/Steps/PersonalDetails';

import styles from './Signup.module.scss';

export const Signup: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.signupContainer}>
      <PersonalDetails step={step} setStep={setStep} />
    </div>
  );
};
