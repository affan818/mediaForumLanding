import React from "react";
import { Container, Card } from "react-bootstrap";
import atlantis from "../assets/images/Atlantis.png";
import concrete from "../assets/images/Concrete.png";
import kukreja from "../assets/images/Kukreja.png";
import navnirman from "../assets/images/Navnirman.png";
import maitry from "../assets/images/Maitry.png";
import ijm from "../assets/images/IJM.png";
import everon from "../assets/images/Everon.png";
import mahalaxmi from "../assets/images/Mahalaxmi.png";
import gandhi from "../assets/images/Gandhi.png";

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
                src={atlantis}
                alt="atlantis"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "There was great satisfaction, saying they went more than we
                expected for the concept's implementation. Our traffic doubled,
                and conversion skyrocketed, which for any organization is the
                music to the ears of the management. Brilliant!"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Atlantis By Mittal Group
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={concrete}
                alt="concrete"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "SEO techniques increased our web presence by leaps and bounds.
                We went from incognito to the first page in the blink of an eye.
                We greatly appreciate the whole crew here!"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Concrete Developers
              </Card.Subtitle>
            </Card.Body>
          </Card>
          {/* Add more cards as necessary */}
          {/* Duplicate Cards for Continuous Effect */}
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={kukreja}
                alt="kukreja"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "Right from their cooperation, leads increased tens of times.
                It’s high time to turn to their campaigns as a target – their
                ads are different, and their results speak volumes. "
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Anandam World City
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={navnirman}
                alt="navnirman"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "They are creative and their performance analysis brings a whole
                new level of innovation into our process! The Overall brand
                engagement has never been this high. Highly recommend!"
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted ">
                Navnirman Builders
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={everon}
                alt="everon"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "MediaForum's team makes digital marketing feel effortless!
                Their valuable strategy and insights have proven that our
                company stands out in a fiercely competitive world. "
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Everon Energy
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={maitry}
                alt="maitry"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "We must say Media Forum delivered amazing results! Their SEO
                and PPC campaigns have been thriving immensely."
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Green Gold Prime By Maitreya Group
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={ijm}
                alt="ijm"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "From the start, Mediaforum felt like an extension of our team.
                They’ve transformed our digital reach with precision and
                creativity."
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                IJM's First City
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={mahalaxmi}
                alt="mahalaxmi"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "Attractive results! Their expertise converted our digital reach
                with super creativity and sheer consistency! "
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Mahalaxmi City
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card className="mx-2 testimonial-card">
            <Card.Body className="card-body">
              <Card.Img
                variant="top"
                src={gandhi}
                alt="gandhi"
                style={{ width: "10rem", marginBottom: "10px" }}
              />
              <Card.Text style={{ fontFamily: "Rethink Sans" }}>
                "Mediaforum’s unique and engaging content strategy brought our
                brand to life! We are impressed with the consistent followups
                and creative team."
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Mahalaxmi City
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
