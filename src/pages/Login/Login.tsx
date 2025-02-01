import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { GoogleOAuthButton } from '@/components/GoogleOAuthButton';
import { Typography } from '@/components/custom/Typography';
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
        <Typography variant="h3">Welcome to Opulus</Typography>
        <Typography variant="p2">
          Select one of the options below to sign in.
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <GoogleOAuthButton />
          <div className={styles.separatorContainer}>
            <Separator className={styles.separator} />
            <Typography variant="p3">or</Typography>
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
        <Typography variant="p2">Don&apos;t have an account yet?</Typography>
        <Button
          variant="link"
          className={styles.footerButton}
          onClick={handleNavigateToSignup}
        >
          <Typography variant="l2">Sign up</Typography>
        </Button>
      </div>
    </div>
  );
};
