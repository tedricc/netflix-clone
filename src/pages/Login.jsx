import React, { useState } from "react";
import Welcome from "../components/Welcome";
import SignIn from "../components/SignIn";

function Login() {
  const [user, setUser] = useState(false);

  function signIn() {
    setUser(true);
  }

  return (
    <div className="login">
      <div className="login__background">
        {user ? <SignIn /> : <Welcome signIn={signIn} />}
        <div className="login__gradient"></div>
      </div>
    </div>
  );
}

export default Login;
