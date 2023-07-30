import React from "react";
import { TextField, Button, InputLabel, Grid } from "@mui/material";
import "./AddAlert.css";
import HomeIcon from "@mui/icons-material/Home";

const SetAlerts = () => {
  const handleGoBack = () => {
    // Go back to the previous page in the history
    window.history.go(-1);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <i>
            <HomeIcon /> {"-"}{" "}
          </i>
          <h6 style={{ margin: "5px" }}>
            Product Manager - Products - Minimum Quantity Alerts
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
