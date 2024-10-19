// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{ color: "#d8ff36" }}>MediaForum Digital</h5>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              deleniti minima nemo natus enim ipsam?
            </p>
            <p className="text-white">
              MediaForum Digital PL <br />
              2024 Nagpur
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: "#d8ff36" }}>Agency Services</h5>
            <ul className="list-unstyled">
              <li className="text-white">
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  SEO & Content Strategy
                </a>
              </li>
              <li className="text-white">
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Content Production
                </a>
              </li>
              <li className="text-white">
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Link Building & Digital PR
                </a>
              </li>
              <li className="text-white">
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Technical SEO
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: "#d8ff36" }}>Company</h5>
            <ul className="list-unstyled">
              <li className="text-white">
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  About
                </a>
              </li>
              {/* <li className="text-white">Blog</li>
              <li className="text-white">Careers</li> */}
            </ul>
          </Col>
        </Row>
        <div className="text-center py-3 text-white">
          © 2024{" "}
          <a
            href="https://mediaforumdigital.com/"
            style={{ textDecoration: "none", color: "#d8ff36" }}
          >
            Media Forum
          </a>{" "}
          Official
        </div>
      </Container>
    </footer>
  );
}
