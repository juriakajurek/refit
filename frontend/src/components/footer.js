import React from "react";
import footerStyles from "./footer.module.scss";
import Facebook from "../images/facebook.svg";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socialLink}>
        <a
          href="https://www.facebook.com/refitWro/"
          target="_blank"
          rel="noreferrer"
          className={footerStyles.link}
        >
          refit
          <img
            className={footerStyles.icon}
            src={Facebook}
            alt="facebook icon"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
