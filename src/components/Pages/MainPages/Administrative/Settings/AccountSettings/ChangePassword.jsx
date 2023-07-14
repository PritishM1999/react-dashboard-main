// import React, { useState } from "react";
import React from "react";

import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Typography,
  FormControl,
} from "@mui/material";

const ChangePassword = () => {
  return (
    <>
      <div className="add-profiles-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Change Password</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Password :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Password" type="password" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> New Password :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="New Password" type="password" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Change Password :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Change Password" type="password" />
                </FormControl>
              </Grid>
            </Grid>
          </div>
          {/* Submit button */}
          <div className="add-product-save-btn" style={{ padding: "1rem" }}>
            <Button className="save-btn" variant="contained">
              Change
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChangePassword;
