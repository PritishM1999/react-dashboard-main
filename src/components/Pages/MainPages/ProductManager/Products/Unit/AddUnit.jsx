import React, { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

const AddUnit = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showUnitField, setShowUnitField] = useState(false);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setShowUnitField(event.target.checked);
  };

  return (
    <>
      <div className="card-flow">
        <div className="card-header">
          <h3 className="card-title">Add Units</h3>
        </div>
        <div className="add-Brand-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Name:</InputLabel>
                <TextField placeholder="Brand Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Short Name:</InputLabel>
                <TextField placeholder="Brand Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Allow decimal:</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Yes</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                className="input-field"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  paddingTop: "36px",
                }}
              >
                <Checkbox
                  style={{ marginRight: "4px" }}
                  onChange={handleCheckboxChange}
                />
                <InputLabel>Add as multiple of other unit</InputLabel>
              </div>
            </Grid>

            {showUnitField && (
              <Grid item xs={12} sm={6}>
                <div className="units">
                  <div className="input-field">
                    <InputLabel>1 Unit =</InputLabel>
                    <TextField placeholder="Brand Name" />
                  </div>
                </div>
              </Grid>
            )}
            {showUnitField && (
              <Grid item xs={12} sm={6}>
                <div className="units" style={{ paddingTop: "31px" }}>
                  <div className="input-field">
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
                      <MenuItem value="Piece(s)">Piece(s)</MenuItem>
                      <MenuItem value="Packet(s)">Packet(s)</MenuItem>
                      <MenuItem value="Gram(s)">Gram(s)</MenuItem>
                    </Select>
                  </div>
                </div>
              </Grid>
            )}
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ marginTop: "20px" }}>
            <Grid item>
              <Button
                className="save-btn"
                variant="contained"
                style={{ background: "#7356b2" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AddUnit;
