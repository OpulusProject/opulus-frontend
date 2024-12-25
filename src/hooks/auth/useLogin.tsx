import { useMutation } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/auth/login';

interface LoginRequest {
  email: string;
  password: string;
}

const createSession = async (request: LoginRequest) => {
  await client.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (request: LoginRequest) => createSession(request),
  });
};
