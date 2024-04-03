import { Col, Container, Row } from "react-bootstrap";
import "../Components/css/main.css";
import Reusablemaintop from "./reusable/Reusable main top";
import Reusableexperiencehighlight from "./reusable/Reusable experience highlight";
const Main = () => {
  return (
    <>
      <section id="main">
        <Container>
          <Row>
            <Reusablemaintop
              para="Infusing web development with cyber security, I forge
                unassailable secure digital products"
            />

            <Col xs={{ span: 3, offset: 1 }} className="text-start">
              <h3>My Qualifications</h3>
              <div className="box">
                <h4>Certificate title</h4>
                <h5>Institute name</h5>
                <a href="" download>
                  Download
                </a>
              </div>
              <div className="box">
                <h4>Certificate title</h4>
                <h5>Institute name</h5>
                <a href="" download>
                  Download
                </a>
              </div>
              <div className="box">
                <h4>Certificate title</h4>
                <h5>Institute name</h5>
                <a href="" download>
                  Download
                </a>
              </div>
              <div className="box">
                <h4>Certificate title</h4>
                <h5>Institute name</h5>
                <a href="" download>
                  Download
                </a>
              </div>
            </Col>
            <Reusableexperiencehighlight />
            <Col xs={{ span: 10, offset: 1 }} className="text-start">
              <h3>Client feedbacks</h3>
              <Row className="gap-5">
                <Col xs={{ span: 5, offset: 1 }}>
                  <div className="feedback">
                    <img src="" alt="img" />
                    <div className="text">
                      &quot;Comment of the client&quot;
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 5 }}>
                  <div className="feedback">
                    <img src="" alt="img" />
                    <div className="text">
                      &quot;Comment of the client&quot;
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
