import React from "react";
import {
  Grid,
  TableCell,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";
import CompanyLogo from "../../../../../assets/shopnmac-logo.png";

const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="inv-slip-head">
        <h3 type="h1">I N V O I C E</h3>
      </div>
      <div className="filter-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <br />
            <div className="company-logo">
              <img src={CompanyLogo} alt="MainLogo" />
            </div>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <br />
            <div className="view-payment-details">
              <p>
                Northshore Medical & Aesthetics Center, P.O. Box HM1839,
                Hamilton HMGX, Bermuda, info@nmac.bm, +1(441)293-5476,
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <br /> <br />
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
            <br /> <br />
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
          <Grid item xs={12} md={4} className="inv-siip-table">
            <br />
            <br />
            <TableContainer>
              <Table style={{ width: "100%" }}>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Invoice:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      INV-25398090
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Order No.
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      SNA97231688188939
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Date:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      Jul 09, 2023
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Amount:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $89
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <div>
            <br /> <br />
          </div>
        </Grid>
        <br />
        <div className="orders-container2">
          <div className="invoice-entries">
            <TableContainer style={{ textcolor: "black" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="apply-border">Product</TableCell>
                    <TableCell className="apply-border">Rate</TableCell>
                    <TableCell className="apply-border">Quantity</TableCell>
                    <TableCell className="apply-border">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="apply-border">Test Product</TableCell>
                    <TableCell className="apply-border">$15</TableCell>
                    <TableCell className="apply-border">1</TableCell>
                    <TableCell className="apply-border">$15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="apply-border">Test Product</TableCell>
                    <TableCell className="apply-border">$15</TableCell>
                    <TableCell className="apply-border">1</TableCell>
                    <TableCell className="apply-border">$15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="apply-border">Test Product</TableCell>
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
                      Total:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $89
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", width: "50%" }}
                      className="apply-border"
                    >
                      Shipping Charge:
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
                      Discount:
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
                      Sub Total:
                    </TableCell>
                    <TableCell
                      style={{ width: "50%" }}
                      className="apply-border"
                    >
                      $89
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
