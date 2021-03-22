import React from "react";
import {
  Icon,
  Slider,
  TextField,
  IconButton,
  InputAdornment,
  Hidden
} from "@material-ui/core";

const ListTopbar = ({
  viewMode,
  sliderValue,
  textfieldValue,
  handleSldierChange,
  handleInputChange,
  handleViewChange
}) => {
  return (
    <div className="flex flex-wrap flex-middle flex-space-between">
      
      <div className="flex flex-middle">
        <TextField
          value={textfieldValue}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            )
          }}
        ></TextField>
      </div>

      <div className="flex flex-middle">
        <Hidden xsDown>
          <Slider
            style={{ width: "120px", marginRight: "18px" }}
            value={sliderValue}
            onChange={handleSldierChange}
            aria-labelledby="continuous-slider"
          />

          <IconButton
            color={viewMode === "grid" ? "primary" : "default"}
            onClick={() => handleViewChange("grid")}
          >
            <Icon>view_comfy</Icon>
          </IconButton>

          <IconButton
            color={viewMode === "list" ? "primary" : "default"}
            onClick={() => handleViewChange("list")}
          >
            <Icon>list</Icon>
          </IconButton>

        </Hidden>
      </div>

    </div>
  );
};

export default ListTopbar;
