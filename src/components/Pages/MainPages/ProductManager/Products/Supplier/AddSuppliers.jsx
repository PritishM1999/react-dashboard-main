import React from "react";

import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Autocomplete,
  FormControl,
} from "@mui/material";
import "./AddSuppliers.css";
import countries from "../../../Countries/Countries";

const AddSuppliers = () => {


  return (
    <>
      <div className="card-flow">
        <div className="card-header">
          <h3 className="card-title">Add Supplier</h3>
        </div>
        <div className="Add-Suppliers-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Name :</InputLabel>
                <TextField placeholder="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/*  */}
              <div className="input-field">
                <InputLabel>Email :</InputLabel>
                <TextField placeholder="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/*  */}
              <div className="input-field">
                <InputLabel>Phone :</InputLabel>
                <TextField placeholder="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/*  */}
              <div className="input-field">
                <InputLabel>Address :</InputLabel>
                <TextField placeholder="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Country :</InputLabel>
                <FormControl fullWidth>
                  <Autocomplete
                    name="select-country"
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="All Countries" />
                    )}
                  />
                </FormControl>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* Submit button */}
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

export default AddSuppliers;
