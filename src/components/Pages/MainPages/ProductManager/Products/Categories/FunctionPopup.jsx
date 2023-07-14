import React, { useState } from "react";
import {
  Typography,
  InputLabel,
  FormControlLabel,
  Switch,
  styled,
} from "@mui/material";

const FunctionPopup = ({ onSave, onCancel }) => {
  const [isHome] = useState(true);
  const [isRefundable] = useState(true);

  const handleSave = () => {
    // Call the onSave callback with the relevant values
    onSave({
      isHome,
      isRefundable,
    });
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
    <div className="popup">
      <div className="popup-content" style={{ padding: "0px 1rem 1rem 1rem" }}>
        <div className="filter-head">
          <Typography variant="h1">Function</Typography>
        </div>
        <div className="popup-inputs">
          <InputLabel></InputLabel>
          <FormControlLabel
            label="Is Home : "
            labelPlacement="start"
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />

          <div className="popup-buttons">
            <button className="popup-button" onClick={handleSave}>
              Save
            </button>
            <button className="popup-button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionPopup;
