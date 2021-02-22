import React, { useState } from "react";
import Layout from "./layout";
import RoomServicesStyles from "./roomServices.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import RoomsForValuation from "./roomsForValuation";
import Header from "./header";
import Paragraph from "./paragraph";
import ServiceCard from "./serviceCard";

const RoomServices = (props) => {
  const getCategories = useStaticQuery(graphql`
    {
      allStrapiCategories {
        edges {
          node {
            title
            icon {
              url
            }
          }
        }
      }
    }
  `);

  const categories = getCategories.allStrapiCategories.edges;
  return props.showedRoom ? (
    <div className={RoomServicesStyles.roomServicesContainer}>
      <Header heading={props.showedRoom} />
      <Paragraph className={RoomServicesStyles.paragraph}>
        Wybierz jakie prace mają zostać wykonane w tym pomieszczeniu.
      </Paragraph>
      <br />
      {categories.map((el) => {
        return <ServiceCard element={el.node} />;
      })}
    </div>
  ) : (
    ""
  );
};

export default RoomServices;