import React from "react";
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  styled,
  Switch,
  FormControlLabel,
} from "@mui/material";
// import "./AddCategories.css";
import "./Roles.css";
const AddRoleAndPremissions = () => {
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
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Add Roles</h3>
        </div>
        <div className="Add-Categories-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Title */}
              <div className="input-field">
                <InputLabel>Role :</InputLabel>
                <TextField placeholder="Enter Role Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Category */}
              <div className="input-field">
                <InputLabel>Description :</InputLabel>
                <TextField placeholder="Enter Role Description" />
              </div>
            </Grid>
          </Grid>
          <br />
          <h3>Permissions</h3>
          <div className="permissions"></div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className="permission-card">
                <div className="permission-card-head">
                  <h5>Dashboard - Module</h5>
                </div>
                <br />
                <div className="permission-card-form">
                  <InputLabel>View Dashboard</InputLabel>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="permission-card">
                <div className="permission-card-head">
                  <h5>Dashboard - Module</h5>
                </div>
                <br />
                <div className="permission-card-form">
                  <InputLabel>View Dashboard</InputLabel>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="permission-card">
                <div className="permission-card-head">
                  <h5>Dashboard - Module</h5>
                </div>
                <br />
                <div className="permission-card-form">
                  <InputLabel>View Dashboard</InputLabel>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="permission-card">
                <div className="permission-card-head">
                  <h5>Dashboard - Module</h5>
                </div>
                <br />
                <div className="permission-card-form">
                  <InputLabel>View Dashboard</InputLabel>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </div>
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
      </div>
    </>
  );
};

export default AddRoleAndPremissions;
