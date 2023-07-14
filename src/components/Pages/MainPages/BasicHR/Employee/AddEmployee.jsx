import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  Autocomplete,
  FormControlLabel,
  Radio,
  Typography,
  FormControl,
} from "@mui/material";

import TextArea from "antd/es/input/TextArea";

import "./Employees.css";

import countries from "../../../MainPages/Countries/Countries";

const AddEmployees = () => {
  const [brandValue, setShippingValue] = useState("");
  const [supplierValue, setPaymentValue] = useState("");
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");

  const handleFileUploadGallary = (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Perform the upload logic here
      // You can use the 'file' object to upload the individual image

      // For example, you can create an object with image information and add it to the 'uploadedImages' array
      const imageInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
      };
      uploadedImages.push(imageInfo);
    }

    console.log(uploadedImages);
  };

  const handleRadioChange1 = (event) => {
    setRadioValue1(event.target.value);
  };

  const handleRadioChange2 = (event) => {
    setRadioValue2(event.target.value);
  };

  // Define dynamic menu items
  const shippingOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "pending", label: "Pending Order" },
    { value: "confirm", label: "Ready for Collection" },
    { value: "collected", label: "Collected" },
    { value: "pickedup", label: "Shipped" },
    { value: "delivered", label: "Delivered Orders" },
  ];

  const supplierOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "Paid", label: "Paid" },
    { value: "Pending", label: "Unpaid" },
  ];

  return (
    <>
      <div className="add-products-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Add Staff</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Employee ID :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee ID" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Employee Name :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Employee Email :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Email" type="email" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="input-field">
                  <InputLabel>Profile Picture :</InputLabel>
                  <input type="file" onChange={handleFileUploadGallary} />
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Password :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Password" type="password" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel>Designation :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="shipping">Select Designation</InputLabel>
                  <Select
                    id="shipping"
                    name="shipping"
                    value={brandValue}
                    onChange={(e) => setShippingValue(e.target.value)}
                  >
                    {shippingOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Department :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Select Department</InputLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
                    {/* Placeholder */}

                    {/* Dynamic menu items */}
                    {supplierOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="select-country">Country :</InputLabel>
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
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Mobile :</InputLabel>
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
                <InputLabel htmlFor="date">Joining Date :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">Date of Birth :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">User Role :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Select Role</InputLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
                    {/* Placeholder */}

                    {/* Dynamic menu items */}
                    {supplierOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date"> Address :</InputLabel>
                <FormControl fullWidth>
                  <TextArea
                    placeholder="Address"
                    id="date"
                    type="date"
                    style={{
                      padding: "4px 11px 0px",
                      fontSize: "16px",
                      borderRadius: "4px",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date"> About :</InputLabel>
                <FormControl fullWidth>
                  <TextArea
                    placeholder="About"
                    id="date"
                    style={{
                      padding: "4px 11px 0px",
                      fontSize: "16px",
                      borderRadius: "4px",
                    }}
                  />
                </FormControl>
              </Grid>
              <div className="partition"></div>
              <Grid item xs={12} md={6}>
                <InputLabel>Login Allowed ? :</InputLabel>
                <FormControlLabel
                  control={
                    <Radio
                      checked={radioValue1 === "yes"}
                      onChange={handleRadioChange1}
                      value="yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={radioValue1 === "no"}
                      onChange={handleRadioChange1}
                      value="no"
                    />
                  }
                  label="No"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel>Receive email notifications ? :</InputLabel>
                <FormControlLabel
                  control={
                    <Radio
                      checked={radioValue2 === "yes"}
                      onChange={handleRadioChange2}
                      value="yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={radioValue2 === "no"}
                      onChange={handleRadioChange2}
                      value="no"
                    />
                  }
                  label="No"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Hourly Rate :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Hourly Rate" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Skills :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Skills" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">Probation End Date :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">
                  Notice Period Start Date :
                </InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">Notice Period End Date :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Select date" id="date" type="date" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="date">Employment Type :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="emptype">Employment Type</InputLabel>
                  <Select
                    id=""
                    name="emptype"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
                    <MenuItem key="Full Time" value="Full Time">
                      Full Time
                    </MenuItem>
                    <MenuItem key="Part Time" value="Part Time">
                      Part Time
                    </MenuItem>
                    <MenuItem key="On Contract" value="On Contract">
                      On Contract
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Maritial Status :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Maritial Status</InputLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
                    <MenuItem key="Male" value="male">
                      Married
                    </MenuItem>
                    <MenuItem key="Female" value="female">
                      Unmarried
                    </MenuItem>
                  </Select>
                </FormControl>
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

export default AddEmployees;
