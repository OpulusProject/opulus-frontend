import { useMutation } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/plaid/link-token';

interface createLinkTokenRequest {
  userID: string;
}

const createLinkToken = async (request: createLinkTokenRequest) => {
  return await client.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useLinkToken = () => {
  return useMutation({
    mutationFn: (request: createLinkTokenRequest) => createLinkToken(request),
    retry: false,
  });
};
