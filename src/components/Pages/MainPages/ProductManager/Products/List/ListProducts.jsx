import React, { useState } from "react";
import {
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  styled,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  TextField,
  OutlinedInput,
  InputAdornment,
  Pagination,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import "./ListProducts.css";

import { Link } from "react-router-dom";
import {
  MoreVertOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./ListProducts.css";

import ProductsImage from "../../../../../../assets/products/spray-product.jpg";

import { AiFillStar } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";

const ListOfProducts = () => {
  const [brandValue, setShippingValue] = useState("");

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
      <div>
        <div className="all-orders">
          <section className="card">
            <div className="filter-head">
              <Typography variant="h1">Filter</Typography>
            </div>

            {/* Title */}
            <div className="add-products-body">
              <div className="inpFifty">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={3}>
                    <InputLabel>Brand :</InputLabel>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="shipping">Select one</InputLabel>
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
                  <Grid item xs={12} md={3}>
                    <InputLabel>Category :</InputLabel>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="shipping">Select one</InputLabel>
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
                  <Grid item xs={12} md={3}>
                    <InputLabel>Unit :</InputLabel>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="shipping">Select one</InputLabel>
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
                  <Grid item xs={12} md={3}>
                    <InputLabel>Status :</InputLabel>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="shipping">Select one</InputLabel>
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
                  <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                      <TextField placeholder="Search by Product Name/Barcode" />
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
          {/* End Filter */}
          <br />
          <section className="orders-section">
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
                        <TableCell>View Details</TableCell>
                        <TableCell>Photo</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Info</TableCell>
                        <TableCell>Sells/Rating</TableCell>
                        <TableCell>Variation</TableCell>
                        <TableCell>Supplier</TableCell>
                        <TableCell>Published</TableCell>
                        <TableCell>Sort</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Expiry Date</TableCell>
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
                          <div className="blog-img">
                            <img src={ProductsImage} alt="ProductImage" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <span>CRLAB Hair Milk Spray 200 ml</span>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <b>Unit:</b> Size
                            <br />
                            <b>Weight:</b> 200 ml
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <b>COG Price:</b> $34
                            <br />
                            <b>Sale Proce:</b> $34.00
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            Num of Sale: 0
                          </Typography>
                          <Typography variant="body1">
                            Rating: 0{" "}
                            <i style={{ color: "#F59012" }}>
                              <AiFillStar />
                            </i>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            <b>Brand -</b> CR Lab
                            <br />
                            <b>Category -</b> Hair Products
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            Cedare Ragazzi Laboratories
                          </Typography>
                        </TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                        </TableCell>

                        <TableCell>
                          <TextField placeholder="" />
                        </TableCell>
                        <TableCell>14</TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            2/26/2023
                            <br />
                            1:20PM
                          </Typography>
                        </TableCell>
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
                              <VisibilityIcon sx={{ marginRight: 1 }} />
                              View
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <EditOutlined sx={{ marginRight: 1 }} />
                              Edit
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <DeleteOutlined sx={{ marginRight: 1 }} />
                              Delete
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <span
                                style={{
                                  marginLeft: "0.2rem",
                                  marginRight: "1rem",
                                }}
                              >
                                <FaCubes />
                              </span>
                              <span>Add & Edit Stock</span>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <FormatListBulletedIcon sx={{ marginRight: 1 }} />
                              Product Stock History
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <ContentCopyIcon sx={{ marginRight: 1 }} />
                              Duplicate Product
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <ToggleOnIcon sx={{ marginRight: 1 }} />
                              Functions
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
                              <Typography variant="h5">
                                <p>Product Details</p>
                              </Typography>
                              <TableContainer>
                                <Table>
                                  <TableHead className="orders-table-head-row">
                                    <TableRow className="info">
                                      <TableCell>Stock History</TableCell>
                                      <TableCell>Stock Add</TableCell>
                                      <TableCell>Item Code</TableCell>
                                      <TableCell>Unit</TableCell>
                                      <TableCell>Sale price</TableCell>
                                      <TableCell>Discount</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>
                                        <Link to="">Stock History</Link>
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-evenly",
                                          border: "none",
                                          borderBottom: "1px solid #E0E0E0",
                                        }}
                                      >
                                        <TextField
                                          placeholder=""
                                          style={{ width: "100%" }}
                                        />
                                        <button
                                          style={{
                                            height: "3.5rem",
                                            width: "4rem",
                                            borderRadius: "5px",
                                            fontSize: "26px",
                                            marginLeft: "1rem",
                                          }}
                                        >
                                          +
                                        </button>
                                      </TableCell>

                                      <TableCell>PKR5</TableCell>
                                      <TableCell>14</TableCell>

                                      <TableCell>$208.00</TableCell>

                                      <TableCell>$55.00</TableCell>
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

export default ListOfProducts;
