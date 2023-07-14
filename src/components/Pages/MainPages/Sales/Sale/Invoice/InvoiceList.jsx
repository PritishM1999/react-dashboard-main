import React, { useState } from "react";
import { MoreVertOutlined, DeleteOutlined } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  IconButton,
  Menu,
} from "@mui/material";
import "./Invoice.css";

const InvoiceList = () => {
  function createData(
    srNo,
    date,
    invoice,
    order_no,
    customer_name,
    amount,
    action
  ) {
    return {
      srNo,
      date,
      invoice,
      order_no,
      customer_name,
      amount,
      action,
    };
  }

  const rows = [
    createData(
      1,
      "12/06/2023",
      "INV-001001",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      2,
      "12/06/2023",
      "INV-001002",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      3,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      4,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      5,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      6,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      7,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      8,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      9,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      10,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      11,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),
    createData(
      12,
      "12/06/2023",
      "INV-001003",
      "PO-005201",
      "Elizabeth Washington",
      "$ 1200.00",
      "View/Delete"
    ),

    // Add more dummy data as needed
  ];

  const [searchText, setSearchText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
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
    const titleMatch = row.invoice
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const orderNoMatch = row.order_no
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const customerNameMatch = row.customer_name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return titleMatch || orderNoMatch || customerNameMatch;
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
      <div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Invoice List</h3>
          </div>
          <div className="BlogsTable">
            {/* Search and Rows per Page */}
            <div className="searchAndNosInvoice">
              <div className="inv-nos">
                Show<span className="spaces"></span>
                <Select
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  label="Rows per page"
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
                <span className="spaces"></span>entries
              </div>
              <div className="search-invoice">
                {/* <TextField
                    label="Search"
                    value={searchText}
                    onChange={handleSearchChange}
                  /> */}
                <OutlinedInput
                  value={searchText}
                  onChange={handleSearchChange}
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="start">Search...</InputAdornment>
                  }
                />
              </div>
            </div>
            {/* Search and Rows per Page END */}

            <TableContainer component={Paper} style={{ boxShadow: "gray" }}>
              {/* Table */}
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Sr. No.
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Date
                    </TableCell>
                    <TableCell align="center"  style={{ fontWeight: "bold" }}>
                      Invoice
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Order No
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Customer Name
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Amount
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
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
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center" style={{ color: "blue" }}>
                        {row.invoice}
                      </TableCell>
                      <TableCell align="center">{row.order_no}</TableCell>
                      <TableCell align="center">{row.customer_name}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
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
                            <VisibilityOffIcon sx={{ marginRight: 1 }} />
                            View
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
            {/* Table END */}
            {/* Pagination */}
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              className="pagination-style-invoice"
              style={{
                display: "flex",
                padding: "1rem",
                justifyContent: "right",
              }}
            />
            {/* Pagination End */}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default InvoiceList;
