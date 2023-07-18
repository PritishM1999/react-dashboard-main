import React from "react";
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Typography,
  FormControl,
} from "@mui/material";

const AddSlider = () => {
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

  // Define dynamic menu items

  return (
    <>
      <div className="add-profiles-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Add Slider</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Page :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor=""> Title :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Enter Employee Email" type="email" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="input-field">
                  <InputLabel>Image (1920 × 741 px) :</InputLabel>
                  <input type="file" onChange={handleFileUploadGallary} />
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Website Link :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Website Link" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Sort Order :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Sort Order" type="number" />
                </FormControl>
              </Grid>
            </Grid>
          </div>
          {/* Submit button */}
          <div className="add-product-save-btn" style={{ padding: "1rem" }}>
            <Button className="save-btn" variant="contained">
              Add
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddSlider;
