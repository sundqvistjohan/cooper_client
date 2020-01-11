import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login-form" className="ui inverted form">
      <div className="field">
        <label>Email</label>
        <input name="email" type="email" id="email"></input>
      </div>
      <div className="field">
        <label>Password</label>
        <input name="password" type="password" id="password"></input>
      </div>
      <button id="submit" className="ui inverted orange button">Submit</button>
    </form>
  );
};

export default LoginForm;
