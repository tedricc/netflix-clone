import React, { useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged,
} from "firebase/auth";
import Register from "./ui/Register";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [registerPage, setPage] = useState(false);
  const navigate = useNavigate()

  function toggle() {
    setPage(!registerPage);
  }

  function register(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("register");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  function login(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("login");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <>
      {registerPage ? (
        <Register
          fx={register}
          toggle={toggle}
          title="Sign Up"
          button="Create an Account"
          para="Already have an account?"
          span="Sign in."
        />
      ) : (
        <Register
          fx={login}
          toggle={toggle}
          title="Sign In"
          button="Start Watching"
          para="New to Netflix?"
          span="Sign up here."
        />
      )}
    </>
  );
}

export default SignIn;
