import React from "react";
import headerStyles from "./header.module.scss";
import ProgressBar from "./progressBar";
import leftArrow from "../images/leftArrow.svg";
import { Link } from "gatsby";

const Header = (props) => {
  console.log(props.selectedStep);
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.headerModule} ` + props.className}>
        {props.backArrow ? (
          <Link
            to={props.selectedStep === 2 ? `/initialSurvey` : `/servicesChoice`}
          >
            <img
              className={headerStyles.backArrow}
              src={leftArrow}
              alt="back-icon"
            ></img>
          </Link>
        ) : (
          ""
        )}

        <p className={headerStyles.title}>{props.heading}</p>
      </div>
    </header>
  );
};

export default Header;
