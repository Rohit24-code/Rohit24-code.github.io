import { useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";


export const Contact = () => {
  const form = useRef();
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  
// 
  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f97xmvp",
        "template_qh1qedx",
        form.current,
        "TyZv3FRB8YGkOQpFH"
      )
      .then(
        () => {
          setButtonText("Message send")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          placeholder="Enter Name..."
                          type="text"
                          name="user_name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          placeholder="Enter Email..."
                          type="email"
                          name="user_email"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button value="Send" type="submit">
                          <span>{buttonText}</span>
                        </button>
                        {buttonText==="Message send" && (<button value="Send" onClick={()=>setButtonText('Send')}>
                          <span>Reset</span>
                        </button>)}
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
