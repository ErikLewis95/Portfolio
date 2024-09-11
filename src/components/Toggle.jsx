import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import Sun from "../img/sun.svg";
import Moon from "../img/moon.svg";

const Toggle = ({ children }) => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Sun} alt="Sun Icon" className="t-icon" />
      <img src={Moon} alt="Moon Icon" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
