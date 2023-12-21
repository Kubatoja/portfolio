import { useState } from "react";
import "./App.scss";
import Background from "./components/Background";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Test from "./components/test";

function App() {
  const [lang, setLang] = useState(false);

  return (
    <>
      <Background />
      <Navbar setLang={setLang} lang={lang} />
      <Profile lang={lang} />
      <Test />
      <Projects />
    </>
  );
}

export default App;
