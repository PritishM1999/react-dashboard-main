import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  FormControlLabel,
  Radio,
  FormControl,
  styled,
  Switch,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import TextArea from "antd/es/input/TextArea";
import "./OrderDetails.css";
import { Link } from "react-router-dom";

const ViewAndUpdateStatus = () => {
  const [brandValue, setShippingValue] = useState("");
  const [radioValue1, setRadioValue1] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [receivedBy, setReceivedBy] = useState("");
  const [idProof, setIdProof] = useState("");
  const [date, setDate] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);

  const handleRadioChange1 = (event) => {
    setRadioValue1(event.target.value);
  };

  const handleVerifyCodeChange = (event) => {
    setVerifyCode(event.target.value);
  };

  const handleReceivedByChange = (event) => {
    setReceivedBy(event.target.value);
  };

  const handleIdProofChange = (event) => {
    setIdProof(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddOrderHistory = () => {
    const newRecord = {
      dateAdded: new Date().toLocaleDateString(),
      status: brandValue,
      customerNotified: true, // Assuming it's always true when adding a record
      comment: "", // You can set the comment value here
      generatedBy: "", // You can set the generatedBy value here
    };

    // Add the new record to the order history
    setOrderHistory([...orderHistory, newRecord]);
  };

  // Define dynamic menu items
  const shippingOptions = [
    { value: "", label: "Select One" },
    { value: "pending", label: "Pending" },
    { value: "confirm", label: "Ready for Collection" },
    { value: "collected", label: "Collected" },
    { value: "pickedup", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
  ];

  const renderAdditionalFields = () => {
    if (brandValue === "confirm") {
      return (
        <div className="status-inputs">
          <InputLabel>Verify Code:</InputLabel>
          <TextField value={verifyCode} onChange={handleVerifyCodeChange} />
        </div>
      );
    } else if (brandValue === "pickedup") {
      return (
        <div className="delivery-type">
          <Radio
            checked={radioValue1 === "courier"}
            onChange={handleRadioChange1}
            value="courier"
          />
          <InputLabel>Courier:</InputLabel>

          <Radio
            checked={radioValue1 === "deliveryboy"}
            onChange={handleRadioChange1}
            value="deliveryboy"
          />
          <InputLabel>Delivery Boy:</InputLabel>
        </div>
      );
    } else if (brandValue === "delivered") {
      return (
        <div className="status-inputs">
          <InputLabel>Received By:</InputLabel>
          <TextField value={receivedBy} onChange={handleReceivedByChange} />
          <InputLabel>ID Proof:</InputLabel>
          <TextField value={idProof} onChange={handleIdProofChange} />
          <InputLabel>Date:</InputLabel>
          <TextField type="date" value={date} onChange={handleDateChange} />
        </div>
      );
    }
    return null;
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <div className="order-details-main-container">
        <div className="card-header">
          <h3 className="card-title">Order Status</h3>

          {/* Buttons */}
          <div className="tabs-butons">
            <Button variant="contained">Details</Button>
            <Link to="/admin/Admin/view-invoice-details">
              <Button variant="contained">Invoice</Button>
            </Link>
            <Button variant="contained">Status</Button>
            {/* <Button variant="contained">Notes</Button> */}
          </div>
          {/* Buttons End*/}
        </div>
        <div className="order-status-table">
          {/* Order Details Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DATE ADDED</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>CUSTOMER NOTIFIED</TableCell>
                  <TableCell>COMMENT</TableCell>
                  <TableCell>GENERATED BY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderHistory.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.dateAdded}</TableCell>
                    <TableCell>{record.status}</TableCell>
                    <TableCell>
                      {record.customerNotified ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>{record.comment}</TableCell>
                    <TableCell>{record.generatedBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="status-body">
          <Grid container spacing={2} style={{ marginBottom: "1rem" }}>
            <Grid item xs={12}>
              <InputLabel htmlFor="shipping">Order Status :</InputLabel>
              <FormControl fullWidth>
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
          </Grid>
          {renderAdditionalFields()}
          <div className="input-field">
            <Grid item xs={12} className="ref-toggle">
              <FormControlLabel
                label="Notify Customer:"
                labelPlacement="start"
                style={{
                  margin: "0rem 0 2rem 0",
                }}
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </Grid>
            <InputLabel>Comment :</InputLabel>
            <TextArea placeholder="Write a Comment..." />
          </div>
        </div>
        {/* Submit button */}
        <div className="status-container">
          <div className="add-order-status-btn" style={{ padding: "1rem" }}>
            <Button
              className="save-btn"
              variant="contained"
              onClick={handleAddOrderHistory}
            >
              Add Order History
            </Button>
          </div>
          <div className="allsales-addmore-button" style={{ padding: "1rem" }}>
            <Button className="save-btn" variant="contained">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAndUpdateStatus;
