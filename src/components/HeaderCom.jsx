import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
function HeaderCom() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Image Slider
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderCom;
