import React from "react";
import { TextField, Button, InputLabel, Grid } from "@mui/material";
import "./AddAlert.css";

const SetAlerts = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Minimum Quantity Alerts</h3>
        </div>
        <div className="Add-Alert-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Set Minimum Quantity Alerts :</InputLabel>
                <TextField placeholder="5" type="number" />
              </div>
            </Grid>
          </Grid>

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
        </div>
      </div>
    </>
  );
};

export default SetAlerts;
