import React, { useState, useEffect } from "react";
import axios from "axios";

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
  // const [itemCount, setItemCount] = useState(1);
  const [selectedSubscribe, setSubscribe] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showNewCustomerForm, setNewShowCustomerForm] = useState(false);

  // new useStates
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0);

  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState("Fixed");

  const fetchProducts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.token);
    const apiUrl = `https://api.shopnmac.com/api/admin/product/search/${encodeURIComponent(
      searchQuery
    )}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const products = response.data.data;
      if (products.length === 1) {
        // If there's only one product in the search results, add it to the billing table directly
        handleClick(products[0]);
      } else {
        setSearchResults(products);
      }
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setSearchResults([]);
    }
  };
  

  const calculateDiscount = () => {
    let finalPrice = totalPrice;
  
    if (discountType === "Fixed") {
      finalPrice -= parseFloat(discount);
    } else if (discountType === "Percentage(%)") {
      const discountAmount = (parseFloat(discount) / 100) * totalPrice;
      finalPrice -= discountAmount;
    }
  
    // Update the discountedAmount state
    setDiscountedAmount(finalPrice);
  
    return finalPrice.toFixed(3); // Round the finalPrice to 3 decimal points
  };

  const handleDiscountTypeChange = (e) => {
    setDiscountType(e.target.value);
    // Update the final price and discounted amount when discount type is changed
    calculateDiscount();
  };
  
  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
    // Update the final price and discounted amount when discount value is changed
    calculateDiscount();
  };

  const handleSearch = () => {
    // Perform the API call only if the searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchProducts();
    } else {
      setSearchResults([]); // Clear searchResults when searchQuery is empty
    }
  };

  const handleClick = (product) => {
    const existingProduct = billingTableProducts.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // Product already exists, update its quantity
      setBillingTableProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === existingProduct.id
            ? {
                ...item,
                itemCount: item.itemCount + 1,
                totalPrice: item.selling_price * (item.itemCount + 1),
              }
            : item
        )
      );
    } else {
      // Product does not exist, add it to the billing table with quantity and totalPrice
      setBillingTableProducts((prevProducts) => [
        ...prevProducts,
        { ...product, itemCount: 1, totalPrice: product.selling_price },
      ]);
    }

    // After updating billingTableProducts, we'll also update the total price
    // setTotalPrice(calculateTotalPrice());
  };

  const [selectedOption] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const [billingTableProducts, setBillingTableProducts] = useState([]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    billingTableProducts.forEach((product) => {
      const sellingPrice = parseFloat(product.selling_price);
      const itemCount = parseInt(product.itemCount, 10); // Parse as an integer with base 10

      if (!isNaN(sellingPrice) && !isNaN(itemCount) && itemCount >= 1) {
        totalPrice += sellingPrice * itemCount;
      }
    });

    return totalPrice.toFixed(3); // Round the totalPrice to 3 decimal points
  };

  // State to hold the total price
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  // Update the total price whenever billingTableProducts change
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billingTableProducts]);

  const handleDelete = (index) => {
    const updatedProducts = [...billingTableProducts];
    updatedProducts.splice(index, 1);
    setBillingTableProducts(updatedProducts);

    // After deleting the product, we'll also update the total price
    setTotalPrice(calculateTotalPrice());
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

  return (
    <>
      <div>
        <div>
          <div className="pos-main-container">
            <section className="product-search">
              <div className="search-container">
                <div className="search-cabin1">
                  <div className="input-field">
                    <TextField
                      placeholder="Search by product Name / Barcode"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
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
                  <IconButton onClick={handleSearch}>
                    <Search className="search-icon" />
                  </IconButton>
                </div>

                {/* Image Card */}
                {/* Images Card End*/}
                {/* Image Section start */}
                {/* Image Card for Instock product*/}
                <section className="images-section">
                  {searchResults &&
                    searchResults.map((product) => (
                      <div className="image-card" key={product.id}>
                        <p className="in-stock">In Stock</p>
                        <img
                          src={`https://api.shopnmac.com/${product.thumbnail}`}
                          alt={product.product_name}
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
                        <h4 className="product-name">{product.product_name}</h4>
                        <span className="price-span">
                          $ {product.selling_price}
                        </span>
                      </div>
                    ))}
                  {/* Image Card for Out of Stock product*/}
                  {/* dummy image cards Start*/}
                  <div className="image-card">
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
                              value={product.itemCount}
                              name="quantity"
                              className="quantity-field text-center"
                              defaultValue={1}
                              min={1}
                            />
                          </div>
                        </td>
                        <td align="left">
                          <img
                            src={`https://api.shopnmac.com/${product.thumbnail}`}
                            alt={product.name}
                            className="table-product-image"
                          />
                        </td>
                        <td style={{ width: "50%" }}>
                          <p className="pro-name">{product.product_name}</p>
                        </td>
                        <td style={{ width: "30%", padding: "1rem" }}>
                          <small>
                            $ {product.selling_price} x {product.itemCount}
                          </small>{" "}
                          <br />
                          <small className="pro-price">
                            $ {product.totalPrice}
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
                  <p>$ {calculateTotalPrice()}</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                  <p>$0.000</p>
                </div>
              </div>

              <div className="total-discount">
                <div className="total-discount-head">
                  <h5>Total</h5>
                  <h5>$ {discountedAmount}</h5>
                </div>
                <div className="shipp-option">
                  <div className="type-discount">
                    <div>
                      <label>Discount Type</label>
                      <br />
                      <select
                        className="d-form"
                        onChange={handleDiscountTypeChange}
                      >
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
                            value={discount}
                            onChange={handleDiscountChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="shipping-btn"
                        style={{ marginTop: "2.1rem" }}
                        onClick={calculateDiscount}
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Autocomplete,
//   Radio,
//   InputLabel,
//   RadioGroup,
//   FormControlLabel,
//   Checkbox,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
// } from "@mui/material";
// import { Search, LocalShipping } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { UilTimes, UilPlus } from "@iconscout/react-unicons";
// import "./Pos.css";
// import SampleImage from "../../../../../assets/pos/test_product.png";
// import PlusImage from "../../../../../assets/pos/plus-image.png";
// import countries from "../../Countries/Countries";
// import OrderSummaryPopup from "./OrderSummary";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// const PoS = () => {
//   const [showCustomerForm, setShowCustomerForm] = useState(false);
//   const [selectedValue, setSelectedValue] = React.useState("a");
//   const [itemCount, setItemCount] = useState(1);
//   const [selectedSubscribe, setSubscribe] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showNewCustomerForm, setNewShowCustomerForm] = useState(false);

//   // new useStates
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Fetch product data from the API and update the searchResults state
//     const fetchProducts = async () => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       console.log(user.token);
//       const apiUrl = `https://api.shopnmac.com/api/admin/product/search/${encodeURIComponent(
//         searchQuery
//       )}`; // Construct the API URL with the searchQuery

//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         });

//         if (searchQuery === response.config.url.split('/').pop()) {
//           setSearchResults(response.data.data);
//         }
//         console.log(response.data.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setSearchResults([]);
//       }
//     };

//     // Perform the API call only if the searchQuery is not empty
//     if (searchQuery.trim() !== "") {
//       console.log(searchQuery);
//       console.log(searchResults);
//       fetchProducts();
//     }
//   },
//   [searchQuery, searchResults]); // Include searchQuery in the dependency array

//   const handleClick = (product) => {
//     setBillingTableProducts([...billingTableProducts, product]);
//   };

//   const [selectedOption] = useState("");

//   const [showPopup, setShowPopup] = useState(false);

//   const [billingTableProducts, setBillingTableProducts] = useState([]);

//   const handleDelete = (index) => {
//     const updatedProducts = [...billingTableProducts];
//     updatedProducts.splice(index, 1);
//     setBillingTableProducts(updatedProducts);
//   };

//   const handleSubscribeChange = (event) => {
//     setSubscribe(event.target.value);
//     if (event.target.value === "Subscribe") {
//       setShowPopup(true);
//     } else {
//       setShowPopup(false);
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   const handleButtonClick = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleOpenCustomerForm = () => {
//     setShowCustomerForm(true);
//   };

//   const handleCloseCustomerForm = () => {
//     setShowCustomerForm(false);
//   };

//   const handleOpenNewCustomerForm = () => {
//     handleCloseCustomerForm();
//     setNewShowCustomerForm(true);
//   };

//   const handleCloseNewCustomerForm = () => {
//     setNewShowCustomerForm(false);
//   };

//   // Sample product data
//   // const productData = [
//   //   {
//   //     name: "Product Name",
//   //     image: SampleImage,
//   //     price: "$4.200 x 43",
//   //     totalPrice: "$570.000",
//   //   },
//   //   // Add more products here as needed
//   // ];

//   return (
//     <>
//       <div>
//         <div>
//           <div className="pos-main-container">
//             <section className="product-search">
//               <div className="search-container">
//                 <div className="search-cabin1">
//                   <div className="input-field">
//                     <TextField
//                       placeholder="Search by product Name / Barcode"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
//                   <Select
//                     className="category-dropdown"
//                     displayEmpty
//                     value="All Categories"
//                     renderValue={(value) => {
//                       if (value === "All Categories") {
//                         return <div>All Categories</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Categories">All Categories</MenuItem>
//                     {/* Add your category options here */}
//                   </Select>
//                   <Select
//                     className="brand-dropdown"
//                     displayEmpty
//                     value="All Brands"
//                     renderValue={(value) => {
//                       if (value === "All Brands") {
//                         return <div>All Brands</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Brands">All Brands</MenuItem>
//                     {/* Add your brand options here */}
//                   </Select>
//                   <Search className="search-icon" />
//                 </div>

//                 {/* Image Card */}
//                 {/* Images Card End*/}
//                 {/* Image Section start */}
//                 {/* Image Card for Instock product*/}
//                 <section className="images-section">
//                   {searchResults &&
//                     searchResults.map((product) => (
//                       <div className="image-card" key={product.id}>
//                         <p className="in-stock">In Stock</p>
//                         <img
//                           // src={`https://api.shopnmac.com/${product.thumbnail}`}
//                           src={`https://api.shopnmac.com/${product.thumbnail}`}
//                           alt={product.product_name}
//                           className="product-image"
//                         />
//                         <div className="overlay">
//                           <img
//                             src={PlusImage}
//                             alt="+"
//                             className="plus-img"
//                             onClick={() => handleClick(product)}
//                           />
//                         </div>
//                         <h4 className="product-name">{product.product_name}</h4>
//                         <span className="price-span">
//                           {product.selling_price}
//                         </span>
//                       </div>
//                     ))}
//                   {/* Image Card for Out of Stock product*/}
//                   {/* dummy image cards Start*/}
//                   <div className="image-card">
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   {/* dummy image cards End*/}
//                 </section>
//                 <br />
//                 {/* Load more */}
//                 <div className="load-more">
//                   <Button className="load-btn" variant="contained">
//                     Load More
//                   </Button>
//                 </div>
//                 {/* Load more end*/}
//               </div>
//             </section>

//             {/* Image Section End */}
//             <section className="product-billing">
//               <div className="search-container">
//                 <div className="search-cabin">
//                   <div className="input-field">
//                     <TextField placeholder="Search by Name / Email / Phone" />
//                   </div>

//                   <LocalShipping
//                     className="delivery-icon"
//                     onClick={handleOpenCustomerForm}
//                   />
//                 </div>
//               </div>
//               <div className="billingtable-mastertable">
//                 <table className="billingtable">
//                   <tbody>
//                     {billingTableProducts.map((product, index) => (
//                       <tr
//                         key={index}
//                         style={{ borderBottom: "1px solid #dcdcdc" }}
//                       >
//                         <td style={{ width: "10%" }}>
//                           <div className="input-group1">
//                             <input
//                               type="number"
//                               step="1"
//                               value={itemCount}
//                               name="quantity"
//                               className="quantity-field text-center"
//                               onChange={(e) => {
//                                 const value = parseInt(e.target.value);
//                                 if (
//                                   !isNaN(value) &&
//                                   value >= 0 &&
//                                   value <= 100000
//                                 ) {
//                                   setItemCount(value);
//                                 }
//                               }}
//                             />
//                           </div>
//                         </td>
//                         <td align="left">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="table-product-image"
//                           />
//                         </td>
//                         <td style={{ width: "50%" }}>
//                           <p className="pro-name">{product.name}</p>
//                         </td>
//                         <td style={{ width: "30%", padding: "1rem" }}>
//                           <small>{product.price}</small> <br />
//                           <small className="pro-price">
//                             {product.totalPrice}
//                           </small>
//                         </td>
//                         <td>
//                           <IconButton
//                             variant="round"
//                             onClick={() => handleDelete(index)}
//                           >
//                             <DeleteIcon className="trash" />
//                           </IconButton>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="total-billing">
//                 <div className="blc-info">
//                   <p>Sub Total</p>
//                   <p>Tax</p>
//                   <p>Shipping</p>
//                   <p>Discount</p>
//                 </div>

//                 <div className="blc">
//                   <p>$5,304.600</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                 </div>
//               </div>

//               <div className="total-discount">
//                 <div className="total-discount-head">
//                   <h5>Total</h5>
//                   <h5>$ 5,304.60</h5>
//                 </div>
//                 <div className="shipp-option">
//                   <div className="type-discount">
//                     <div>
//                       <label>Discount Type</label>
//                       <br />
//                       <select className="d-form">
//                         <option>Fixed</option>
//                         <option>Percentage(%)</option>
//                       </select>
//                     </div>

//                     <div className="">
//                       <label>Discount</label>
//                       <br />
//                       <div>
//                         <div className="">
//                           <input
//                             type="text"
//                             className="d-form"
//                             placeholder="Enter discount"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="">
//                       <button
//                         type="button"
//                         className="shipping-btn"
//                         data-toggle="dropdown"
//                         style={{ marginTop: "2.1rem" }}
//                       >
//                         Check
//                       </button>
//                     </div>

//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="Subscribe"
//                         control={<Radio />}
//                         label="Subscribe"
//                       />
//                     </RadioGroup>
//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="One Time Order"
//                         control={<Radio />}
//                         label="One Time Order"
//                       />
//                     </RadioGroup>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={isChecked}
//                           onChange={handleCheckboxChange}
//                         />
//                       }
//                       label="Back Order"
//                     />
//                   </div>

//                   <Dialog open={showPopup} style={{ height: "400px" }}>
//                     <DialogTitle id="order-summ-head">
//                       Subscribe & Save
//                     </DialogTitle>
//                     <DialogContent
//                       className="months-popup"
//                       style={{ padding: "1rem", height: "12rem" }}
//                     >
//                       {/* Label */}
//                       <InputLabel>Delivery Every</InputLabel>

//                       {/* Dropdown menu */}
//                       <Select style={{ width: "100%" }}>
//                         <MenuItem value={1}>1 month</MenuItem>
//                         <MenuItem value={2}>3 month</MenuItem>
//                       </Select>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         color="primary"
//                       >
//                         Close
//                       </Button>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         id="subscribe-save"
//                       >
//                         Subscribe & Save
//                       </Button>
//                     </DialogActions>
//                   </Dialog>

//                   <div className="submit-order">
//                     <Button
//                       variant="contained"
//                       onClick={handleButtonClick}
//                       className="place-order-btn"
//                     >
//                       Place Order
//                     </Button>
//                   </div>

//                   <Dialog
//                     open={isPopupOpen}
//                     onClose={handleClosePopup}
//                     maxWidth="md"
//                     fullWidth
//                   >
//                     <DialogTitle id="order-summ-head">
//                       <InputLabel>Order Summary </InputLabel>

//                       <CloseOutlinedIcon
//                         onClick={handleClosePopup}
//                         style={{ cursor: "pointer" }}
//                       />
//                     </DialogTitle>
//                     <DialogContent style={{ padding: "1rem" }}>
//                       <OrderSummaryPopup
//                         selectedOption={selectedOption}
//                         isChecked={isChecked}
//                         onClose={handleClosePopup}
//                       />
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         {/*Select shipping Address form */}
//         {showCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 <h2>Shipping Address</h2>
//                 <i onClick={handleCloseCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>

//               <section className="address-details">
//                 <div style={{ padding: "1rem" }}>
//                   <Radio
//                     checked={selectedValue === "a"}
//                     onChange={handleChange}
//                     value="a"
//                     name="radio-buttons"
//                     inputProps={{ "aria-label": "A" }}
//                   />
//                 </div>
//                 <div></div>
//                 <div>
//                   <p>
//                     <span className="bold-para">Address : </span>
//                     <span> 3060 Langtown Road Muscatine, IA 5276</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Postal Code : </span>
//                     <span> 3060</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">City : </span>
//                     <span> Acton</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">State : </span>
//                     <span> Massachusetts</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Country : </span>
//                     <span> United States</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Phone : </span>
//                     <span> 563-999-2754</span>
//                   </p>
//                 </div>
//               </section>
//               <br />
//               <div className="add-new-address">
//                 <i onClick={handleOpenNewCustomerForm}>
//                   <UilPlus />
//                 </i>
//                 Add New Address
//               </div>
//               <br />
//               <div className="close-confirm">
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Close
//                 </Button>
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//         {showNewCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 {/* <p>Sorry customer does not exist.</p> */}
//                 <h2>Add New Customer</h2>
//                 <i onClick={handleCloseNewCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>
//               <div className="customer-details-form">
//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="first_name">
//                       First Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="First Name"
//                         id="first_name"
//                         name="first_name"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="lastname">
//                       Last Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Last Name"
//                         id="lastname"
//                         name="lastname"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="email">
//                       Email:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="phone">
//                       Phone:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="number"
//                         placeholder="Phone"
//                         id="phone"
//                         name="phone"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="address">
//                       Address:
//                     </label>
//                     <div className="form-input">
//                       <textarea
//                         placeholder="Address"
//                         id="address"
//                         name="address"
//                         className="form-control-address"
//                         required=""
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="city">
//                       City / Parish:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="City / Parish"
//                         id="city"
//                         name="city"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="postal_code">
//                       Postal Code:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Postal Code"
//                         id="postal_code"
//                         name="zipcode"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="state">
//                       State:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="State"
//                         id="state"
//                         name="state"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label">Country</label>

//                     <Autocomplete
//                       className="form-control-dropdn"
//                       name="country_name"
//                       data-placeholder="Select your country"
//                       required
//                       disableBorder
//                       disablePortal
//                       id="combo-box-demo"
//                       options={countries}
//                       sx={{
//                         "& legend": { display: "none" },
//                         "& fieldset": { top: 0 },
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           sx={{
//                             "& legend": { display: "none" },
//                             "& fieldset": { top: 0 },
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <br />
//               <div className="close-confirm">
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Close
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default PoS;

// import React, { useState } from "react";

// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Autocomplete,
//   Radio,
//   InputLabel,
//   RadioGroup,
//   FormControlLabel,
//   Checkbox,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
// } from "@mui/material";
// import { Search, LocalShipping } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { UilTimes, UilPlus } from "@iconscout/react-unicons";
// import "./Pos.css";
// import SampleImage from "../../../../../assets/pos/test_product.png";
// import PlusImage from "../../../../../assets/pos/plus-image.png";
// import countries from "../../Countries/Countries";
// import OrderSummaryPopup from "./OrderSummary";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// const PoS = () => {
//   const [showCustomerForm, setShowCustomerForm] = useState(false);
//   const [selectedValue, setSelectedValue] = React.useState("a");
//   const [itemCount, setItemCount] = useState(1);
//   const [selectedSubscribe, setSubscribe] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showNewCustomerForm, setNewShowCustomerForm] = useState(false);

//   const [selectedOption] = useState("");

//   const [showPopup, setShowPopup] = useState(false);

//   const [billingTableProducts, setBillingTableProducts] = useState([]);

//   const handleClick = (product) => {
//     setBillingTableProducts([...billingTableProducts, product]);
//   };

//   const handleDelete = (index) => {
//     const updatedProducts = [...billingTableProducts];
//     updatedProducts.splice(index, 1);
//     setBillingTableProducts(updatedProducts);
//   };

//   const handleSubscribeChange = (event) => {
//     setSubscribe(event.target.value);
//     if (event.target.value === "Subscribe") {
//       setShowPopup(true);
//     } else {
//       setShowPopup(false);
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   const handleButtonClick = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleOpenCustomerForm = () => {
//     setShowCustomerForm(true);
//   };

//   const handleCloseCustomerForm = () => {
//     setShowCustomerForm(false);
//   };

//   const handleOpenNewCustomerForm = () => {
//     handleCloseCustomerForm();
//     setNewShowCustomerForm(true);
//   };

//   const handleCloseNewCustomerForm = () => {
//     setNewShowCustomerForm(false);
//   };

//   // Sample product data
//   const productData = [
//     {
//       name: "Product Name",
//       image: SampleImage,
//       price: "$4.200 x 43",
//       totalPrice: "$570.000",
//     },
//     // Add more products here as needed
//   ];

//   return (
//     <>
//       <div>
//         <div>
//           <div className="pos-main-container">
//             <section className="product-search">
//               <div className="search-container">
//                 <div className="search-cabin1">
//                   <div className="input-field">
//                     <TextField placeholder="Search by product Name / Barcode" />
//                   </div>
//                   <Select
//                     className="category-dropdown"
//                     displayEmpty
//                     value="All Categories"
//                     renderValue={(value) => {
//                       if (value === "All Categories") {
//                         return <div>All Categories</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Categories">All Categories</MenuItem>
//                     {/* Add your category options here */}
//                   </Select>
//                   <Select
//                     className="brand-dropdown"
//                     displayEmpty
//                     value="All Brands"
//                     renderValue={(value) => {
//                       if (value === "All Brands") {
//                         return <div>All Brands</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Brands">All Brands</MenuItem>
//                     {/* Add your brand options here */}
//                   </Select>
//                   <Search className="search-icon" />
//                 </div>

//                 {/* Image Card */}
//                 {/* Images Card End*/}
//                 {/* Image Section start */}
//                  {/* Image Card for Instock product*/}
//                 <section className="images-section">
//                   {productData.map((product, index) => (
//                     <div className="image-card">
//                       <p className="in-stock">In Stock</p>
//                       {/* <p className="out-of-stock">Out of stock</p> */}
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                       />
//                       <div className="overlay">
//                         <img
//                           src={PlusImage}
//                           alt="+"
//                           className="plus-img"
//                           onClick={() => handleClick(product)}
//                         />
//                       </div>
//                       <h4 className="product-name">Product Name</h4>
//                       {/* <del className="cancel-price">$50.000</del> */}
//                       <span className="price-span">$30.000</span>
//                     </div>
//                   ))}
//                   {/* Image Card for Out of Stock product*/}
//                   {/* dummy image cards Start*/}
//                   <div className="image-card">
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   {/* dummy image cards End*/}
//                 </section>
//                 <br />
//                 {/* Load more */}
//                 <div className="load-more">
//                   <Button className="load-btn" variant="contained">
//                     Load More
//                   </Button>
//                 </div>
//                 {/* Load more end*/}
//               </div>
//             </section>

//             {/* Image Section End */}
//             <section className="product-billing">
//               <div className="search-container">
//                 <div className="search-cabin">
//                   <div className="input-field">
//                     <TextField placeholder="Search by Name / Email / Phone" />
//                   </div>

//                   <LocalShipping
//                     className="delivery-icon"
//                     onClick={handleOpenCustomerForm}
//                   />
//                 </div>
//               </div>
//               <div className="billingtable-mastertable">
//                 <table className="billingtable">
//                   <tbody>
//                     {billingTableProducts.map((product, index) => (
//                       <tr
//                         key={index}
//                         style={{ borderBottom: "1px solid #dcdcdc" }}
//                       >
//                         <td style={{ width: "10%" }}>
//                           <div className="input-group1">
//                             <input
//                               type="number"
//                               step="1"
//                               value={itemCount}
//                               name="quantity"
//                               className="quantity-field text-center"
//                               onChange={(e) => {
//                                 const value = parseInt(e.target.value);
//                                 if (
//                                   !isNaN(value) &&
//                                   value >= 0 &&
//                                   value <= 100000
//                                 ) {
//                                   setItemCount(value);
//                                 }
//                               }}
//                             />
//                           </div>
//                         </td>
//                         <td align="left">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="table-product-image"
//                           />
//                         </td>
//                         <td style={{ width: "50%" }}>
//                           <p className="pro-name">{product.name}</p>
//                         </td>
//                         <td style={{ width: "30%", padding: "1rem" }}>
//                           <small>{product.price}</small> <br />
//                           <small className="pro-price">
//                             {product.totalPrice}
//                           </small>
//                         </td>
//                         <td>
//                           <IconButton
//                             variant="round"
//                             onClick={() => handleDelete(index)}
//                           >
//                             <DeleteIcon className="trash" />
//                           </IconButton>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="total-billing">
//                 <div className="blc-info">
//                   <p>Sub Total</p>
//                   <p>Tax</p>
//                   <p>Shipping</p>
//                   <p>Discount</p>
//                 </div>

//                 <div className="blc">
//                   <p>$5,304.600</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                 </div>
//               </div>

//               <div className="total-discount">
//                 <div className="total-discount-head">
//                   <h5>Total</h5>
//                   <h5>$ 5,304.60</h5>
//                 </div>
//                 <div className="shipp-option">
//                   <div className="type-discount">
//                     <div>
//                       <label>Discount Type</label>
//                       <br />
//                       <select className="d-form">
//                         <option>Fixed</option>
//                         <option>Percentage(%)</option>
//                       </select>
//                     </div>

//                     <div className="">
//                       <label>Discount</label>
//                       <br />
//                       <div>
//                         <div className="">
//                           <input
//                             type="text"
//                             className="d-form"
//                             placeholder="Enter discount"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="">
//                       <button
//                         type="button"
//                         className="shipping-btn"
//                         data-toggle="dropdown"
//                         style={{ marginTop: "2.1rem" }}
//                       >
//                         Check
//                       </button>
//                     </div>

//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="Subscribe"
//                         control={<Radio />}
//                         label="Subscribe"
//                       />
//                     </RadioGroup>
//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="One Time Order"
//                         control={<Radio />}
//                         label="One Time Order"
//                       />
//                     </RadioGroup>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={isChecked}
//                           onChange={handleCheckboxChange}
//                         />
//                       }
//                       label="Back Order"
//                     />
//                   </div>

//                   <Dialog open={showPopup} style={{ height: "400px" }}>
//                     <DialogTitle id="order-summ-head">
//                       Subscribe & Save
//                     </DialogTitle>
//                     <DialogContent
//                       className="months-popup"
//                       style={{ padding: "1rem", height: "12rem" }}
//                     >
//                       {/* Label */}
//                       <InputLabel>Delivery Every</InputLabel>

//                       {/* Dropdown menu */}
//                       <Select style={{ width: "100%" }}>
//                         <MenuItem value={1}>1 month</MenuItem>
//                         <MenuItem value={2}>3 month</MenuItem>
//                       </Select>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         color="primary"
//                       >
//                         Close
//                       </Button>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         id="subscribe-save"
//                       >
//                         Subscribe & Save
//                       </Button>
//                     </DialogActions>
//                   </Dialog>

//                   <div className="submit-order">
//                     <Button
//                       variant="contained"
//                       onClick={handleButtonClick}
//                       className="place-order-btn"
//                     >
//                       Place Order
//                     </Button>
//                   </div>

//                   <Dialog
//                     open={isPopupOpen}
//                     onClose={handleClosePopup}
//                     maxWidth="md"
//                     fullWidth
//                   >
//                     <DialogTitle id="order-summ-head">
//                       <InputLabel>Order Summary </InputLabel>

//                       <CloseOutlinedIcon
//                         onClick={handleClosePopup}
//                         style={{ cursor: "pointer" }}
//                       />
//                     </DialogTitle>
//                     <DialogContent style={{ padding: "1rem" }}>
//                       <OrderSummaryPopup
//                         selectedOption={selectedOption}
//                         isChecked={isChecked}
//                         onClose={handleClosePopup}
//                       />
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         {/*Select shipping Address form */}
//         {showCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 <h2>Shipping Address</h2>
//                 <i onClick={handleCloseCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>

//               <section className="address-details">
//                 <div style={{ padding: "1rem" }}>
//                   <Radio
//                     checked={selectedValue === "a"}
//                     onChange={handleChange}
//                     value="a"
//                     name="radio-buttons"
//                     inputProps={{ "aria-label": "A" }}
//                   />
//                 </div>
//                 <div></div>
//                 <div>
//                   <p>
//                     <span className="bold-para">Address : </span>
//                     <span> 3060 Langtown Road Muscatine, IA 5276</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Postal Code : </span>
//                     <span> 3060</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">City : </span>
//                     <span> Acton</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">State : </span>
//                     <span> Massachusetts</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Country : </span>
//                     <span> United States</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Phone : </span>
//                     <span> 563-999-2754</span>
//                   </p>
//                 </div>
//               </section>
//               <br />
//               <div className="add-new-address">
//                 <i onClick={handleOpenNewCustomerForm}>
//                   <UilPlus />
//                 </i>
//                 Add New Address
//               </div>
//               <br />
//               <div className="close-confirm">
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Close
//                 </Button>
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//         {showNewCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 {/* <p>Sorry customer does not exist.</p> */}
//                 <h2>Add New Customer</h2>
//                 <i onClick={handleCloseNewCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>
//               <div className="customer-details-form">
//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="first_name">
//                       First Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="First Name"
//                         id="first_name"
//                         name="first_name"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="lastname">
//                       Last Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Last Name"
//                         id="lastname"
//                         name="lastname"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="email">
//                       Email:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="phone">
//                       Phone:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="number"
//                         placeholder="Phone"
//                         id="phone"
//                         name="phone"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="address">
//                       Address:
//                     </label>
//                     <div className="form-input">
//                       <textarea
//                         placeholder="Address"
//                         id="address"
//                         name="address"
//                         className="form-control-address"
//                         required=""
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="city">
//                       City / Parish:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="City / Parish"
//                         id="city"
//                         name="city"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="postal_code">
//                       Postal Code:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Postal Code"
//                         id="postal_code"
//                         name="zipcode"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="state">
//                       State:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="State"
//                         id="state"
//                         name="state"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label">Country</label>

//                     <Autocomplete
//                       className="form-control-dropdn"
//                       name="country_name"
//                       data-placeholder="Select your country"
//                       required
//                       disableBorder
//                       disablePortal
//                       id="combo-box-demo"
//                       options={countries}
//                       sx={{
//                         "& legend": { display: "none" },
//                         "& fieldset": { top: 0 },
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           sx={{
//                             "& legend": { display: "none" },
//                             "& fieldset": { top: 0 },
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <br />
//               <div className="close-confirm">
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Close
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default PoS;

// import React, { useState } from "react";

// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Autocomplete,
//   Radio,
//   InputLabel,
//   RadioGroup,
//   FormControlLabel,
//   Checkbox,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
// } from "@mui/material";
// import { Search, LocalShipping } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { UilTimes, UilPlus } from "@iconscout/react-unicons";
// import "./Pos.css";
// import SampleImage from "../../../../../assets/pos/test_product.png";
// import PlusImage from "../../../../../assets/pos/plus-image.png";
// import countries from "../../Countries/Countries";
// import OrderSummaryPopup from "./OrderSummary";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// const PoS = () => {
//   const [showCustomerForm, setShowCustomerForm] = useState(false);
//   const [selectedValue, setSelectedValue] = React.useState("a");
//   const [itemCount, setItemCount] = useState(1);
//   const [selectedSubscribe, setSubscribe] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showNewCustomerForm, setNewShowCustomerForm] = useState(false);

//   const [selectedOption] = useState("");

//   const [showPopup, setShowPopup] = useState(false);

//   const [billingTableProducts, setBillingTableProducts] = useState([]);

//   const handleClick = (product) => {
//     setBillingTableProducts([...billingTableProducts, product]);
//   };

//   const handleDelete = (index) => {
//     const updatedProducts = [...billingTableProducts];
//     updatedProducts.splice(index, 1);
//     setBillingTableProducts(updatedProducts);
//   };

//   const handleSubscribeChange = (event) => {
//     setSubscribe(event.target.value);
//     if (event.target.value === "Subscribe") {
//       setShowPopup(true);
//     } else {
//       setShowPopup(false);
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   const handleButtonClick = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleOpenCustomerForm = () => {
//     setShowCustomerForm(true);
//   };

//   const handleCloseCustomerForm = () => {
//     setShowCustomerForm(false);
//   };

//   const handleOpenNewCustomerForm = () => {
//     handleCloseCustomerForm();
//     setNewShowCustomerForm(true);
//   };

//   const handleCloseNewCustomerForm = () => {
//     setNewShowCustomerForm(false);
//   };

//   // Sample product data
//   const productData = [
//     {
//       name: "Product Name",
//       image: SampleImage,
//       price: "$4.200 x 43",
//       totalPrice: "$570.000",
//     },
//     // Add more products here as needed
//   ];

//   return (
//     <>
//       <div>
//         <div>
//           <div className="pos-main-container">
//             <section className="product-search">
//               <div className="search-container">
//                 <div className="search-cabin1">
//                   <div className="input-field">
//                     <TextField placeholder="Search by product Name / Barcode" />
//                   </div>
//                   <Select
//                     className="category-dropdown"
//                     displayEmpty
//                     value="All Categories"
//                     renderValue={(value) => {
//                       if (value === "All Categories") {
//                         return <div>All Categories</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Categories">All Categories</MenuItem>
//                     {/* Add your category options here */}
//                   </Select>
//                   <Select
//                     className="brand-dropdown"
//                     displayEmpty
//                     value="All Brands"
//                     renderValue={(value) => {
//                       if (value === "All Brands") {
//                         return <div>All Brands</div>;
//                       }
//                       return value;
//                     }}
//                   >
//                     <MenuItem value="All Brands">All Brands</MenuItem>
//                     {/* Add your brand options here */}
//                   </Select>
//                   <Search className="search-icon" />
//                 </div>

//                 {/* Image Card */}
//                 {/* Images Card End*/}
//                 {/* Image Section start */}
//                 <section className="images-section">
//                   {productData.map((product, index) => (
//                     <div className="image-card">
//                       <p className="in-stock">In Stock</p>
//                       {/* <p className="out-of-stock">Out of stock</p> */}
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                       />
//                       <div className="overlay">
//                         <img
//                           src={PlusImage}
//                           alt="+"
//                           className="plus-img"
//                           onClick={() => handleClick(product)}
//                         />
//                       </div>
//                       <h4 className="product-name">Product Name</h4>
//                       {/* <del className="cancel-price">$50.000</del> */}
//                       <span className="price-span">$30.000</span>
//                     </div>
//                   ))}
//                   {/* dummy image cards Start*/}
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>

//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>

//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   {/* dummy image cards End*/}
//                   {/* dummy image cards Start*/}
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>

//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>

//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   <div className="image-card">
//                     <p className="in-stock">In Stock</p>
//                     <p className="out-of-stock">Out of stock</p>
//                     <img
//                       src={SampleImage}
//                       alt="Product"
//                       className="product-image"
//                     />
//                     <div className="overlay">
//                       <img src={PlusImage} alt="+" className="plus-img" />
//                     </div>
//                     <h4 className="product-name">Product Name</h4>
//                     {/* <del className="cancel-price">$50.000</del> */}
//                     <span className="price-span">$30.000</span>
//                   </div>
//                   {/* dummy image cards End*/}
//                 </section>
//                 <br />
//                 {/* Load more */}
//                 <div className="load-more">
//                   <Button className="load-btn" variant="contained">
//                     Load More
//                   </Button>
//                 </div>
//                 {/* Load more end*/}
//               </div>
//             </section>

//             {/* Image Section End */}
//             <section className="product-billing">
//               <div className="search-container">
//                 <div className="search-cabin">
//                   <div className="input-field">
//                     <TextField placeholder="Search by Name / Email / Phone" />
//                   </div>

//                   <LocalShipping
//                     className="delivery-icon"
//                     onClick={handleOpenCustomerForm}
//                   />
//                 </div>
//               </div>
//               <div className="billingtable-mastertable">
//                 <table className="billingtable">
//                   <tbody>
//                     {billingTableProducts.map((product, index) => (
//                       <tr
//                         key={index}
//                         style={{ borderBottom: "1px solid #dcdcdc" }}
//                       >
//                         <td style={{ width: "10%" }}>
//                           <div className="input-group1">
//                             <input
//                               type="number"
//                               step="1"
//                               value={itemCount}
//                               name="quantity"
//                               className="quantity-field text-center"
//                               onChange={(e) => {
//                                 const value = parseInt(e.target.value);
//                                 if (
//                                   !isNaN(value) &&
//                                   value >= 0 &&
//                                   value <= 100000
//                                 ) {
//                                   setItemCount(value);
//                                 }
//                               }}
//                             />
//                           </div>
//                         </td>
//                         <td align="left">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="table-product-image"
//                           />
//                         </td>
//                         <td style={{ width: "50%" }}>
//                           <p className="pro-name">{product.name}</p>
//                         </td>
//                         <td style={{ width: "30%", padding: "1rem" }}>
//                           <small>{product.price}</small> <br />
//                           <small className="pro-price">
//                             {product.totalPrice}
//                           </small>
//                         </td>
//                         <td>
//                           <IconButton
//                             variant="round"
//                             onClick={() => handleDelete(index)}
//                           >
//                             <DeleteIcon className="trash" />
//                           </IconButton>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="total-billing">
//                 <div className="blc-info">
//                   <p>Sub Total</p>
//                   <p>Tax</p>
//                   <p>Shipping</p>
//                   <p>Discount</p>
//                 </div>

//                 <div className="blc">
//                   <p>$5,304.600</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                   <p>$0.000</p>
//                 </div>
//               </div>

//               <div className="total-discount">
//                 <div className="total-discount-head">
//                   <h5>Total</h5>
//                   <h5>$ 5,304.60</h5>
//                 </div>
//                 <div className="shipp-option">
//                   <div className="type-discount">
//                     <div>
//                       <label>Discount Type</label>
//                       <br />
//                       <select className="d-form">
//                         <option>Fixed</option>
//                         <option>Percentage(%)</option>
//                       </select>
//                     </div>

//                     <div className="">
//                       <label>Discount</label>
//                       <br />
//                       <div>
//                         <div className="">
//                           <input
//                             type="text"
//                             className="d-form"
//                             placeholder="Enter discount"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="">
//                       <button
//                         type="button"
//                         className="shipping-btn"
//                         data-toggle="dropdown"
//                         style={{ marginTop: "2.1rem" }}
//                       >
//                         Check
//                       </button>
//                     </div>

//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="Subscribe"
//                         control={<Radio />}
//                         label="Subscribe"
//                       />
//                     </RadioGroup>
//                     <RadioGroup
//                       value={selectedSubscribe}
//                       onChange={handleSubscribeChange}
//                     >
//                       <FormControlLabel
//                         value="One Time Order"
//                         control={<Radio />}
//                         label="One Time Order"
//                       />
//                     </RadioGroup>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={isChecked}
//                           onChange={handleCheckboxChange}
//                         />
//                       }
//                       label="Back Order"
//                     />
//                   </div>

//                   <Dialog open={showPopup} style={{ height: "400px" }}>
//                     <DialogTitle id="order-summ-head">
//                       Subscribe & Save
//                     </DialogTitle>
//                     <DialogContent
//                       className="months-popup"
//                       style={{ padding: "1rem", height: "12rem" }}
//                     >
//                       {/* Label */}
//                       <InputLabel>Delivery Every</InputLabel>

//                       {/* Dropdown menu */}
//                       <Select style={{ width: "100%" }}>
//                         <MenuItem value={1}>1 month</MenuItem>
//                         <MenuItem value={2}>3 month</MenuItem>
//                       </Select>
//                     </DialogContent>
//                     <DialogActions>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         color="primary"
//                       >
//                         Close
//                       </Button>
//                       <Button
//                         onClick={() => setShowPopup(false)}
//                         id="subscribe-save"
//                       >
//                         Subscribe & Save
//                       </Button>
//                     </DialogActions>
//                   </Dialog>

//                   <div className="submit-order">
//                     <Button
//                       variant="contained"
//                       onClick={handleButtonClick}
//                       className="place-order-btn"
//                     >
//                       Place Order
//                     </Button>
//                   </div>

//                   <Dialog
//                     open={isPopupOpen}
//                     onClose={handleClosePopup}
//                     maxWidth="md"
//                     fullWidth
//                   >
//                     <DialogTitle id="order-summ-head">
//                       <InputLabel>Order Summary </InputLabel>

//                       <CloseOutlinedIcon
//                         onClick={handleClosePopup}
//                         style={{ cursor: "pointer" }}
//                       />
//                     </DialogTitle>
//                     <DialogContent style={{ padding: "1rem" }}>
//                       <OrderSummaryPopup
//                         selectedOption={selectedOption}
//                         isChecked={isChecked}
//                         onClose={handleClosePopup}
//                       />
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         {/*Select shipping Address form */}
//         {showCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 <h2>Shipping Address</h2>
//                 <i onClick={handleCloseCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>

//               <section className="address-details">
//                 <div style={{ padding: "1rem" }}>
//                   <Radio
//                     checked={selectedValue === "a"}
//                     onChange={handleChange}
//                     value="a"
//                     name="radio-buttons"
//                     inputProps={{ "aria-label": "A" }}
//                   />
//                 </div>
//                 <div></div>
//                 <div>
//                   <p>
//                     <span className="bold-para">Address : </span>
//                     <span> 3060 Langtown Road Muscatine, IA 5276</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Postal Code : </span>
//                     <span> 3060</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">City : </span>
//                     <span> Acton</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">State : </span>
//                     <span> Massachusetts</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Country : </span>
//                     <span> United States</span>
//                   </p>
//                   <p>
//                     <span className="bold-para">Phone : </span>
//                     <span> 563-999-2754</span>
//                   </p>
//                 </div>
//               </section>
//               <br />
//               <div className="add-new-address">
//                 <i onClick={handleOpenNewCustomerForm}>
//                   <UilPlus />
//                 </i>
//                 Add New Address
//               </div>
//               <br />
//               <div className="close-confirm">
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Close
//                 </Button>
//                 <Button variant="contained" onClick={handleCloseCustomerForm}>
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//         {showNewCustomerForm && (
//           <div className="freeze-backdrop">
//             <div className="customer-form">
//               <div className="shipping-address-head">
//                 {/* <p>Sorry customer does not exist.</p> */}
//                 <h2>Add New Customer</h2>
//                 <i onClick={handleCloseNewCustomerForm}>
//                   <UilTimes />
//                 </i>
//               </div>
//               <div className="customer-details-form">
//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="first_name">
//                       First Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="First Name"
//                         id="first_name"
//                         name="first_name"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="lastname">
//                       Last Name:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Last Name"
//                         id="lastname"
//                         name="lastname"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="email">
//                       Email:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="phone">
//                       Phone:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="number"
//                         placeholder="Phone"
//                         id="phone"
//                         name="phone"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="address">
//                       Address:
//                     </label>
//                     <div className="form-input">
//                       <textarea
//                         placeholder="Address"
//                         id="address"
//                         name="address"
//                         className="form-control-address"
//                         required=""
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="city">
//                       City / Parish:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="City / Parish"
//                         id="city"
//                         name="city"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="postal_code">
//                       Postal Code:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="Postal Code"
//                         id="postal_code"
//                         name="zipcode"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label" htmlFor="state">
//                       State:
//                     </label>
//                     <div className="form-input">
//                       <input
//                         type="text"
//                         placeholder="State"
//                         id="state"
//                         name="state"
//                         className="form-control"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="details-form">
//                   <div className="form-main-div">
//                     <label className="form-main-label">Country</label>

//                     <Autocomplete
//                       className="form-control-dropdn"
//                       name="country_name"
//                       data-placeholder="Select your country"
//                       required
//                       disableBorder
//                       disablePortal
//                       id="combo-box-demo"
//                       options={countries}
//                       sx={{
//                         "& legend": { display: "none" },
//                         "& fieldset": { top: 0 },
//                       }}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           sx={{
//                             "& legend": { display: "none" },
//                             "& fieldset": { top: 0 },
//                           }}
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <br />
//               <div className="close-confirm">
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Close
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleCloseNewCustomerForm}
//                 >
//                   Confirm
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default PoS;
