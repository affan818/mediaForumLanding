// src/components/CompanySection.jsx
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CompanySection.css";

export default function CompanySection() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [qone, setQone] = useState("");
  const [qtwo, setQtwo] = useState("");
  const [qthree, setQthree] = useState("");
  const formRef = useRef();
  const [showAlert, setShowAlert] = useState(false);
  // const searchParams = new URLSearchParams(location.search);
  // const success = searchParams.get("success");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcpb9bp",
        "template_07oeltm",
        formRef.current,
        "wdw2LQv3Rg59m3fmj"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShowAlert(true);
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhonenumber("");
          setQone("");
          setQtwo("");
          setQthree("");
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );
  };
  return (
    <Container className="section-padding" style={{ marginTop: "3rem" }}>
      <Row
        className="justify-content-center text-center my-5"
        style={{ fontFamily: "poppins" }}
      >
        <h1>Work with us</h1>
        <p>
          We've helped scale-ups, enterprises, and early-stage startups with
          organic growth strategy, SEO, and content marketing.
          <br />
          Let’s find out if we can support your growth goals.
        </p>
      </Row>

      <Row style={{ fontFamily: "poppins" }}>
        <Col md={6}>
          <h5 className="mt-4">Companies we've helped grow:</h5>
          <div className="companies">
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/clients/kukreja%20(2).png"
              alt="SAP"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/nanik-logo.png"
              alt="Adobe"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/mahalaxmi-logo.png"
              alt="Hotjar"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/first-city-logo.png"
              alt="Loom"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/clients/rudra%20(1).png"
              alt="Jasper"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/clients/gandhi%20%20(1).png"
              alt="AppSumo"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/clients/goverdhan.png"
              alt="Simon"
            />
            <img
              height={"50px"}
              width={"100px"}
              src="https://mediaforumdigital.com/clients/devprath.png"
              alt="Vendr"
            />
          </div>
          <blockquote className="mt-4" style={{ fontFamily: "Dancing Script" }}>
            <p style={{ fontSize: "25px" }}>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatibus ea quidem soluta. Ullam itaque similique explicabo
              consequatur nemo assumenda sint, voluptatibus incidunt perferendis
              impedi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste excepturi eligendi ut veniam sunt necessitatibus repellendus
              nemo, sapiente ea qui?"
            </p>

            {/* <cite>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              veritatis?
            </cite> */}
          </blockquote>
        </Col>

        <Col
          md={6}
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Form ref={formRef} onSubmit={sendEmail}>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>First name*</Form.Label>
                  <Form.Control
                    name="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      padding: "0.5rem",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control
                    name="last_name"
                    type="text"
                    placeholder="Enter your last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      padding: "0.5rem",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>E-mail*</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      padding: "0.5rem",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile Number*</Form.Label>
                  <Form.Control
                    name="mobile"
                    type="phone"
                    placeholder="Enter your mobile number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      padding: "0.5rem",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2">
              <Form.Label>What would you like to talk about?*</Form.Label>
              <Form.Control
                name="topic"
                as="select"
                value={qone}
                onChange={(e) => setQone(e.target.value)}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  padding: "0.5rem",
                  borderRadius: "6px",
                }}
              >
                <option>SEO</option>
                <option>Content Strategy</option>
                <option>Growth Marketing</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Monthly marketing budget*</Form.Label>
              <Form.Control
                name="budget"
                as="select"
                value={qtwo}
                onChange={(e) => setQtwo(e.target.value)}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  padding: "0.5rem",
                  borderRadius: "6px",
                }}
              >
                <option>Select your budget</option>
                <option>affan</option>
                <option>mukul</option>
                <option>sourabh</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Question 3*</Form.Label>
              <Form.Control
                name="question_3"
                as="select"
                value={qthree}
                onChange={(e) => setQthree(e.target.value)}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  padding: "0.5rem",
                  borderRadius: "6px",
                }}
              >
                <option>Select your option</option>
                <option>answer1</option>
                <option>answer2</option>
                <option>answer3</option>
              </Form.Control>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Button
                  className="mt-3"
                  variant="success"
                  type="submit"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "6px",
                  }}
                >
                  Get your free consultation
                </Button>
              </Col>
              <Col md={6}>
                {showAlert && (
                  <div className="alert">
                    <span
                      className="closebtn"
                      onClick={() => setShowAlert(false)} // React event handler to hide the alert
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </span>
                    <strong style={{ fontFamily: "cursive" }}>
                      ThankYou!😊
                    </strong>
                  </div>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
