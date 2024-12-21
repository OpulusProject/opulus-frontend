import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
import { useLogin } from '@/hooks/auth/useLogin';
import { ROUTES } from '@/pages/routes';

import styles from './Login.module.scss';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Login: React.FC = () => {
  const { mutate: login, isPending } = useLogin();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleLogin = (values: z.infer<typeof formSchema>) => {
    login(values, {
      onSuccess: () => {
        navigate(ROUTES.HOME);
      },
    });
  };

  const handleNavigateToSignup = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <div className={styles.loginContainer}>
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
          <Button className="w-full gap-2">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>
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
              Icon={Mail}
              iconPlacement="left"
              iconSize={16}
              disabled={isPending}
            >
              {isPending ? 'Signing in...' : 'Sign in with email'}
            </Button>
          </form>
        </div>
      </Form>
      <div className={styles.footer}>
        <Typography variant="small-medium-400" className={styles.caption}>
          Don&apos;t have an account yet?
        </Typography>
        <Button
          variant="link"
          className={styles.footerButton}
          onClick={handleNavigateToSignup}
        >
          <Typography variant="small-medium-400" className={styles.text}>
            Sign up
          </Typography>
        </Button>
      </div>
    </div>
  );
};
