import React, { useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputLabel,
} from "@mui/material";
import ProductImg from "../../../../../assets/products/product-bottle.jpg";
import "./OrderSummary.css";

const OrderSummaryPopup = ({ selectedOption, isChecked, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="summary-main-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="list-products">
              <div className="summary-container">
                <div className="product-info">
                  <div className="product-summ-img">
                    <img src={ProductImg} alt="Product Images" />
                  </div>
                  <div className="product-summ-description">
                    Corsair K60 RGB Pro Mechanical Gaming Keyboard - CHERRY
                    Mechanical Keyswitches - Durable
                  </div>
                  <div className="summ-price-quant">
                    <h6>$55.000</h6>
                    <p>Qty: 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="summary-cust-info-container">
              <div className="product-info">
                <div className="product-summ-img">
                  <img src={ProductImg} alt="Product Images" />
                </div>
                <div className="product-summ-description">
                  Corsair K60 RGB Pro Mechanical Gaming Keyboard - CHERRY
                  Mechanical Keyswitches - Durable
                </div>
                <div className="summ-price-quant">
                  <h6>$55.000</h6>
                  <p>Qty: 3</p>
                </div>
              </div>
            </div>
          </Grid>
          <br />

          {/* Customer Info */}
          <Grid item xs={12} md={6}>
            <div className="customer-info-container">
              <div className="customer-info">
                <h2 className="customer-info-head">Customer Info</h2>
                <div className="customer-info-body">
                  <p>
                    <span>Name:</span> Ajay
                  </p>
                  <p>
                    <span>Phone:</span> 91010988635
                  </p>
                  <p>
                    <span>Address:</span> somewhere appointment
                  </p>
                  <p>
                    <span>Shipping:</span> somewhere appointment
                  </p>
                </div>
              </div>

              {/* Total Billing */}
              <div className="total-billing">
                <div className="blc-info">
                  <p>Sub Total</p>
                  <p>Tax</p>
                  <p>Shipping</p>
                  <p>Discount</p>
                </div>

                <div className="blc">
                  <p>$5,304.600</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                </div>
              </div>

              {/* Total Discount */}
              <div className="total-discount">
                <div className="total-discount-head">
                  <h5>Total</h5>
                  <h5>$5,304.60</h5>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Payment Console */}
      <div className="payment-console">
        <div className="close-confirm">
          <Button
            variant="contained"
            style={{ background: "#FF4961" }}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            variant="contained"
            style={{ background: "#FD6F13" }}
            onClick={handleOpenDialog}
          >
            Offline Payment
          </Button>
          <Button variant="contained" style={{ background: "#1E9FF2" }}>
            Confirm with COD
          </Button>
          <Button variant="contained" style={{ background: "#28D094" }}>
            Confirm with Cash
          </Button>
        </div>
      </div>

      {/* Offline Payment Dialog */}
      <Dialog
        open={isOpen}
        onClose={handleCloseDialog}
        style={{ padding: "1rem", gap: "0.5rem" }}
      >
        <DialogTitle id="order-summ-head">Offline Payment</DialogTitle>
        <DialogContent>
          <div className="input-field" style={{ padding: "0.5rem" }}>
            <InputLabel>Payment method :</InputLabel>
            <TextField placeholder="Payment method" />
          </div>
          <div className="input-field" style={{ padding: "0.5rem" }}>
            <InputLabel>Amount :</InputLabel>
            <TextField placeholder="Amount" />
          </div>
          <div className="input-field" style={{ padding: "0.5rem" }}>
            <InputLabel>Transaction ID :</InputLabel>
            <TextField placeholder="Transaction ID" />
          </div>

          {/* File upload input */}
          <div className="input-field" style={{ padding: "0.5rem" }}>
            <InputLabel>Photo :</InputLabel>
            <input
              type="file"
              // onChange={handleFileUploadGallary}
            />
          </div>
        </DialogContent>
        <DialogActions className="close-confirm">
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderSummaryPopup;
