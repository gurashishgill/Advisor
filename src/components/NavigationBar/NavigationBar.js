import React, { Component } from "react";
import "./NavigationBar.css";
import { IoMdArrowDropdown } from "react-icons/io";
class NavigationBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <svg
              id="logo-35"
              width="50"
              height="39"
              viewBox="0 0 50 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                class="ccompli1"
                fill="#007AFF"
              ></path>{" "}
              <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                class="ccustom"
                fill="#312ECB"
              ></path>{" "}
            </svg>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="/" className="dropbar">
                  Login
                  <div className="Icon_container">
                    <IoMdArrowDropdown />
                  </div>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/AdvisorLogin">AdvisorLogin</a>
                  </li>
                  <li>
                    <a href="/ClientLogin">ClientLogin</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/AdvisorRegister">SignUp</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
