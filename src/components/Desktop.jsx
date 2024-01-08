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
    { name: "Contact", id: "contact" },
  ];

  const projects = [
    {
      id: 1,
      name: "Cat x Machine",
      details: {
        title: "Cat x Machine",
        description:
          "browser-based game using HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP). Cat X Machine is a simple web-based game where you control a cat character and try to avoid machines while collecting snacks to gain lives. Use the keyboard to control the cat's jump and crouch movements. ",
        technologies: ["CSS", "JavaScript", "HTML", "DOM manipulation", "OOP"],
        video: "/projectPagePhotos/CatxMachine.mp4",
        photo: `/projectPagePhotos/CatXMachine.png`,
        live: "https://marcela-rocha-martins.github.io/project-game-catXmachine/",
        github:
          "https://github.com/Marcela-Rocha-Martins/project-game-catXmachine",
      },
    },
    {
      id: 2,
      name: "AnchorNaut",
      details: {
        title: "AnchorNaut",
        description: `Anchornaut is a full-stack project that empowers you to turn your wildest dreams into achievable and concrete personal projects. The platform leverages the OpenAI GPT (Generative Pre-trained Transformer) chat API to create a dynamic system where users can input their dreams, and the AI generates tasks and subtasks to help bring those dreams to life.<br/><br/>The project includes both a backend and a front-end component. Anchornaut utilizes MongoDB as its database, Node.js and Express.js on the server-side to provide a solid foundation. Security is reinforced with JSON Web Tokens (JWT) and bcrypt for authentication. Integration with OpenAI enables task generation based on user input.<br/><br/>On the frontend, React is the primary library for interface construction, with React Router Dom and React hooks for routing and state management. HTTP requests are efficiently handled with Axios. For more details, check out the GitHub repository.`,
        technologies: [
          "JS",
          "CSS",
          "React",
          "MongoDB",
          "Node & Express",
          "JWT",
        ],
        video: "/projectPagePhotos/VideoTeste.mp4",
        photo: "/projectPagePhotos/Anchornaut.png",
        github: "https://github.com/Marcela-Rocha-Martins/AnchorNaut-client",
        live: "https://anchornaut.netlify.app/",
      },
    },
    {
      id: 3,
      name: "Code Pen",
      details: {
        title: "Code Pen",
        description: "Exercises and features",
        technologies: ["CSS", "JavaScript", "HTML"],
        video: "/projectPagePhotos/VideoTeste.mp4",
        photo: "/projectPagePhotos/CodePen6.png",
        github:
          "https://marcela-rocha-martins.github.io/project-game-catXmachine/",
        live: "https://github.com/Marcela-Rocha-Martins/project-game-catXmachine",
      },
    },
    {
      id: 4,
      name: "Feed",
      details: {
        title: "Feed",
        description:
          "This is a React project developed with TypeScript and Vite, simulating a social media feed similar to Twitter. In this application, users can create posts, applaud comments, and interact dynamically.",
        technologies: ["CSS", "Typescript", "HTML", "React", "Vite"],
        video: "/projectPagePhotos/feedVideo.mov",
        photo: "/projectPagePhotos/feedphoto.png",
        github:
        "https://github.com/Marcela-Rocha-Martins/react-project1-feed-typescript",
        live: "https://react-project1-feed-typescript-dxvea8txu.vercel.app/",
      },
    },
    {
      id: 5,
      name: "My Portfolio",
      details: {
        title: "My Portfolio",
        description:
          "A React application to reunite information about my projects",
        technologies: ["CSS", "JavaScript", "HTML", "React"],
        video: "/projectPagePhotos/VideoTeste.mp4",
        photo: "/projectPagePhotos/MyPortfolio.png",
        github:
          "https://marcela-rocha-martins.github.io/project-game-catXmachine/",
        live: "https://github.com/Marcela-Rocha-Martins/project-game-catXmachine",
      },
    },
    {
      id: 6,
      name: "Timer",
      details: {
        title: "Timer",
        description:
          "This project provides a simple interface with two pages centered around a timer functionality. Users can set tasks and durations, and the app will manage and display the timers accordingly. Additionally, the app keeps track of previous timers in the 'archive' tab, allowing users to access their history of previous timers.",
        technologies: ["CSS", "Typescript", "HTML", "React", "Vite"],
        video: "/projectPagePhotos/timervideo.mov",
        photo: "/projectPagePhotos/timerphoto.png",
        github:
          "https://github.com/Marcela-Rocha-Martins/react-project2-timer-typescript",
        live: "https://react-project2-timer-typescript-7n43rb9ag.vercel.app/",
      },
    },
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
