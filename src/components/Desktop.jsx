import React from "react";
import Shortcurts from "./Shortcuts";
import Footer from "../components/Footer";
import Windows from "../components/Windows";
import WindowMobile from "../components/WindowMobile";
import { useState, useEffect } from "react";

const Desktop = () => {
  const [activeWindows, setActiveWindows] = useState([]);
  const [zIndex, setZIndex] = useState(0);
  const [maxZIndex, setMaxZIndex] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [frontPage, setFrontPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const shortcutList = [
    { name: "Projects", id: "projects" },
    { name: "Who am I", id: "who" },
    { name: "Experiences", id: "experiences" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Defina o valor apropriado para sua lógica de dispositivos móveis
    };

    // Adiciona um listener de redimensionamento
    window.addEventListener("resize", handleResize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "Cat x Machine",
      details: {
        title: "Cat x Machine",
        description:
          "Browser-based game developed with <strong>HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP)</strong>. Cat X Machine is a simple web-based game where you control a cat character, attempting to avoid machines while collecting snacks to gain lives. Click on the <strong>'Live'</strong> button and use the keyboard to control the cat's jumping and crouching movements.",
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
        description: `Anchornaut is a full-stack project that empowers you to turn your wildest dreams into achievable and concrete personal projects. The platform leverages the OpenAI GPT (Generative Pre-trained Transformer) chat API to create a dynamic system where users can input their dreams, and the AI generates tasks and subtasks to help bring those dreams to life.<br/><br/>The project includes both a backend and a front-end component. Anchornaut utilizes MongoDB as its database, Node.js and Express.js on the server-side to provide a solid foundation. Security is reinforced with JSON Web Tokens (JWT) and bcrypt for authentication. Integration with OpenAI enables task generation based on user input.<br/><br/>On the frontend, React is the primary library for interface construction, with React Router Dom and React hooks for routing and state management. HTTP requests are efficiently handled with Axios. For more details, check out the GitHub repository.</br></br>Important note ⚠️</br></br>I had very little experience with React and limited time to develop the project when I did it. (We had about a week to do everything.) So, I need to be honest and admit that there are several mistakes in this project, along with areas for improvement that I would like (and will) work on to refine my work.</br></br>Here's a list of them:</br></br>Errors:</br></br>

        1. The code is repetitive and verbose. I definitely wasn't a Clean Code enthusiast here, and I'm trying to improve on smaller projects I've taken on since then.</br></br>
        
        2. For some reason (that only past Marcela understands), the classes are mostly nameless, with styling code directly in the component. Changing this functionality is in my plans.</br></br>
        
        3. There are authentication issues for users that persist in the deployment. I'm still struggling to figure out how to solve them.</br></br>
        
        Beyond the errors, I need to say that given the time I had, the bold idea, and the knowledge at that time, it was a miracle to deliver the project. Some things I did, I confess, I don't even know how they worked at the time. I'm studying and improving to fix the errors and be proud of the code behind this project with such a cool idea. 🚀`,
        technologies: [
          "JS",
          "CSS",
          "React",
          "MongoDB",
          "Node & Express",
          "JWT",
        ],
        video: "/projectPagePhotos/projectVideo.mov",
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
        video: "/projectPagePhotos/feedvideo.mov",
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
          "Apparently, I needed one to land my first job as a web developer, so I went ahead and created it! 🤷‍♀️</br></br>Jokes aside, I came up with the idea of playing around with mimicking operating systems like Mac, LinkedIn, and email. This way, I could have something to inspire my design (initially conceptualized by my husband and refined through a few of my own tweaks) and also provide a unique usability aspect compared to a typical junior dev portfolio.</br></br>We used Figma to facilitate the communication between design and styling in programming. The project was built using React, CSS, and Javascript. For window dragging, I incorporated a React package called Draggable.</br></br>There's still a lot to be tweaked and improved, but I'm thrilled with the outcome! 😊",
        technologies: ["CSS", "JavaScript", "HTML", "React"],
        photo: "/projectPagePhotos/MyPortfolio.png",
        github: "https://github.com/Marcela-Rocha-Martins/portfolio",
        live: "https://marcelarochamartins-webdev.vercel.app/",
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
  if (isMobile) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#A2BFBF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "20% 10% 20% 10%",
        }}
      >
        <WindowMobile />
      </div>
    );
  }

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
