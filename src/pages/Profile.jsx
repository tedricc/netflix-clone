import React from "react";
import Nav from "../components/Nav";
import Info from "../components/Info";

function Profile({ logout, email, start }) {
  return (
    <>
      <Nav />
      <Info logout={logout} email={email} start={start} />
    </>
  );
}

export default Profile;
