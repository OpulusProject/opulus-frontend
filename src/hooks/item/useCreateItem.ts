import { useMutation } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/item';

interface createItemRequest {
  publicToken: string;
}

const createItem = async (request: createItemRequest) => {
  await client.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useCreateItem = () => {
  return useMutation({
    mutationFn: (request: createItemRequest) => createItem(request),
  });
};
