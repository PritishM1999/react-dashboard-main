import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await fetch("https://api.shop.urips.co.in/api/admin/login"
      const res = await fetch("https://api.shopnmac.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const mylogins = await res.json();

      if (
        res.status === 200 &&
        mylogins.message === "User logged in successfully."
      ) {
        setError("");
        localStorage.setItem(
          "user",
          JSON.stringify({ token: mylogins._token, user: mylogins.data })
          // JSON.stringify(mylogins)
        );
        navigate("dashboard");
      } else if (res.status === 401) {
        setError("Something went's wrong. Please try again later.");
      } else {
        setError("An unknown error occurred. Please try again later.");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section>
      <div className="container-side-space m-login">
        <div className="signup-form ptb-5">
          <div className="heading text-center pb-4">
            <h3 className="border-0">Log In</h3>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 m-auto bg-gary">
            <div className="form-layer-bg">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control-login"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control-login"
                    id="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="btn btn-theme"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>

              <p className="login-text pt-1">
                <Link className="ancher-text" to="/forget-password">
                  Forget Password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// // import { login } from "../../redux/authSlice";
// // import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export default function LoginForm() {
//   // const dispatch = useDispatch();
//   // // const navigation = useNavigate();
//   // const loading = useSelector((state) => state.auth.loading);
//   // const error = useSelector((state) => state.auth.error);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // dispatch(login({ email, password }));
//   };

//   return (
//     <section>
//       <div className="container-side-space m-login">
//         <div className="signup-form ptb-5 ">
//           <div className="heading text-center pb-4">
//             <h3 className="border-0">Log In </h3>
//           </div>
//           <div className="col-lg-6 col-md-8 col-sm-12 m-auto bg-gary">
//             <div className="form-layer-bg">
//               {/* {error && (
//                 <div className="alert alert-danger" role="alert">
//                   Error occurred. Please check your details.
//                 </div>
//               )} */}
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="email">Email :</label>
//                   <input
//                     type="email"
//                     className="form-control-login"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="pwd">Password :</label>
//                   <input
//                     type="password"
//                     className="form-control-login"
//                     id="pwd"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>

//                 <div className="text-center pt-2">
//                   <button
//                     type="submit"
//                     className="btn btn-theme"
//                     // disabled={loading}
//                   >
//                     {/* {loading ? "Logging in..." : "Login"} */}
//                   </button>
//                 </div>
//               </form>

//               {/* <p className="login-text pt-3">
//                 You Don't Have An Account?
//                 <Link className="ancher-text" to="/Signup">
//                   Register
//                 </Link>
//               </p> */}
//               <p className="login-text pt-1">
//                 <Link className="ancher-text" to="/forget-password">
//                   Forget Password?
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { TextField, Button } from "@material-ui/core";
// import { loginSuccess } from "../../features/auth/AuthSlice";

// import Avatar from "@mui/material/Avatar";
// import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         "https://api.shop.urips.co.in/api/admin/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       if (response.ok) {
//         const user = { email, password };
//         dispatch(loginSuccess(user));
//         alert("Login successful"); // Popup for successful login
//       } else {
//         alert("Login failed"); // Popup for failed login
//       }
//     } catch (error) {
//       alert("An error occurred while logging in");
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can handle form submission here if needed
//     console.log({
//       email,
//       password,
//     });
//     handleLogin(); // Simulating login on form submission
//   };

//   const defaultTheme = createTheme();
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit} // Handle form submission on submit event
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email} // Controlled component: provide value prop
//               onChange={(e) => setEmail(e.target.value)} // Controlled component: provide onChange handler
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password} // Controlled component: provide value prop
//               onChange={(e) => setPassword(e.target.value)} // Controlled component: provide onChange handler
//             />
//             <Grid container>
//               <Grid
//                 item
//                 xs
//                 style={{ marginTop: "1.4rem", marginLeft: "0.5rem" }}
//               >
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//               </Grid>
//               <Grid item style={{ marginTop: "2rem" }}>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               style={{ marginTop: "2rem" }}
//             >
//               Sign In
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LoginForm;

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // You can call the login API function here, and if successful, dispatch the loginSuccess action
//     // For simplicity, we'll just simulate a successful login
//     const user = { email, name: "John Doe" };
//     dispatch(loginSuccess(user));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   const defaultTheme = createTheme();
//   return (
//     <div>
//       <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               noValidate
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//           <Typography variant="body2" color="text.secondary" align="center">
//             {"Copyright © "}
//             <Link color="inherit" href="https://mui.com/">
//               Your Website
//             </Link>{" "}
//             {new Date().getFullYear()}
//             {"."}
//           </Typography>
//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default LoginForm;
