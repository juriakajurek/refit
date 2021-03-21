import React from "react";
import ServiceFormStyles from "./serviceForm.module.scss";
import Paragraph from "./paragraph";
import InputField from "./inputField";

const ServiceForm = (props) => {
  var curr = props.serviceForms.value.filter((el) => {
    return el.name == props.showedRoom;
  });

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
        value={curr[0].values[props.id]}
        onChange={(e) => {
          console.log(curr[0].values);
          curr[0].values[props.id] = e.target.value.toString();
          console.log(curr[0].values);

          var mojewartosci = props.serviceForms.value.filter((el) => {
            if (el.name == props.showedRoom) {
              return { name: el.name, values: curr };
            } else {
              return el;
            }
          });

          props.setServiceForms({
            ...props.serviceForms,
            value: [...mojewartosci],
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
