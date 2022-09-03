import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

export const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handelClick = () => {
    setEmail(emailRef.current.value);
  };
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const handelInput = () => {
    setPassword(passwordRef.current.value);
  };

  console.log(email);
  console.log(password);

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="register-logo"
          />
          <Link to="/login">
            <button>SignIn</button>
          </Link>
        </div>
      </div>
      <div className="register-container">
        <h1>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input ref={emailRef} type="email" placeholder="Enter your email" />
            <button onClick={handelClick}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <button onClick={handelInput}>Start</button>
          </form>
        )}
      </div>
    </div>
  );
};
