import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./CompanySection.css";

function MediaForm() {
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
        "service_tcerrvu",
        "template_dj949ki",
        formRef.current,
        "xDZHnmy9IfY-BemmD"
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
    <Form
      ref={formRef}
      onSubmit={sendEmail}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
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
          <option value="">---Select---</option>
          <option value="Paid Advertising">Paid Advertising</option>
          <option value="Search Engine Optimization">
            Search Engine Optimization
          </option>
          <option value="Social Media Management">
            Social Media Management
          </option>
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
          <option value="">---Select---</option>
          <option value="Generating Leads">Generating Leads</option>
          <option value="Increasing Website Traffic">
            Increasing Website Traffic
          </option>
          <option value="Brand Awareness">Brand Awareness</option>
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
          <option value="">---Select---</option>
          <option value="Phone">Phone</option>
          <option value="E-mail">E-mail</option>
          <option value="Whatsapp">Whatsapp</option>
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
              <strong style={{ fontFamily: "Rethink Sans" }}>
                ThankYou!😊
              </strong>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default MediaForm;
