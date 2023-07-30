import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  TableContainer,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./AddEditStock.css";
import HomeIcon from "@mui/icons-material/Home";

const AddEditStockPopup = ({ onSave, onCancel }) => {
  const handleGoBack = () => {
    // Go back to the previous page in the history
    window.history.go(-1);
  };

  const [productList, setProductList] = useState([
    {
      productName: "",
      stock: "",
      type: "",
      expiryDate: "",
      qty: "",
      cogPrice: "",
      sellingPrice: "",
    },
  ]);

  const [type, setType] = React.useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...productList];
    list[index][name] = value;
    setProductList(list);
  };

  const handleSave = () => {
    onSave(productList);
  };

  return (
    <>
      {" "}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <i>
            <HomeIcon /> {"-"}{" "}
          </i>
          <h6 style={{ margin: "5px" }}>
            Product Manager - Inventory - Expired Stock
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
      <div className="popup">
        <div className="popup-content3">
          <div className="filter-head">
            <Typography variant="h1">Add / Edit Stocks</Typography>
          </div>
          <div className="orders-container3">
            <div className="order-entries">
              <TableContainer>
                <Table>
                  <TableHead className="orders-table-head-row">
                    <TableRow className="info">
                      <TableCell>Product Name</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Expiry Date</TableCell>
                      <TableCell>Qty</TableCell>
                      <TableCell>COG Price</TableCell>
                      <TableCell>Selling Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Volmizing Primier History</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <Select
                          value={type}
                          onChange={handleChange}
                          displayEmpty
                          style={{ zIndex: 9999 }}
                          MenuProps={{ style: { zIndex: 9999 } }}
                        >
                          <MenuItem value="" className="visible-above">
                            <p>Select Type</p>
                          </MenuItem>
                          <MenuItem value="Increment" className="visible-above">
                            Increment
                          </MenuItem>
                          <MenuItem
                            value="Deccrement"
                            className="visible-above"
                          >
                            Decrement
                          </MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            placeholder="Select date"
                            id="date"
                            type="date"
                          />
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <IconButton
                        // onClick={() => handleDecrementQuantity(index)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <TextField
                          name="qty"
                          type="number"
                          style={{ width: "60px" }}
                          // onChange={(event) => handleInputChange(index, event)}
                        />
                        <IconButton
                        // onClick={() => handleIncrementQuantity(index)}
                        >
                          <AddIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="cogPrice"
                          type="number"
                          placeholder="COG Price"
                          onChange={(event) => handleInputChange(event)}
                          style={{ minWidth: "160px" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="sellingPrice"
                          type="number"
                          placeholder="Selling Price"
                          onChange={(event) => handleInputChange(event)}
                          style={{ minWidth: "160px" }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="add-edit-stocks-button">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button variant="contained" onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditStockPopup;
