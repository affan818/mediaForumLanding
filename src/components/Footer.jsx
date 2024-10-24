// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{ color: "#d8ff36" }}>Information</h5>
            <p className="text-white">
              Mediaforum Digital- Best Digital Marketing Company in Nagpur
              specializes in 360 Degree. SEO, Email Marketing, Website Design,
              SEO, Content Writing, Analytics & reports.
            </p>
          </Col>
          <Col md={4}>{"    "}</Col>

          <Col md={4}>
            <h5 style={{ color: "#d8ff36" }}>Get in Touch</h5>
            <p className="text-white">
              4th Floor, Plot. No. 37, Beside Chaitanya Home Stay, 39, Behind
              Amey Hospital, Near Gajanan Nagar Garden, Nagpur,
              Maharashtra,440015
              <br />
              Call : +91 9765127101
              <br />
              <a
                href="mailto:business@mediaforumdigital.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                business@mediaforumdigital.com
              </a>
            </p>
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
