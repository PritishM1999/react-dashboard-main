import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TopLowStocks = () => {
  const columns = ["Title", "Sku", "Current Stock Qty"];
  const data = [
    {
      Title: "Oily Skin Kit",
      Sku: "#OIL910221",
      CurrStockQty: "1",
    },
    {
      Title: "Oily Skin Kit",
      Sku: "#OIL910221",
      CurrStockQty: "1",
    },
    {
      Title: "Oily Skin Kit",
      Sku: "#OIL910221",
      CurrStockQty: "1",
    },
    {
      Title: "Oily Skin Kit",
      Sku: "#OIL910221",
      CurrStockQty: "1",
    },
    {
      Title: "Oily Skin Kit",
      Sku: "#OIL910221",
      CurrStockQty: "1",
    },
    {
        Title: "Oily Skin Kit",
        Sku: "#OIL910221",
        CurrStockQty: "1",
      },
      {
        Title: "Oily Skin Kit",
        Sku: "#OIL910221",
        CurrStockQty: "1",
      },
    // Add more data rows here
  ];

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Low Stocks Products(10)</h3>
        </div>
        <div className="main-body2">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ background: "#444444" }}>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#FFFFFF" }}
                  >
                    #
                  </TableCell>
                  {columns.map((column, index) => (
                    <TableCell
                    align="center"
                      key={index}
                      style={{ fontFamily: "Poppins", color: "#FFFFFF" }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{row.Title}</TableCell>
                    <TableCell align="center">{row.Sku}</TableCell>
                    <TableCell align="center">{row.CurrStockQty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <br />
    </>
  );
};

export default TopLowStocks;
