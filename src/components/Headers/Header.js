import React from "react";
import logoUrl from "../../assets/assets/Tesla_logo.png";
import "./Header.css";

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
);

export default Header;
