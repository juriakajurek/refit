import React from "react";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.progressBar}>
        <div className={headerStyles.bar}></div>
        <div className={`${headerStyles.dot} ${headerStyles.selected}`}>
          <p className={`${headerStyles.dotNumber} ${headerStyles.selected}`}>
            1
          </p>
        </div>
        <div className={headerStyles.dot}>
          <p className={headerStyles.dotNumber}>2</p>
        </div>
        <div className={headerStyles.dot}>
          <p className={headerStyles.dotNumber}>3</p>
        </div>
      </div>
      <div className={headerStyles.headerModule}>
        <p className={headerStyles.title}>
          Do wyceny potrzebujemy kilka informacji na temat twojej inwestycji.{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
