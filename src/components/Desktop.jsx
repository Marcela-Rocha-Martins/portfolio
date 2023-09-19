import React from "react";
import Shortcurts from "./Shortcuts";
import Footer from "../components/Footer";
import Windows from "../components/Windows";
import { useState } from "react";

const Desktop = () => {
  const [activeWindows, setActiveWindows] = useState([]);
  const [zIndex, setZIndex] = useState(0);
  const [maxZIndex, setMaxZIndex] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const shortcutList = [
    { name: "My Computer", id: "my-computer" },
    { name: "Contact", id: "contact" },
    { name: "Projects", id: "projects" },
    { name: "Who", id: "who" },
    { name: "Experiences", id: "experiences" },
    { name: "Education", id: "education" },
    { name: "Bin", id: "bin" },
  ];

  return (
    <>
      <Shortcurts
        activeWindows={activeWindows}
        setActiveWindows={setActiveWindows}
        zIndex={zIndex}
        setZIndex={setZIndex}
        maxZIndex={maxZIndex}
        setMaxZIndex={setMaxZIndex}
        minimized={minimized}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        shortcutList={shortcutList}
      />
      <Windows
        activeWindows={activeWindows}
        setActiveWindows={setActiveWindows}
        zIndex={zIndex}
        setZIndex={setZIndex}
        minimized={minimized}
        setMinimized={setMinimized}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        maxZIndex={maxZIndex}
        setMaxZIndex={setMaxZIndex}
        shortcutList={shortcutList}
      />
      <Footer
        activeWindows={activeWindows}
        setActiveWindows={setActiveWindows}
        zIndex={zIndex}
        setZIndex={setZIndex}
        maxZIndex={maxZIndex}
        setMaxZIndex={setMaxZIndex}
        minimized={minimized}
        setMinimized={setMinimized}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        shortcutList={shortcutList}
      />
    </>
  );
};

export default Desktop;
