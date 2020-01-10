import React from "react";
import LoginForm from "./LoginForm";

const Header = props => {
  let renderLogin;
  switch (true) {
    case props.renderLoginForm && !props.authenticated:
      renderLogin = <LoginForm submitFormHandler={props.submitFormHandler} />;
      break;
    case !props.renderLoginForm && !props.authenticated:
      renderLogin = (
        <>
          <button
            id="login"
            className="ui green button"
            onClick={() => props.loginButtonHandler()}
          >
            Login
          </button>
          <p id="message">{props.message}</p>
        </>
      );
      break;
    case props.authenticated:
      renderLogin = (
        <h3 id="message">
          Welcome {JSON.parse(sessionStorage.getItem("credentials")).uid}
        </h3>
      );
      break;
  }

  return (
    <div className="ui two column grid">
      <div className="column">
        <h1 className="ui header">Cooper test</h1>
      </div>
      <div className="right aligned column">{renderLogin}</div>
    </div>
  );
};

export default Header;
