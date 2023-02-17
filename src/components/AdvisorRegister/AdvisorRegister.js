import React, { useState } from "react";
import "./AdvisorRegister.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
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

      axios
        .post("https://localhost:7075/api/Users/Register", data)
        .then((response) => {
          swal({
            title: "Success!",
            text: "You have been registered successfully",
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
    <>
      <div className="aregister_container">
        <div className="aregister_form_container">
          <form action="">
            <div className="aregister_heading">
              <h2>Sign Up As Advisor</h2>
            </div>
            <div>
              <div className="aregister_cover">
                <div className="aregister_column">
                  <div className="input_field_container">
                    <div className="input_field">
                      <div className="icon_container">
                        <BsFillPersonFill />
                      </div>
                      <input
                        type="text"
                        placeholder="FirstName"
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

                <div className="aregister_column">
                  <div className="input_field_container">
                    <div className="input_field">
                      <div className="icon_container">
                        <BsFillPersonFill />
                      </div>
                      <input
                        type="text"
                        placeholder="LastName"
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
                        placeholder="Confirm Passsword"
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
            <div className="aregister_button_container">
              <button type="submit" onClick={handleRegister}>
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
