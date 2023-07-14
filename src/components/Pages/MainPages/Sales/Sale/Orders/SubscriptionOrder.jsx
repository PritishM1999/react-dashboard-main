import React, { useState } from "react";
import StaffNotePopup from "./StaffNotePopup";

import {
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  OutlinedInput,
  InputAdornment,
  Pagination,
  Button,
  IconButton,
  Menu,
  InputLabel,
} from "@mui/material";
import "./Allorders.css";
import { DatePicker } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  MoreVertOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ReplayIcon from "@mui/icons-material/Replay";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PrintIcon from "@mui/icons-material/Print";

const { RangePicker } = DatePicker;

const SubsOrder = () => {
  const [shippingValue, setShippingValue] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const [sourceValue, setSourceValue] = useState("");
  const [subscriptionChecked, setSubscriptionChecked] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  const processDatesArray = (datesArray) => {
    if (datesArray.length !== 2) {
      console.error("Invalid array length. Expected 2 dates.");
      return;
    }

    // const startDate = datesArray[0].$d;
    // const endDate = datesArray[1].$d;

    const startDate = moment(datesArray[0].$d).format("DD-MM-YYYY");
    const endDate = moment(datesArray[1].$d).format("DD-MM-YYYY");

    // Perform your desired operations with the start and end dates
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const handleDateRangeChange = (selectedDates) => {
    if (!selectedDates) {
      console.error("Selected dates array is null.");
      return;
    }
    processDatesArray(selectedDates);
    setSelectedDates(selectedDates);
    console.log(selectedDates);
    // Other logic for handling the date range
  };

  const [expandedRow, setExpandedRow] = React.useState("");

  const handleRowClick = (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow("");
    } else {
      setExpandedRow(rowId);
    }
  };

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showStaffNotePopup, setShowStaffNotePopup] = useState(false);

  const handlePageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const handleMenuOpen = (event, rowId) => {
    setOpenMenuId(rowId);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenuId(null);
    setAnchorEl(null);
  };

  const pageCount = 5; // Replace with the actual number of pages
  const shippingOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "pending", label: "Pending Order" },
    { value: "confirm", label: "Ready for Collection" },
    { value: "collected", label: "Collected" },
    { value: "pickedup", label: "Shipped" },
    { value: "delivered", label: "Delivered Orders" },
  ];

  const paymentOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "Paid", label: "Paid" },
    { value: "Pending", label: "Unpaid" },
  ];

  const userOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "16", label: "a1 a1" },
    // Add more options here
  ];

  const sourceOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "authorized.net", label: "Authorized.net" },
    { value: "offline", label: "Offline" },
    { value: "cash", label: "Cash" },
  ];

  const subscriptionOptions = [
    { value: "subscription", label: "Subscriptions" },
    // Add more options here
  ];

  return (
    <>
      <div>
        <div className="all-orders">
          <section className="filter-section">
            <div className="filter-head">
              <Typography variant="h1">Filter</Typography>
            </div>
            <div className="filter-container">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography htmlFor="shipping">Shipping Status:</Typography>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shipping">All</InputLabel>
                    <Select
                      id="shipping"
                      name="shipping"
                      value={shippingValue}
                      onChange={(e) => setShippingValue(e.target.value)}
                    >
                      {shippingOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          disabled={option.value === ""}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography htmlFor="payment">Payment Status:</Typography>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shipping">All</InputLabel>
                    <Select
                      id="payment"
                      name="payment"
                      value={paymentValue}
                      onChange={(e) => setPaymentValue(e.target.value)}
                    >
                      {paymentOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          disabled={option.value === ""}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography htmlFor="user">Customer:</Typography>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shipping">All</InputLabel>
                    <Select
                      id="user"
                      name="user"
                      value={userValue}
                      onChange={(e) => setUserValue(e.target.value)}
                    >
                      {userOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          disabled={option.value === ""}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <Typography htmlFor="daterange">Date Range:</Typography>
                    <RangePicker
                      className="date-picker"
                      name="daterange"
                      onChange={handleDateRangeChange}
                    />
                    {selectedDates.length > 0 && (
                      <span className="show-dates">
                        Selected Dates: {selectedDates.join(" -to- ")}
                      </span>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <FormGroup>
                    {subscriptionOptions.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        control={
                          <Checkbox
                            id={option.value}
                            name={option.value}
                            value={option.value}
                            checked={subscriptionChecked}
                            onChange={(e) =>
                              setSubscriptionChecked(e.target.checked)
                            }
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography htmlFor="source">Sources:</Typography>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shipping">All</InputLabel>
                    <Select
                      id="source"
                      name="source"
                      value={sourceValue}
                      onChange={(e) => setSourceValue(e.target.value)}
                    >
                      {sourceOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          disabled={option.value === ""}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </section>
          {/* End Filter */}
          <br />
          <section className="orders-section">
            {/* Orders Start*/}
            <div className="order-head">
              <Typography variant="h1">Subscription Orders</Typography>

              <div className="search-orders">
                <div className="search-in-table">
                  <OutlinedInput
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="start">
                        {/* Search... */}
                      </InputAdornment>
                    }
                  />
                </div>
                <Button variant="contained" className="search-btn">
                  search
                </Button>
              </div>
            </div>
            <div className="orders-container">
              <div className="order-entries">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Inv. Details</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Order Details</TableCell>
                        <TableCell>Total Items</TableCell>
                        <TableCell>Customer Details</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Shipping Status</TableCell>
                        <TableCell>Pay Status</TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>Agent</TableCell>
                        <TableCell>Is Return</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Button
                            onClick={() => handleRowClick(1)}
                            variant="outlined"
                            size="small"
                          >
                            {expandedRow === 1 ? (
                              <i>
                                <FaAngleUp />
                              </i>
                            ) : (
                              <span className="fa fa-chevron-down">
                                <FaAngleDown />
                              </span>
                            )}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            2/26/2023
                            <br />
                            1:20PM
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <Link to="">6900</Link>
                            <br />
                            <span>TRA016275485</span>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">3</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <Link to="" className="text-dark">
                              Rahul
                            </Link>
                            <br />
                            <small>Rahul@gmail.com</small>
                            <br />
                            <small>+91 9918568401</small>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">$123.3</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <b>Coupon:</b> BIG034
                            <br />
                            <b>Discounted:</b> $34.00
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <span className="success">Success</span>
                        </TableCell>
                        <TableCell>
                          <span className="pending">Pending</span>
                        </TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>Mohit</TableCell>
                        <TableCell>NO</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={(event) => handleMenuOpen(event, 1)}
                            size="small"
                          >
                            <MoreVertOutlined />
                          </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            open={openMenuId === 1}
                            onClose={handleMenuClose}
                            PaperProps={{
                              style: {
                                maxHeight: 120,
                              },
                            }}
                          >
                            <MenuItem onClick={handleMenuClose}>
                              <EditOutlined sx={{ marginRight: 1 }} />
                              Edit
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <VisibilityOffIcon sx={{ marginRight: 1 }} />
                              View
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <NotificationsActiveIcon
                                sx={{ marginRight: 1 }}
                              />
                              Review Alert
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <DeleteOutlined sx={{ marginRight: 1 }} />
                              Delete
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <ReplayIcon sx={{ marginRight: 1 }} />
                              Return Sales order
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                handleMenuClose();
                                setShowStaffNotePopup(true);
                              }}
                            >
                              <EditNoteIcon sx={{ marginRight: 1 }} />
                              Staff Note
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <MailOutlineIcon sx={{ marginRight: 1 }} />
                              Mail
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <PrintIcon sx={{ marginRight: 1 }} />
                              Print
                            </MenuItem>
                          </Menu>
                          {showStaffNotePopup && (
                            <StaffNotePopup
                              onSave={(staffNote) => {
                                // Perform any necessary action with the staff note value
                                console.log(staffNote);

                                // Hide the popup
                                setShowStaffNotePopup(false);
                              }}
                              onCancel={() => setShowStaffNotePopup(false)}
                            />
                          )}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          colSpan={12}
                          className="hiddenRow pc-padding"
                        >
                          <Collapse
                            in={expandedRow === 1}
                            timeout="auto"
                            unmountOnExit
                          >
                            <div className="accordian-body" id="order">
                              <Typography
                                variant="h4"
                                className="sub-table-heading"
                              >
                                <p>Sales Order Items</p>
                              </Typography>
                              <TableContainer>
                                <Table>
                                  <TableHead className="orders-table-head-row">
                                    <TableRow className="info">
                                      <TableCell>Inv. No.</TableCell>
                                      <TableCell>Product Name</TableCell>
                                      <TableCell>Unit</TableCell>
                                      <TableCell>Unit per price</TableCell>
                                      <TableCell>Qty</TableCell>
                                      <TableCell>Discount</TableCell>
                                      <TableCell>Tax</TableCell>
                                      <TableCell>Total Tax</TableCell>
                                      <TableCell>Total</TableCell>
                                      <TableCell>Shipping Details</TableCell>
                                      <TableCell>Warehouse</TableCell>
                                      <TableCell>Seller</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>
                                        <Link to="">234576</Link>
                                      </TableCell>
                                      <TableCell>
                                        Ultimate Edge Control Kit: Contains 1
                                        Edge Control RX Hold & Grow & 1 Edge
                                        Control
                                      </TableCell>
                                      <TableCell>Piece</TableCell>
                                      <TableCell>PKR5,000.00</TableCell>
                                      <TableCell>1</TableCell>
                                      <TableCell>PKR0.00(0%)</TableCell>
                                      <TableCell>Excise Tax(8%)</TableCell>
                                      <TableCell>PKR0.00</TableCell>
                                      <TableCell>$55.00</TableCell>
                                      <TableCell>--</TableCell>
                                      <TableCell>--</TableCell>
                                      <TableCell>Mohit</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </div>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <br />
            {/* Orders End */}
            <Pagination
              count={pageCount}
              value={rowsPerPage}
              page={page}
              onChange={handlePageChange}
              className="pagination-style"
              style={{
                display: "flex",
                padding: "1rem",
                justifyContent: "right",
              }}
            />
          </section>
        </div>
        <br />
      </div>
    </>
  );
};

export default SubsOrder;
