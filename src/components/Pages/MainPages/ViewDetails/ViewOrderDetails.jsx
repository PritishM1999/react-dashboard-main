import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  FormControl,
  TableCell,
  //   Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";

import "./OrderDetails.css";
import ProductImage from "../../../../assets/products/sample-product-bone.png";
import PrintIcon from "@mui/icons-material/Print";

import { Link } from "react-router-dom";

const ViewOrderDetails = () => {
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
    { value: "all", label: "All" },
    { value: "Paid", label: "Paid" },
    { value: "Pending", label: "Unpaid" },
  ];

  return (
    <>
      <div className="order-details-main-container">
        <div className="card-header">
          <h3 className="card-title">Order Details</h3>
          {/* Buttons */}
          <div className="tabs-butons">
            <Button variant="contained">Details</Button>
            <Link to="/admin/Admin/view-invoice-details">
              <Button variant="contained">Invoice</Button>
            </Link>
            <Link to="/admin/Admin/view-and-update-status">
              <Button variant="contained">Status</Button>
            </Link>
            {/* <Button variant="contained">Notes</Button> */}
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

              <div className="view-payment-details">
                <br />
                <span>
                  <h6>Payment By: </h6> <p> Authorize.net</p>
                </span>
                <span>
                  <h6>Transaction ID: </h6> <p> 49684984</p>
                </span>
                <span>
                  <h6> Amount: </h6> <p> $ 15</p>
                </span>
                <span>
                  <h6>Date: </h6> <p> JUl 01, 2023</p>
                </span>
              </div>
            </Grid>
            <br /> <br />
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
                  {supplierOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="view-payment-details">
                <br />
                <span>
                  <h6>Tracking Code: </h6>
                  <p> </p>
                </span>
                <span>
                  <h6>Picked Up By: </h6>
                  <p> </p>
                </span>
                <span>
                  <h6> Expected Date: </h6>
                  <p> </p>
                </span>
              </div>
            </Grid>
            <div className="partition">
              <br /> <br />
            </div>
            <Grid item xs={12} md={4}>
              <br /> <br />
              <div className="view-payment-details2">
                <span>
                  <h6> Order </h6>
                  <p id="order-id"> SNA97231688188939</p>
                </span>
                <span>
                  <h6> Order status </h6>
                  <p id="test-orange"> Pending</p>
                </span>
                <span>
                  <h6> Order date </h6>
                  <p>Jul 01,2023 05:22 am</p>
                </span>
                <span>
                  <h6> Total amount </h6>
                  <p> $ 15</p>
                </span>
                <span>
                  <h6> Payment method </h6>
                  <p> Online</p>
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <br /> <br />
              <div className="view-payment-details">
                <h5>Billing: </h5>
                <span>
                  <p>Name: JYOTIRMOY SINHA</p>
                </span>
                <span>
                  <p>Email: jyotirmoysinha@gmail.com</p>
                </span>
                <span>
                  <p>Phone: 9999652812</p>
                </span>
                <span>
                  <p>
                    Address: DDA FLAT, POCKET 13, DWARKA PH 1, MANGLAPURI, PALAM
                    NEW DELHI, 110045 NEW DELHI, Bermuda
                  </p>
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <br /> <br />
              <div className="view-payment-details">
                <h5>Shipping: </h5>
                <span>
                  <p>Name: JYOTIRMOY SINHA</p>
                </span>
                <span>
                  <p>Email: jyotirmoysinha@gmail.com</p>
                </span>
                <span>
                  <p>Phone: 9999652812</p>
                </span>
                <span>
                  <p>
                    Address: DDA FLAT, POCKET 13, DWARKA PH 1, MANGLAPURI, PALAM
                    NEW DELHI, 110045 NEW DELHI, Bermuda
                  </p>
                </span>
              </div>
              <br /> <br />
            </Grid>
            <div className="partition"></div>
          </Grid>
          <br />
          <div className="orders-container2">
            <div className="order-entries">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Photo</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Brand</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Qty</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="blog-img">
                          <img src={ProductImage} alt="ProductImage" />
                        </div>
                      </TableCell>
                      <TableCell>Test Product</TableCell>
                      <TableCell>Health & Wellness</TableCell>
                      <TableCell>Advance Naturals</TableCell>
                      <TableCell>$15</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>$15</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <br />
            <div className="order-entries3">
              <TableContainer>
                <Table style={{ width: "100%" }}>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold", width: "50%" }}>
                        Sub Total:
                      </TableCell>
                      <TableCell style={{ width: "50%" }}>$15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold", width: "50%" }}>
                        Shipping:
                      </TableCell>
                      <TableCell style={{ width: "50%" }}>$0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold", width: "50%" }}>
                        Coupon:
                      </TableCell>
                      <TableCell style={{ width: "50%" }}>$0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold", width: "50%" }}>
                        Total:
                      </TableCell>
                      <TableCell style={{ width: "50%" }}>$15</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="add-product-save-btn" style={{ padding: "1rem" }}>
          <div
            className="print-btn-view-invoice"
            variant="contained"
            onClick={() => window.print()}
          >
            <PrintIcon />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ViewOrderDetails;
