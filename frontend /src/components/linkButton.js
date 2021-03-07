import { Link } from "gatsby";
import React from "react";
import inputFieldStyles from "./inputField.module.scss";

const LinkButton = (props) => {
  return (
    <Link to={props.to} className={inputFieldStyles.link}>
      <div className={inputFieldStyles.inputContainer}>
        <button
          disabled={props.disabled ? true : false}
          id="submit-button"
          style={props.style}
          type="submit"
          className={`${inputFieldStyles.input} ${inputFieldStyles.button} ${
            props.disabled ? inputFieldStyles.disable : ""
          }`}
        >
          {props.title}
        </button>
      </div>
    </Link>
  );
};

export default LinkButton;
