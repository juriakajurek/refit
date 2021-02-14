import React from "react";
import inputFieldStyles from "./inputField.module.scss";
import roomLabelStyles from "./roomLabel.module.scss";
import Plus from "../images/plus.svg";

const InputField = (props) => {
  //const data = useStaticQuery(graphql``);
  return (
    <div className={inputFieldStyles.inputContainer}>
      <input
        placeholder={props.placeholder}
        className={inputFieldStyles.input}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.withIcon ? (
        <img
          className={inputFieldStyles.icon}
          src={Plus}
          onClick={props.onClick}
          alt="Add sign"
        ></img>
      ) : (
        <div />
      )}
    </div>
  );
};

export default InputField;
