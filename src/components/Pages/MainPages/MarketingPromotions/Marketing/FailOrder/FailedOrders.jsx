import React, { useState } from "react";
import {
  Typography,
  MenuItem,
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
} from "@mui/material";
import { Link } from "react-router-dom";
import { MoreVertOutlined, DeleteOutlined } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PrintIcon from "@mui/icons-material/Print";

const FailOrders = () => {
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

  return (
    <>
      <div>
        <div className="all-orders">
          <div className="orders-section">
            {/* Orders Start*/}
            <div className="order-head">
              <Typography variant="h1">Failed Orders</Typography>

              <div className="search-orders">
                <div className="search-in-table">
                  <OutlinedInput
                  sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}} 
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
                        <TableCell>Date</TableCell>
                        <TableCell>Order Details</TableCell>
                        <TableCell>Total Items</TableCell>
                        <TableCell>Customer Details</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Shipping Status</TableCell>
                        <TableCell>Pay Status</TableCell>
                        <TableCell>Source</TableCell>
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
                          <Typography variant="body1">
                            $ 123.3 <br />
                            (+ Shipping Charge: $0)
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <b>Coupon:</b> BIG034
                            <br />
                            <b>Discounted:</b> $0
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <span className="pending">No Response</span>
                        </TableCell>
                        <TableCell>
                          <span className="pending">Failed</span>
                        </TableCell>
                        <TableCell></TableCell>
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
                              <MailOutlineIcon sx={{ marginRight: 1 }} />
                              Mail
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <PrintIcon sx={{ marginRight: 1 }} />
                              Print
                            </MenuItem>
                          </Menu>
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
                                      <TableCell>Qty</TableCell>
                                      <TableCell>Discount</TableCell>
                                      <TableCell>Total</TableCell>
                                      <TableCell>Total</TableCell>
                                      <TableCell>Shipping Details</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>-</TableCell>
                                      <TableCell>Test Product</TableCell>
                                      <TableCell>Capsules</TableCell>
                                      <TableCell>1</TableCell>
                                      <TableCell>$ 0.00</TableCell>
                                      <TableCell>$ 15.00</TableCell>
                                      <TableCell>--</TableCell>
                                      <TableCell>Emerson Ecologics</TableCell>
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

export default FailOrders;
