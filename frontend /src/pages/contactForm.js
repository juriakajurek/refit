import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/layout";
// import Form from "../components/form";
// import formStyles from "./form.module.scss";
import { graphql, Link, useStaticQuery } from "gatsby";
import initialSurveyStyles from "./initialSurvey.module.scss";
import RoomsForValuation from "../components/roomsForValuation";

const ContactForm = () => {
  // const getRooms = useStaticQuery(graphql`
  //   {
  //     allStrapiRooms {
  //       edges {
  //         node {
  //           Name
  //           id
  //         }
  //       }
  //     }
  //   }
  // `);
  const rooms = ["a", "b"];
  //  getRooms.allStrapiRooms.edges;

  return (
    <Layout
      className={initialSurveyStyles.initialSurveyModule}
      heading="Prawie gotowe"
      selectedStep={3}
      backArrow={true}
    >
      <Link to="/">dfgdfgdf</Link>
      {/* <RoomsForValuation selectedRooms={rooms} /> */}
      {/* <Form /> */}
    </Layout>
  );
};

export default ContactForm;
