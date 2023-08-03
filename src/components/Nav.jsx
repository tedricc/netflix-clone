import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav({ logout }) {
  const [show, setShow] = useState(false);

  function transitionNavBar() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <figure className="nav__logo--wrapper">
          <img
            className="nav__logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt=""
          />
        </figure>
        {/* <div className="nav__links">
          <div className="nav__link no-cursor">Home</div>
          <div className="nav__link no-cursor">Series</div>
          <div className="nav__link no-cursor">Films</div>
          <div className="nav__link no-cursor">New & Popular</div>
          <div className="nav__link no-cursor">My List</div>
          <div className="nav__link no-cursor">Browse by Languages</div>
        </div> */}
        <figure className="nav__avatar--wrapper" onClick={logout}>
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}

export default Nav;
