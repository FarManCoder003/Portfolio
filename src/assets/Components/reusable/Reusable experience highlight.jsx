import { Col, Row } from "react-bootstrap"
import "./reusable experience highlight.css"
const Reusableexperiencehighlight = () => {
  return (
    <>
   <Row>
   <Col xs={{ span: 10, offset: 1 }}>
              <h3>Experience highlights</h3>
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <span className="boxs">
                <h6>Client Engagements</h6>
                <p>000+</p>
              </span>
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <span className="boxs">
                <h6>Completed Projects </h6>
                <p>000+</p>
              </span>
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <span className="boxs">
                <h6>Customer Reviews</h6>
                <p>000+</p>
              </span>
            </Col>
   </Row>
    </>
  )
}

export default Reusableexperiencehighlight