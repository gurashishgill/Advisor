import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Dashboard">Dashboard</Nav.Link>
            {/* <Nav.Link href="AdvisorRegister">Advisor</Nav.Link> */}
            <NavDropdown title="Advisor" id="collasible-nav-dropdown">
              <NavDropdown.Item href="AdvisorLogin">
                Sign in as Advisor
              </NavDropdown.Item>
              <NavDropdown.Item href="AdvisorRegister">
                Sign up as Advisor
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Client" id="collasible-nav-dropdown">
              <NavDropdown.Item href="ClientLogin">
                Sign in as Client
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
