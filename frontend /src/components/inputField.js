import React from "react";
import inputFieldStyles from "./inputField.module.scss";
import roomLabelStyles from "./roomLabel.module.scss";
import Plus from "../images/plus.svg";

const InputField = (props) => {
  //const data = useStaticQuery(graphql``);
  return (
    <div className={inputFieldStyles.inputContainer}>
      {/* <div className={inputFieldStyles.input}> */}
      <input
        className={inputFieldStyles.input}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value || ""}
      />
      {props.withIcon ? (
        <div className={inputFieldStyles.iconContainer}>
          <img
            className={inputFieldStyles.icon}
            src={Plus}
            onClick={props.onClick}
            alt="Add sign"
          ></img>
        </div>
      ) : (
        <div />
      )}
      {/* </div> */}
    </div>
  );
};

export default InputField;
