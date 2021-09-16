import React, { useState, useEffect } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
// import { data } from "../../Data/Data";
import "./style.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.length > 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <div className='navbar'>
        <div className='navbar-container container'>
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <DiCssdeck className='navbar-icon' />
            Cameron McCloskey
          </a>
          <div className='menu-icon' onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>
            <li className='nav-btn'>
              {button ? (
                <a href='/contact' className='btn-link'>
                  <Button buttonStyle='btn--outline'>Contact</Button>
                </a>
              ) : (
                <a href='/contact' className='a btn-link'>
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                    Contact
                  </Button>
                </a>
              )}
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
