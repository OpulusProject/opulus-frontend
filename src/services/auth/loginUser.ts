import axios from 'axios';

import { serverURL } from '@/services/apiConfig';

const API_URL = `${serverURL}/sessions`;

interface LoginRequest {
  email: string;
  password: string;
}

export const loginUser = async (request: LoginRequest): Promise<void> => {
  try {
    await axios.post(API_URL, request, {
      withCredentials: true,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(JSON.stringify(error.response.data));
    }
    throw new Error('An unknown error occurred');
  }
};
