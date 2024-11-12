import React from "react";
import "../App.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";
export default function MyNavbar() {
  return (
    <>
      <Navbar style={{fontFamily:"Space Grotesk,serif",fontWeight:"500"}} bg="dark" expand="lg" className="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Madhuraj</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="me-auto">
                <Link
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Home
                </Link>
                {/* <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  About me
                </Link> */}
                <Link
                  className="nav-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  My works
                </Link>
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Contact Me
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
