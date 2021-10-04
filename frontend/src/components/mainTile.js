import React from "react";
import mainTileStyles from "./mainTile.module.scss";

const MainTile = (props) => {
  return (
    <div
      className={`${mainTileStyles.tile} ${
        props.disabled ? mainTileStyles.disabled : ""
      }`}
      style={{ background: `url(${props.background})` }}
    >
      <div className={mainTileStyles.text}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MainTile;
