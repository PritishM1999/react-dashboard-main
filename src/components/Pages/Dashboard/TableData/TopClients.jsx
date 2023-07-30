import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Paper,
  // Button,
} from "@mui/material";
import UserImg from "../../../../assets/user.jpg";

const TopClients = () => {
  const columns = ["Image", "Client", "Sales", "Total"];
  const data = [
    {
      image: UserImg,
      Client: "Kyjuan Broqn",
      Sales: "7 Sales",
      Total: "$60.05",
    },
    {
      image: UserImg,
      Client: "Kyjuan Broqn",
      Sales: "7 Sales",
      Total: "$60.05",
    },
    {
      image: UserImg,
      Client: "john Broqn",
      Sales: "2 Sales",
      Total: "$25.05",
    },
    {
      image: UserImg,
      Client: "john Broqn",
      Sales: "2 Sales",
      Total: "$25.05",
    },
    {
      image: UserImg,
      Client: "john Broqn",
      Sales: "2 Sales",
      Total: "$25.05",
    },
    // Add more data rows here
  ];

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Top 5 Clients(2023)</h3>
        </div>
        <div className="main-body2">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ background: "#444444"}}>
                  <TableCell
                  style={{fontFamily: "Poppins", color:"#FFFFFF"}}
                  >#</TableCell>
                  {columns.map((column, index) => (
                    <TableCell key={index}
                    style={{fontFamily: "Poppins",color:"#FFFFFF"}}
                    >{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={row.image}
                        alt="user"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.Client}</TableCell>
                    <TableCell>{row.Sales}</TableCell>
                    <TableCell>{row.Total}</TableCell>
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

export default TopClients;
