import React, { useState } from "react";
import Layout from "./layout";
import ServiceCardStyles from "./serviceCard.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import RoomsForValuation from "./roomsForValuation";
import Header from "./header";
import Paragraph from "./paragraph";
import Plus from "../images/plus.svg";
import TilingWorks from "../images/tilingWorks.svg";

const ServiceCard = (props) => {
  const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

  const [expanded, setExpanded] = useState(false);
  console.log(BACKEND_URL + props.element?.icon[0]?.url);
  return (
    <div
      className={`${ServiceCardStyles.serviceCard} ${
        expanded ? ServiceCardStyles.expanded : ""
      }`}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div className={`${ServiceCardStyles.serviceCardHeader} `}>
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
    </div>
  );
};

export default ServiceCard;
