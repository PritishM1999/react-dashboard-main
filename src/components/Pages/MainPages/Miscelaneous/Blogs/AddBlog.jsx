import React, { useState } from "react";
import {
  TextField,
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./AddBlog.css"; // Import the CSS file for styling

const AddBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
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

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Add Blog </h3>
        </div>
        <div className="Add-blog-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Title</InputLabel>
                <TextField placeholder="Title" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Category */}
              <div className="input-field">
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Select an Option</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="">Select an Option</MenuItem>
                  <MenuItem value="Category1">Category 1</MenuItem>
                  <MenuItem value="Category2">Category 2</MenuItem>
                  <MenuItem value="Category3">Category 3</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Banner */}
              <div className="input-field">
                <InputLabel>Banner</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Thumbnail */}
              <div className="input-field">
                <InputLabel>Thumbnail</InputLabel>
                <input type="file" onChange={handleFileUpload} />
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* Description */}
              <div className="input-field">
                <InputLabel>Description</InputLabel>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={handleEditorChange}
                  config={{
                    ckfinder: {
                      uploadUrl: "/your_upload_image_endpoint", // Replace with your image upload endpoint
                    },
                  }}
                />
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
          </Grid>
        </div>
      </div>
      <br />
      {/* Submit button */}
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
    </>
  );
};

export default AddBlog;
