// // AuthSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from "../../utils/api";

// // Create an async thunk to handle login
// export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
//   const response = await api.post("/login", { email, password });
//   // Assuming the server responds with a user object on successful login
//   const user = response.data;
//   return user;
// });

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logoutSuccess: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload;
//         state.loading = false;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message; // You can customize the error message based on your server response
//       });
//   },
// });

// export const { logoutSuccess } = authSlice.actions;

// export default authSlice.reducer;



// // authSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from "./";

// // Async thunk for user login
// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/login", {
//         email,
//         password,
//       });
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message);
//     }
//   }
// );

// // Async thunk for user registration
// export const register = createAsyncThunk(
//   "auth/register",
//   async (data, { rejectWithValue }) => {
//     try {
//       // console.log(data);
//       const response = await api.post("/signup", data);
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message);
//     }
//   }
// );

// // Auth slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: [],
//     isLoggedIn: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = [];
//       state.isLoggedIn = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.loading = false;
//         toast.success("Login successful!");
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//         toast.error("Login failed!");
//       })

//       // .addCase(register.pending, (state) => {
//       //   state.loading = true;
//       //   state.error = null;
//       // })
//       // .addCase(register.fulfilled, (state, action) => {
//       //   // state.loading = false;
//       //   // state.isLoggedIn = true;
//       //   // state.user = action.payload;
//       //   toast.success("Registered successful!");
//       // })
//       // .addCase(register.rejected, (state, action) => {
//       //   // state.loading = false;
//       //   // state.error = action.payload.message;
//       //   toast.error("Registered failed!");
//       // });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;


// // AuthSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logoutSuccess: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { loginSuccess, logoutSuccess } = authSlice.actions;

// export default authSlice.reducer;
