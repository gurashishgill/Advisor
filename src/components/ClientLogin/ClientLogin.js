import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./ClientLogin.css";

const ClientLogin = () => {
  return (
    <>
      <div className="client_login_container">
        <div
          className="client_login_content"
          // class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
          // data-aos="fade-up"
        >
          <div className="client_login_form_conatiner">
            <form action="">
              <div className="client_login_heading">
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

              <div className="client_login_button_container">
                <button type="submit" onClick={() => {}}>
                  SIGN IN
                </button>
              </div>

              <div className="forgotPassword_container">
                <a href="https://www.google.com/">Forgot Password</a>
              </div>
            </form>
          </div>
        </div>

        <div
          className="client_login_image"
          // class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img aos-init aos-animate"
          // data-aos="fade-up"
        >
          <img
            src="https://bootstrapmade.com/demo/templates/Appland/assets/img/details-1.png"
            // class="img-fluid"
            alt="login-image"
            // style={{ width: "400px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ClientLogin;
