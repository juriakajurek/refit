import React from "react";
import paragraphStyles from "./paragraph.module.scss";

const Paragraph = (props) => {
  return (
    <p
      className={
        `${paragraphStyles.question} ${
          props.black ? paragraphStyles.black : ""
        } ${props.white ? paragraphStyles.white : ""} ` + props.className
      }
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
