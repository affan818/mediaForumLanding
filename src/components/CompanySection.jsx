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
        <h1>Work with us</h1>
        <p>
          We've helped scale-ups, enterprises, and early-stage startups with
          organic growth strategy, SEO, and content marketing.
          <br />
          Let’s find out if we can support your growth goals.
        </p>
      </Row>

      <Row style={{ fontFamily: "Rethink Sans" }}>
        <Col md={6}>
          <h1 className="mt-4">Companies we've helped grow:</h1>
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

          <blockquote className="mt-4" style={{ fontFamily: "Rethink Sans" }}>
            <p style={{ fontSize: "25px" }}>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatibus ea quidem soluta. Ullam itaque similique explicabo
              consequatur nemo assumenda sint, voluptatibus incidunt perferendis
              impedi Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste excepturi eligendi ut veniam sunt necessitatibus repellendus
              nemo, sapiente ea qui?"
            </p>
          </blockquote>
        </Col>

        <Col md={6}>
          <MediaForm />
        </Col>
      </Row>
    </Container>
  );
}
