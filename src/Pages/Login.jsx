import React from "react";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
          />
          <button>Sign in</button>
          <span>
            New to netflix <b>Sign up nuw</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </small>
        </form>
      </div>
    </div>
  );
};
