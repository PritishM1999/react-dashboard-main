import React, { useState } from "react";
import {
  Table,
  TableBody,
  Grid,
  InputLabel,
  FormControl,
  TextField,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Pagination,
  Button,
  Typography,
  Autocomplete,
  IconButton,
  Menu,
} from "@mui/material";
import {
  MoreVertOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import countries from "../../../Countries/Countries";

const ShippingConfiguration = () => {
  function createData(
    srNo,
    StockUpdateOn,
    ProcutDesc,
    category,
    Brand,
    Supplier,
    Price,
    Quantity,
    action
  ) {
    return {
      srNo,
      StockUpdateOn,
      ProcutDesc,
      category,
      Brand,
      Supplier,
      Price,
      Quantity,
      action,
    };
  }

  const rows = [
    createData(
      1,
      "Jul 13 2023",
      "Users Name",
      "Health & Wellness",
      "Test Product",
      "Protocol For Life Balance",
      "emerson ecologics (Bermuda)",
      "44.29",
      "Total Stock: 1"
    ),
    createData(
      2,
      "Jul 13 2023",
      "Users Name",
      "Health & Wellness",
      "Test Blog Tes",
      "Protocol For Life Balance",
      "emerson ecologics (Bermuda)",
      "44.29",
      "Total Stock: 1"
    ),
    createData(
      3,
      "Jul 13 2023",
      "Users Name",
      "Health & Wellness",
      "Test Blog Tes",
      "Protocol For Life Balance",
      "emerson ecologics (Bermuda)",
      "44.29",
      "Total Stock: 1"
    ),

    // Add more dummy data as needed
  ];

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [newShippingValues, setNewShippingValues] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleAddMore = () => {
    setNewShippingValues((prevValues) => [
      ...prevValues,
      {
        changes: "",
        country: "",
        amountFrom: "",
        amountTo: "",
      },
    ]);
  };

  const handleRemove = (index) => {
    setNewShippingValues((prevValues) =>
      prevValues.filter((_, i) => i !== index)
    );
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setStatusFilter("all");
    setPage(1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const handleMenuOpen = (event, id) => {
    setOpenMenuId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenuId(null);
    setAnchorEl(null);
  };

  const filteredRows = rows.filter((row) => {
    const titleMatch = row.StockUpdateOn.toLowerCase().includes(
      searchText.toLowerCase()
    );
    const categoryMatch = row.category
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const statusMatch =
      statusFilter === "all" || row.Supplier.toLowerCase() === statusFilter;
    return titleMatch || categoryMatch || statusMatch;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="filter-section">
        <div className="filter-head">
          <Typography variant="h1">Add New Shipping Values :</Typography>
        </div>

        <div className="filter-container">
          {newShippingValues.map((value, index) => (
            <Grid container spacing={2}>
              <Grid item xs={10} md={2}>
                <InputLabel htmlFor="date">Changes:</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="" type="number" />
                </FormControl>
              </Grid>
              <Grid item xs={10} md={2}>
                <InputLabel htmlFor="select-country">Country :</InputLabel>
                <FormControl fullWidth>
                  <Autocomplete
                    className="select-shipping-country"
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="All Countries" />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={10} md={2}>
                <InputLabel htmlFor="date">Amount From:</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="" type="number" />
                </FormControl>
              </Grid>
              <Grid item xs={10} md={2}>
                <InputLabel htmlFor="date">Amount To:</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="" type="number" />
                </FormControl>
              </Grid>
              <Grid item xs={10} md={2}>
                <div className="allsales-remove-button">
                  <Button
                    className="search-btn"
                    variant="contained"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <div className="allsales-addmore-button">
                <Button
                  className="search-btn"
                  variant="contained"
                  onClick={handleAddMore}
                >
                  Add More
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={2}>
              <div className="allsales-search-button2">
                <Button className="search-btn" variant="contained">
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <br />
      <div className="card">
        <div className="card-header">
          <h3>Shipping Detail</h3>
        </div>
        <div className="main-body2">
          {/* Search and Nos */}
          <div className="searchAndNosBlogs">
            <div className="nos">
              Show <span className="spaces"></span>
              <Select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                label="Rows per page"
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
              <span className="spaces"></span> entries
            </div>
            <div className="search-inventory">
              <div className="search-in-table">
                <OutlinedInput
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                  }}
                  value={searchText}
                  onChange={handleSearchChange}
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="start">Search...</InputAdornment>
                  }
                />
              </div>
            </div>
          </div>
          {/* Search and Nos END */}

          {/* Table */}
          <TableContainer
            component={Paper}
            style={{ boxShadow: "none" }}
            id="tableContainer"
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    #
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Charges
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Country
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Amount
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="left">
                {displayedRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="left">
                      {row.srNo}
                    </TableCell>
                    <TableCell align="left">
                      <Link> $ 13</Link>
                    </TableCell>
                    <TableCell align="left">India</TableCell>
                    <TableCell align="left">
                      From: $201 <br />
                      To: $400
                    </TableCell>
                    <TableCell align="left">
                      <IconButton
                        onClick={(event) => handleMenuOpen(event, row.srNo)}
                        size="small"
                      >
                        <MoreVertOutlined />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={openMenuId === row.srNo}
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
                          <DeleteOutlined sx={{ marginRight: 1 }} />
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table End */}

          {/* Pagination */}
          <div className="pagination-style-p-inventory">
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              className="pagination-style"
              style={{
                display: "flex",
                // padding: "1rem",
                justifyContent: "right",
              }}
            />
          </div>
          {/* Pagination END */}
        </div>
      </div>
    </>
  );
};

export default ShippingConfiguration;
