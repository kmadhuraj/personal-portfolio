import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Madhuraj</Navbar.Brand>
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
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
            >
              About me
            </Link>
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
        </Container>
      </Navbar>
    </>
  );
}
