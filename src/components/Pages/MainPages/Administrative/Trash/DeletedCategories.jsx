import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../../../../assets/products/spray-product.jpg";
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
  InputAdornment,
  Pagination,
  Checkbox,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import { MoreVertOutlined, EditOutlined } from "@mui/icons-material";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";

const DeletedCategories = () => {
  function createData(srNo, name, expdate, Supplier) {
    return { srNo, name, expdate, Supplier };
  }

  const rows = [
    createData(
      1,
      "Sample Product Description 180 caps",
      "Jul 13 2023",
      "Product Name Here"
    ),
    createData(
      2,
      "Sample Product Description 180 caps",
      "Jul 13 2023",
      "Product Name Here"
    ),
    createData(
      3,
      "Sample Product Description 180 caps",
      "Jul 13 2023",
      "Product Name Here"
    ),
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
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

  const handleCheckboxChange = (event, srNo) => {
    const isChecked = event.target.checked;
    setSelectedRows((prevSelectedRows) => {
      if (isChecked) {
        return [...prevSelectedRows, srNo];
      } else {
        return prevSelectedRows.filter((row) => row !== srNo);
      }
    });
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(filteredRows.map((row) => row.srNo));
    } else {
      setSelectedRows([]);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredRows = rows.filter((row) => {
    const nameMatch = row.name.toLowerCase().includes(searchText.toLowerCase());
    const expdateMatch = row.expdate
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const supplierMatch = row.Supplier.toLowerCase().includes(
      searchText.toLowerCase()
    );
    return nameMatch || expdateMatch || supplierMatch;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Deleted Categories</h3>
          <div className="copy-button">
            <Link to="/admin/ProductManager/Products/add-categories">
              <Button variant="contained">Add New</Button>
            </Link>
          </div>
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
            style={{ boxShadow: "gray" }}
            id="tableContainer"
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    <Checkbox
                      checked={selectedRows.length === displayedRows.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Name
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Category Code / HSN Code
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Parent
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Thumbnail
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="left">
                {displayedRows.map((row) => (
                  <TableRow key={row.srNo}>
                    <TableCell align="left">
                      <Checkbox
                        checked={selectedRows.includes(row.srNo)}
                        onChange={(event) =>
                          handleCheckboxChange(event, row.srNo)
                        }
                      />
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.expdate}</TableCell>
                    <TableCell align="left">{row.Supplier}</TableCell>
                    <TableCell align="left">
                      <div className="blog-img">
                        <img src={ProductImage} alt="ProductImage" />
                      </div>
                    </TableCell>
                    <TableCell align="left">--</TableCell>
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
          {/* Table End */}

          {/* Pagination */}
          <div>
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
          </div>
          {/* Pagination END */}
        </div>
      </div>
    </>
  );
};

export default DeletedCategories;
