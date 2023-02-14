import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import "./ClientLogin.css";

const ClientLogin = () => {
  return (
    <div className="clogin_container">
      <div className="clogin_form_conatiner">
        <form action="">
          <div className="clogin_heading">
            <h2>Sign In As Client</h2>
          </div>

          <div className="input_field">
            <div className="icon_container">
              <BsFillPersonFill />
            </div>
            <input type="text" placeholder="UserName" id="UsertName" />
          </div>

          <div className="input_field">
            <div className="icon_container">
              <RiLockPasswordFill />
            </div>
            <input type="text" placeholder="Password" id="Password" />
          </div>

          <div className="clogin_button_container">
            <div className="rememberme_container">
              <input type="checkbox" />
              <a href="https://www.google.com/">Remember Me</a>
            </div>

            <button type="submit">SIGN IN</button>
          </div>

          <div className="forgotPassword_container">
            <a href="https://www.google.com/">Forgot Password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientLogin;
