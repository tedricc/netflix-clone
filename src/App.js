import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log(uid, email);
        setUser(user);
      } else {
        setUser({})
      }
      setLoading(false)
    });
    return unsubscribe;
  }, [user]);

  async function logout() {
    setLoading(true)
    await signOut(auth);
    console.log(user);
    setUser({});
  }

  useEffect(() => {
    if (!loading) {
      if (user.uid) {
        navigate("/");
      } else {
        navigate("/sign-in");
      }
    }
  }, [loading, navigate, user.uid]);

  if (loading) {
    return (
      <div className="app__skeleton">
        <FontAwesomeIcon icon="spinner" className="banner__skeleton--loading" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home logout={logout} />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;
