// src/components/CompanySection.jsx
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import MyImage from "/src/assets/images/tanaslogo.png";
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
  const [qfour, setQfour] = useState("");
  const formRef = useRef();
  const [showAlert, setShowAlert] = useState(false);

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
          setQfour("");
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
            <img src={MyImage} alt="SAP" />
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
                  <Form.Label>
                    First name <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
                  <Form.Label>
                    Last name <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
                  <Form.Label>
                    E-mail <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
                  <Form.Label>
                    Mobile Number <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    required
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
              <Form.Label>
                Which digital marketing services do you need ?{" "}
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                required
                name="ans1"
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
                <option>Paid Advertising</option>
                <option>SEO</option>
                <option>Social Media Management</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>
                What are your primary goals for this marketing campaign ?{" "}
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                required
                name="ans2"
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
                <option>Generating Leads</option>
                <option>Increasing Website Traffic</option>
                <option>Brand Awareness</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>
                What is the best way to contact you ?{" "}
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                required
                name="ans3"
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
                <option>Phone</option>
                <option>E-mail</option>
                <option>Whatsapp</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Do you have any other query</Form.Label>
              <Form.Control
                name="ans4"
                value={qfour}
                onChange={(e) => setQfour(e.target.value)}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  padding: "0.5rem",
                  borderRadius: "6px",
                }}
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Button
                  type="submit"
                  className="mt-3 bg-black text-white mySubmitBtn"
                  variant="black"
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
