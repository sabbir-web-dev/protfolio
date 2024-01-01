import { AiOutlineMenu } from "react-icons/ai"; 
import { BsMoon } from "react-icons/bs"; 
import { BiSun } from "react-icons/bi"; 
import React, { useEffect, useState } from "react";
import "./Navber.css";

function Navber({getTheme}) {
  const [theme,setTheme] = useState(false);

  useEffect(()=> {
    getTheme(theme)
  },[getTheme, theme])

  return (
    <nav className="nav-wrap">
      <h4 className="logo">Dev.</h4>
      <ul>
        <li className="link"><a href="#home">Home</a></li>
        <li className="link"><a href="#about">About</a></li>
        <li className="link"><a href="#project">Project</a></li>
        <li className="link"><a href="#contract">Contrant</a></li>
        <li className="link"><a href="#contract">Contrant</a></li>
        <li className="theme-icon" onClick={() => setTheme(!theme)}>{theme? <BiSun /> : <BsMoon />}</li>
      </ul>
      <div className="hidden mobail">
        <li><AiOutlineMenu className="icon" /></li>
      </div>
    </nav>
  );
}

export default Navber;
