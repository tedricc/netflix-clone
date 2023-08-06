import React from "react";
import "./Info.css";

function Info({ logout, email, start }) {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__title">Account</div>
        <div className="info__details">
          <div className="info__details--title">Membership & Billing</div>
          <div className="info__details--container">
            <div className="info__detail info__details--email">
              Email: {email}
            </div>
            <div className="info__detail info__details--password">
              Password: ********
            </div>
            <div className="info__detail info__details--start">
              Member since: {start?.slice(5)}
            </div>
          </div>
        </div>
        <button className="btn--logout" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Info;
