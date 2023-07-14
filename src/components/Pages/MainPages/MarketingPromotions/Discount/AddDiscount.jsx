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

const AddPeriodicDiscount = () => {
  const [brandValue, setShippingValue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const shippingOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "pending", label: "Pending Order" },
    { value: "confirm", label: "Ready for Collection" },
    { value: "collected", label: "Collected" },
    { value: "pickedup", label: "Shipped" },
    { value: "delivered", label: "Delivered Orders" },
  ];

  return (
    <div className="add-products-main">
      <section className="filter-section">
        <div className="filter-head-products">
          <Typography variant="h1">Add Periodic Discount</Typography>
        </div>
        <div className="filter-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InputLabel>Product :</InputLabel>
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
              <InputLabel htmlFor="fromDate">From Date :</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="fromDate"
                  type="date"
                  className="task-date-input"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="toDate">To Date :</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="toDate"
                  type="date"
                  className="task-date-input"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="">Discount (%) :</InputLabel>
              <FormControl fullWidth>
                <TextField placeholder="" type="number" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
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

export default AddPeriodicDiscount;
