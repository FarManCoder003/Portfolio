import { Col, Row } from "react-bootstrap";
import "./reusable skill and project.css";
import Slider from "react-slick";
const Reusableskillandproject = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={12}>
              <h3>My Skills</h3>
            </Col>
            <Col xs={12}>
            <div className="skill">
                <h4>{props.skill1}</h4>
                <h4>{props.skill2}</h4>
                <h4>{props.skill3}</h4>
                <h4>{props.skill4}</h4>
            </div>
            </Col>
            <Col className="text-start">
              <h3>My Projects</h3>
            </Col>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  <div className="projects">
                    <h5>Project-1</h5>
                  </div>
                  <div className="projects">
                    <h5>Project-2</h5>
                  </div>
                  <div className="projects">
                    <h5>Project-3</h5>
                  </div>
                  <div className="projects">
                    <h5>Project-4</h5>
                  </div>
                  <div className="projects">
                    <h5>Project-5</h5>
                  </div>
                  <div className="projects">
                    <h5>Project-6</h5>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Reusableskillandproject;
