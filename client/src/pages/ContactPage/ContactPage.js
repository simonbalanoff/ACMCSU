import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBInput, MDBTextArea,
  MDBCheckbox, MDBBtn,
  MDBValidation, MDBValidationItem
} from 'mdb-react-ui-kit';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC
    )
    .then(() => setStatus('Message sent!'))
    .catch(() => setStatus('Failed to send.'));
  };

  return (
      <AnimatedSection>
          <MDBContainer className="py-5">
              <h2 className="text-center mb-4">Contact Us</h2>
              <MDBRow className="justify-content-center">
                  <MDBCol md="6">
                      <MDBValidation
                          ref={formRef}
                          noValidate
                          onSubmit={sendEmail}
                          className="text-center"
                      >
                          <MDBValidationItem
                              invalid
                              feedback="Name is required."
                          >
                              <MDBInput
                                  label="Name"
                                  name="name"
                                  wrapperClass="mb-4"
                                  required
                              />
                          </MDBValidationItem>

                          <MDBValidationItem
                              invalid
                              feedback="Valid email is required."
                          >
                              <MDBInput
                                  type="email"
                                  label="Email"
                                  name="email"
                                  wrapperClass="mb-4"
                                  required
                              />
                          </MDBValidationItem>

                          <MDBValidationItem
                              invalid
                              feedback="Subject is required."
                          >
                              <MDBInput
                                  label="Subject"
                                  name="title"
                                  wrapperClass="mb-4"
                                  required
                              />
                          </MDBValidationItem>

                          <MDBValidationItem
                              invalid
                              feedback="Please enter a message."
                          >
                              <MDBTextArea
                                  label="Message"
                                  name="message"
                                  wrapperClass="mb-4"
                                  required
                              />
                          </MDBValidationItem>

                          <MDBCheckbox
                              name="copy"
                              label="Send me a copy"
                              wrapperClass="d-flex justify-content-center mb-4"
                          />

                          <MDBBtn
                              style={{
                                  backgroundColor: "#2e7d32",
                                  color: "white",
                                  border: "none",
                                  boxShadow: "0 2px 6px rgba(46, 125, 50, 0.3)",
                              }}
                          >
                              Send
                          </MDBBtn>
                      </MDBValidation>

                      {status && <p className="mt-3">{status}</p>}
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </AnimatedSection>
  );
}
