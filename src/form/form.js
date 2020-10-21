import React, { Component } from "react";
import SignUpRender from "../signUp/signUp-render";
import SignInRender from "../signIn/signIn-render";
import { Route, Switch } from "react-router-dom";

class SignUp extends Component {
  state = {};

  saveName = (e) => {
    let name = document.querySelector(".name-input");
    let word = e.target.value;
    if (word.length >= 3) {
      name.style = "border: 2px solid #03f315;";
      this.setState({
        name: word,
      });
    } else {
      name.style = "border: 2px solid #ff0404;";
    }
  };
  saveSureName = (e) => {
    let surename = document.querySelector(".surename-input");
    let word = e.target.value;
    if (word.length >= 3) {
      surename.style = "border: 2px solid #03f315;";
      this.setState({
        sureName: word,
      });
    } else {
      surename.style = "border: 2px solid #ff0404;";
    }
  };
  saveEmail = (e) => {
    let email = document.querySelector(".email");
    let word = e.target.value;
    if (this.isEmail(word)) {
      email.style = " border: 2px solid #03f315;";
      this.setState({
        email: word,
      });
    } else {
      email.style = " border: 2px solid #ff0404;";
    }
  };
  isEmail = (email) => {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ))
  };
  savePassword = (e) => {
    let password = document.querySelector(".password");
    let word = e.target.value;
    if (this.isPassword(word)) {
      password.style = " border: 2px solid #03f315;";
      this.setState({
        password: word,
      });
    } else {
      password.style = " border: 2px solid #ff0404;";
    }
  };
  isPassword = (password) => {
    return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password));
  };
  saveLocal = (e) => {
    let localState = JSON.stringify(this.state);
    localStorage.setItem("State", localState);
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  getEmail = (e) => {
    this.setState({
      email2: e.target.value,
    });
    
  };
  getPassword = (e) => {
    this.setState({
      password2: e.target.value,
    });
  };
  validation = () => {
    let local = JSON.parse(localStorage.getItem("State"));
    if (this.state.email2 === local.email && this.state.password2 === local.password && this.state.email2.length > 0){
      alert(" you have loged in");
    } else {
      alert("you didn`t loged in, please chack your email or password");
    }
  };
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <SignUpRender
            name={this.saveName}
            sureName={this.saveSureName}
            email={this.saveEmail}
            password={this.savePassword}
            btn={this.saveLocal}
          />
        </Route>
        <Route exact path="/about">
          <SignInRender
            email={this.getEmail}
            password={this.getPassword}
            button={this.validation}
          />
        </Route>
      </Switch>
    );
  }
}

export default SignUp;
