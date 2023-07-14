import React, { useRef } from "react";
import {
  Button,
  Grid,
  TableCell,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./OrderDetails.css";
import ProductImage from "../../../../assets/products/sample-product-bone.png";
import CompanyLogo from "../../../../assets/shopnmac-logo.png";

import { useReactToPrint } from "react-to-print";
import InvoicePreview from "./InvoicePreview/InvoincePreview";

const ViewInvoiceDetails = () => {
  const PrintInv = useRef();

  const generatePrint = useReactToPrint({
    content: () => PrintInv.current,
    documentTitle: "INVOICE",
    onAfterPrint: () => "Invoice generated",
  });

  return (
    <div className="order-details-main-container">
      <div className="card-header">
        <h4 className="card-title">Invoice</h4>
        {/* Buttons */}
        <div className="tabs-butons">
          <Link to="/testDashboard/Admin/view-order-details">
            <Button variant="contained">Details</Button>
          </Link>
          <Button variant="contained">Invoice</Button>
          <Link to="/testDashboard/Admin/view-and-update-status">
            <Button variant="contained">Status</Button>
          </Link>
          {/* <Button variant="contained">Notes</Button> */}
        </div>
        {/* Buttons End*/}
      </div>
      <br />
      <div className="filter-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className="company-logo">
              <img src={CompanyLogo} alt="MainLogo" />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="view-payment-details">
              <p>
                Northshore Medical & Aesthetics Center, P.O. Box HM1839,
                Hamilton HMGX, Bermuda, info@nmac.bm, +1(441)293-5476,
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>Invoice Date : Jul 01-2023</p>
            <p>Terms : Due on Receipt</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <br />
            <div className="view-payment-details">
              <h5>Bill to: </h5>
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
            <br />
            <div className="view-payment-details">
              <h5>Ship to: </h5>
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
            <br />
            <p>Invoice: INV-25398090</p>
            <p>Order No.: SNA97231688188939</p>
          </Grid>
          <div>
            <br /> <br />
          </div>
        </Grid>
        <br />
        <div className="orders-container2">
          <div className="order-entries">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="apply-border">Photo</TableCell>
                    <TableCell className="apply-border">Product</TableCell>
                    <TableCell className="apply-border">Category</TableCell>
                    <TableCell className="apply-border">Brand</TableCell>
                    <TableCell className="apply-border">Price</TableCell>
                    <TableCell className="apply-border">Qty</TableCell>
                    <TableCell className="apply-border">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="apply-border">
                      <div className="blog-img">
                        <img src={ProductImage} alt="ProductImage" />
                      </div>
                    </TableCell>
                    <TableCell className="apply-border">Test Product</TableCell>
                    <TableCell className="apply-border">
                      Health & Wellness
                    </TableCell>
                    <TableCell className="apply-border">
                      Advance Naturals
                    </TableCell>
                    <TableCell className="apply-border">$15</TableCell>
                    <TableCell className="apply-border">1</TableCell>
                    <TableCell className="apply-border">$15</TableCell>
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
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Sub Total:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $15
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Shipping:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $0
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Coupon:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $0
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Total:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $15
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      {/* Submit button */}
      <div className="button-div-invoice">
        <div
          className="add-product-save-btn2"
          style={{ padding: "1rem" }}
          variant="contained"
          onClick={generatePrint}
        >
          Print
        </div>
      </div>
      <div ref={PrintInv} className="invoice-print-preview">
        <InvoicePreview />
      </div>
    </div>
  );
};

export default ViewInvoiceDetails;
