import React, { useState } from "react";
import ServiceCardStyles from "./serviceCard.module.scss";
import { connect } from "react-redux";
import Paragraph from "./paragraph";
import Plus from "../images/plus.svg";
import ServiceForm from "./serviceForm";

const ServiceCard = (props) => {
  const BACKEND_URL = process.env.GATSBY_BACKEND_URL;
  const [expanded, setExpanded] = useState(false);
  const mapStateToProps = ({ selectedRooms, serviceForms }) => {
    return {
      selectedRooms,
      serviceForms,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setIsHouse: (isHouse) => {
        dispatch({ type: `SET_IS_HOUSE`, isHouse });
      },
      setAddress: (address) => {
        dispatch({ type: `SET_ADDRESS`, address });
      },
      setStartDate: (startDate) => {
        dispatch({ type: `SET_START_DATE`, startDate });
      },
      setFlatArea: (flatArea) => {
        dispatch({ type: `SET_FLAT_AREA`, flatArea });
      },
      setSelectedRooms: (selectedRooms) => {
        dispatch({ type: `SET_SELECTED_ROOMS`, selectedRooms });
      },
      setServiceForms: (serviceForms) => {
        dispatch({ type: `SET_SERVICE_FORMS`, serviceForms });
      },
    };
  };
  const ConnectedServiceForm = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ServiceForm);
  return (
    <div
      className={`${ServiceCardStyles.serviceCard} ${
        expanded ? ServiceCardStyles.expanded : ""
      }`}
    >
      <div
        className={`${ServiceCardStyles.serviceCardHeader} `}
        onClick={() => {
          setExpanded(!expanded);
        }}
        onKeyDown={() => {
          setExpanded(!expanded);
        }}
        role="button"
        tabIndex="0"
      >
        <img
          className={`${ServiceCardStyles.plusIcon} ${
            expanded ? ServiceCardStyles.xIcon : ""
          }`}
          src={Plus}
          alt="Add sign"
        ></img>
        <img
          className={ServiceCardStyles.icon}
          src={BACKEND_URL + props.element?.icon[0]?.url}
          alt={props.element.icon.name}
        ></img>
        <Paragraph black>{props.element.title}</Paragraph>
      </div>
      <div
        className={`${ServiceCardStyles.serviceCardBody} ${
          expanded ? ServiceCardStyles.expanded : ""
        } `}
      >
        {props.element.services.map((el) => {
          return (
            <ConnectedServiceForm
              key={el.id}
              id={el.id}
              name={el.name}
              hint={el.hint}
              placeholder={el.placeholder}
              tooltip={el.tooltip}
              showedRoom={props.showedRoom}
              categoryId={props.element.strapiId}
              serviceId={el.id}
            ></ConnectedServiceForm>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
