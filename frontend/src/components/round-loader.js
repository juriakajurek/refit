import React, { useEffect, useState } from "react";
import loaderStyles from "./round-loader.module.scss";
import Logo from "../images/big-logo.svg";

const RoundLoader = (props) => {
  return (
    <div
      className={`${loaderStyles.view} ${
        props.active ? loaderStyles.active : ""
      }`}
    >
      <div className={loaderStyles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RoundLoader;
