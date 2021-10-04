import React from "react";
import roomsForValuationStyles from "./roomsForValuation.module.scss";
import X from "../images/x.svg";
import List from "../images/list.svg";
import Tick from "../images/tick.svg";

const RoomsForValuation = (props) => {
  return props?.selectedRooms?.value?.length > 0 ? (
    <header className={roomsForValuationStyles.form}>
      {props.withoutHeader ? (
        ""
      ) : (
        <p className={roomsForValuationStyles.question}>
          Pomieszczenia do wyceny:
        </p>
      )}

      <div className={roomsForValuationStyles.labelsContainer}>
        {props.selectedRooms
          ? props.selectedRooms.value.map((el) => {
              return (
                <li key={el} style={{ listStyleType: "none" }}>
                  <div
                    className={roomsForValuationStyles.roomLabel}
                    onClick={(e) =>
                      props.onClick ? props.onClick(e) : () => {}
                    }
                    onKeyDown={(e) =>
                      props.onClick ? props.onClick(e) : () => {}
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <p className={roomsForValuationStyles.paragraph}>{el}</p>
                    <img
                      className={roomsForValuationStyles.icon}
                      src={
                        props.icon === "x"
                          ? X
                          : props.icon === "list"
                          ? List
                          : props.icon === "tick"
                          ? Tick
                          : ""
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
  ) : (
    <div></div>
  );
};

export default RoomsForValuation;
