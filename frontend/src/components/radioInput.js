import React from "react";
import formStyles from "./form.module.scss";

const RadioInput = (props) => {
  return (
    <div className={formStyles.radio}>
      <label>
        <input
          type="radio"
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className={formStyles.box}></span>
        <span>
          {props.value.charAt(0).toUpperCase() +
            props.value.slice(1).toLowerCase()}
        </span>
      </label>
    </div>
  );
};

export default RadioInput;
