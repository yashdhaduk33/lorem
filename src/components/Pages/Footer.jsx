import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-5 border-top">
      <Container>
        <Row className="gy-4">
          {/* Brand and description */}
          <Col md={6}>
            <h5 className="fw-bold text-primary">Lorem Text Generator</h5>
            <p className="text-muted mb-0">
              Free Lorem Ipsum generator for designers and developers.
              Create dummy text easily for your design mockups or web projects — no registration required.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none d-block mb-2">Home</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none d-block mb-2">About</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none d-block mb-2">Contact</Link></li>
              <li><Link to="/Lorem-Picsum" className="text-muted text-decoration-none d-block mb-2">Lorem Picsum</Link></li>
            </ul>
          </Col>

          {/* Legal Links */}
          <Col md={3}>
            <h6 className="fw-bold text-dark mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/termsconditions" className="text-muted text-decoration-none d-block mb-2">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Footer bottom note */}
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0 small">
              © {new Date().getFullYear()} LoremTextGenerator.com — Built with ❤️ for developers and designers.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
