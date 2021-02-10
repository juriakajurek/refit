import React from "react";
import roomLabelStyles from "./roomLabel.module.scss";
import Plus from "../images/plus.svg";

const RoomLabel = (props) => {
  return (
    <div className={roomLabelStyles.container}>
      <img className={roomLabelStyles.icon} src={Plus} alt="React Logo"></img>
      <p className={roomLabelStyles.title}>{props.children}</p>
    </div>
  );
};

export default RoomLabel;
