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
import { Separator } from '@/components/ui/separator';
import { useRegister } from '@/hooks/user/useRegister';

import styles from './Register.module.scss';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Signup: React.FC = () => {
  const { mutate: register, isPending } = useRegister();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleLogin = (values: z.infer<typeof formSchema>) => {
    register(values, {
      onSuccess: () => {
        console.log('User Created!');
      },
    });
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.header}>
        <Typography variant="extra-large-600" className={styles.text}>
          Get started with Opulus
        </Typography>
        <Typography variant="small-medium-400" className={styles.caption}>
          Select one of the options below to sign up.
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <Button className="w-full">Continue with Google</Button>
          <div className={styles.separatorContainer}>
            <Separator className={styles.separator} />
            <Typography variant="small" className={styles.caption}>
              or
            </Typography>
            <Separator className={styles.separator} />
          </div>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. name@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Password</FormLabel>
                  <FormControl>
                    <Input variant="masked" {...field} />
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
              disabled={isPending}
            >
              {isPending ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </div>
      </Form>
      <div className={styles.footer}>
        <Typography variant="small-medium-400" className={styles.caption}>
          Already have an account?
        </Typography>
        <Button variant="link" className={styles.footerButton}>
          <Typography variant="small-medium-400" className={styles.text}>
            Sign in
          </Typography>
        </Button>
      </div>
    </div>
  );
};
