import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cabinet.stage.kisc.kz', // Замените на базовый URL вашего API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ваш токен доступа
const getToken = async () => {
  // Возвращаем ваш токен напрямую
  return 'eyJ4NXQjUzI1NiI6Img3RjhRR0ZnY1d3YngzaUJfQVIzT2V0Snczbmg2S2h5SW9RTWxtdXRVeVEiLCJraWQiOiJucGtfb2F1dGhfc3RhZ2UiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwNjAyMTU1MDEyOTkiLCJhdWQiOiI5YTA4ZTc5MS0wZmFhLTQ4ODEtOTI3Zi0xMGY0MjA2ZjJlOGQiLCJuYmYiOjE3MjAzNzc1MzMsImF1dGhvcml6YXRpb25faWQiOiI2NDk0NmRiNi1iMzc1LTQwZTQtYjEyNC1jNzczYWNiNjQ3MjYiLCJzY29wZSI6WyJvcGVuaWQiLCJhY2NvdW50X3RyYW5zYWN0aW9ucy40NmQ4YTk2NC1mMmMzLTQ1YmUtYmExYS1kNTJjYmU0ZWQxMGQiLCJhY2NvdW50cy40NmQ4YTk2NC1mMmMzLTQ1YmUtYmExYS1kNTJjYmU0ZWQxMGQiLCJhY2NvdW50X2JhbGFuY2UuNDZkOGE5NjQtZjJjMy00NWJlLWJhMWEtZDUyY2JlNGVkMTBkIl0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnZS5raXNjLmt6IiwiZXhwIjoxNzIyOTY5NTMzLCJpYXQiOjE3MjAzNzc1MzMsInNpZCI6ImU1ODM5N2EzLTk2MjgtNDgxYy1iMjMxLTZkMGQ5MjNjOTU4YiJ9.dWhAOTUXz1VEHh9vxJJouB4oRCrZW5VBng_ickkVkNyal7-xJStd4rbdmmHFrqa4yfOBjAzvKW4blbby3X-u5L_f-rhzVGB5at2WOTfwBHJ9T5_vbYy95fjAO0n_9rcjYAoIwHyiHkXL0AYuLlkRkd8-7V4jUvJiJzh4QNIGuYDSEiletaGlOIz_mUM1h5G4Hl1_3DYWB8pKt-59ld1kO6AfCn_bbphKOa65w0kff0-BQqRuq9i5hxpWKmdU4gKkdCPtnM8jYNOV4cfJ_IACLQpxaHE1A-U337tjuux5Z97hP_KicWedYY3TWdpgpI5Ymin_EcBsHMYc-j73FggzCA';
};

// Добавьте интерсептор для авторизации
api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const getUserAccounts = async () => {
  try {
    const response = await api.get('/v1/accounts?pageNumber=1&pageSize=10');
    return response.data;
  } catch (error) {
    console.error('Error fetching user accounts:', error);
    throw error;
  }
};

export const getAccountBalance = async accountId => {
  try {
    const response = await api.get(`/v1/accounts/${accountId}/balances`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account balance:', error);
    throw error;
  }
};

export const getAccountTransactions = async accountId => {
  try {
    const response = await api.get(`/v1/accounts/${accountId}/transactions?pageNumber=1&pageSize=10`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account transactions:', error);
    throw error;
  }
};

export default api;
