import React from "react";
import "../styles/profile.scss";
import { FaChevronDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Profile() {
  return (
    <div className="profile">
      <div className="profilePic">
        <div></div>
      </div>
      <TypeAnimation
        className="name"
        sequence={["Cześć, jestem Kuba", 3000, "Hi, I am Kuba", 3000]}
        speed={20}
        repeat={Infinity}
      />
      <h2>front-end developer & UI/UX designer</h2>
      <div className="logos">
        {/* <div className="html"></div>
        <div className="js"></div>
        <div className="css"></div> */}
        <div className="react"></div>
        <div className="vite"></div>
        <div className="scss"></div>
        <div className="figma"></div>
      </div>
      <div className="profileArrow">
        <FaChevronDown />
      </div>
    </div>
  );
}

export default Profile;
