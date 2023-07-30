import React, { useState, useEffect } from "react";
import "../ProductInventory.css";
import ProductImage from "../../../../../../assets/products/sample-product-bone.png";
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
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import copy from "copy-to-clipboard";
import * as XLSX from "xlsx";
import HomeIcon from "@mui/icons-material/Home";

const ExpiringSoon = () => {
  const handleGoBack = () => {
    // Go back to the previous page in the history
    window.history.go(-1);
  };

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
  const [linesCopied, setLinesCopied] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
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

  const exportExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expired Stocks");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "expired_stocks.xlsx");
  };

  const exportCSV = () => {
    const csvHeaders = ["Sr No", "Name", "Exp Date", "Supplier"];
    const csvRows = selectedRows.map((row) => [
      row.srNo,
      row.name,
      row.expdate,
      row.Supplier,
    ]);

    const csvData = [csvHeaders, ...csvRows];

    const csvContent = csvData
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "expired_stocks.csv");
  };

  const exportPDF = () => {
    html2canvas(document.getElementById("tableContainer")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("expired_stocks.pdf");
    });
  };

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    }
  }, [showPopup]);

  const copyToClipboard = () => {
    const textToCopy = selectedRows.map((row) => row.name).join("\n");
    copy(textToCopy);
    setLinesCopied(selectedRows.length);
    setShowPopup(true);
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <i>
            <HomeIcon /> {"-"}{" "}
          </i>
          <h6 style={{ margin: "5px" }}>
            Product Manager - Inventory - Expiring Soon
          </h6>
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
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Expiring in next few days</h3>
          <div className="copy-button">
            <Button variant="contained" onClick={copyToClipboard}>
              Copy
            </Button>
            <Button variant="contained" onClick={exportExcel}>
              Excel
            </Button>
            <Button variant="contained" onClick={exportCSV}>
              CSV
            </Button>
            <Button variant="contained" onClick={exportPDF}>
              PDF
            </Button>
          </div>
          {/* Popup */}
          {showPopup && (
            <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
              <DialogTitle>Copied to Clipboard</DialogTitle>
              <DialogContent>
                <p>{linesCopied} line(s) copied to clipboard.</p>
              </DialogContent>
            </Dialog>
          )}
          {/* Popup END */}
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
                    Image
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Expired On
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    Supplier
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
                    <TableCell align="left">
                      <div className="blog-img">
                        <img src={ProductImage} alt="ProductImage" />
                      </div>
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.expdate}</TableCell>
                    <TableCell align="left">{row.Supplier}</TableCell>
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

export default ExpiringSoon;
