import React, { useState } from "react";
import BrandImage from "../../../../../assets/products/product-bottle.jpg";
// import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { MoreVertOutlined, EditOutlined } from "@mui/icons-material";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./deleted.css";

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
  IconButton,
  Menu,
  InputAdornment,
} from "@mui/material";

const ProductReiews = () => {
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
        <h3 className="card-title"> Deleted Products </h3>
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
              <div className="search-in-table-del-products">
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
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Photo
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Name
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Stock
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Info
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Sells / Rating
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Variation
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Supplier
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Added by
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
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
                      <TableCell align="left">
                        <div className="blog-img">
                          <img src={BrandImage} alt="Blog" />
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        Skin Smoothing Cream 1.7oz
                      </TableCell>
                      <TableCell align="left">
                        Unit: Size <br />
                        Weight: 1.7 fl oz
                      </TableCell>
                      <TableCell align="left">
                        Rating: {row.srNo}
                        <span className="star-icon">
                          <AiFillStar />
                        </span>
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">Admin</TableCell>
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
                            <VisibilityOutlinedIcon sx={{ marginRight: 1 }} />
                            View
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose}>
                            <EditOutlined sx={{ marginRight: 1 }} />
                            Edit
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose}>
                            <RestorePageOutlinedIcon sx={{ marginRight: 1 }} />
                            Restore
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

export default ProductReiews;
