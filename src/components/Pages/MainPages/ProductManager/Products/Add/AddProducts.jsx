import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  // FormGroup,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  Switch,
  Typography,
  FormControl,
  Modal,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { styled } from "@mui/material/styles";
import "./AddProducts.css";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddBrand from "../Brand/AddBrands";
import AddSuppliers from "../Supplier/AddSuppliers";
import AddCategories from "../Categories/AddCategories";
import AddUnit from "../Unit/AddUnit";
import AddManufacturer from "../Manufacturer/Manufacturer";

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home" },
  // Add more options as needed
];

const brandOptions = [
  { value: "brand1", label: "Brand 1" },
  { value: "brand2", label: "Brand 2" },
  { value: "brand3", label: "Brand 3" },
  // Add more options as needed
];

const supplierOptions = [
  { value: "supplier1", label: "Supplier 1" },
  { value: "supplier2", label: "Supplier 2" },
  { value: "supplier3", label: "Supplier 3" },
  // Add more options as needed
];

const manufacturerOptions = [
  { value: "manufacturer1", label: "Manufacturer 1" },
  { value: "manufacturer2", label: "Manufacturer 2" },
  { value: "manufacturer3", label: "Manufacturer 3" },
  // Add more options as needed
];

const subcategoryOptions = [
  { value: "subcategory1", label: "Subcategory 1" },
  { value: "subcategory2", label: "Subcategory 2" },
  { value: "subcategory3", label: "Subcategory 3" },
  // Add more options as needed
];

// Define dynamic menu items
const shippingOptions = [
  { value: "Select", label: "Select One" },
  { value: "all", label: "All" },
  { value: "pending", label: "Pending Order" },
  { value: "confirm", label: "Ready for Collection" },
  { value: "collected", label: "Collected" },
  { value: "pickedup", label: "Shipped" },
  { value: "delivered", label: "Delivered Orders" },
];

const AddProducts = () => {
  const [brandValue, setBrandValue] = useState(brandOptions[0]);
  const [supplierValue, setSupplierValue] = useState(supplierOptions[0]);
  const [categoryValue, setCategoryValue] = useState(categoryOptions[0]);
  const [subcategoryValue, setSubcategoryValue] = useState(
    subcategoryOptions[0]
  );
  const [manufacturerValue, setManufacturerValue] = useState(
    manufacturerOptions[0]
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform the upload logic here
    console.log(file);
  };

  const handleFileUploadThumbnail = (event) => {
    const file = event.target.files[0];
    // Perform the upload logic here
    // You can use the 'file' object to upload the thumbnail image

    console.log(file);
  };

  const handleFileUploadThumbnailVideo = (event) => {
    const file = event.target.files[0];
    // Perform the upload logic here
    // You can use the 'file' object to upload the thumbnail image

    console.log(file);
  };

  const handleFileUploadGallary = (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Perform the upload logic here
      // You can use the 'file' object to upload the individual image

      // For example, you can create an object with image information and add it to the 'uploadedImages' array
      const imageInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
      };
      uploadedImages.push(imageInfo);
    }

    console.log(uploadedImages);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <div className="add-products-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Product Information</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <InputLabel>Brand :</InputLabel>
                <div className="add-pop-flex">
                  <FormControl fullWidth>
                    <Autocomplete
                      options={brandOptions}
                      value={brandValue}
                      onChange={(event, newValue) => setBrandValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    onClick={() => openModal(<AddBrand />)}
                    className="plus-buttons-add-pro"
                  >
                    <Button className="plus-btn-pro">+</Button>
                  </ButtonGroup>
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <InputLabel>Supplier :</InputLabel>
                <div className="add-pop-flex">
                  <FormControl fullWidth>
                    <Autocomplete
                      options={supplierOptions}
                      value={supplierValue}
                      onChange={(event, newValue) => setSupplierValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    onClick={() => openModal(<AddSuppliers />)}
                    className="plus-buttons-add-pro"
                  >
                    <Button className="plus-btn-pro">+</Button>
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel>Manufacturer :</InputLabel>
                <div className="add-pop-flex">
                  <FormControl fullWidth>
                    <Autocomplete
                      options={manufacturerOptions}
                      value={manufacturerValue}
                      onChange={(event, newValue) =>
                        setManufacturerValue(newValue)
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    onClick={() => openModal(<AddManufacturer />)}
                    className="plus-buttons-add-pro"
                  >
                    <Button className="plus-btn-pro">+</Button>
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel>Category :</InputLabel>
                <div className="add-pop-flex">
                  <FormControl fullWidth>
                    <Autocomplete
                      options={categoryOptions}
                      value={categoryValue}
                      onChange={(event, newValue) => setCategoryValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    onClick={() => openModal(<AddCategories />)}
                    className="plus-buttons-add-pro"
                  >
                    <Button className="plus-btn-pro">+</Button>
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel>Subcategory :</InputLabel>
                <FormControl fullWidth>
                  <Autocomplete
                    options={subcategoryOptions}
                    value={subcategoryValue}
                    onChange={(event, newValue) =>
                      setSubcategoryValue(newValue)
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Product Name :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Product Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Barcode :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Barcode" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Floor :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Floor" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Shelf :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Shalf" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} className="ref-toggle">
                <FormControlLabel
                  label="Refundable:"
                  labelPlacement="start"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
              </Grid>
            </Grid>
          </div>
        </section>
        {/* Modal */}
        <Modal
          open={modalOpen}
          onClose={closeModal}
          style={{ height: "auto", width: "auto" }}
        >
          <div className="modal-wrapper">
            <div className="modal-content">
              <div className="close-button-modal">
                <h1 className="card-title">
                  {modalContent && modalContent.props.title}
                </h1>
                <IconButton onClick={closeModal}>
                  <CloseOutlinedIcon />
                </IconButton>
              </div>
              {modalContent}
            </div>
          </div>
        </Modal>
        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">Product price + stock</Typography>
          </div>

          {/* Title */}
          <div className="add-products-body">
            <div>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <InputLabel>Unit :</InputLabel>
                  <div className="add-pop-flex">
                    <FormControl fullWidth>
                      <InputLabel htmlFor="shipping">Select unit</InputLabel>
                      <Select
                        id="shipping"
                        name="shipping"
                        value={brandValue}
                        onChange={(e) => setBrandValue(e.target.value)}
                      >
                        {shippingOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                      onClick={() => openModal(<AddUnit />)}
                      className="plus-buttons-add-pro"
                    >
                      <Button className="plus-btn-pro">+</Button>
                    </ButtonGroup>
                  </div>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="">Weight :</InputLabel>
                  <FormControl fullWidth>
                    <TextField placeholder="Weight" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="">Item Code :</InputLabel>
                  <FormControl fullWidth>
                    <TextField placeholder="Item Code" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="">Lot Number :</InputLabel>
                  <FormControl fullWidth>
                    <TextField placeholder="Lot Number" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="quantity">Quantity:</InputLabel>
                  <FormControl fullWidth>
                    <TextField
                      placeholder="Enter quantity"
                      id="quantity"
                      type="number"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="date">Expiry Date:</InputLabel>
                  <FormControl fullWidth>
                    <TextField
                      placeholder="Select date"
                      id="date"
                      type="date"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="">COG Price :</InputLabel>
                  <FormControl fullWidth>
                    <TextField placeholder="COG Price" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InputLabel htmlFor="">Selling Price :</InputLabel>
                  <FormControl fullWidth>
                    <TextField placeholder="Selling Price" />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>

        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">Product Images</Typography>
          </div>

          <div className="add-products-body">
            <div className="inp-meta">
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Thumbnail Image (Max 2MB size) :</InputLabel>
                <input type="file" onChange={handleFileUploadThumbnail} />
              </div>

              {/* Thumbnail */}
              <div className="input-field">
                <InputLabel>
                  Gallary Image (Multiple) (Max 2MB size) :
                </InputLabel>
                <input type="file" onChange={handleFileUploadGallary} />
              </div>
            </div>
          </div>
        </section>

        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">Product Video</Typography>
          </div>

          <div className="add-products-body">
            <div className="inp-meta">
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Video Thumbnail Image (Max 2MB size) :</InputLabel>
                <input type="file" onChange={handleFileUploadThumbnailVideo} />
              </div>

              {/* Thumbnail */}
              <div className="input-field">
                <InputLabel>Video Link :</InputLabel>
                <TextField placeholder="Video Link" />
              </div>
            </div>
          </div>
        </section>

        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">Description</Typography>
          </div>

          <div className="add-products-body">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel>Product Description :</InputLabel>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={handleEditorChange}
                  config={{
                    ckfinder: {
                      uploadUrl: "/your_upload_image_endpoint", // Replace with your image upload endpoint
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Other Description :</InputLabel>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={handleEditorChange}
                  config={{
                    ckfinder: {
                      uploadUrl: "/your_upload_image_endpoint", // Replace with your image upload endpoint
                    },
                  }}
                />
              </Grid>
            </Grid>
            <div className="input-field">
              <InputLabel className="input-field-pdf">
                PDF Specification (Max 2MB size) :
              </InputLabel>
              <input type="file" onChange={handleFileUploadThumbnail} />
            </div>
          </div>
        </section>

        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">
              Low Stock Quantity / Estimate Shipping Time
            </Typography>
          </div>

          <div className="add-products-body">
            <div className="low-quantity">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3} className="ref-toggle">
                  <FormControlLabel
                    label="  Low Stock Quantity : "
                    labelPlacement="start"
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Website"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="POS"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Not for Sale"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </section>

        <br />

        <section className="card">
          <div className="filter-head-products">
            <Typography variant="h1">SEO Meta Tags</Typography>
          </div>

          {/* Title */}
          <div className="add-products-body">
            <div className="inp-seo-meta3">
              {/* Meta Title */}
              <div className="input-field">
                <InputLabel>Meta Title :</InputLabel>
                <TextField placeholder="Meta title" />
              </div>

              {/* Meta Keywords */}
              <div className="input-field">
                <InputLabel>Meta Keywords :</InputLabel>
                <TextField placeholder="Meta keywords" />
              </div>
            </div>

            <div className="inp-seo-meta2">
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Description :</InputLabel>
                <textarea placeholder="Description" />
              </div>

              {/* Thumbnail */}
              <div className="input-field">
                <InputLabel>Meta Image (Max 2MB size) :</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </div>

            <div className="inp-seo-meta3">
              {/* Meta Title */}
              <div className="input-field">
                <InputLabel>Header :</InputLabel>
                <TextField placeholder="Meta Header" />
              </div>

              {/* Meta Keywords */}
              <div className="input-field">
                <InputLabel>Footer :</InputLabel>
                <TextField placeholder="Meta Footer" />
              </div>
            </div>
            {/* Description */}

            {/* Meta Description */}
            <div className="input-field">
              <InputLabel>Meta Pixcels :</InputLabel>
              <textarea
                id="meta-description"
                rows="4"
                placeholder="Meta Pixcels"
              ></textarea>
            </div>
            <br />
            {/* Submit button */}
            <div className="add-product-save-btn">
              <Button className="save-btn" variant="contained">
                Save
              </Button>
            </div>
          </div>
        </section>
        <br />
      </div>
    </>
  );
};

export default AddProducts;
