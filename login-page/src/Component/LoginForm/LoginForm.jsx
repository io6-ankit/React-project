import React from "react";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <div className="wrapper">
      <form className="form">
        <h1>LoginForm</h1>
        <div className="input-box">
          <input type="text" placeholder="Usser Name" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
        </div>
        <div className="remember-forgot">
          <label className="remenber">
            <input className="checkButton" type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button>Login</button>

        <div className="account-register">
          <p>
            Don't have on account?<a href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
