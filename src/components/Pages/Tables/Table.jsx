import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(ID, InvoiceNo, Date, Client, SubTotal, NetTotal) {
  return { ID, InvoiceNo, Date, Client, SubTotal, NetTotal };
}

const rows = [
  createData(1, "INV-9580840", "Apr 19, 2023", "John", "$455", "$455"),
  createData(2, "INV-80147636", "Apr 18, 2023", "Sam Sena", "$199", "$206"),
  createData(3, "INV-9580840", "Apr 19 2023", "John", "$455", "$455"),
  createData(4, "INV-80147636", "Apr 18, 2023", "Sam Sena", "$199", "$206"),
  createData(5, "INV-9580840", "Apr 19, 2023", "John", "$455", "$455"),
  createData(6, "INV-80147636", "Apr 18, 2023", "Sam Sena", "$199", "$206"),
  createData(7, "INV-9580840", "Apr 19, 2023", "John", "$455", "$455"),
  createData(8, "INV-80147636", "Apr 18, 2023", "Sam Sena", "$199", "$206"),
];

export default function BasicTable() {
  return (
    <div
      className="Table"
      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <h3>Recent Activities</h3>
      <TableContainer component={Paper} style={{ boxShadow: "gray" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Invoice No</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Client</TableCell>
              <TableCell align="left">Sub Total</TableCell>
              <TableCell align="left">Net Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="left">
                  <span className="Invoice" style={{ color: "#337AB7" }}>
                    {row.InvoiceNo}
                  </span>
                </TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">{row.Client}</TableCell>
                <TableCell align="left">{row.SubTotal}</TableCell>
                <TableCell align="left">{row.NetTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
