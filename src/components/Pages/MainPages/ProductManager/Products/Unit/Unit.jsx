import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Brand/Brands.css";
import {
  MoreVertOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  OutlinedInput,
  Pagination,
  Button,
  IconButton,
  Menu,
  InputAdornment,
} from "@mui/material";

const Units = () => {
  function createData(
    srNo,
    title,
    category,
    description,
    image,
    status,
    action
  ) {
    return { srNo, title, category, description, image, status, action };
  }

  const rows = [
    createData(
      1,
      "New Blog",
      "Dermatology",
      "Test Name",
      "",
      "Active",
      "Edit/Delete"
    ),
    createData(
      2,
      "Product B",
      "Category 2",
      "Description 2",
      "image2.png",
      "Inactive",
      "Edit/Delete"
    ),
    createData(
      3,
      "Product C",
      "Category 1",
      "Description 3",
      "image3.png",
      "Active",
      "Edit/Delete"
    ),
    // Add more dummy data as needed
  ];

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
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
    const titleMatch = row.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const categoryMatch = row.category
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const statusMatch =
      statusFilter === "all" ||
      row.status.toLowerCase() === statusFilter.toLowerCase();
    return (titleMatch || categoryMatch) && statusMatch;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All your units</h3>
        {/* Buttons */}
        <div className="tabs-butons">
          <Link to="/testDashboard/ProductManager/Products/add-unit">
            <Button variant="contained">Add New</Button>
          </Link>
        </div>
        {/* Buttons End*/}
      </div>
      <div className="main-body2">
        <div className="">
          <div className="BrandsTable">
            {/* Search and Nos */}
            <div className="searchAndNosBrands">
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
              <div className="search-in-table">
                <OutlinedInput
                  sx={{
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                  }}
                  id="outlined-adornment-weight"
                  onChange={handleSearchChange}
                  value={searchText}
                  endAdornment={
                    <InputAdornment position="end">Search</InputAdornment>
                  }
                />
              </div>
            </div>
            {/* Search and Nos END */}

            {/* Table */}
            <TableContainer component={Paper} style={{ boxShadow: "gray" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Short name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Allow decimal
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedRows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.srNo}
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>

                      <TableCell align="center">
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
            {/* Table END*/}
            {/* Pagination */}
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              className="pagination-style"
              style={{
                display: "flex",
                padding: "1rem",
                justifyContent: "right",
              }}
            />
            {/* Pagination End*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units;
