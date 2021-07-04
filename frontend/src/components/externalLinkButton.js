import React from "react";
import inputFieldStyles from "./inputField.module.scss";

const ExternalLinkButton = (props) => {
  return (
    <a
      href={!props.disabled ? props.to : null}
      target={props.target}
      className={inputFieldStyles.link}
    >
      <div className={inputFieldStyles.inputContainer}>
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