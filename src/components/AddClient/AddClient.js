import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createClient, reset } from "../../features/clients/clientsSlice";
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

function AddClient(props) {
  const dispatch = useDispatch();
  const { userinfo } = useSelector((state) => state.advisor);

  const { clients, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.clients
  );

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Comapny, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");

  // Error States
  let [NameError, setNameError] = useState("");
  let [PhoneError, setPhoneError] = useState("");
  let [EmailError, setEmailError] = useState("");
  let [passError, setpassError] = useState("");

  let valid = () => {
    let NameError = "";
    let PhoneError = "";
    let EmailError = "";
    let passError = "";

    if (Name.length < 3 || Name == null) {
      NameError = "Invalid first name";
    }
    if (Phone.length != 10 || Phone == null) {
      PhoneError = "Phone number must be of 10 digits";
    }
    if (Email == null) {
      EmailError = "Invalid email";
    }
    if (Password.length < 6) {
      passError = "Passwords must be of 6 length";
    }

    if (NameError || PhoneError || EmailError || passError) {
      setNameError(NameError);
      setEmailError(EmailError);
      setPhoneError(PhoneError);
      setpassError(passError);
      return false;
    }
    return true;
  };

  const handlecreateclient = (event) => {
    let isValid = valid();
    event.preventDefault();
    if (isValid) {
      setNameError("");
      setPhoneError("");
      setEmailError("");
      setpassError("");

      const data = {
        advisorID: userinfo.advisorID,
        firstName: Name,
        lastName: Name,
        email: Email,
        address: Address,
        city: City,
        state: State,
        phone: Phone,
        company: Comapny,
        password: Password,
      };

      dispatch(createClient(data));
      props.onHide();
    }
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     swal({
  //       title: "Success!",
  //       text: "Client added successfully!!!",
  //       icon: "success",
  //       button: "OK",
  //     });
  //   }
  //   if (isError) {
  //     swal({
  //       title: "Error!",
  //       text: "Could not load clients",
  //       icon: "error",
  //       button: "OK",
  //     });
  //   }
  //   dispatch(reset());
  // }, [clients, isError, isSuccess, isLoading, message, dispatch]);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Client
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
                  placeholder="Name"
                  id="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <p className="error">{NameError}</p>
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

              <p className="error">{passError}</p>
            </div>
          </div>

          <div className="advisor_register_column">
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
        <button
          className="clientadd_submit_button"
          onClick={handlecreateclient}
        >
          Submit
        </button>
        <button className="clientadd_close_button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddClient;
