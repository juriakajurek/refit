import React from "react";
import inputFieldStyles from "./inputField.module.scss";
import roomLabelStyles from "./roomLabel.module.scss";
import Plus from "../images/plus.svg";

const manageArea = (value) => {
  if (
    value &&
    value.length > 1 &&
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(
      parseInt(
        value[
          value.length - 1 //jesli ostatnia jest cyfrą
        ]
      )
    ) &&
    !value[value.length - 2].match(/[a-z]/i) //i przed ostatnia nie jest literą
  ) {
    return value + "m²";
  } else if (
    value[value.length - 2] === "m" && //jesli na koncu jest m2 bez indeksu górnego
    value[value.length - 1] === "2"
  ) {
    let curr = value;
    curr = curr.replace("2", "²");
    return curr.toString();
  } else if (
    value &&
    value.length == 1 && //jesli jest tylko jeden znak
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(
      parseInt(
        value[
          value.length - 1 //i jest on cyfra
        ]
      )
    )
  ) {
    return value + "m²";
  } else return value;
};

const InputField = (props) => {
  //const data = useStaticQuery(graphql``);
  return (
    <div className={inputFieldStyles.inputContainer}>
      {/* <div className={inputFieldStyles.input}> */}
      <input
        spellCheck="false"
        className={`${inputFieldStyles.input} ${
          props.white ? inputFieldStyles.white : ""
        } ${props.horizontalFlat ? inputFieldStyles.horizontalFlat : ""} `}
        style={props.style}
        placeholder={props.placeholder}
        onBlur={
          props.manageArea
            ? (i) => {
                console.log("manageArea");
                console.log(i.currentTarget.value);

                i.currentTarget.value = manageArea(
                  i.currentTarget.value.toString()
                );
                props.setArea(i.currentTarget.value.toString());
                console.log(i.currentTarget.value);
              }
            : () => {}
        }
        onChange={props.onChange}
        value={props.value || ""}
      />
      {props.withIcon ? (
        <div className={inputFieldStyles.iconContainer}>
          <img
            className={inputFieldStyles.icon}
            src={Plus}
            onClick={props.onClick}
            alt="icon"
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
