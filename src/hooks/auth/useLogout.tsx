import { useMutation } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/sessions/invalidate';

const invalidateSession = async () => {
  const response = await client.post(API_URL, {}, { withCredentials: true });
  console.log(response);
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => invalidateSession(),
  });
};
