import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  // Paper,
  // Button,
} from "@mui/material";
import UserImg from "../../../../assets/products/spray-product.jpg";

const NewOrder = () => {
  const columns = ["Item", "Date", "Quantity", "Amount"];
  const data = [
    {
      image: UserImg,
      product: "Skin Refining Masque",
      Date: "Jul 25 2023",
      quantity: "1",
      Amount: "$60.05",
    },
    {
      image: UserImg,
      product: "Skin Refining Masque",
      Date: "Jul 25 2023",
      quantity: "1",
      Amount: "$60.05",
    },
    {
      image: UserImg,
      product: "Skin Refining Masque",
      Date: "Jul 25 2023",
      quantity: "1",
      Amount: "$60.05",
    },
    {
      image: UserImg,
      product: "Skin Refining Masque",
      Date: "Jul 25 2023",
      quantity: "1",
      Amount: "$60.05",
    },
    {
      image: UserImg,
      product: "Skin Refining Masque",
      Date: "Jul 25 2023",
      quantity: "1",
      Amount: "$60.05",
    },
    // Add more data rows here
  ];

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">New Order</h3>
          <Button
            style={{
              background: "#FF4961",
              color: "#FFFFFF",
              fontSize: "14px",
              textTransform: "capitalize",
              borderRadius: "20px",
              height: "2rem",
              width: "100px",
            }}
          >
            View All
          </Button>
        </div>
        <div className="main-body2">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                // style={{ background: "#444444" }}
                >
                  <TableCell style={{ fontFamily: "Poppins" }}>#</TableCell>
                  {columns.map((column, index) => (
                    <TableCell key={index} style={{ fontFamily: "Poppins" }}>
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {row.product}
                      <img
                        src={row.image}
                        alt="user"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "2rem",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell>{row.Amount}</TableCell>
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

export default NewOrder;
