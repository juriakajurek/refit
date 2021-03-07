import React from "react";
import Layout from "../components/layout";
// import Form from "../components/form";
// import formStyles from "./form.module.scss";
import { connect } from "react-redux";
import { graphql, Link, useStaticQuery, navigate } from "gatsby";
import initialSurveyStyles from "./initialSurvey.module.scss";
import contactFormStyles from "./contactForm.module.scss";
import RoomsForValuation from "../components/roomsForValuation";
import InputField from "../components/inputField";
import Header from "../components/header";
import Paragraph from "../components/paragraph";
import LinkButton from "../components/linkButton";

const ContactForm = (props) => {
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
  return (
    <Layout heading="Prawie gotowe" selectedStep={3} backArrow={true}>
      <div className={contactFormStyles.contactForm}>
        <ConnectedRoomsForValuation
          icon="tick"
          onClick={(e) => {
            navigate(
              `/servicesChoice?showedRoom=${e.target.parentNode.children[0].innerHTML}`
            );
          }}
        />

        <Header heading="Informacje końcowe" />
        <Paragraph>Podaj nam resztę niezbędnych informacji</Paragraph>
        <br />
        <InputField />
        <InputField />
        <InputField />
        <LinkButton title="Pobierz wycenę"></LinkButton>
        <LinkButton title="Wyślij wycenę na email"></LinkButton>
      </div>
    </Layout>
  );
};

export default ContactForm;
