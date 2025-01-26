import { useMutation } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/user';

interface CreateUserRequest {
  email: string;
  password: string;
}

const createUser = async (request: CreateUserRequest) => {
  await client.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (request: CreateUserRequest) => createUser(request),
  });
};
