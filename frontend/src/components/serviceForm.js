import React from "react";
import ServiceFormStyles from "./serviceForm.module.scss";
import Paragraph from "./paragraph";
import InputField from "./inputField";

const ServiceForm = (props) => {
  var curr = props.serviceForms.value.filter((el) => {
    return el.name == props.showedRoom;
  });

  // console.log(curr);
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
        value={curr[0]?.values[props.id]?.value}
        onChange={(e) => {
          // console.log(props.id, props.categoryId, props.serviceId);
          curr[0].values[props.id] = {
            value: e.target.value.toString(),
            categoryId: props.categoryId,
            serviceId: props.serviceId,
          };
          var myVals = props.serviceForms.value.filter((el) => {
            if (el.name == props.showedRoom) {
              return { name: el.name, values: curr };
            } else {
              return el;
            }
          });

          props.setServiceForms({
            ...props.serviceForms,
            value: [...myVals],
          });
        }}
        horizontalFlat
        white
        placeholder={props.placeholder}
        manageArea={
          props.placeholder
            ? props.placeholder.toString().indexOf("m²") >= 0
              ? true
              : false
            : false
        }
        setArea={(area) => {
          curr[0].values[props.id] = {
            value: area,
            categoryId: curr[0]?.values[props.id]?.categoryId,
            serviceId: curr[0]?.values[props.id]?.serviceId,
          };
          var myVals = props.serviceForms.value.filter((el) => {
            if (el.name == props.showedRoom) {
              return { name: el.name, values: curr };
            } else {
              return el;
            }
          });
          props.setServiceForms({
            ...props.serviceForms,
            value: [...myVals],
          });
        }}
      ></InputField>
    </div>
  );
};

export default ServiceForm;
