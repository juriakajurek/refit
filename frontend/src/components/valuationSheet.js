import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Person from "../images/person.svg";
import Logo from "../images/logo.svg";
import House from "../images/house.svg";
import Calendar from "../images/calendar.svg";
import valuationStyles from "../pages/valuation.module.scss";
import Paragraph from "./paragraph";
import ValuationLogo from "../images/valuationLogo.svg";
import Phone from "../images/phone.svg";
import Envelope from "../images/envelope.svg";
import { Link } from "gatsby";
import Web from "../images/web.svg";

import { getDate } from "../utils/getDate";

const ValuationSheet = (props) => {
  const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

  console.log(props.valuationObject);

  var currName;
  var roomsArray = [];
  props.valuationObject.rooms.forEach((element) => {
    if (currName == element.Name) return;

    currName = element.Name;
    console.log(element.Name);
    roomsArray.push(
      props.valuationObject.rooms.filter((r) => {
        return r.Name == currName;
      })
    );
  });

  console.log(roomsArray);

  var currGrossWorksCost = 0;
  var currNetWorksCost = 0;

  return (
    <div id="valuationContainer" className={valuationStyles.valuationContainer}>
      <div className={valuationStyles.pdf}>
        <div id="valuationContent" className={valuationStyles.content}>
          <div className={valuationStyles.header}>
            <div className={valuationStyles.title}>
              <h5>Wycena</h5>
              <p>z dnia {props.valuationObject.documentDate}</p>
            </div>
            {/* ~questionnaire.createdAt  */}
            <div className={valuationStyles.infoCardContainer}>
              <div className={valuationStyles.hr}></div>
              <div className={valuationStyles.infoCard}>
                <div className={valuationStyles.icon}>
                  <img
                    className={valuationStyles.icon}
                    src={Person}
                    alt="icon"
                  ></img>
                </div>
                <div className={valuationStyles.infoCardContent}>
                  <h3>{props.valuationObject.name}</h3>
                  <p>{props.valuationObject.phoneNumber}</p>
                  <p>{props.valuationObject.email}</p>
                </div>
              </div>
              <div className={valuationStyles.infoCard}>
                <div className={valuationStyles.icon}>
                  <img
                    className={valuationStyles.icon}
                    src={House}
                    alt="icon"
                  ></img>
                </div>
                <div className={valuationStyles.infoCardContent}>
                  <h3>
                    {props.valuationObject.isHouse ? "Dom " : "Mieszkanie "}
                    {props.valuationObject.flatArea} m²
                  </h3>
                  <p>{props.valuationObject.address}</p>
                </div>
              </div>

              {props.valuationObject.startDate ? (
                <div className={valuationStyles.infoCard}>
                  <div className={valuationStyles.icon}>
                    <img
                      className={valuationStyles.icon}
                      src={Calendar}
                      alt="icon"
                    ></img>
                  </div>
                  <div className={valuationStyles.infoCardContent}>
                    <h3>
                      {getDate(new Date(props.valuationObject.startDate))}
                    </h3>
                    <p>Preferowany termin rozpoczęcia prac</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {/* ------- */}
          {roomsArray.map((room) => {
            var gottenCategories = [];
            var categoriesArray = [];
            room.forEach((element) => {
              if (gottenCategories.includes(element.category.title)) return;

              gottenCategories.push(element.category.title);
              console.log(element.category.title);
              categoriesArray.push(
                room.filter((r) => {
                  console.log(r);
                  return r.category.title == element.category.title;
                })
              );
            });
            console.log("categoriesArray");
            console.log(categoriesArray); //

            var currGrossRoomCost = 0;
            var currNetRoomCost = 0;

            return (
              <>
                <div className={valuationStyles.hr}></div>
                <div className={valuationStyles.room}>
                  <h4 className={valuationStyles.roomHeader}>{room[0].Name}</h4>

                  {/* /dla każdej category/ */}
                  {categoriesArray.map((ca) => {
                    return (
                      <>
                        <div
                          className={`${valuationStyles.serviceCardHeader} `}
                        >
                          <img
                            className={valuationStyles.serviceIcon}
                            src={BACKEND_URL + ca[0].category.icon[0].url}
                            alt="icon"
                          ></img>
                          <h5 black className={valuationStyles.serviceHeader}>
                            {ca[0].category.title}
                          </h5>
                        </div>

                        <div className={valuationStyles.services}>
                          {ca.map((service) => {
                            console.log("service");
                            console.log(service);

                            currGrossRoomCost +=
                              service.service.grossUnitPrice * service.value;

                            currNetRoomCost +=
                              service.service.netUnitPrice * service.value;

                            currGrossWorksCost +=
                              service.service.grossUnitPrice * service.value;

                            currNetWorksCost +=
                              service.service.netUnitPrice * service.value;

                            return (
                              <div
                                className={`${valuationStyles.serviceContainer} `}
                              >
                                <div
                                  className={`${valuationStyles.description}`}
                                >
                                  <h4
                                    className={`${valuationStyles.serviceAmount} `}
                                  >
                                    {service.value}
                                    {service.service.placeholder}
                                  </h4>
                                  <div
                                    className={`${valuationStyles.textContainer}`}
                                  >
                                    <h5
                                      black
                                      className={valuationStyles.serviceHeader}
                                    >
                                      {service.service.name}
                                    </h5>
                                    <h5 className={valuationStyles.hint}>
                                      {service.service.hint}
                                    </h5>
                                  </div>
                                </div>
                                <div className={`${valuationStyles.price}`}>
                                  <h5
                                    black
                                    className={valuationStyles.priceHeader}
                                  >
                                    {service.service.grossUnitPrice *
                                      service.value}
                                    zł
                                  </h5>
                                  <h5 className={valuationStyles.hint}>
                                    {service.service.netUnitPrice *
                                      service.value}{" "}
                                    zł netto
                                  </h5>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}

                  <div className={valuationStyles.summary}>
                    <div className={`${valuationStyles.summaryDescription} `}>
                      <h5 black className={valuationStyles.header}>
                        Koszt całkowity wykończenia pomieszczenia
                      </h5>
                    </div>
                    <div className={`${valuationStyles.summaryPrice}`}>
                      <h5 black className={valuationStyles.priceHeader}>
                        {currGrossRoomCost} zł
                      </h5>
                      <h5 className={valuationStyles.hint}>
                        {currNetRoomCost} netto
                      </h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className={valuationStyles.hr}></div>
          <div className={valuationStyles.servicesSummary}>
            <div className={`${valuationStyles.textContainer}`}>
              <h4 className={valuationStyles.servicesSummaryHeader}>
                Koszt całkowity prac
              </h4>
              <h5 black className={valuationStyles.header}>
                Koszt całkowity wykończenia wszystkich pomieszczeń
              </h5>
            </div>

            <div className={`${valuationStyles.price}`}>
              <h5 black className={valuationStyles.priceHeader}>
                {currGrossWorksCost} zł
              </h5>
              <h5 className={valuationStyles.hint}>
                {currNetWorksCost} zł netto
              </h5>
            </div>
          </div>
          <div className={valuationStyles.hr}></div>

          <div className={valuationStyles.materials}>
            <h4 className={valuationStyles.roomHeader}>
              Materiały niezbędne do wykonania prac
            </h4>

            <div className={valuationStyles.services}>
              <div className={`${valuationStyles.serviceContainer} `}>
                <div className={`${valuationStyles.description}`}>
                  <div className={`${valuationStyles.textContainer}`}>
                    <h5 black className={valuationStyles.serviceHeader}>
                      {"zaprawy, klej do płytek"}
                    </h5>{" "}
                  </div>
                </div>
                <div className={`${valuationStyles.price}`}>
                  <h5 black className={valuationStyles.priceHeader}>
                    184,50 zł
                  </h5>{" "}
                  <h5 className={valuationStyles.hint}>150 zł netto</h5>
                </div>
              </div>
              <div className={`${valuationStyles.serviceContainer} `}>
                <div className={`${valuationStyles.description}`}>
                  <div className={`${valuationStyles.textContainer}`}>
                    <h5 black className={valuationStyles.serviceHeader}>
                      gniazdko elektryczne
                    </h5>{" "}
                  </div>
                </div>
                <div className={`${valuationStyles.price}`}>
                  <h5 black className={valuationStyles.priceHeader}>
                    19,68 zł
                  </h5>{" "}
                  <h5 className={valuationStyles.hint}>16 zł netto</h5>
                </div>
              </div>
            </div>

            <div className={valuationStyles.servicesSummary}>
              <div className={valuationStyles.hr}></div>

              <div className={`${valuationStyles.textContainer}`}>
                <h4 className={valuationStyles.servicesSummaryHeader}>
                  Koszt całkowity materiałów
                </h4>
                <h5 black className={valuationStyles.header}>
                  Koszt całkowity materiałów Koszt całkowity wszystkich
                  niezbędnych materiałów
                </h5>
              </div>

              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  6 654,72 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>6 084 zł netto</h5>
              </div>
            </div>
          </div>
          <div className={valuationStyles.hr}></div>
          <div className={valuationStyles.valuationSummary}>
            <div className={`${valuationStyles.textContainer}`}>
              <h4 className={valuationStyles.servicesSummaryHeader}>
                Koszt całkowity + koszt materiałów
              </h4>
              <h5 black className={valuationStyles.header}>
                Koszt całkowity wykończenia wszystkich pomieszczeń plus koszt
                materiałów
              </h5>
            </div>

            <div className={`${valuationStyles.price}`}>
              <h5 black className={valuationStyles.priceHeader}>
                6 654,72 zł
              </h5>{" "}
              <h5 className={valuationStyles.hint}>6 084 zł netto</h5>
            </div>
          </div>
          <div className={valuationStyles.hr}></div>

          <div className={valuationStyles.contactInfo}>
            <div className={valuationStyles.data}>
              <div className={valuationStyles.description}>
                Dziękujemy za skorzystanie z naszego kalkulatora wycen, jeżeli
                masz jakiekolwiek pytania, bądź jesteś zainteresowany współpracą
                z nami czekamy na twój telefon lub email.
              </div>

              <div className={valuationStyles.contact}>
                <div className={valuationStyles.contactLabel}>
                  <img
                    className={valuationStyles.icon}
                    src={Phone}
                    alt="numer telefonu"
                  ></img>
                  <div className={valuationStyles.textContainer}>
                    889 000 302
                  </div>
                </div>{" "}
                <div className={valuationStyles.contactLabel}>
                  <img
                    className={valuationStyles.icon}
                    src={Phone}
                    alt="numer telefonu"
                  ></img>
                  <div className={valuationStyles.textContainer}>
                    889 000 602
                  </div>
                </div>{" "}
                <div className={valuationStyles.contactLabel}>
                  <img
                    className={valuationStyles.icon}
                    src={Envelope}
                    alt="email"
                  ></img>
                  <div className={valuationStyles.textContainer}>
                    kontakt@refit.pl
                  </div>
                </div>
                <div className={valuationStyles.contactLabel}>
                  <Link
                    href="https://www.refit.pl"
                    target="_blank"
                    className={valuationStyles.link}
                  >
                    <img
                      className={valuationStyles.icon}
                      src={Web}
                      alt="strona internetowa firmy"
                    ></img>
                    <div className={valuationStyles.textContainer}>
                      www.refit.pl
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className={valuationStyles.logo}>
              <img
                className={valuationStyles.icon}
                src={ValuationLogo}
                alt="company logo"
              ></img>
            </div>
          </div>
          {/* <div className={valuationStyles.footer}>
            <img className={valuationStyles.logo} src={Logo} alt="icon"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ValuationSheet;
