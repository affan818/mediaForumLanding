import React from "react";
import { Container, Card } from "react-bootstrap";
import "./testi.css";

export default function Testimonial() {
  return (
    <Container className="section-padding">
      <h2 className="text-center mb-5" style={{ fontFamily: "Rethink Sans" }}>
        Hear from Our Partners
      </h2>
      <div className="card-container">
        <div className="card-wrapper">
          {/* Original Cards */}
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
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
                Sourabh, Senior Director of SEO
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/goverdhan.png"
                alt="goverdhan"
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
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/goverdhan.png"
                alt="goverdhan"
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
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/goverdhan.png"
                alt="goverdhan"
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

          {/* Duplicate Cards for Continuous Effect */}
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
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
                Sourabh, Senior Director of SEO
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src="https://mediaforumdigital.com/clients/goverdhan.png"
                alt="goverdhan"
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
        </div>
      </div>
    </Container>
  );
}
