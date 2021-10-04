import React from "react";
import roomLabelStyles from "./roomLabel.module.scss";
import Plus from "../images/plus.svg";

const RoomLabel = (props) => {
  return (
    <div
      className={roomLabelStyles.container}
      onClick={props.onClick}
      onKeyDown={props.onClick}
      role="button"
      tabIndex="0"
    >
      <img className={roomLabelStyles.icon} src={Plus} alt="Add sign"></img>
      <p className={roomLabelStyles.title}>{props.children}</p>
    </div>
  );
};

export default RoomLabel;
