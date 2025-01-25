import { useQuery } from '@tanstack/react-query';

import { client } from '@/hooks/client';

const API_URL = '/item';

type GetItemFilters = {
  userId?: string;
  institutionId?: string;
};

const getItem = async (filters: GetItemFilters) => {
  const queryParams = new URLSearchParams(
    Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {} as Record<string, string>
    )
  ).toString();
  const url = `${API_URL}?${queryParams}`;
  console.log(url);
  return await client.get(url, {
    withCredentials: true,
  });
};

export const useGetItem = (filters: GetItemFilters) => {
  return useQuery({
    queryKey: ['items', filters],
    queryFn: () => getItem(filters),
    retry: 3,
  });
};
