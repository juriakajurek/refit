import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Person from "../images/person.svg";
import Logo from "../images/logo.svg";
import House from "../images/house.svg";
import Calendar from "../images/calendar.svg";
import valuationStyles from "../pages/valuation.module.scss";
import Paragraph from "./paragraph";
// import MeasuringContainer from "./measuringContainer";

const ValuationSheet = (props) => {
  // function getHeightOfElement(element) {
  //   return element.getBoundingClientRect().height;
  // }
  // let height; // = container.clientHeight;
  // let width; // = container.clientWidth;

  // const measureElement = (element) => {
  //   // let height; // = container.clientHeight;
  //   // let width; // = container.clientWidth;
  //   // Creates the hidden div appended to the document body
  //   const container = document.createElement("div");
  //   container.classList.add(valuationStyles.measureContainer);
  //   container.id = "measureContainer";
  //   document.body.appendChild(container);

  //   function delay(ms) {
  //     ms += new Date().getTime();
  //     while (new Date() < ms) {}
  //   }
  //   // Renders the React element into the hidden div
  //   // ReactDOM.render(element, document.getElementById("measureContainer"));
  //   ReactDOM.render(element, container, () => {});

  //   // function getHeight() {
  //   //   const el = document.getElementById("measureContainer");

  //   //   if (el.getBoundingClientRect().height) {
  //   //     width = el.getBoundingClientRect().width;
  //   //     height = el.getBoundingClientRect().height;

  //   //     return { height, width };
  //   //   } else {
  //   //     delay(300); // try again in 300 milliseconds
  //   //     getHeight();
  //   //   }
  //   // }

  //   return { height, width };

  //   // ReactDOM.render(element, document.getElementById("___gatsby"));
  //   // ReactDOM.render([...Element.children], container);
  //   // container.appendChild(element);

  //   // document.getElementById("measureContainer").before(element);
  //   // console.log(element());
  //   // console.log(container);
  //   // console.log(container.getBoundingClientRect().height);
  //   // Gets the element size

  //   // while (width == 0) width = container.clientWidth;
  //   // while (height == 0) height = container.clientHeight;
  //   // Removes the element and its wrapper from the document
  //   // ReactDOM.unmountComponentAtNode(container);
  //   // container.parentNode.removeChild(container);
  // };

  // const container = document.createElement("div");
  // container.classList.add(valuationStyles.measureContainer);
  // container.id = "measureContainer";
  // document.body.appendChild(container);
  // ReactDOM.render(element, container, () => {});

  // const measureElement = (element, layerId = "measure-layer") => {
  //   // const measureLayer = document.getElementById(layerId);
  //   const container = document.createElement("div");
  //   container.classList.add(valuationStyles.measureContainer);
  //   container.id = "measureContainer";
  //   document.body.appendChild(container);

  //   ReactDOM.render(
  //     <MeasuringContainer
  //       children={element}
  //       callback={(obj) => {
  //         console.log(obj.h, obj.w);

  //         var event = new CustomEvent("objectRendered", {
  //           dimensions: {
  //             height: obj.h,
  //             width: obj.w,
  //           },
  //         });
  //         console.log(Date.now());

  //         document.dispatchEvent(event);
  //       }}
  //     />,
  //     container
  //   );

  //   document.addEventListener("objectRendered", function (e) {
  //     console.log(Date.now());
  //     console.log(e.dimensions); // Prints "Example of an event"
  //   });

  //   // console.log(temp);
  //   // console.log(temp());
  //   // console.log(element);
  //   // console.log(measureLayer);
  //   // console.log(document.getElementById("measureContainer"));
  //   // let h = document.getElementById("measureContainer").clientHeight;
  //   // let w = document.getElementById("measureContainer").clientWidth;
  //   // return { h, w };
  //   ReactDOM.unmountComponentAtNode(container);
  //   return;
  // };

  // useEffect(() => {
  // let wynik = measureElement(temp());
  // });
  // console.log(Temp);
  // return <Temp />;
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
            <div className={valuationStyles.hr}></div>
            <div className={valuationStyles.infoCardContainer}>
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
                    {props.valuationObject.isHouse ? "Dom" : "Mieszkanie"}
                    {props.valuationObject.flatArea}
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
                    <h3>{props.valuationObject.startDate}</h3>
                    <p>Preferowany termin rozpoczęcia prac</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={valuationStyles.hr}></div>
          </div>
          {/* ------- */}
          {props.valuationObject.rooms.forEach((room) => {
            return (
              <div className={valuationStyles.room}>
                <h4 className={valuationStyles.roomHeader}>{room.Name}</h4>
                <div className={`${valuationStyles.serviceCardHeader} `}>
                  <img
                    className={valuationStyles.serviceIcon}
                    src={Calendar}
                    alt="icon"
                  ></img>
                  <h5 black className={valuationStyles.serviceHeader}>
                    {room.category.title}
                  </h5>
                </div>
                <div className={valuationStyles.services}>
                  <div className={`${valuationStyles.serviceContainer} `}>
                    <div className={`${valuationStyles.description}`}>
                      <h4 className={`${valuationStyles.serviceAmount} `}>
                        6m2
                      </h4>
                      <div className={`${valuationStyles.textContainer}`}>
                        <h5 black className={valuationStyles.serviceHeader}>
                          {"Kafelkowanie podłóg"}
                        </h5>{" "}
                        <h5 className={valuationStyles.hint}>
                          (format płytki od 30x30 do 90x90)
                        </h5>
                      </div>
                    </div>
                    <div className={`${valuationStyles.price}`}>
                      <h5 black className={valuationStyles.priceHeader}>
                        648 zł
                      </h5>{" "}
                      <h5 className={valuationStyles.hint}>600 zł nettoo</h5>
                    </div>
                  </div>
                  <div className={`${valuationStyles.serviceContainer} `}>
                    <div className={`${valuationStyles.description}`}>
                      <h4 className={`${valuationStyles.serviceAmount} `}>
                        12m2
                      </h4>
                      <div className={`${valuationStyles.textContainer}`}>
                        <h5 black className={valuationStyles.serviceHeader}>
                          {"Kafelkowanie ścian"}
                        </h5>
                        <h5 className={valuationStyles.hint}>
                          (format płytki od 30x30 do 90x90)
                        </h5>
                      </div>
                    </div>

                    <div className={`${valuationStyles.price}`}>
                      <h5 black className={valuationStyles.priceHeader}>
                        1 555,20 zł
                      </h5>{" "}
                      <h5 className={valuationStyles.hint}>1 440 zł netto</h5>
                    </div>
                  </div>
                  <div className={`${valuationStyles.serviceContainer} `}>
                    <div className={`${valuationStyles.description}`}>
                      <h4 className={`${valuationStyles.serviceAmount} `}>
                        2m2
                      </h4>
                      <div className={`${valuationStyles.textContainer}`}>
                        <h5 black className={valuationStyles.serviceHeader}>
                          {"Kafelkowanie format specjalny"}
                        </h5>{" "}
                        <h5 className={valuationStyles.hint}>
                          (format płytki od 30x30 do 90x90)
                        </h5>
                      </div>
                    </div>
                    <div className={`${valuationStyles.price}`}>
                      <h5 black className={valuationStyles.priceHeader}>
                        324 zł
                      </h5>{" "}
                      <h5 className={valuationStyles.hint}>300 zł netto</h5>
                    </div>
                  </div>
                </div>

                <div className={valuationStyles.summary}>
                  <div className={`${valuationStyles.summaryDescription} `}>
                    <h5 black className={valuationStyles.header}>
                      Koszt całkowity wykończenia pomieszczenia
                    </h5>
                  </div>
                  <div className={`${valuationStyles.summaryPrice}`}>
                    <h5 black className={valuationStyles.priceHeader}>
                      2 656,80 zł
                    </h5>
                    <h5 className={valuationStyles.hint}>2 460 zł netto</h5>
                  </div>
                </div>
              </div>
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
                5 961,60 zł
              </h5>{" "}
              <h5 className={valuationStyles.hint}>5 520 zł netto</h5>
            </div>
          </div>
          <div className={valuationStyles.hr}></div>
          {/* /////////////////////////////////////// */}

          <div className={`${valuationStyles.materials}`}>
            <h4 className={valuationStyles.materialsHeader}>
              Materiały niezbędne do wykonania prac
            </h4>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>{" "}
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>{" "}
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>{" "}
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>150 zł netto</h5>
              </div>
            </div>
            <div className={`${valuationStyles.materialContainer} `}>
              <div className={`${valuationStyles.textContainer}`}>
                <h5 black className={valuationStyles.materialHeader}>
                  zaprawy, klej do płytek
                </h5>
              </div>
              <div className={`${valuationStyles.price}`}>
                <h5 black className={valuationStyles.priceHeader}>
                  184,50 zł
                </h5>{" "}
                <h5 className={valuationStyles.hint}>w chuj zł netto</h5>
              </div>
            </div>
            {/* /////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationSheet;
