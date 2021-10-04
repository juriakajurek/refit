import React from "react";
import inputFieldStyles from "./inputField.module.scss";

const ExternalLinkButton = (props) => {
  return (
    <a href={props.to} target="_blank">
      <div className={inputFieldStyles.inputContainer} style={props.style}>
        <button
          disabled={props.disabled ? true : false}
          id="submit-button"
          style={props.style}
          type="submit"
          className={`${inputFieldStyles.input} ${inputFieldStyles.button} ${
            props.disabled ? inputFieldStyles.disable : ""
          }`}
          onClick={props.onClick}
        >
          {props.title}
        </button>
      </div>
    </a>
  );
};

export default ExternalLinkButton;
