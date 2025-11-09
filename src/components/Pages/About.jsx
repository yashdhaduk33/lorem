import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">About Our Tool</h1>
            <div className="bg-primary mx-auto" style={{ height: '3px', width: '80px' }}></div>
          </div>

          {/* Main Content */}
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="fw-bold text-primary mb-4">What is Lorem Ipsum Generator?</h3>
                  <p className="text-muted fs-6 mb-4">
                    The <strong>Acodin Lorem Ipsum Generator</strong> is a modern, user-friendly web tool built for
                    <strong> designers, developers, and content creators</strong>. It helps you quickly generate
                    realistic dummy text for websites, wireframes, UI designs, and layouts.
                  </p>

                  <p className="text-muted fs-6 mb-4">
                    Unlike traditional Lorem Ipsum generators, our tool provides clean, human-readable filler content
                    that fits modern UI patterns. It's perfect for frontend developers, UI/UX designers, or anyone
                    needing sample text during prototyping or content design.
                  </p>

                  <h5 className="fw-bold text-primary mb-3">Key Features</h5>
                  <ul className="text-muted">
                    <li className="mb-2">Generate paragraphs, sentences, titles, captions, and names</li>
                    <li className="mb-2">Customize with HTML tags and CSS classes</li>
                    <li className="mb-2">Multiple text case options (uppercase, lowercase, title case)</li>
                    <li className="mb-2">One-click copy functionality</li>
                    <li className="mb-2">Completely free with no registration required</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 bg-primary text-white h-100">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Technology Stack</h5>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <Badge bg="light" text="dark" className="fs-6">React.js</Badge>
                    <Badge bg="light" text="dark" className="fs-6">Bootstrap 5</Badge>
                    <Badge bg="light" text="dark" className="fs-6">Lucide Icons</Badge>
                    <Badge bg="light" text="dark" className="fs-6">React Router</Badge>
                  </div>

                  <h5 className="fw-bold mb-3">Why We Built This</h5>
                  <p className="mb-0 opacity-90">
                    This project serves as both a practical utility tool and a learning project to demonstrate
                    modern React development practices with Bootstrap integration.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Stats Section */}
          <Row className="mt-5 g-4">
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-lightning" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h3 className="fw-bold text-primary">100% Free</h3>
                  <p className="text-muted mb-0">No costs, no subscriptions, no hidden fees</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-shield-check" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h3 className="fw-bold text-primary">No Login</h3>
                  <p className="text-muted mb-0">Use immediately without any registration</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center border-0 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-globe" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h3 className="fw-bold text-primary">Always Available</h3>
                  <p className="text-muted mb-0">Accessible from any device with a browser</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}