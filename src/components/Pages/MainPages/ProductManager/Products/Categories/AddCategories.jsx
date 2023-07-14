import React, { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import "./AddCategories.css"; // Import the CSS file for styling

const AddCategories = () => {
  const [showUnitField, setShowUnitField] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform the upload logic here
    console.log(file);
  };

  const handleCheckboxChange = (event) => {
    setShowUnitField(event.target.checked);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="card-flow">
        <div className="card-header">
          <h3 className="card-title">Add Categories</h3>
        </div>
        <div className="Add-Categories-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Categories Name :</InputLabel>
                <TextField placeholder="Categories Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Category */}
              <div className="input-field">
                <InputLabel>Category Code :</InputLabel>
                <TextField placeholder="Category code is same as HSN code" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                className="input-field"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  paddingTop: "25px",
                }}
              >
                <Checkbox
                  style={{ marginRight: "2px" }}
                  onChange={handleCheckboxChange}
                />
                <InputLabel> Add as sub taxonomy</InputLabel>
              </div>
            </Grid>

            {showUnitField && (
              <Grid item xs={12} sm={6}>
                <div
                  className="units"
                  // style={{ paddingTop: "31px" }}
                >
                  <div className="input-field">
                    <InputLabel>Select parent category :</InputLabel>
                    <Select
                      value={selectedCategory}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(value) => {
                        if (value === "") {
                          return <div>Select base unit</div>;
                        }
                        return value;
                      }}
                    >
                      <MenuItem value="Piece(s)">Test</MenuItem>
                      <MenuItem value="Piece(s)">Dermatology</MenuItem>
                      <MenuItem value="Piece(s)">Health and Wellness</MenuItem>
                      <MenuItem value="Packet(s)">Hair Growth</MenuItem>
                      <MenuItem value="Gram(s)">Fire Mobality Support</MenuItem>
                    </Select>
                  </div>
                </div>
              </Grid>
            )}

            <Grid item xs={12} sm={6}>
              {/* Category */}
              <div className="input-field">
                <InputLabel>Sort Number :</InputLabel>
                <TextField placeholder="" type="number" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Logo */}
              <div className="input-field">
                <InputLabel>Thumbnail (640px × 841px) :</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Banner (1920px × 741px) :</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Meta Title */}
              <div className="input-field">
                <InputLabel>Meta Title :</InputLabel>
                <TextField placeholder="Meta title" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Meta Keywords */}
              <div className="input-field">
                <InputLabel>Meta Keywords :</InputLabel>
                <TextField placeholder="Meta keywords" />
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* Meta Description */}
              <div className="input-field">
                <InputLabel>Meta Description :</InputLabel>
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
                <InputLabel>Meta Pixels :</InputLabel>
                <textarea
                  id="meta-pixels"
                  rows="4"
                  placeholder="Meta Pixels"
                ></textarea>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <br />
      <div>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
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
        <br />
      </div>
    </>
  );
};

export default AddCategories;
