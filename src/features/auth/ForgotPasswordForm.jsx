// ForgotPasswordForm.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // You can call the forgot password API function here
    console.log(`Request password reset for email: ${email}`);
  };

  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleForgotPassword}>
        Reset Password
      </Button>
    </div>
  );
};

export default ForgotPasswordForm;
