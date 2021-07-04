import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Person from "../images/person.svg";
import Logo from "../images/logo.svg";
import House from "../images/house.svg";
import Calendar from "../images/calendar.svg";
import valuationStyles from "./valuation.module.scss";
import Paragraph from "../components/paragraph";
import ValuationSheet from "../components/valuationSheet";
import { useQuery, gql } from "@apollo/client";
import { getDate } from "../utils/getDate";
import ExternalLinkButton from "../components/externalLinkButton";

const GET_QUESTIONNAIRE = gql`
  query getQuestionnaire($id: ID!) {
    questionnaire(id: $id) {
      id
      created_at
      firstName
      phoneNumber
      email
      startDate
      isHouse
      flatArea
      address
      rooms {
        id
        Name
        service {
          name
          hint
          placeholder
          grossUnitPrice
          netUnitPrice
        }
        category {
          title
          icon {
            name
            url
          }
        }
        value
      }
    }
  }
`;

const Valuation = () => {
  const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const valuationOnlyMode = params.get("valuationonly");
  const emailMode = params.get("emailmode");
  const valuationId = params.get("valuationId");
  const documentDate = params.get("documentDate");
  const name = params.get("name");

  const { loading, error, data } = useQuery(GET_QUESTIONNAIRE, {
    variables: { id: valuationId },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (
    //czy podane imie i data wyceny zgodna z tym co na bazie; jesli nie to nie pokazuj wyceny
    data.questionnaire.firstName != name ||
    getDate(new Date(data.questionnaire.created_at)) != documentDate
  ) {
    return (
      <div>
        {!valuationOnlyMode ? (
          <Layout noProgressBar heading="Podgląd wyceny" backArrow={true}>
            <div className={valuationStyles.valuationShadow}>
              <Paragraph>
                Podano niepoprawne dane do wygenerowania wyceny. Sprawdź
                poprawność danych i spróbuj ponownie.
              </Paragraph>
            </div>
          </Layout>
        ) : (
          <Paragraph>
            Podano niepoprawne dane do wygenerowania wyceny. Sprawdź poprawność
            danych i spróbuj ponownie.
          </Paragraph>
        )}
      </div>
    );
  }

  var valuationObject = {
    valuationId: data.questionnaire.id,
    documentDate: getDate(new Date(data.questionnaire.created_at)),
    name: data.questionnaire.firstName,
    phoneNumber: data.questionnaire.phoneNumber,
    email: data.questionnaire.email,
    startDate: data.questionnaire.startDate,
    isHouse: data.questionnaire.isHouse,
    flatArea: data.questionnaire.flatArea,
    address: data.questionnaire.address,
    rooms: data.questionnaire.rooms,
  };

  if (emailMode) {
    return (
      <Layout
        noProgressBar
        heading={`Wycena z dnia ${getDate(
          new Date(data.questionnaire.created_at)
        )}`}
        backArrow={false}
      >
        <div className={valuationStyles.valuationShadow}>
          <ValuationSheet valuationObject={valuationObject} />
        </div>
        <ExternalLinkButton
          style={{ margin: "2rem" }}
          btn
          alone
          target="_blank"
          onClick={() => {
            window.open(
              `${BACKEND_URL}/generatePDF?valuationId=${valuationObject.valuationId}&documentDate=${valuationObject.documentDate}&name=${valuationObject.name}`
            );
          }}
          title="Pobierz wycenę"
        ></ExternalLinkButton>
      </Layout>
    );
  } else {
    return (
      <div>
        {!valuationOnlyMode ? (
          <Layout noProgressBar heading="Podgląd wyceny" backArrow={true}>
            <div className={valuationStyles.valuationShadow}>
              <ValuationSheet valuationObject={valuationObject} />
            </div>
          </Layout>
        ) : (
          <ValuationSheet valuationObject={valuationObject} />
        )}
      </div>
    );
  }
};

export default Valuation;
