import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import "./css/navtop.css";
import { BiHomeSmile } from "react-icons/bi";
import { DiCodeBadge } from "react-icons/di";
import { SiCyberdefenders } from "react-icons/si";
const NavTop = () => {
  return (
    <>
      <Navbar expand="lg" id="nav">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-lg-5">
              <Link to="/" href="#home">
                <div className="line">
                  <a href="">
                    Home
                    <i>
                      <BiHomeSmile />
                    </i>
                  </a>
                </div>
              </Link>
              <Link to="/Fed" className="text-center" href="#">
                <div className="line">
                  <a href="">
                    Frontend Development
                    <i>
                      <DiCodeBadge />
                    </i>
                  </a>
                </div>
              </Link>
              <Link to="/Cyber" className="text-center" href="#">
                <div className="line">
                  <a href="">
                    Cyber Security
                    <i>
                      <SiCyberdefenders />
                    </i>
                  </a>
                </div>
              </Link>
            </Nav>
            <Link to="/contact" className="ms-auto" href="#">
              <button className="button">
                <a href="">Contact</a>
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTop;
