import React from "react";
import headerStyles from "./header.module.scss";
import ProgressBar from "./progressBar";
import leftArrow from "../images/leftArrow.svg";
import { Link } from "gatsby";

const Header = (props) => {
  return (
    <header className={headerStyles.header}>
      <div
        className={`${headerStyles.headerModule} ` + props.className}
        style={props.style}
      >
        {props.backArrow ? (
          <Link
            to={
              props.selectedStep === 2
                ? `/initialSurvey`
                : props.selectedStep === 3
                ? `/servicesChoice`
                : `/contactForm`
            }
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
