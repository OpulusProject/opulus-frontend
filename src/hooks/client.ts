import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

export const client = axios.create({
  baseURL: 'http://localhost:8080/api',
});

const refreshAuth = async () => {
  try {
    await client.post('/sessions/refresh', { withCredentials: true });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(client, refreshAuth, {
  statusCodes: [403],
  pauseInstanceWhileRefreshing: true,
});
