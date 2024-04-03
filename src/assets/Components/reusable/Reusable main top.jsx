import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Reusablemaintop.css";

const Reusablemaintop = (props) => {
  return (
    <>
      <Row>
        <Col xs={12} className="text-center">
          <h1>
            I am <span className="underline">Farman</span>
            <span className="underlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 373 61"
                fill="none"
              >
                <path
                  d="M3 57C107.963 -10.0347 314.693 91.7588 369 3"
                  stroke="url(#paint0_linear_39_18)"
                  strokeWidth="9"
                  className="animated-path"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_18"
                    x1="3"
                    y1="30"
                    x2="369"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.34" stopColor="#FF0000" />
                    <stop offset="1" stopColor="#870000" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} className="text-center banner">
          <h3>{props.para}</h3>
        </Col>
        <Col xs={12} className="text-center">
          <Link to="/contact">
            <button className="connectbutton">Connect</button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Reusablemaintop;
