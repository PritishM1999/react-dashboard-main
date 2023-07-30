import React, { useState } from "react";
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
  Pagination,
  Button,
  IconButton,
  Menu,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import "./Allorders.css";
import { DatePicker } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  MoreVertOutlined,
  // EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import ReplayIcon from "@mui/icons-material/Replay";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import PrintIcon from "@mui/icons-material/Print";
import ProductImg from "../../../../../../assets/products/spray-product.jpg";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

const { RangePicker } = DatePicker;

const PickupOrder = () => {
  const [shippingValue, setShippingValue] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const [sourceValue, setSourceValue] = useState("");
  const [subscriptionChecked, setSubscriptionChecked] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  const [showStaffNotePopup, setShowStaffNotePopup] = useState(false);
  const [staffNote, setStaffNote] = useState("");

  const handleGoBack = () => {
    // Go back to the previous page in the history
    window.history.go(-1);
  };

  const processDatesArray = (datesArray) => {
    if (datesArray.length !== 2) {
      console.error("Invalid array length. Expected 2 dates.");
      return;
    }
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <i>
            <HomeIcon /> {"-"}{" "}
          </i>
          <h6 style={{ margin: "5px" }}>Sales - Pick Up Order</h6>
        </div>

        <button
          className="back-button"
          onClick={handleGoBack}
          style={{ background: "#EEF2F6", fontWeight: "500" }}
        >
          <span className="back-arrow" style={{ fontWeight: "500" }}>
            &larr;
          </span>{" "}
          Back
        </button>
      </div>

      <br />
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
          <div className="orders-section">
            {/* Orders Start*/}
            <div className="order-head">
              <Typography variant="h1">All Orders</Typography>

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
                        <TableCell></TableCell>
                        <TableCell>Inv. No.</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Order Details</TableCell>
                        <TableCell>Total Items</TableCell>
                        <TableCell>Customer Details</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Shipping Status</TableCell>
                        <TableCell>Pay Status</TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>
                          <SettingsIcon />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <IconButton
                            onClick={() => handleRowClick(1)}
                            variant="outlined"
                            // size="small"
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
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <Link to="">INV-56893386</Link>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            Jul 26, 2023
                            <br />
                            1:20 pm
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            Order
                            <br />
                            (Deliver to address)
                            <br />
                            <Link to="">SNA24421690312241</Link>
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
                              test ecw
                            </Link>
                            <br />
                            <small>aakash@eclinicalworks.com</small>
                            <br />
                            <small>4417058080</small>
                            <br />
                            <small>TES638840</small>
                            <br />
                            <small>Bermuda</small>
                            <br />
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            $64 (+ S.C: $0) (- Dis: $0)
                          </Typography>
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
                        <TableCell>Cash</TableCell>
                        {/* <TableCell>NO</TableCell> */}
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
                            {/* <MenuItem onClick={handleMenuClose}>
                              <EditOutlined sx={{ marginRight: 1 }} />
                              Edit
                            </MenuItem> */}

                            <MenuItem aria-label="View order details">
                              <Link
                                to="/admin/Admin/view-order-details"
                                onClick={handleMenuClose}
                                style={{ color: "black" }}
                              >
                                <small>
                                  <VisibilityOutlinedIcon
                                    sx={{ marginRight: 1 }}
                                  />
                                  View
                                </small>
                              </Link>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <small>
                                <NotificationsActiveIcon
                                  sx={{ marginRight: 1 }}
                                />
                                Review Alert
                              </small>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <small>
                                <DeleteOutlined sx={{ marginRight: 1 }} />
                                Delete
                              </small>
                            </MenuItem>
                            {/* <MenuItem onClick={handleMenuClose}>
                              <ReplayIcon sx={{ marginRight: 1 }} />
                              Return Sales order
                            </MenuItem> */}
                            <MenuItem
                              onClick={() => {
                                handleMenuClose();
                                setShowStaffNotePopup(true);
                              }}
                            >
                              <small>
                                <EditNoteIcon sx={{ marginRight: 1 }} />
                                Staff Note
                              </small>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <small>
                                <MailOutlineIcon sx={{ marginRight: 1 }} />
                                Mail
                              </small>
                            </MenuItem>
                            {/* <MenuItem onClick={handleMenuClose}>
                              <PrintIcon sx={{ marginRight: 1 }} />
                              Print
                            </MenuItem> */}
                          </Menu>
                          {/* Staff Note Popup */}
                          {showStaffNotePopup && (
                            <div className="popup">
                              <div className="popup-content">
                                <label className="popup-label">
                                  Staff note:
                                </label>
                                <textarea
                                  className="popup-textarea"
                                  value={staffNote}
                                  onChange={(event) =>
                                    setStaffNote(event.target.value)
                                  }
                                />
                                <div className="popup-buttons">
                                  <button
                                    className="popup-button"
                                    onClick={() => {
                                      // Perform any necessary action with the staff note value
                                      console.log(staffNote);

                                      // Hide the popup
                                      setShowStaffNotePopup(false);
                                    }}
                                  >
                                    Save
                                  </button>
                                  <button
                                    className="popup-button"
                                    onClick={() => setShowStaffNotePopup(false)}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* Staff Note Popup end*/}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          colSpan={12}
                          className="hiddenRow pc-padding"
                          style={{ padding: "0px" }}
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
                                <p style={{ padding: "1rem", margin: "0" }}>Sales Order Items</p>
                              </Typography>
                              {/* <hr /> */}
                              <TableContainer>
                                <Table>
                                  <TableHead className="orders-table-head-row">
                                    <TableRow className="info">
                                      <TableCell>Product Name</TableCell>
                                      <TableCell>Unit</TableCell>

                                      <TableCell>Qty</TableCell>
                                      <TableCell>Discount</TableCell>
                                      <TableCell>Price</TableCell>

                                      <TableCell>Shipping Details</TableCell>

                                      <TableCell>Seller</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>
                                        <img
                                          alt="user"
                                          src={ProductImg}
                                          style={{
                                            width: "40px",
                                            height: "50px",
                                            borderRadius: "50%",
                                          }}
                                        />
                                        Ultimate Edge Control Kit
                                      </TableCell>
                                      <TableCell>Piece</TableCell>
                                      <TableCell>1</TableCell>
                                      <TableCell>$00.00</TableCell>
                                      <TableCell>$55.00</TableCell>
                                      <TableCell>
                                        7 North shore Road, Bermuda
                                      </TableCell>
                                      <TableCell>Dermal Distribution</TableCell>
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
          </div>
        </div>
        <br />
      </div>
    </>
  );
};


export default PickupOrder;
