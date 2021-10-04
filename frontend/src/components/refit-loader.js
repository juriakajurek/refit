import React, { useEffect, useState } from "react";
import loaderStyles from "./refit-loader.module.scss";
import Logo from "../images/big-logo.svg";

const RefitLoader = (props) => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 1500);
  });
  return (
    <div
      className={`${loaderStyles.view} ${
        props.active || isActive === true ? loaderStyles.active : ""
      }`}
    >
      <div className={loaderStyles.logo}>
        <img className={loaderStyles.icon} src={Logo} alt="company logo"></img>
      </div>
    </div>
  );
};

export default RefitLoader;
