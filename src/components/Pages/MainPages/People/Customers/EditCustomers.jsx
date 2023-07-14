import React from "react";
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import TextArea from "antd/es/input/TextArea";

const EditCustomers = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Edit Customer</h3>
      </div>
      <div className="card-body">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>First Name:</InputLabel>
              <TextField placeholder="First Name" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Middle Name:</InputLabel>
              <TextField placeholder="Middle Name" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Last Name:</InputLabel>
              <TextField placeholder="Last Name" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Cell Phone:</InputLabel>
              <TextField placeholder="Cell Phone" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Work Phone:</InputLabel>
              <TextField placeholder="Work Phone" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Home Phone:</InputLabel>
              <TextField placeholder="Home Phone" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Email:</InputLabel>
              <TextField placeholder="Email" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Date of Birth:</InputLabel>
              <TextField type="date" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Gender:</InputLabel>
              <FormControl>
                <Select>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="input-field">
              <InputLabel>Address Line 1:</InputLabel>
              <TextArea placeholder="Address Line 1" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="input-field">
              <InputLabel>Address Line 2:</InputLabel>
              <TextArea placeholder="Address Line 2" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>City:</InputLabel>
              <TextField placeholder="City" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>Postal Code:</InputLabel>
              <TextField placeholder="Postal Code" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="input-field">
              <InputLabel>State:</InputLabel>
              <TextField placeholder="State" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="input-field">
              <InputLabel>Country:</InputLabel>
              <TextField placeholder="Country" />
            </div>
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
        </Grid>
      </div>
    </div>
  );
};

export default EditCustomers;
