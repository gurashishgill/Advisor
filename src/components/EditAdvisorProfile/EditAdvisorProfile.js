import React, { useState, useEffect } from "react";
import "./EditAdvisorProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateAdvisor } from "../../features/advisor/advisorSlice";
import { AiFillPhone } from "react-icons/ai";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import swal from "sweetalert";

function EditAdvisorProfile(props) {
  const dispatch = useDispatch();
  const { userinfo } = useSelector((state) => state.advisor);

  const [FirstName, setFirstName] = useState(userinfo.firstName);
  const [LastName, setLastName] = useState(userinfo.lastName);
  const [Phone, setPhone] = useState(userinfo.phone);
  const [Email, setEmail] = useState(userinfo.email);
  const [Comapny, setCompany] = useState(userinfo.company);
  const [City, setCity] = useState(userinfo.city);
  const [State, setState] = useState(userinfo.state);
  const [Address, setAddress] = useState(userinfo.address);

  // Error States
  let [FnameError, setFnameError] = useState("");
  let [LnameError, setLnameError] = useState("");
  let [PhoneError, setPhoneError] = useState("");
  let [EmailError, setEmailError] = useState("");

  let valid = () => {
    let FnameError = "";
    let LnameError = "";
    let PhoneError = "";
    let EmailError = "";

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

    if (FnameError || LnameError || PhoneError || EmailError) {
      setFnameError(FnameError);
      setLnameError(LnameError);
      setEmailError(EmailError);
      setPhoneError(PhoneError);
      return false;
    }
    return true;
  };

  const handleEditProfile = (event) => {
    let isValid = valid();
    event.preventDefault();
    if (isValid) {
      setFnameError("");
      setLnameError("");
      setPhoneError("");
      setEmailError("");

      const data = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        address: Address,
        city: City,
        state: State,
        phone: Phone,
        company: Comapny,
      };

      console.log(data);

      dispatch(updateAdvisor(userinfo.advisorID, data));
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="advisor_register_cover">
          <div className="advisor_register_column">
            <div className="input_field_container">
              <div className="input_field">
                <div className="icon_container">
                  <BsFillPersonFill />
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  id="First Name"
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
          </div>

          <div className="advisor_register_column">
            <div className="input_field_container">
              <div className="input_field">
                <div className="icon_container">
                  <BsFillPersonFill />
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="Last Name"
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
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="clientadd_submit_button" onClick={handleEditProfile}>
          Update
        </button>
        <button className="clientadd_close_button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditAdvisorProfile;
