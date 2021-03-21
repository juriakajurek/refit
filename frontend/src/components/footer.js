// import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import footerStyles from "./footer.module.scss";
import Facebook from "../images/facebook.svg";
import { Link } from "gatsby";

const Footer = () => {
  //const data = useStaticQuery(graphql``);
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socialLink}>
        <Link
          href="https://www.facebook.com/refitWro/"
          target="_blank"
          className={footerStyles.link}
        >
          refit
          <img
            className={footerStyles.icon}
            src={Facebook}
            alt="facebook icon"
          ></img>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
