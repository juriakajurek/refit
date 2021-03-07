import React from "react";
import ServiceFormStyles from "./serviceForm.module.scss";
import Paragraph from "./paragraph";
import InputField from "./inputField";

const ServiceForm = (props) => {
  return (
    <div className={`${ServiceFormStyles.serviceForm} `}>
      <Paragraph black className={`${ServiceFormStyles.serviceFormTitle} `}>
        {props.name}
      </Paragraph>
      <Paragraph
        className={`${ServiceFormStyles.serviceFormHint} `}
        style={{ margin: "-1rem 0 .5rem 0" }}
      >
        {props.hint}
      </Paragraph>
      <InputField
        value={props.serviceForms.value[props.id]}
        onChange={(e) => {
          var curr = [...props.serviceForms.value];
          console.log(curr);

          curr[props.id] = e.target.value.toString();
          console.log(curr);
          props.setServiceForms({
            ...props.serviceForms,
            value: [...curr],
          });
        }}
        horizontalFlat
        white
        placeholder={props.placeholder}
      ></InputField>
    </div>
  );
};

export default ServiceForm;
