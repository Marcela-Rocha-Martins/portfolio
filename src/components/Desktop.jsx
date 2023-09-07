import React from "react";

import Shortcurts from "./Shortcuts";
import Footer from "../components/Footer";
import Windows from "../components/Windows";
import {useState} from "react";

const Desktop = () => {
const [activeWindows, setActiveWindows] = useState([]);

  return (
    <>
    < Shortcurts activeWindows={activeWindows} setActiveWindows={setActiveWindows}/>
    < Windows activeWindows={activeWindows} setActiveWindows={setActiveWindows}/>
    < Footer />
    </>
  );
};

export default Desktop;

