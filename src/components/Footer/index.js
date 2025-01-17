import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="social-icons d-flex justify-content-center">
              <a href="https://www.instagram.com/mukeshk.umar/" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://github.com/mukeshkumar78370" className="social-icon">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mukesh-kumar-773480253/" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p>
              <i className="fa fa-copy" aria-hidden="true">
                Copyright 2025. All Rights Reserved
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
