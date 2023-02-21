import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import "./NavigationBar.css";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function NavigationBar() {
  const history = useHistory();

  let userData = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="/">
          <img src={logo} style={{ height: "40px" }} />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {userData === null ? (
            <>
              <Nav className="me-auto my-2 my-lg-0 nav_container" navbarScroll>
                <div className="nav_item_1">
                  <Nav.Link href="/">
                    <img src={logo} style={{ height: "60px" }} />
                  </Nav.Link>
                </div>
                <div className="nav_item_2">
                  <NavDropdown title="Login" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/AdvisorLogin">
                      Login as Advisor
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/ClientLogin">
                      Login as Client
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/AdvisorRegister">Signup</Nav.Link>
                </div>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="me-auto my-2 my-lg-0 nav_container" navbarScroll>
                <div className="nav_item_1">
                  <Nav.Link href="/">
                    <img src={logo} style={{ height: "40px" }} />
                  </Nav.Link>
                </div>
                <div className="nav_item_2">
                  <Nav.Link className="logout_button" onClick={handleLogout}>
                    Logout <FiLogOut />
                  </Nav.Link>
                </div>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
