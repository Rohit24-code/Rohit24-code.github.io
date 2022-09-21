import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              style={{ borderRadius: "50%", width: "100px" }}
              src={logo}
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/rohit-singh-423264202/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/Rohit24-code"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://twitter.com/Rohit102265"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="tel : +91 8839438751"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>rohitsingh17031995@gmail.com</p>
            <p>Contact-No  :-  8839438751</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
