import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { useNavigate } from "react-router";
function Nav() {
  const [show, hanleShow] = useState(false);
  const navigate = useNavigate();
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
            onClick={() => navigate("/")}
            className="nav__logo"
            style={{ cursor: "pointer" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <img
            onClick={() => navigate("/profile")}
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
