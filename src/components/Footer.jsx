import React from 'react';
import Miniature from './Miniature';
import "../App.css";

const Footer = (activeWindows, setActiveWindows) => {
    return (
        <>
        <div className="footer">Home<Miniature activeWindows={activeWindows} setActiveWindows={setActiveWindows}/></div>
        </>
    );
  };
  
  export default Footer;
  