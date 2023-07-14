import React from "react";
import {
  Button,
  InputLabel,
  Grid,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

const AddPickupPoint = () => {
  return (
    <div className="add-products-main">
      <section className="filter-section">
        <div className="filter-head-products">
          <Typography variant="h1">Add New Pickup Point Information</Typography>
        </div>
        <div className="filter-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="">Name :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="">Location :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="">Phone :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="">Pick-up Point Manager :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div
                className="add-wishlist-submit-btn"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button className="submit-btn" variant="contained">
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default AddPickupPoint;
