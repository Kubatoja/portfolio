import { useState } from "react";
import "./App.scss";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  const [lang, setLang] = useState(false);

  return (
    <>
      <Background />
      <Navbar setLang={setLang} lang={lang} />
      <Profile lang={lang} />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
