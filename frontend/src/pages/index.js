import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import MainTile from "../components/mainTile";
import indexStyles from "./index.module.scss";

import homeBackgroundImage from "../images/home.jpg";
import calcBackgroundImage from "../images/calc.jpg";
import RefitLoader from "../components/refit-loader";

const IndexPage = () => {
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
    console.log("content loaded");
  }, []);

  return (
    <div className={indexStyles.view}>
      <img
        style={{ display: "none" }}
        src={`${homeBackgroundImage}`}
        alt="home"
      ></img>
      <img
        style={{ display: "none" }}
        src={`${calcBackgroundImage}`}
        alt="valuation calculating"
      ></img>
      <RefitLoader active={!isContentLoaded}></RefitLoader>
      <div className={indexStyles.container}>
        <a
          href="https://www.facebook.com/refitWro/"
          target="_blank"
          rel="noreferrer"
        >
          <MainTile
            title="Odwiedź profil na facebooku i zobacz nasze realizacje"
            background={homeBackgroundImage}
          />
        </a>
        <Link to={`#`}>
          {/* /initialSurvey */}
          <MainTile
            disabled
            title="Kalkulator wycen - już wkrótce!"
            background={calcBackgroundImage}
          />
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
