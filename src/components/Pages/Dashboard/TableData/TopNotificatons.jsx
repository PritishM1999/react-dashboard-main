import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TopNotifications = () => {
  const columns = ["Message"];
  const data = [
    {
      Message: "Oily Skin Kit Oily Skin Kit Oily Skin Kit Oily Skin Kit",
    },
    {
      Message: "Oily Skin Kit Oily Skin Kit Oily Skin Kit Oily Skin Kit",
    },
    {
      Message: "Oily Skin Kit Oily Skin Kit Oily Skin Kit Oily Skin Kit",
    },
    {
      Message: "Oily Skin Kit Oily Skin Kit Oily Skin Kit Oily Skin Kit",
    },
    {
      Message: "Oily Skin Kit Oily Skin Kit Oily Skin Kit Oily Skin Kit",
    },
    // Add more data rows here
  ];

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Notifications</h3>
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
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.Message}</TableCell>
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

export default TopNotifications;
