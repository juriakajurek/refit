import React from "react";
import Footer from "./footer";
import Header from "./header";

import layoutStyles from "./layout.module.scss";
import ProgressBar from "./progressBar";

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {!props.noProgressBar ? (
          <ProgressBar selectedStep={props.selectedStep} />
        ) : (
          <div></div>
        )}
        <Header
          heading={props.heading}
          backArrow={props.backArrow}
          selectedStep={props.selectedStep}
        />
        {props.children}
        {!props.noFooter ? <Footer /> : <div></div>}
      </div>
    </div>
  );
};

export default Layout;
