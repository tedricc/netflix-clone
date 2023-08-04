import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log(uid, email);
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [user]);

  async function logout() {
    setLoading(true);
    await signOut(auth);
    setUser({});
    console.log(user);
    navigate("/sign-in");
  }

  useEffect(() => {
    if (!loading) {
      if (!user.uid && location.pathname !== "/sign-in") {
        // User is not logged in, redirect to the sign-in page
        navigate("/sign-in");
      } else if (user.uid && location.pathname === "/sign-in") {
        // User is logged in but tries to access the sign-in page, redirect to home page
        navigate("/");
      }
    }
  }, [loading, navigate, user, location]);

  if (loading) {
    return (
      <div className="app__skeleton">
        <FontAwesomeIcon icon="spinner" className="banner__skeleton--loading" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile logout={logout} />} />
      <Route path="/sign-in" element={<Login />} />
      {/* {user.uid ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile logout={logout} />} />
        </>
      ) : (
        <Route path="/sign-in" element={<Login />} />
      )} */}
    </Routes>
  );
}

export default App;
