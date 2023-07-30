// import api, { setCsrfToken, setAuthTokenFromCookie } from './api';
// import { setCookie } from '../utils/cookieUtils';

// // Function to perform login
// export const login = async (credentials) => {
//   try {
//     const apiUrl = process.env.REACT_APP_API_URL;
//     const response = await api.post(`${apiUrl}/login`, credentials);
//     const { token } = response.data;
//     setAuthTokenFromCookie();
//     // Save token in cookie
//     setCookie('auth_token', token);
//   } catch (error) {
//     console.error('Failed to login:', error);
//   }
// };

// // Function to perform logout
// export const logout = () => {
//   api.defaults.headers.common['Authorization'] = '';
//   // Clear token from cookie
//   setCookie('auth_token', '', { expires: -1 });
// };
