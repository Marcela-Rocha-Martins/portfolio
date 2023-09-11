import React from "react";
import Shortcurts from "./Shortcuts";
import Footer from "../components/Footer";
import Windows from "../components/Windows";
import {useState} from "react";

const Desktop = () => {
const [activeWindows, setActiveWindows] = useState([]);
const [zIndex, setZIndex] = useState(0); 

  return (
    <>
    < Shortcurts activeWindows={activeWindows} setActiveWindows={setActiveWindows} zIndex={zIndex} setZIndex={setZIndex} />
    < Windows activeWindows={activeWindows} setActiveWindows={setActiveWindows} zIndex={zIndex} setZIndex={setZIndex}/>
    < Footer activeWindows={activeWindows} setActiveWindows={setActiveWindows}/>
    </>
  );
};

export default Desktop;

