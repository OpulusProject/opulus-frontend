import { useQuery } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/plaid/link-token';

interface createLinkTokenRequest {
  userId: string;
}

const createLinkToken = async (request: createLinkTokenRequest) => {
  return await client.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useLinkToken = (userId: string) => {
  return useQuery({
    queryKey: ['linkToken', userId],
    queryFn: () => createLinkToken({ userId }),
    retry: false,
  });
};
