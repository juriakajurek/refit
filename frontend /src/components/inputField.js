import React from "react";
import inputFieldStyles from "./inputField.module.scss";

const InputField = (props) => {
  //const data = useStaticQuery(graphql``);
  return (
    <input
      placeholder={props.placeholder}
      className={inputFieldStyles.input}
      onBlur={props.onBlur}
    />
  );
};

export default InputField;
