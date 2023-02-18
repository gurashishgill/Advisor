import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import "./AdvisorLogin.css";
import axios from "axios";
import swal from "sweetalert";

function AdvisorLogin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // Error States
  let [EmailError, setEmailError] = useState("");
  let [passError, setpassError] = useState("");

  let valid = () => {
    let EmailError = "";
    let passError = "";

    if (Email == null) {
      EmailError = "Invalid email";
    }
    if (Password.length < 6) {
      passError = "Passwords must be of 6 length";
    }

    if (EmailError || passError) {
      setEmailError(EmailError);
      setpassError(passError);
      return false;
    }
    return true;
  };

  const handleLogin = (event) => {
    let isValid = valid();
    event.preventDefault();
    if (isValid) {
      setEmailError("");
      setpassError("");

      const data = {
        email: Email,
        password: Password,
      };

      axios
        .post("https://localhost:7075/api/Users/Login", data)
        .then((response) => {
          if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          swal({
            title: "Success!",
            text: "You have been Logged in successfully",
            icon: "success",
            button: "OK",
          });
        })
        .catch((error) => {
          swal({
            title: "Error!",
            text: "server side error.",
            icon: "error",
            button: "OK",
          });
        });
    }
  };

  return (
    <div className="column">
      <div className="row clogin_main">
        <div
          class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="clogin_form_conatiner">
            <form action="">
              <div className="clogin_heading">
                <h2>Sign In As Advisor</h2>
              </div>

              <div className="input_field_container">
                <div className="input_field">
                  <div className="icon_container">
                    <BsFillPersonFill />
                  </div>
                  <input
                    type="email"
                    placeholder="UserName"
                    id="UsertName"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="error">{EmailError}</p>
              </div>

              <div className="input_field_container">
                <div className="input_field">
                  <div className="icon_container">
                    <RiLockPasswordFill />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    id="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="error">{passError}</p>
              </div>

              <div className="clogin_button_container">
                <div className="rememberme_container">
                  <input type="checkbox" />
                  <a href="https://www.google.com/">Remember Me</a>
                </div>

                <button type="submit" onClick={handleLogin}>
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
          class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img aos-init aos-animate"
          data-aos="fade-up"
        >
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1676739972~exp=1676740572~hmac=744399e06e6b3ad60ea3e9a0c0a8d35582f9bc3efc9c4375856cd86ed67f66f1"
            class="img-fluid"
            alt=""
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </div>
    // <div className="alogin_container">
    //   <div className="alogin_form_conatiner">
    //     <form action="">
    //       <div className="alogin_heading">
    //         <h2>Sign In As Advisor</h2>
    //       </div>

    //       <div className="input_field_container">
    //         <div className="input_field">
    //           <div className="icon_container">
    //             <BsFillPersonFill />
    //           </div>
    //           <input
    //             type="email"
    //             placeholder="UserName"
    //             id="UsertName"
    //             value={Email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <p className="error">{EmailError}</p>
    //       </div>

    //       <div className="input_field_container">
    //         <div className="input_field">
    //           <div className="icon_container">
    //             <RiLockPasswordFill />
    //           </div>
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             id="Password"
    //             value={Password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <p className="error">{passError}</p>
    //       </div>

    //       <div className="alogin_button_container">
    //         <div className="rememberme_container">
    //           <input type="checkbox" />
    //           <a href="https://www.google.com/">Remember Me</a>
    //         </div>

    //         <button type="submit" onClick={handleLogin}>
    //           SIGN IN
    //         </button>
    //       </div>

    //       <div className="forgotPassword_container">
    //         <a href="https://www.google.com/">Forgot Password</a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default AdvisorLogin;
