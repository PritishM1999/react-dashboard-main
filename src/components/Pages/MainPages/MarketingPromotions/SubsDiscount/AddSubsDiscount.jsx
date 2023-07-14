import React, { useState } from "react";
import {
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

// import "./WishList.css";

const AddSubscriptionDiscount = () => {
  const [brandValue, setShippingValue] = useState("");
  const [supplierValue, setPaymentValue] = useState("");

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
    { value: "1 month", label: "1 month" },
    { value: "3 months", label: "3 months" },
    { value: "6 months", label: "6 months" },
  ];

  return (
    <>
      <div className="add-products-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">
              Add Subscription Discount Information{" "}
            </Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel>Type :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="shipping">All</InputLabel>
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
                <InputLabel htmlFor="">Months :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Please Select</InputLabel>
                  <Select
                    id="supplier"
                    name="supplier"
                    value={supplierValue}
                    onChange={(e) => setPaymentValue(e.target.value)}
                  >
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
                <InputLabel htmlFor="">Product :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="">Select Product</InputLabel>
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
                <InputLabel htmlFor="">Discount (%) :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="" type="number" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                {/* Submit button */}
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
    </>
  );
};

export default AddSubscriptionDiscount;
