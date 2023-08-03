import React, { useRef } from "react";
import "./Register.css";

function Register({ toggle, title, button, para, span, fx }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="signin">
      <form
        action=""
        className="signin__form"
        onSubmit={(event) => fx(event, emailRef, passwordRef)}
      >
        <h1 className="signin__title">{title}</h1>
        <input
          required
          className="signin__input"
          type="email"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          required
          className="signin__input"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" className="signin__btn">
          {button}
        </button>
        <p className="signin__new">
          {para}{" "}
          <span className="signin__link link__hover" onClick={toggle}>
            {span}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
