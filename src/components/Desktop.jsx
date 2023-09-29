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
  const [frontPage, setFrontPage] = useState(false);


  const shortcutList = [
    { name: "Projects", id: "projects" },
    { name: "Who am I", id: "who" },
    { name: "Experiences", id: "experiences" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  const projects = [
        
    {
        id: 1,
        name: "Cat x Machine",
        details: {
            title: "Cat x Machine: Vanilla JS Game",
            description: "An endless game using pure javascript, with advanced behaviors, like jump, crounch and so on",
            tecnologies: "CSS, JavaScript, HTML",
            video: "https://www.youtube.com/embed/y0sF5xhGreA?si=uR1ZSRU-HSTciB9g",
        },
    },
    {
        id: 2,
        name: "AnchorNaut",
        details: {
            title: "AnchorNaut",
            description: "A React application with OpenAI API integration",
            tecnologies: "CSS, JavaScript, HTML, React, MongoDB",
            video: "https://www.youtube.com/embed/5_Blq9W9cT8?si=LIzA1dd44bB_jPTY",
        },
    },
    {
      id: 3,
      name: "Code Pen",
      details: {
          title: "AnchorNaut",
          description: "A React application with OpenAI API integration",
          tecnologies: "CSS, JavaScript, HTML, React, MongoDB",
          video: "https://www.youtube.com/embed/5_Blq9W9cT8?si=LIzA1dd44bB_jPTY",
      },
  },
]

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
        frontPage={frontPage}
        projects={projects}
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
        frontPage={frontPage}
        projects={projects}
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
        frontPage={frontPage}
        projects={projects}
      />
    </>
  );
};

export default Desktop;
