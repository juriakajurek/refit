import React, { useState } from "react";
import Layout from "../components/layout";
import initialSurveyStyles from "./initialSurvey.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import RoomsForValuation from "../components/roomsForValuation";
import { connect } from "react-redux";
import RoomServices from "../components/roomServices";

const ServicesChoice = () => {
  const [showedRoom, setShowedRoom] = useState("");
  const mapStateToProps = ({
    // isHouse,
    // address,
    // startDate,
    // flatArea,
    selectedRooms,
  }) => {
    return {
      //  isHouse, address, startDate, flatArea,
      selectedRooms,
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
    };
  };
  const ConnectedRoomsForValuation = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoomsForValuation);
  const ConnectedRoomServices = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoomServices);

  // const rooms = getRooms.allStrapiDefaultRooms.edges;

  // const rooms = getRooms.allStrapiRooms.edges;
  const showTarget = (e) => {
    setShowedRoom(e.target.parentNode.children[0].innerHTML);
  };
  return (
    <Layout
      className={initialSurveyStyles.initialSurveyModule}
      heading="Wycena"
      selectedStep={2}
      backArrow={true}
    >
      <ConnectedRoomsForValuation listIcon={true} onClick={showTarget} />
      <ConnectedRoomServices showedRoom={showedRoom} />

      {/* <Form /> */}
    </Layout>
  );
};

export default ServicesChoice;
