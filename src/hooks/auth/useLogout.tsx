import { useMutation } from '@tanstack/react-query';

const deleteCookie = (name: string) => {
  const date = new Date();
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
};

const deleteSession = () => {
  deleteCookie('accessToken');
  deleteCookie('refreshToken');
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => Promise.resolve(deleteSession()),
  });
};
