import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Typography } from '@/components/custom/Typography/Typography';
import { GoogleOAuthButton } from '@/components/src/GoogleOAuthButton/GoogleOAuthButton';
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
import { useCreateUser } from '@/hooks/user/useCreateUser';
import { ROUTES } from '@/pages/routes';

import styles from './Signup.module.scss';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Signup: React.FC = () => {
  const { mutate: createUser, isPending } = useCreateUser();
  const { mutate: login } = useLogin();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleCreateUser = (values: z.infer<typeof formSchema>) => {
    createUser(values, {
      onSuccess: () => {
        login(values, {
          onSuccess: () => {
            navigate(ROUTES.ONBOARDING);
          },
        });
      },
    });
  };

  const handleNavigateToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.header}>
        <Typography variant="h3">Get started with Opulus</Typography>
        <Typography variant="p2">
          Select one of the options below to sign up.
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
          <form
            onSubmit={form.handleSubmit(handleCreateUser)}
            className="space-y-4"
          >
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
        <Typography variant="p2">Already have an account?</Typography>
        <Button
          variant="link"
          className={styles.footerButton}
          onClick={handleNavigateToLogin}
        >
          <Typography variant="l2">Sign in</Typography>
        </Button>
      </div>
    </div>
  );
};
