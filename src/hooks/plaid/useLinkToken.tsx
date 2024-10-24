import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/plaid/link-token`;

interface createLinkTokenRequest {
  userID: string;
}

const createLinkToken = async (request: createLinkTokenRequest) => {
  return await axios.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useLinkToken = () => {
  return useMutation({
    mutationFn: (request: createLinkTokenRequest) => createLinkToken(request),
    retry: false,
  });
};
