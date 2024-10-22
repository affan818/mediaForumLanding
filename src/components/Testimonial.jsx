// src/components/Testimonial.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Testimonial() {
  return (
    <Container className="section-padding">
      <h2 className="text-center mb-5" style={{ fontFamily: "Rethink Sans" }}>
        What clients have to say
      </h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/kukreja%20(2).png"
                alt="kukreja"
                style={{ width: "5rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ipsum commodi suscipit eveniet iusto animi voluptates rem!
                Asperiores, saepe placeat!"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                sourabh, Senior Director of SEO
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/goverdhan.png"
                alt="kukreja"
                style={{ width: "5rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ipsum commodi suscipit eveniet iusto animi voluptates rem!
                Asperiores, saepe placeat!"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Mukul, Founder of MediaForum
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
