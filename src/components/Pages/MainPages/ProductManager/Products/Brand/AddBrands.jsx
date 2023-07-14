import React from "react";
import { TextField, Button, InputLabel, Grid } from "@mui/material";
import "./AddBrands.css"; // Import the CSS file for styling
const AddBrand = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform the upload logic here
    console.log(file);
  };

  return (
    <>
      <div className="card-flow">
        <div className="card-header">
          <h3 className="card-title">Add Brand </h3>
        </div>
        <div className="add-Brand-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Brand Name :</InputLabel>
                <TextField placeholder="Brand Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Category */}
              <div className="input-field">
                <InputLabel>Sort Order :</InputLabel>
                <TextField placeholder="" type="number" />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* Logo */}
              <div className="input-field">
                <InputLabel>Logo :</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Banner : (1920 * 858)</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Meta Title */}
              <div className="input-field">
                <InputLabel>Meta Title</InputLabel>
                <TextField placeholder="Meta title" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Meta Keywords */}
              <div className="input-field">
                <InputLabel>Meta Keywords</InputLabel>
                <TextField placeholder="Meta keywords" />
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* Meta Description */}
              <div className="input-field">
                <InputLabel>Meta Description</InputLabel>
                <textarea
                  id="meta-description"
                  rows="4"
                  placeholder="Meta description"
                ></textarea>
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* Meta Description */}
              <div className="input-field">
                <InputLabel>Meta Pixels</InputLabel>
                <TextField
                  id="meta-pixels"
                  rows="4"
                  placeholder="Meta Pixels"
                ></TextField>
              </div>
            </Grid>
          </Grid>
          <br />
          <div>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              {/* Submit button */}
              <Button
                className="save-btn"
                variant="contained"
                style={{ background: "#7356b2" }}
              >
                Save
              </Button>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
