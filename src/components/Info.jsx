import React from "react";
import "./Info.css";

function Info({ logout }) {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__title">Profile</div>
        <button className="info__btn--logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Info;
