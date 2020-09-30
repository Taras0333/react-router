import React from "react";
import "./signIn.css";
import { NavLink } from "react-router-dom";

const SignInRender = (props) => (
  <div className="signIn-cont">
    {" "}
    <div className="sign-in-top-bar">
      <div className="img-wrapper"></div>
      <span className="title">Sign in</span>
    </div>{" "}
    <div className="third-input">
      <input
        type="email"
        className="email-sign-in"
        placeholder="Email Address*"
        onChange={props.email}
        required
      ></input>
    </div>
    <div className="fourth-input">
      <input
        type="password"
        className="password-sign-in"
        placeholder="Password*"
        onChange={props.password}
        required
      ></input>
    </div>
    <div className="remember-me-wrap">
      <div className="checkbox-cont">
        <input type="checkbox" className="checkbox-input" />
      </div>
      <div className="sign-in-checkbox-discription ">
        <span>Remember me!</span>
      </div>
    </div>
    <NavLink exact to="/" activeClassName="active">
      <button className="but" onClick={props.button}>
        SIGN IN
      </button>
    </NavLink>
    <div className="forgot-password-wrap">
      <div className="forgot-password-items">Forgot password?</div>
      <div className="forgot-password-items">
        Don`t have an account? Sign up
      </div>
    </div>
    <div className="rights-wrap">
      {" "}
      <span className="copy-right">Copyright © Your Website 2020.</span>
    </div>
  </div>
);
export default SignInRender;
