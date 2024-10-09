import axios from 'axios';

import { serverURL } from '@/services/apiConfig';

const API_URL = `${serverURL}/sessions`;

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (request: LoginRequest): Promise<void> => {
  try {
    const response = await axios.post<LoginResponse>(API_URL, request);

    document.cookie = `accessToken=${response.data.accessToken}; HttpOnly; Secure; SameSite=Strict`;
    document.cookie = `refreshToken=${response.data.refreshToken}; HttpOnly; Secure; SameSite=Strict`;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(JSON.stringify(error.response.data));
    }
    throw new Error('An unknown error occurred');
  }
};
