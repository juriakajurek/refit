import React from "react";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerModule}>
        <h2 className={headerStyles.title}>
          Do wyceny potrzebujemy kilka informacji na temat twojej inwestycji.{" "}
        </h2>
      </div>
    </header>
  );
};

export default Header;
