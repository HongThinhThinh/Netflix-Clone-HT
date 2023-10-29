import React, { useEffect, useState } from "react";
import "./Nav.scss";
function Nav() {
  const [show, hanleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      hanleShow(true);
    } else {
      hanleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="nav__contents">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
