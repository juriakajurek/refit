import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import servicesChoiceStyles from "./servicesChoice.module.scss";
import { graphql, useStaticQuery, navigate } from "gatsby";
import RoomsForValuation from "../components/roomsForValuation";
import { connect } from "react-redux";
import RoomServices from "../components/roomServices";
import LinkButton from "../components/linkButton";

const ServicesChoice = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("showedRoom")) {
      setShowedRoom(urlParams.get("showedRoom"));
      navigate(`/servicesChoice`);
    }
  });

  const [showedRoom, setShowedRoom] = useState("");
  const mapStateToProps = ({
    // isHouse,
    // address,
    // startDate,
    // flatArea,
    valuation,
    selectedRooms,
  }) => {
    return {
      //  isHouse, address, startDate, flatArea,
      valuation,
      selectedRooms,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setValuation: (valuation) => {
        dispatch({ type: `SET_VALUATION`, valuation });
      },
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
    if (showedRoom == e.target.parentNode.children[0].innerHTML) {
      setShowedRoom(null);
    } else {
      // const json = {
      //   wycena: {
      //     id,
      //     pokoje: [
      //       {
      //         id,
      //         nazwa,
      //         kategorie: [
      //           {
      //             id,
      //             uslugi: [
      //               {
      //                 id,
      //                 nazwa,
      //                 wartosc,
      //               },
      //             ],
      //           },
      //           {
      //             id,
      //             usluga,
      //           },
      //         ],
      //       },
      //       {},
      //     ],
      //   },
      // };

      setShowedRoom(e.target.parentNode.children[0].innerHTML);
    }
  };
  return (
    <Layout heading="Wycena" selectedStep={2} backArrow={true}>
      <div className={servicesChoiceStyles.servicesChoice}>
        <ConnectedRoomsForValuation icon="list" onClick={showTarget} />
        <ConnectedRoomServices showedRoom={showedRoom} />
        <LinkButton title="Dalej" to="/contactForm" />
      </div>
      {/* <Form /> */}
    </Layout>
  );
};

export default ServicesChoice;
