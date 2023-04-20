import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { getRandomNumber } from "./utils";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

const MainComponent = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const iconsAmount = iconList.length;

  const handleClick = () => {
    const iconId = getRandomNumber(0, iconsAmount);
    setTimeout(() => {
      setActiveIcon(iconList[iconId]);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {activeIcon && <FontAwesomeIcon fontSize="50px" icon={activeIcon} />}
    </div>
  );
};

export default MainComponent;
