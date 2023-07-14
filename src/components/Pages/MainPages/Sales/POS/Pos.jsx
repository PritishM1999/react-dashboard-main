import React, { useState } from "react";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  Autocomplete,
  Radio,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Search, LocalShipping } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { UilTimes, UilPlus } from "@iconscout/react-unicons";
import "./Pos.css";
import SampleImage from "../../../../../assets/pos/test_product.png";
import PlusImage from "../../../../../assets/pos/plus-image.png";
import countries from "../../Countries/Countries";
import OrderSummaryPopup from "./OrderSummary";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const PoS = () => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [itemCount, setItemCount] = useState(1);
  const [selectedSubscribe, setSubscribe] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showNewCustomerForm, setNewShowCustomerForm] = useState(false);

  const [selectedOption] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const [billingTableProducts, setBillingTableProducts] = useState([]);

  const handleClick = (product) => {
    setBillingTableProducts([...billingTableProducts, product]);
  };

  const handleDelete = (index) => {
    const updatedProducts = [...billingTableProducts];
    updatedProducts.splice(index, 1);
    setBillingTableProducts(updatedProducts);
  };

  const handleSubscribeChange = (event) => {
    setSubscribe(event.target.value);
    if (event.target.value === "Subscribe") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOpenCustomerForm = () => {
    setShowCustomerForm(true);
  };

  const handleCloseCustomerForm = () => {
    setShowCustomerForm(false);
  };

  const handleOpenNewCustomerForm = () => {
    handleCloseCustomerForm();
    setNewShowCustomerForm(true);
  };

  const handleCloseNewCustomerForm = () => {
    setNewShowCustomerForm(false);
  };

  // Sample product data
  const productData = [
    {
      name: "Product Name",
      image: SampleImage,
      price: "$4.200 x 43",
      totalPrice: "$570.000",
    },
    // Add more products here as needed
  ];

  return (
    <>
      <div>
        <div>
          <div className="pos-main-container">
            <section className="product-search">
              <div className="search-container">
                <div className="search-cabin1">
                  <div className="input-field">
                    <TextField placeholder="Search by product Name/Barcode" />
                  </div>
                  <Select
                    className="category-dropdown"
                    displayEmpty
                    value="All Categories"
                    renderValue={(value) => {
                      if (value === "All Categories") {
                        return <div>All Categories</div>;
                      }
                      return value;
                    }}
                  >
                    <MenuItem value="All Categories">All Categories</MenuItem>
                    {/* Add your category options here */}
                  </Select>
                  <Select
                    className="brand-dropdown"
                    displayEmpty
                    value="All Brands"
                    renderValue={(value) => {
                      if (value === "All Brands") {
                        return <div>All Brands</div>;
                      }
                      return value;
                    }}
                  >
                    <MenuItem value="All Brands">All Brands</MenuItem>
                    {/* Add your brand options here */}
                  </Select>
                  <Search className="search-icon" />
                </div>

                {/* Image Card */}
                {/* Images Card End*/}
                {/* Image Section start */}
                <section className="images-section">
                  {productData.map((product, index) => (
                    <div className="image-card">
                      <p className="in-stock">In Stock</p>
                      {/* <p className="out-of-stock">Out of stock</p> */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="overlay">
                        <img
                          src={PlusImage}
                          alt="+"
                          className="plus-img"
                          onClick={() => handleClick(product)}
                        />
                      </div>
                      <h4 className="product-name">Product Name</h4>
                      {/* <del className="cancel-price">$50.000</del> */}
                      <span className="price-span">$30.000</span>
                    </div>
                  ))}
                  {/* dummy image cards Start*/}
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>

                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>

                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  {/* dummy image cards End*/}
                  {/* dummy image cards Start*/}
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>

                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>

                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  <div className="image-card">
                    <p className="in-stock">In Stock</p>
                    <p className="out-of-stock">Out of stock</p>
                    <img
                      src={SampleImage}
                      alt="Product"
                      className="product-image"
                    />
                    <div className="overlay">
                      <img src={PlusImage} alt="+" className="plus-img" />
                    </div>
                    <h4 className="product-name">Product Name</h4>
                    {/* <del className="cancel-price">$50.000</del> */}
                    <span className="price-span">$30.000</span>
                  </div>
                  {/* dummy image cards End*/}
                </section>
                <br />
                {/* Load more */}
                <div className="load-more">
                  <Button className="load-btn" variant="contained">
                    Load More
                  </Button>
                </div>
                {/* Load more end*/}
              </div>
            </section>

            {/* Image Section End */}
            <section className="product-billing">
              <div className="search-container">
                <div className="search-cabin">
                  <div className="input-field">
                    <TextField placeholder="Search by Name / Email / Phone" />
                  </div>

                  <LocalShipping
                    className="delivery-icon"
                    onClick={handleOpenCustomerForm}
                  />
                </div>
              </div>
              <div className="billingtable-mastertable">
                <table className="billingtable">
                  <tbody>
                    {billingTableProducts.map((product, index) => (
                      <tr
                        key={index}
                        style={{ borderBottom: "1px solid #dcdcdc" }}
                      >
                        <td style={{ width: "10%" }}>
                          <div className="input-group1">
                            <input
                              type="number"
                              step="1"
                              value={itemCount}
                              name="quantity"
                              className="quantity-field text-center"
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (
                                  !isNaN(value) &&
                                  value >= 0 &&
                                  value <= 100000
                                ) {
                                  setItemCount(value);
                                }
                              }}
                            />
                          </div>
                        </td>
                        <td align="center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="table-product-image"
                          />
                        </td>
                        <td style={{ width: "50%" }}>
                          <p className="pro-name">{product.name}</p>
                        </td>
                        <td style={{ width: "30%", padding: "1rem" }}>
                          <small>{product.price}</small> <br />
                          <small className="pro-price">
                            {product.totalPrice}
                          </small>
                        </td>
                        <td>
                          <IconButton
                            variant="round"
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon className="trash" />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="total-billing">
                <div className="blc-info">
                  <p>Sub Total</p>
                  <p>Tax</p>
                  <p>Shipping</p>
                  <p>Discount</p>
                </div>

                <div className="blc">
                  <p>$5,304.600</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                </div>
              </div>

              <div className="total-discount">
                <div className="total-discount-head">
                  <h5>Total</h5>
                  <h5>$ 5,304.60</h5>
                </div>
                <div className="shipp-option">
                  <div className="type-discount">
                    <div>
                      <label>Discount Type</label>
                      <br />
                      <select className="d-form">
                        <option>Fixed</option>
                        <option>Percentage(%)</option>
                      </select>
                    </div>

                    <div className="">
                      <label>Discount</label>
                      <br />
                      <div>
                        <div className="">
                          <input
                            type="text"
                            className="d-form"
                            placeholder="Enter discount"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="shipping-btn"
                        data-toggle="dropdown"
                        style={{ marginTop: "2.1rem" }}
                      >
                        Check
                      </button>
                    </div>

                    <RadioGroup
                      value={selectedSubscribe}
                      onChange={handleSubscribeChange}
                    >
                      <FormControlLabel
                        value="Subscribe"
                        control={<Radio />}
                        label="Subscribe"
                      />
                    </RadioGroup>
                    <RadioGroup
                      value={selectedSubscribe}
                      onChange={handleSubscribeChange}
                    >
                      <FormControlLabel
                        value="One Time Order"
                        control={<Radio />}
                        label="One Time Order"
                      />
                    </RadioGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Back Order"
                    />
                  </div>

                  <Dialog open={showPopup} style={{ height: "400px" }}>
                    <DialogTitle id="order-summ-head">
                      Subscribe & Save
                    </DialogTitle>
                    <DialogContent
                      className="months-popup"
                      style={{ padding: "1rem", height: "12rem" }}
                    >
                      {/* Label */}
                      <InputLabel>Delivery Every</InputLabel>

                      {/* Dropdown menu */}
                      <Select style={{ width: "100%" }}>
                        <MenuItem value={1}>1 month</MenuItem>
                        <MenuItem value={2}>3 month</MenuItem>
                      </Select>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={() => setShowPopup(false)}
                        color="primary"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => setShowPopup(false)}
                        id="subscribe-save"
                      >
                        Subscribe & Save
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <div className="submit-order">
                    <Button
                      variant="contained"
                      onClick={handleButtonClick}
                      className="place-order-btn"
                    >
                      Place Order
                    </Button>
                  </div>

                  <Dialog
                    open={isPopupOpen}
                    onClose={handleClosePopup}
                    maxWidth="md"
                    fullWidth
                  >
                    <DialogTitle id="order-summ-head">
                      <InputLabel>Order Summary </InputLabel>

                      <CloseOutlinedIcon
                        onClick={handleClosePopup}
                        style={{ cursor: "pointer" }}
                      />
                    </DialogTitle>
                    <DialogContent style={{ padding: "1rem" }}>
                      <OrderSummaryPopup
                        selectedOption={selectedOption}
                        isChecked={isChecked}
                        onClose={handleClosePopup}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/*Select shipping Address form */}
        {showCustomerForm && (
          <div className="freeze-backdrop">
            <div className="customer-form">
              <div className="shipping-address-head">
                <h2>Shipping Address</h2>
                <i onClick={handleCloseCustomerForm}>
                  <UilTimes />
                </i>
              </div>

              <section className="address-details">
                <div style={{ padding: "1rem" }}>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div></div>
                <div>
                  <p>
                    <span className="bold-para">Address : </span>
                    <span> 3060 Langtown Road Muscatine, IA 5276</span>
                  </p>
                  <p>
                    <span className="bold-para">Postal Code : </span>
                    <span> 3060</span>
                  </p>
                  <p>
                    <span className="bold-para">City : </span>
                    <span> Acton</span>
                  </p>
                  <p>
                    <span className="bold-para">State : </span>
                    <span> Massachusetts</span>
                  </p>
                  <p>
                    <span className="bold-para">Country : </span>
                    <span> United States</span>
                  </p>
                  <p>
                    <span className="bold-para">Phone : </span>
                    <span> 563-999-2754</span>
                  </p>
                </div>
              </section>
              <br />
              <div className="add-new-address">
                <i onClick={handleOpenNewCustomerForm}>
                  <UilPlus />
                </i>
                Add New Address
              </div>
              <br />
              <div className="close-confirm">
                <Button variant="contained" onClick={handleCloseCustomerForm}>
                  Close
                </Button>
                <Button variant="contained" onClick={handleCloseCustomerForm}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        )}
        {showNewCustomerForm && (
          <div className="freeze-backdrop">
            <div className="customer-form">
              <div className="shipping-address-head">
                {/* <p>Sorry customer does not exist.</p> */}
                <h2>Add New Customer</h2>
                <i onClick={handleCloseNewCustomerForm}>
                  <UilTimes />
                </i>
              </div>
              <div className="customer-details-form">
                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="first_name">
                      First Name:
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="First Name"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="lastname">
                      Last Name:
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="email">
                      Email:
                    </label>
                    <div className="form-input">
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="phone">
                      Phone:
                    </label>
                    <div className="form-input">
                      <input
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="address">
                      Address:
                    </label>
                    <div className="form-input">
                      <textarea
                        placeholder="Address"
                        id="address"
                        name="address"
                        className="form-control-address"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="city">
                      City / Parish:
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="City / Parish"
                        id="city"
                        name="city"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="postal_code">
                      Postal Code:
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="Postal Code"
                        id="postal_code"
                        name="zipcode"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label" htmlFor="state">
                      State:
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="State"
                        id="state"
                        name="state"
                        className="form-control"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="details-form">
                  <div className="form-main-div">
                    <label className="form-main-label">Country</label>

                    <Autocomplete
                      className="form-control-dropdn"
                      name="country_name"
                      data-placeholder="Select your country"
                      required
                      disableBorder
                      disablePortal
                      id="combo-box-demo"
                      options={countries}
                      sx={{
                        "& legend": { display: "none" },
                        "& fieldset": { top: 0 },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            "& legend": { display: "none" },
                            "& fieldset": { top: 0 },
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <br />
              <div className="close-confirm">
                <Button
                  variant="contained"
                  onClick={handleCloseNewCustomerForm}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseNewCustomerForm}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PoS;
