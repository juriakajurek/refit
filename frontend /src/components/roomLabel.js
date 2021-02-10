import React from "react";
import roomLabelStyles from "./roomLabel.module.scss";

const RoomLabel = (props) => {
  return (
    <div className={roomLabelStyles.container}>
      <p className={roomLabelStyles.title}>{props.children}</p>
    </div>
  );
};

export default RoomLabel;
