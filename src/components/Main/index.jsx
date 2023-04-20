import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { getRandomNumber } from "../../utils";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

const Main = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const iconsAmount = iconList.length;

  const handleClick = () => {
    const iconId = getRandomNumber(0, iconsAmount);
    setTimeout(() => {
      setActiveIcon(iconList[iconId]);
    }, 3000);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Button variant="contained" color="warning" onClick={handleClick}>
        Click me
      </Button>
      {activeIcon && <FontAwesomeIcon fontSize="60px" icon={activeIcon} />}
    </Box>
  );
};

export default Main;
