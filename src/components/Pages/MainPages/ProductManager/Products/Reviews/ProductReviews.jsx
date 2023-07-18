import React, { useState } from "react";
import BrandImage from "../../../../../../assets/products/product-bottle.jpg";
import "./ProductReviews.css";
import { AiFillStar } from "react-icons/ai";

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
  Switch,
  styled,
  FormControlLabel,
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
        <h3 className="card-title">Product Reviews</h3>
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
                  sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}} 
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
                      Sr.No.
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Product
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Rating
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Customer
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Comment
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">
                      Published
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
                      <TableCell align="center">
                        <div className="blog-img">
                          <img src={BrandImage} alt="Blog" />
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {row.srNo}
                        <span className="star-icon">
                          <AiFillStar />
                        </span>
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                      </TableCell>
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

export default ProductReiews;
