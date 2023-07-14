import React from "react";
import { TextField, Button, InputLabel, Grid } from "@mui/material";

const AddManufacturer = () => {
  return (
    <>
      <div className="card-flow">
        <div className="card-header">
          <h3 className="card-title">Add Manufacturer</h3>
        </div>
        <div className="add-Brand-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Name:</InputLabel>
                <TextField placeholder="Brand Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Code:</InputLabel>
                <TextField placeholder="Brand Name" />
              </div>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ marginTop: "20px" }}>
            <Grid item>
              <Button
                className="save-btn"
                variant="contained"
                style={{ background: "#7356b2" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AddManufacturer;
