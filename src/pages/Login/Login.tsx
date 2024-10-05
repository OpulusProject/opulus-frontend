import { zodResolver } from '@hookform/resolvers/zod';
import { Gem, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import styles from './Login.module.scss';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.icon}>
        <Gem size={28} />
      </div>
      <div className={styles.header}>
        <Typography variant="extra-large-600" className={styles.text}>
          Welcome to Opulus
        </Typography>
        <Typography variant="small-medium-400" className={styles.caption}>
          Select one of the options below to sign in.
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <Button type="submit" className="w-full">
            Continue with Google
          </Button>
          <div className={styles.separatorContainer}>
            <Separator className={styles.separator} />
            <Typography variant="small" className={styles.caption}>
              or
            </Typography>
            <Separator className={styles.separator} />
          </div>
          <form
            onSubmit={() => {
              form.handleSubmit(onSubmit);
            }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="expandIcon"
              className="w-full"
              Icon={Mail}
              iconPlacement="left"
              iconSize={16}
            >
              Sign in with email
            </Button>
          </form>
        </div>
      </Form>
      <div className={styles.footer}>
        <Typography variant="small-medium-400" className={styles.caption}>
          Don't have an account yet?
        </Typography>
        <Button variant="link" className={styles.footerButton}>
          <Typography variant="small-medium-400" className={styles.text}>
            Sign up
          </Typography>
        </Button>
      </div>
    </div>
  );
};
