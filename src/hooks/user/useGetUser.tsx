import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { client } from '@/hooks/client';

const API_URL = '/user';

const userSchema = z.object({
  id: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const getUser = async () => {
  const response = await client.get(API_URL, { withCredentials: true });
  return userSchema.parse(response.data);
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => getUser(),
    retry: false,
  });
};
