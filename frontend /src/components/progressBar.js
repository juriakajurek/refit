import React from "react";
import progressBarStyles from "./progressBar.module.scss";
import { Link } from "gatsby";

const ProgressBar = (props) => {
  return (
    <div className={progressBarStyles.progressBar}>
      <div className={progressBarStyles.barsContainer}>
        <div
          className={`${progressBarStyles.leftBar} ${
            props.selectedStep > 1 ? progressBarStyles.past : ""
          }`}
        ></div>
        <div
          className={`${progressBarStyles.rightBar} ${
            props.selectedStep > 2 ? progressBarStyles.past : ""
          }`}
        ></div>
      </div>
      <Link
        className={`${progressBarStyles.dot} ${
          props.selectedStep == 1 ? progressBarStyles.selected : ""
        } ${props.selectedStep > 1 ? progressBarStyles.past : ""}`}
        to="/initialSurvey"
      >
        <p
          className={`${progressBarStyles.dotNumber} ${
            props.selectedStep == 1 ? progressBarStyles.selected : ""
          } ${props.selectedStep > 1 ? progressBarStyles.past : ""}`}
        >
          1
        </p>
      </Link>
      <Link
        className={`${progressBarStyles.dot} ${
          props.selectedStep == 2 ? progressBarStyles.selected : ""
        } ${props.selectedStep > 2 ? progressBarStyles.past : ""}`}
        to="/servicesChoice"
      >
        <p
          className={`${progressBarStyles.dotNumber} ${
            props.selectedStep == 2 ? progressBarStyles.selected : ""
          } ${props.selectedStep > 2 ? progressBarStyles.past : ""}`}
        >
          2
        </p>
      </Link>
      <Link
        className={`${progressBarStyles.dot} ${
          props.selectedStep == 3 ? progressBarStyles.selected : ""
        }`}
        to="/contactForm"
      >
        <p
          className={`${progressBarStyles.dotNumber} ${
            props.selectedStep == 3 ? progressBarStyles.selected : ""
          }`}
        >
          3
        </p>
      </Link>
    </div>
  );
};

export default ProgressBar;
