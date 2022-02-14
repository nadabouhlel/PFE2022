import React from "react";
import auth from "./auth";

export const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          auth.login(() => {   //call auth.login gets trigguered when login is successful  and redirect user to app
            props.history.push("/app");  //call history prop so it changes the url to /app 
          });
        }}
      >
        Login
      </button>
    </div>
  );
};