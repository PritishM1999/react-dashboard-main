// // AuthAPI.js (Assuming you use Axios for API calls)
// import axios from 'axios';

// // Replace API_BASE_URL with your actual API base URL
// const API_BASE_URL = 'https://api.shop.urips.co.in/api/admin';

// export const loginAPI = async (email, password) => {
//   try {
//     // Replace 'login' with your login API endpoint
//     const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// export const forgotPasswordAPI = async (email) => {
//   try {
//     // Replace 'forgot-password' with your forgot password API endpoint
//     const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
