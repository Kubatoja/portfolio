import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { VscSymbolNamespace } from "react-icons/vsc";
import "../styles/aboutMe.scss";
import { Parallax } from "react-scroll-parallax";

function AboutMe() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    console.log(progress);

    if (progress > 0 && progress < 50) {
      document.getElementById("column1").style =
        "transform: translate3d(0, " + progress * 0.8 + "vh, 0);";

      document.getElementById("column2").style =
        "transform: translate3d(0," + (-25 - progress * 0.9) + "vh, -10vh);";
    } else if (progress > 50 && progress < 75) {
      document.getElementById("column1").style =
        "transform: translate3d(0, 40vh, " +
        (0 - (progress - 50) * 0.4) +
        "vh);";

      document.getElementById("column2").style =
        "transform: translate3d(0, -70vh, " +
        (-10 + (progress - 50) * 0.4) +
        "vh);";
    } else if (progress > 75) {
      document.getElementById("column1").style =
        "transform: translate3d(0, " +
        (40 - (progress - 75) * 0.4) +
        "vh, -10vh);";

      document.getElementById("column2").style =
        "transform: translate3d(0, " +
        (-70 + (progress - 75) * 0.4) +
        "vh, 0vh);";
    }

    document.getElementById("column1").style.filter =
      "blur(" + progress / 200 + "vh)";
    document.getElementById("column2").style.filter =
      "blur(" + (0.5 - progress / 200) + "vh)";
  }, [progress]);
  return (
    <div className="aboutMeBuffer">
      <Parallax
        className="parallaxRef"
        onProgressChange={(progress) => setProgress(Math.floor(progress * 100))}
      />
      <div className="aboutMe">
        <div id="column1" className="column1">
          <div className="me">
            <div className="icon">
              <h2>
                <MdPerson />
              </h2>
              <p>Kim jestem?</p>
            </div>
            <div className="content">
              <h1> Jakub Błaszczyk</h1>
              <p>Frontend Developer & UI/UX designer</p>
              <div className="contentContainer">
                <div className="left">
                  <h3>O mnie</h3>
                  <p>
                    Jestem młody (<span className="orange">20 lat</span>),
                    ambitny i chętny do nauki. Chcę zdobyć doświadczenie oraz
                    rozszerzyć umiejętności które udało mi się do tej pory
                    zdobyć.
                    <br></br>
                    <br></br>
                    Mam na koncie już pierwsze projekty zarobkowe oraz
                    współpracę między innymi z{" "}
                    <span className="orange">Politechniką Śląską</span>.
                  </p>
                </div>
                <div className="right">
                  <h3>Czym się wyróżniam?</h3>
                  <p>
                    Jestem perfekcjonitsą, nauka sprawia mi przyjemność i lubię
                    rzucać sobie wyzwania. Programowanie i design to moja pasja
                    i spełnieniem moich marzeń jest aby stało się to też moją
                    pracą. Chętnie działam w zespole oraz dobrze się w nim
                    odnajduję.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="column2" className="column2">
          <div className="me">
            <div className="icon">
              <h2>
                <FaCode />
              </h2>
              <p>Doświadczenie</p>
            </div>
            <div className="content">
              <h1>Moje Doświadczenie</h1>
              <div className="contentContainer">
                <div className="left">
                  <h3>Coś tam</h3>
                  <p>
                    Ponad 1,5 roku doświadczenia w tworzeniu stron internetowych
                    z pasji ale również jako praca.
                  </p>
                </div>
                <div className="right">
                  <div className="whatIUse">
                    <h3>W czym pracuję: </h3>
                    <div className="column">
                      <div className="html"></div>
                      <div className="css"></div>
                      <div className="js"></div>
                    </div>
                    <div className="column">
                      <div className="react"></div>
                      <div className="sass"></div>
                      <div className="vite"></div>
                    </div>
                    <div className="column">
                      <div className="github"></div>
                      <div className="netlify"></div>
                      <div className="figma"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

{
  /* <div className="card personalInfo">
        <div className="cardHeader">
          <h2>
            <MdPerson />
          </h2>
          <h1>Kim jestem</h1>
        </div>
        <div className="cardInside">
          <div className="me">
            <div className="info">
              <p>
                nazywam się:
                <br />
                <span className="purple">
                  <span className="name">Jakub</span>
                  <br />
                  <span className="surname">Błaszczyk</span>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card experience">
        <div className="cardHeader">
          <h2>
            <FaCode />
          </h2>
          <h1>Doświadczenie</h1>
        </div>
        <div className="cardInside">
          <p className="firstP">
            Ponad 1,5 roku doświadczenia w tworzeniu stron internetowych z pasji
            ale również jako praca.
          </p>
          <p>
            <span className="purple">
              <b>Projekty:</b>
            </span>
            <br />
            <br />
            Moje aktualne projekty znajdziesz nizej w sekcji{" "}
            <a className="purple">
              <i>Projekty</i>
            </a>
            .
          </p>
          <p>
            <span className="purple">
              <b>W czym pracuje:</b>
            </span>
          </p>
          <div className="whatIUse">
            <div className="column">
              <div className="html"></div>
              <div className="css"></div>
              <div className="js"></div>
            </div>
            <div className="column">
              <div className="react"></div>
              <div className="sass"></div>
              <div className="vite"></div>
            </div>
            <div className="column">
              <div className="github"></div>
              <div className="netlify"></div>
              <div className="figma"></div>
            </div>
          </div>
        </div>
      </div> */
}
