import Nanik from "/src/assets/images/Nanik.png";
import Basera from "/src/assets/images/Basera.png";
import Gandhi from "/src/assets/images/Gandhi.png";
import Shiva from "/src/assets/images/Shiva.png";
import Atlantis from "/src/assets/images/Atlantis.png";
import Globe from "/src/assets/images/Globe.png";
import Concrete from "/src/assets/images/Concrete.png";
import Tanas from "/src/assets/images/Tanas.png";
import Rituals from "/src/assets/images/Rituals.png";
import Kukreja from "/src/assets/images/Kukreja.png";
import Everon from "/src/assets/images/Everon.png";
import Browns from "/src/assets/images/Browns.png";
import { Container, Row, Col } from "react-bootstrap";
import "./CompanySection.css";
import MediaForm from "./MediaForm";

export default function CompanySection() {
  return (
    <Container className="section-padding" style={{ marginTop: "3rem" }}>
      <Row
        className="justify-content-center text-center my-5"
        style={{ fontFamily: "Rethink Sans" }}
      >
        <Col xs={12} md={10} lg={8}>
          <h1 className="display-4">Work with us</h1>
          <p className="lead">
            From rising startups to empowering enterprises, we've driven organic
            growth with our tailored SEO and content marketing strategies. As a
            leading digital marketing agency in Nagpur, explore how we can
            accelerate your growth journey.
          </p>
        </Col>
      </Row>

      <Row style={{ fontFamily: "Rethink Sans" }}>
        <Col md={6}>
          <h1 className="mt-4 p-2">Brands We've Powered Forward!</h1>
          <div className="companies">
            <img width="100" src={Gandhi} alt="Gandhi" />
            <img width="100" src={Nanik} alt="Nanik" />
            <img width="100" src={Shiva} alt="Shiva" />
            <img width="100" src={Concrete} alt="Concrete" />
            <img width="100" src={Tanas} alt="Tanas" />
            <img width="100" src={Basera} alt="Basera" />
            <img width="100" src={Globe} alt="Globe" />
            <img width="100" src={Atlantis} alt="Atlantis" />
            <img width="100" src={Rituals} alt="Rituals" />
            <img width="100" src={Kukreja} alt="Kukreja" />
            <img width="100" src={Everon} alt="Everon" />
            <img width="100" src={Browns} alt="Browns" />
          </div>
          <p
            className="p-2 text-start"
            style={{ fontSize: "25px", fontFamily: "Rethink Sans" }}
          >
            "Join us to experience where creativity encounters goals! At Media
            Forum Digital, a leading digital marketing agency in Nagpur, every
            idea counts, and together, we compose amazing stories that leave a
            lasting impact. If you're intense about innovation and ready to
            grow, we’d love to make your next big move with us."
          </p>
        </Col>

        <Col md={6}>
          <MediaForm />
        </Col>
      </Row>
    </Container>
  );
}
