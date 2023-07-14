import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  Autocomplete,
  Typography,
  FormControl,
} from "@mui/material";

import TextArea from "antd/es/input/TextArea";
import "./Account.css";
import countries from "../../../Countries/Countries";

const Profile = () => {
  const [supplierValue, setPaymentValue] = useState("");

  const handleFileUploadGallary = (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
      };
      uploadedImages.push(imageInfo);
    }

    console.log(uploadedImages);
  };

  return (
    <>
      <div className="add-profiles-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Profile</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Name :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Email :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Email" type="email" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Employee ID :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee ID" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Phone :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Phone  Number" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Select Gender :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Select Gender</InputLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
                    <MenuItem key="Male" value="male">
                      Male
                    </MenuItem>
                    <MenuItem key="Female" value="female">
                      Female
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">Date of Birth:</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date"> Address :</InputLabel>
                <FormControl fullWidth>
                  <TextArea placeholder="Address" id="date" type="date" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="country">Country :</InputLabel>
                <FormControl fullWidth>
                  <Autocomplete
                    name="country"
                    className="select-persons-country"
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
              </Grid>
              <Grid item xs={12}>
                <div className="input-field">
                  <InputLabel>Photo :</InputLabel>
                  <input type="file" onChange={handleFileUploadGallary} />
                </div>
              </Grid>
            </Grid>
          </div>
          {/* Submit button */}
          <div className="add-product-save-btn" style={{ padding: "1rem" }}>
            <Button className="save-btn" variant="contained">
              Save
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
