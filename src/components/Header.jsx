// src/components/Header.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css"; // Importing custom styles

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Navbar.Brand href="#" className="order-1">
          <img
            width={"100px"}
            src="https://mediaforumdigital.com/assets/images/mf-logo.png"
            alt="mediaForum Logo"
          />
        </Navbar.Brand>

        {/* Toggle button on the right for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler order-2 ms-auto"
        />

        <Navbar.Collapse id="basic-navbar-nav" className="order-3">
          <Nav className="ms-auto">
            <Nav.Link
              href="https://mediaforumdigital.com"
              className="text-light"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="https://mediaforumdigital.com/about.html"
              className="text-light"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="https://mediaforumdigital.com/our-team.html"
              className="text-light"
            >
              Our Team
            </Nav.Link>

            {/* 
            <Nav.Link href="#" className="text-light">
              Resources
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Company
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        {/* <Nav.Link
          href="#"
          className="btn btn-success ms-3 d-none d-lg-inline-block"
        >
          Book Strategy Call
        </Nav.Link> */}
      </Container>
    </Navbar>
  );
}
