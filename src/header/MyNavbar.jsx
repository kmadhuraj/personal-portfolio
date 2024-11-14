import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";
import { useState,useEffect } from "react";
// import { motion } from "framer-motion";
export default function MyNavbar() {


 

  return (
    <>
      <Navbar
        style={{ fontFamily: "Space Grotesk,serif", fontWeight: "500" }}
        bg="dark"
        expand="lg"
        className="tw-fixed tw-w-full tw-top-0 tw-z-50 "
        data-bs-theme="dark"
        
      >
        <Container className="">
          <Navbar.Brand href="#home">Madhuraj</Navbar.Brand>
          <Navbar.Toggle   aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            
            className="offcanvas-fullwidth tw-bg-neutral-400 "
            // tabindex="1"
            // id="offcanvasTop"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <Offcanvas.Header  closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel ">Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="text-center">
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
