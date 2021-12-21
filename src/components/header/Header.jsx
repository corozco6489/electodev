import "../../global.css"
import React, { useState } from "react";
const  Header = () =>{  


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY > 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
 
  
    return (
        <div className={color ? "header sticky" : "header"}>
        <div className="container">
          <nav className="navbar">
            <a href="#" className="nav-logo">
              <img src="assets/image/logo.png" alt=""/>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/" className="nav-link active">Home</a>
              </li>
              {/* <li className="nav-item">
                <a href="#about" className="nav-link">about</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#works" className="nav-link">works</a>
              </li>
              <li className="nav-item">
                <a href="#journey" className="nav-link">journey</a>
              </li> */}
              <li className="nav-item">
                <a href="#blog" className="nav-link">Woks</a>
              </li>
              {/* <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li> */}
            </ul>
            <div className="hamburger" onClick={handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Header
