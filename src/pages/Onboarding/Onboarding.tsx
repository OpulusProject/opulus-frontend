import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  MultiStepForm,
  MultiStepFormStep,
  createStepSchema,
} from '@/components/ui/multi-step-form';
import { LinkInstitution } from '@/pages/Onboarding/LinkInstitution';
import { PersonalDetails } from '@/pages/Onboarding/PersonalDetails';

import styles from './Onboarding.module.scss';

const FormSchema = createStepSchema({
  personalDetails: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export const Onboarding: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      personalDetails: {
        firstName: '',
        lastName: '',
      },
    },
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <MultiStepForm
      schema={FormSchema}
      form={form}
      onSubmit={onSubmit}
      className={styles.onboardingContainer}
    >
      <MultiStepFormStep name="personalDetails">
        <PersonalDetails />
      </MultiStepFormStep>
      <MultiStepFormStep name="linkInstitution">
        <LinkInstitution />
      </MultiStepFormStep>
    </MultiStepForm>
  );
};
