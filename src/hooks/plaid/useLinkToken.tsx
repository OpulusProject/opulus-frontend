import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { client } from '@/hooks/client';

const API_URL = '/plaid/link-token';

const linkTokenSchema = z.object({
  linkToken: z.string(),
});

const createLinkToken = async () => {
  const response = await client.post(
    API_URL,
    {},
    {
      withCredentials: true,
    }
  );
  return linkTokenSchema.parse(response.data);
};

export const useLinkToken = () => {
  return useQuery({
    queryKey: ['linkToken'],
    queryFn: () => createLinkToken(),
    retry: 3,
  });
};
