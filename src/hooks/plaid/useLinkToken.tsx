import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { client } from '@/hooks/client';

const API_URL = '/plaid/link-token';

const linkTokenSchema = z.object({
  linkToken: z.string(),
});

interface createLinkTokenRequest {
  userId: string;
}

const createLinkToken = async (request: createLinkTokenRequest) => {
  const response = await client.post(API_URL, request, {
    withCredentials: true,
  });
  return linkTokenSchema.parse(response.data);
};

export const useLinkToken = (userId: string) => {
  return useQuery({
    queryKey: ['linkToken', userId],
    queryFn: () => createLinkToken({ userId }),
    retry: 3,
    enabled: !!userId,
  });
};
