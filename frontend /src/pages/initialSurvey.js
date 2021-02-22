import React from "react";
import { graphql, useStaticQuery } from "gatsby";
//import { Link } from "gatsby";
import Layout from "../components/layout";
import Form from "../components/form";
import initialSurveyStyles from "./initialSurvey.module.scss";
import { connect } from "react-redux";

const InitialSurvey = () => {
  const getDefaultRooms = useStaticQuery(graphql`
    {
      allStrapiDefaultRooms {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const rooms = getDefaultRooms.allStrapiDefaultRooms.edges;
  console.log(rooms);
  const mapStateToProps = ({
    isHouse,
    address,
    startDate,
    flatArea,
    selectedRooms,
  }) => {
    return { isHouse, address, startDate, flatArea, selectedRooms };
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
    };
  };
  const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

  return (
    <Layout
      className={initialSurveyStyles.initialSurveyModule}
      heading="Do wyceny potrzebujemy kilka informacji na temat twojej inwestycji."
      selectedStep={1}
    >
      <ConnectedForm rooms={rooms} />
    </Layout>
  );
};

export default InitialSurvey;
