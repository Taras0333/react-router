import React from "react";
import "./signUp.css";
import { NavLink } from "react-router-dom";

const SignUpRender = (props) => (
  <div className="form" id="form">
    <div className="top-bar">
      <div className="img-wrapper"></div>
      <span className="title">Sign up</span>
    </div>
    <div className="mid-bar">
      <div className="mid-bar-top">
        <div className="first-input">
          <input
            type="text"
            className="name-input inputs"
            placeholder="First name*"
            onChange={props.name}
            required
          ></input>
        </div>
        <div className="second-input">
          <input
            type="text"
            className="surename-input inputs"
            placeholder="Last name*"
            onChange={props.sureName}
            required
          ></input>
        </div>
      </div>
      <div className="third-input">
        <input
          type="email"
          className="inputs-mid email"
          placeholder="Email Address*"
          onChange={props.email}
          required
        ></input>
      </div>
      <div className="fourth-input">
        <input
          type="password"
          className="inputs-mid password"
          placeholder="Password*"
          onChange={props.password}
          required
        ></input>
      </div>
    </div>
    <div className="bot-bar">
      <div className="top-cont">
        <div className="checkbox-cont">
          <input type="checkbox" className="checkbox-input" />
        </div>
        <div className="checkbox-discription">
          <span>
            I want to receive inspiration, marketing
            <br />
            promotions and updates via email.
          </span>
        </div>
      </div>
      <NavLink to="/about" activeClassName="active">
        <button className="btn" onClick={props.btn}>
          SIGN UP
        </button>
      </NavLink>

      <div className="already-wrap">
        <span className="already-parag">Already have an account? Sign in</span>
      </div>
      <div className="rights-wrap">
        {" "}
        <span className="copy-right">Copyright © Your Website 2020.</span>
      </div>
    </div>
  </div>
);
export default SignUpRender;
