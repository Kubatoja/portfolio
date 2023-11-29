import React, { useEffect, useState } from "react";
import "../styles/projects.scss";

function test() {
  const [activeCard, setActiveCard] = useState(0);

  function card() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    document.getElementsByClassName("card")[activeCard].classList.add("active");
  }
  useEffect(() => {
    card();
  });
  return (
    <div className="test">
      <h1>Ostatnie projekty</h1>
      <div className="testContainer">
        <div
          className="card active"
          onClick={() => {
            setActiveCard(0);
          }}
        >
          <div className="image aimeth"></div>
          <div className="text ">
            <p>AI-Methods</p>LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
            LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
            IPSUM LOREM IPSUM{" "}
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            setActiveCard(1);
          }}
        ></div>
        <div
          className="card"
          onClick={() => {
            setActiveCard(2);
          }}
        ></div>
        <div
          className="card"
          onClick={() => {
            setActiveCard(3);
          }}
        ></div>
      </div>
    </div>
  );
}

export default test;
