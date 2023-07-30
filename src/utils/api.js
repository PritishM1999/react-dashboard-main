// //api.js
// import axios from "axios";
// // import { getCookie } from "./cookieUtils";

// // const baseURL = process.env.REACT_APP_API_URL || "https://api.shop.urips.co.in/api/admin/";
// // console.log("API URL:", process.env.REACT_APP_API_URL);
// // console.log(baseURL);

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         Accept: "application/json",
//         // Add any other common headers here
//     },
// });

// // // Function to set the CSRF token
// // export const setCsrfToken = (token) => {
// //     if (token) {
// //         api.defaults.headers.common['X-CSRF-TOKEN'] = token;
// //     } else {
// //         delete api.defaults.headers.common['X-CSRF-TOKEN'];
// //     }
// // };

// // // Function to set the authentication token from cookie
// // export const setAuthTokenFromCookie = () => {
// //     const token = getCookie('auth_token');
// //     if (token) {
// //         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //     }
// // };

// export default api;
