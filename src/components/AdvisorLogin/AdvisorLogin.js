import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { getUserInfo } from "../../features/advisor/advisorSlice";
import { getClients } from "../../features/clients/clientsSlice";
import Spinner from "../Spinner/Spinner";
import "./AdvisorLogin.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function AdvisorLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const { userinfo } = useSelector((state) => state.advisor);

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

      dispatch(login(data)).then(() => {
        dispatch(getUserInfo());
      });
    }
  };

  useEffect(() => {
    if (isError) {
      swal({
        title: "Error!",
        text: message,
        icon: "error",
        button: "OK",
      });
    }

    if (isSuccess) {
      swal({
        title: "Success!",
        text: "Logged in successfully",
        icon: "success",
        button: "OK",
      });
      history.push("/");
    }

    dispatch(reset());
  }, [token, isError, isSuccess, isLoading, message, history, dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="advisor_login_container">
          <div className="advisor_login_content">
            <div className="advisor_login_form_conatiner">
              <form action="">
                <div className="advisor_login_heading">
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

                <div className="advisor_login_button_container">
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

          <div className="advisor_login_image">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1676739972~exp=1676740572~hmac=744399e06e6b3ad60ea3e9a0c0a8d35582f9bc3efc9c4375856cd86ed67f66f1"
              alt="login-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AdvisorLogin;
