import React from "react";
import Miniature from "./Miniature";
import "../App.css";

const Footer = ({activeWindows, setActiveWindows}) => {
  return (
    <>
      <div className="footer">
        <div className="home">
        Home
        </div>
        {activeWindows.map((window, index) => (
          <Miniature
            key={window.id}
            page={window}
            setActiveWindows={setActiveWindows}
            activeWindows={activeWindows}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
export default Footer;
