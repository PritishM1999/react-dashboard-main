import React from "react";
import {
  Button,
  InputLabel,
  Grid,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

const Prefixes = () => {
  return (
    <div className="add-products-main">
      <section className="filter-section">
        <div className="filter-head-products">
          <Typography variant="h1">Set Prefixes</Typography>
        </div>
        <div className="filter-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Subscription No :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="SBN" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Sales Order :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="SN" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Invoice :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="INV" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">POS :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="PO" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div
                className="add-wishlist-submit-btn"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button className="submit-btn" variant="contained">
                  Save & Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default Prefixes;
