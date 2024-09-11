import { useContext } from "react";
import Parallax from "./components/Parallax.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import PortFolioList from "./components/PortfolioList";
import Skill from "./components/Skill";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer.jsx";
import { ThemeContext } from "./context/context";

import "./index.css";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#2a3132" : "#f1f1f2",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Navbar />
      <Parallax />
      <Intro />
      <Skill />
      <PortFolioList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
