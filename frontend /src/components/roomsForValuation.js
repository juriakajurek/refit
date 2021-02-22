import React from "react";
import roomsForValuationStyles from "./roomsForValuation.module.scss";
import X from "../images/x.svg";
import List from "../images/list.svg";

const RoomsForValuation = (props) => {
  return (
    <header className={roomsForValuationStyles.form}>
      <p className={roomsForValuationStyles.question}>
        Pomieszczenia do wyceny:
      </p>

      <div className={roomsForValuationStyles.labelsContainer}>
        {props.selectedRooms
          ? props.selectedRooms.value.map((el) => {
              // console.log(el);
              return (
                <li key={el} style={{ listStyleType: "none" }}>
                  <div className={roomsForValuationStyles.roomLabel}>
                    <p className={roomsForValuationStyles.paragraph}>{el}</p>
                    <img
                      className={roomsForValuationStyles.icon}
                      src={props.listIcon ? List : X}
                      onClick={
                        props.listIcon
                          ? (e) => props.onClick(e)
                          : (e) => props.deleteElement(e)
                      }
                      alt="icon"
                    ></img>
                  </div>
                </li>
              );
            })
          : " "}
      </div>
    </header>
  );
};

export default RoomsForValuation;
