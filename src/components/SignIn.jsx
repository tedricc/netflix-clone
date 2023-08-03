import React, { useRef, useState } from "react";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Register from "./ui/Register";

function SignIn() {
  const [registerPage, setPage] = useState(false);

  function toggle() {
    setPage(!registerPage);
  }

  function register(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("i am register");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  function login(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("I am login");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
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
