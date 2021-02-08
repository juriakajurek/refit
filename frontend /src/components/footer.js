// import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  //const data = useStaticQuery(graphql``);
  return <footer className={footerStyles.footer}></footer>;
};

export default Footer;
