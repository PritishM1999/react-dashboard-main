// // AuthRoutes.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const AuthRoutes = ({ element, path }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   if (isAuthenticated) {
//     return <Route path={path} element={element} />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default AuthRoutes;
