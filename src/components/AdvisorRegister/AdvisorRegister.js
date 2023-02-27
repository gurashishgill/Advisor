import React, { useState, useEffect } from "react";
import "./AdvisorRegister.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Spinner from "../Spinner/Spinner";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      swal({
        title: "Error!",
        text: message,
        icon: "error",
        button: "OK",
      });
    }

    if (isSuccess || token) {
      swal({
        title: "Success!",
        text: message,
        icon: "success",
        button: "OK",
      });
      // history.push("/AdvisorLogin");
    }

    dispatch(reset());
  }, [token, isError, isSuccess, isLoading, message, history, dispatch]);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Comapny, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // Error States
  let [FnameError, setFnameError] = useState("");
  let [LnameError, setLnameError] = useState("");
  let [PhoneError, setPhoneError] = useState("");
  let [EmailError, setEmailError] = useState("");
  let [pass1Error, setpass1Error] = useState("");
  let [pass2Error, setpass2Error] = useState("");
  let [passequalError, setpassequalerror] = useState("");

  let valid = () => {
    let FnameError = "";
    let LnameError = "";
    let PhoneError = "";
    let EmailError = "";
    let pass1Error = "";
    let pass2Error = "";
    let passequalError = "";

    if (FirstName.length < 3 || FirstName == null) {
      FnameError = "Invalid first name";
    }
    if (LastName.length < 3 || LastName == null) {
      LnameError = "Invalid last name";
    }
    if (Phone.length != 10 || Phone == null) {
      PhoneError = "Phone number must be of 10 digits";
    }
    if (Email == null) {
      EmailError = "Invalid email";
    }
    if (Password.length < 6) {
      pass1Error = "Passwords must be of 6 length";
    }
    if (ConfirmPassword.length < 6) {
      pass2Error = "Passwords must be of 6 length";
    }
    if (Password != ConfirmPassword) {
      passequalError = "Passwords don't match";
    }

    if (
      FnameError ||
      LnameError ||
      PhoneError ||
      EmailError ||
      pass1Error ||
      pass2Error ||
      passequalError
    ) {
      setFnameError(FnameError);
      setLnameError(LnameError);
      setEmailError(EmailError);
      setPhoneError(PhoneError);
      setpass1Error(pass1Error);
      setpass2Error(pass2Error);
      setpassequalerror(passequalError);
      return false;
    }
    return true;
  };

  const handleRegister = (event) => {
    let isValid = valid();
    event.preventDefault();
    if (isValid) {
      setFnameError("");
      setLnameError("");
      setPhoneError("");
      setEmailError("");
      setpass1Error("");
      setpass2Error("");
      setpassequalerror("");

      const data = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        address: Address,
        city: City,
        state: State,
        phone: Phone,
        company: Comapny,
        password: Password,
        confirmPassword: ConfirmPassword,
      };

      dispatch(register(data));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="advisor_register_container">
        <div className="advisor_register_content">
          <div className="advisor_register_form_conatiner">
            <form action="">
              <div className="advisor_register_heading">
                <h2>Sign Up As Advisor</h2>
              </div>
              <div>
                <div className="advisor_register_cover">
                  <div className="advisor_register_column">
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <BsFillPersonFill />
                        </div>
                        <input
                          type="text"
                          placeholder="Firstname"
                          id="FirstName"
                          value={FirstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <p className="error">{FnameError}</p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <AiFillPhone />
                        </div>
                        <input
                          type="text"
                          placeholder="Phone"
                          id="Phone"
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <p className="error">{PhoneError}</p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <RiBuilding4Fill />
                        </div>
                        <input
                          type="text"
                          placeholder="Company"
                          id="Comapny"
                          value={Comapny}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                      <p className="error"></p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <FaTelegramPlane />
                        </div>
                        <input
                          type="text"
                          placeholder="State"
                          id="State"
                          value={State}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <p className="error"></p>
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

                      <p className="error">{pass1Error}</p>
                    </div>
                  </div>

                  <div className="advisor_register_column">
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <BsFillPersonFill />
                        </div>
                        <input
                          type="text"
                          placeholder="Lastname"
                          id="LastName"
                          value={LastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      <p className="error">{LnameError}</p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <AiTwotoneMail />
                        </div>
                        <input
                          type="email"
                          placeholder="Email"
                          id="Email"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <p className="error">{EmailError}</p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <HiLocationMarker />
                        </div>
                        <input
                          type="text"
                          placeholder="City"
                          id="City"
                          value={City}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <p className="error"></p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <FaAddressBook />
                        </div>
                        <input
                          type="text"
                          placeholder="Address"
                          id="Address"
                          value={Address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <p className="error"></p>
                    </div>
                    <div className="input_field_container">
                      <div className="input_field">
                        <div className="icon_container">
                          <RiLockPasswordFill />
                        </div>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          id="ConfirmPassword"
                          value={ConfirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      <p className="error">
                        {pass2Error} {passequalError}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="advisor_register_button_container">
                <button type="submit" onClick={handleRegister}>
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="advisor_register_image">
          <img
            src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1676740665~exp=1676741265~hmac=73af938ab80b799ca7d713a4aa8dc1ee26797a6a6ac27891e8778636960a0de9"
            alt="register-image"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
