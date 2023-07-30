import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  TableContainer,
  Button,
  Grid,
  Paper,
  Link,
} from "@mui/material";

import "./MainPopup.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import productImage from "../../../../assets/products/sample-product-bone.png";

const MainPopup = ({ onSave, onCancel }) => {
  const data = [
    { name: "Product 1", quantity: 10 },
    { name: "Product 2", quantity: 20 },
    { name: "Product 3", quantity: 15 },
    { name: "Product 1", quantity: 10 },
    { name: "Product 2", quantity: 20 },
    // Add more data as needed
  ];

  // const handleSave = () => {
  //   onSave(productList);
  // };

  return (
    <div className="popup">
      <div className="popup-content3">
        <div className="filter-head">
          <Typography variant="h1">Quick Updates</Typography>
          <IconButton onClick={onCancel} varient="rounded">
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        <div className="orders-container-main" style={{ overflowY: "auto" }}>
          <div className="order-entries-popup">
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6">Emergency / Low Stock</Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6">Expired Medicine </Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              {/* Second Row */}
              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6">Expiring Soon </Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6">Stock Out</Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              {/* Third Row */}
              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6">Block Order</Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="popup-headers-main">
                  <Typography variant="h6"> Reminder </Typography>
                  {/* View All Link */}
                  <Link to="">
                    <p>View All</p>
                  </Link>
                </div>
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <img
                                src={productImage}
                                alt={item.name}
                                style={{ width: "40px", height: "40px" }}
                              />
                              {item.name}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
            <div
              className="add-edit-stocks-button"
              style={{ justifyContent: "flex-end" }}
            >
              {/* <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button> */}
              <Button
                variant="contained"
                onClick={onCancel}
                style={{ background: "#FF4961", float: "right" }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPopup;
