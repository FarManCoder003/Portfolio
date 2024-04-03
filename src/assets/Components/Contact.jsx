import { Col, Container, Row } from "react-bootstrap";
import "./css/contact.css";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container>
          <Row>
            <Col xs={{ span: 10, offset: 2 }}>
              <h2>Talk with me</h2>
              <input type="text" placeholder="Enter your name" />
              <br />
              <input type="email" placeholder="Enter your mail" />
              <br />
              <input type="text" placeholder="Enter your message" />
              <br />
              <button type="button">Submit</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
