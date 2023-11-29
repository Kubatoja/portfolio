import React from "react";
import "../styles/navbar.scss";

function navbar(props) {
  return (
    <div className="navbar">
      <div className="languages">
        <div
          className={`${props.lang ? "" : "selected"}`}
          onClick={() => {
            props.setLang(false);
          }}
        >
          PL
        </div>
        <div
          className={`${props.lang ? "selected" : ""}`}
          onClick={() => {
            props.setLang(true);
          }}
        >
          EN
        </div>
      </div>

      <div className="nav">
        <div className="navAboutMe">{`${
          props.lang ? "About Me" : "O mnie"
        }`}</div>
        <div className="navProjects">{`${
          props.lang ? "Projects" : "Projekty"
        }`}</div>
        <div className="navHistory">{`${
          props.lang ? "Contact" : "Kontakt"
        }`}</div>
      </div>
    </div>
  );
}

export default navbar;
