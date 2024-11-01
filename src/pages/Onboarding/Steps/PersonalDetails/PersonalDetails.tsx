import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { StepProps } from '@/pages/Onboarding/Steps/StepProps';

import styles from './PersonalDetails.module.scss';

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export const PersonalDetails: React.FC<StepProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <>
      <div className={styles.header}>
        <Typography variant="extra-large-600" className={styles.text}>
          People call us “Oh-pull-us”
        </Typography>
        <Typography variant="small-medium-400" className={styles.caption}>
          What should we call you?
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Doe" {...field} />
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
            >
              Continue
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
};
