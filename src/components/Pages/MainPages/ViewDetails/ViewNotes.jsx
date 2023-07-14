import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  // FormGroup,
  Autocomplete,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";

import TextArea from "antd/es/input/TextArea";
import "./OrderDetails.css";
import countries from "../Countries/Countries";

import { Link } from "react-router-dom";

const ViewOrderDetails = () => {
  const [brandValue, setShippingValue] = useState("");
  const [supplierValue, setPaymentValue] = useState("");
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");

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
      <div className="order-details-main-container">
        <div className="card-header">
          <h3 className="card-title">Blogs</h3>
          {/* Buttons */}
          <div className="tabs-butons">
            <Button variant="contained">Details</Button>
            <Link to="">
              <Button variant="contained">Invoice</Button>
            </Link>
            <Button variant="contained">Status</Button>
            <Button variant="contained">Notes</Button>
          </div>
          {/* Buttons End*/}
        </div>
        <br />
        <div className="filter-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Fulfilment status :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Fulfilment status" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Payment status:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Payment status" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel>Payment Method :</InputLabel>
              <FormControl fullWidth>
                <InputLabel htmlFor="shipping">
                  Select Payment Method
                </InputLabel>
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
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Shipping Method :</InputLabel>
              <FormControl fullWidth>
                <InputLabel htmlFor="">Select Shipping Method</InputLabel>
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
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Mobile :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Enter Phone  Number" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
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

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Joining Date:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Date of Birth:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date"> Address :</InputLabel>
              <FormControl fullWidth>
                <TextArea placeholder="Address" id="date" type="date" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date"> About :</InputLabel>
              <FormControl fullWidth>
                <TextArea placeholder="About" id="date" />
              </FormControl>
            </Grid>
            <div className="partition"></div>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
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

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Hourly Rate :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Skills :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Probation End Date:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">
                Probation Period Start Date:
              </InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Notice Period Start Date:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Notice Period End Date:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Employment Type:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="date">Marital Status:</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="Select date" id="date" type="date" />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputLabel htmlFor="">Maritial Status :</InputLabel>
              <FormControl fullWidth>
                <InputLabel htmlFor="">Select an Option</InputLabel>
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
      </div>
      {/* </div> */}
    </>
  );
};

export default ViewOrderDetails;
