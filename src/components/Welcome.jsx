import React from "react";
import "./Welcome.css";

function Welcome({ signIn }) {
  return (
    <>
      <figure className="login__img--wrapper">
        <img
          // src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
          className="login__img"
        />
      </figure>
      <button className="login__btn" onClick={signIn}>
        Sign In
      </button>
      <div className="login__container">
        <h1 className="login__container--title">
          Unlimited films, TV programmes and more.
        </h1>
        <h2 className="login__container--subtitle">
          Watch anywhere. Cancel at any time.
        </h2>
      </div>
    </>
  );
}

export default Welcome;
