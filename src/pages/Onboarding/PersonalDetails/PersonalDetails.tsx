import { ArrowRight } from 'lucide-react';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMultiStepFormContext } from '@/components/ui/multi-step-form';

import styles from './PersonalDetails.module.scss';

export const PersonalDetails: React.FC = () => {
  const { form, nextStep, isStepValid } = useMultiStepFormContext();

  return (
    <>
      <div className={styles.header}>
        <Typography variant='h3'>People call us “Oh-pull-us”</Typography>
        <Typography variant='p2' color="#71717A">
          What should we call you?
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
            <FormField
              control={form.control}
              name="personalDetails.firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">First name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalDetails.lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Smith" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="expandIcon"
              className="w-full"
              Icon={ArrowRight}
              iconPlacement="right"
              iconSize={16}
              onClick={nextStep}
              disabled={!isStepValid()}
            >
              Continue
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
};
