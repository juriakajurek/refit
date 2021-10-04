import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import servicesChoiceStyles from "./servicesChoice.module.scss";
import { navigate } from "gatsby";
import RoomsForValuation from "../components/roomsForValuation";
import { connect } from "react-redux";
import RoomServices from "../components/roomServices";
import RoundLoader from "../components/round-loader";
import LinkButton from "../components/linkButton";

const ServicesChoice = () => {
  const [isFormCompleted, setFormCompleted] = useState(false);
  const [showedRoom, setShowedRoom] = useState("");
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
    console.log("initialSurvey content loaded");
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkForm = () => {
      if (showedRoom) return true;
    };

    if (urlParams.get("showedRoom")) {
      setShowedRoom(urlParams.get("showedRoom"));
      navigate(`/servicesChoice`);
    }
    if (checkForm()) {
      setFormCompleted(true);
    }
  }, [showedRoom]);

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

  const showTarget = (e) => {
    var targetName = e.target.parentNode.querySelector("p").innerText;
    console.log(targetName);
    if (showedRoom === targetName.toString()) {
      setShowedRoom(null);
    } else {
      setShowedRoom(targetName.toString());
    }
  };

  return (
    <>
      <RoundLoader active={!isContentLoaded}></RoundLoader>

      <Layout heading="Wycena" selectedStep={2} backArrow={true}>
        <div className={servicesChoiceStyles.servicesChoice}>
          <ConnectedRoomsForValuation icon="list" onClick={showTarget} />
          <ConnectedRoomServices showedRoom={showedRoom} />
          {isFormCompleted ? (
            <LinkButton title="Dalej" to="/contactForm" />
          ) : (
            <>
              <LinkButton title="Dalej" to="/contactForm" disabled />
              <p
                className={`${servicesChoiceStyles.question} ${servicesChoiceStyles.hint}`}
              >
                Aby przejść dalej wybierz prace, które mamy wykonać w
                poszczególnych pomieszczeniach
              </p>
            </>
          )}
        </div>
        {/* <Form /> */}
      </Layout>
    </>
  );
};

export default ServicesChoice;
