import React from "react";
import "../styles/background.scss";
import svg from "../assets/background.svg";

function Background() {
  return (
    <div className="background">
      <div className="blob">
        <img
          id="blobSvg"
          height={"1200px"}
          width={"1200px"}
          viewBox={"0 0 400 400"}
          src={svg}
          href={svg}
          xlinkHref={svg}
        ></img>
      </div>
    </div>
  );
}

export default Background;
