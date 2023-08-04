import React from "react";
import Nav from "../components/Nav";
import Info from "../components/Info";

function Profile({ logout }) {
  return (
    <>
      <Nav />
      <Info logout={logout} />
    </>
  );
}

export default Profile;
