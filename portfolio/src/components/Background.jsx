import React from "react";
import "../styles/background.scss";
import svg from "../assets/background.svg";

function Background() {
  return (
    <div className="background">
      <div className="blob">
        <img id="blobSvg" src={svg} href={svg} xlink:href={svg}></img>
      </div>
    </div>
  );
}

export default Background;
