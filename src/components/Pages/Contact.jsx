import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import PageSEO from '../SEO/PageSEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container className="py-5">
      <PageSEO
        title="Contact Lorem Text Generator — Support & Feedback"
        description="Have questions about our Lorem Ipsum tools? Use the contact form to reach the Lorem Text Generator team for product feedback, partnership ideas, or support."
        keywords="contact lorem ipsum generator, lorem text generator support, placeholder text tool contact"
        path="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'url': 'https://loremtextgenerator.com/contact',
          'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'customer support',
            'email': 'support@loremtextgenerator.com',
            'availableLanguage': ['English']
          }
        }}
      />
      <Row className="justify-content-center">
        <Col lg={10}>
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">Contact Us</h1>
            <p className="text-muted fs-5">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="bg-primary mx-auto" style={{ height: '3px', width: '80px' }}></div>
          </div>

          <Row className="g-4">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary mb-4">Send us a Message</h4>

                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold">Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="border-0 bg-light"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="border-0 bg-light"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="fw-semibold">Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your inquiry..."
                            required
                            className="border-0 bg-light"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="fw-semibold px-4"
                        >
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <Card className="border-0 bg-primary text-white h-100">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Get in Touch</h4>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <i className="bi bi-envelope" style={{ fontSize: '1.5rem' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Email Us</h6>
                        <a href="mailto:yashdhaduk34@gmail.com" className="text-white text-decoration-none">
                          yashdhaduk34@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">  
                        <i className="bi bi-clock" style={{ fontSize: '1.5rem' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Response Time</h6>
                        <p className="mb-0 opacity-90">Within 24 hours</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <i className="bi bi-chat-dots" style={{ fontSize: '1.5rem' }}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Support</h6>
                        <p className="mb-0 opacity-90">We're here to help</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="fw-bold mb-3">Quick Links</h6>
                    <div className="d-flex flex-column gap-2">
                      <a href="/about" className="text-white text-decoration-none opacity-90 hover-opacity-100">
                        <i className="bi bi-info-circle me-2"></i>
                        About Our Tool
                      </a>
                      <a href="/termsconditions" className="text-white text-decoration-none opacity-90 hover-opacity-100">
                        <i className="bi bi-file-text me-2"></i>
                        Terms & Conditions
                      </a>
                      <a href="/privacypolicy" className="text-white text-decoration-none opacity-90 hover-opacity-100">
                        <i className="bi bi-shield-check me-2"></i>
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Additional Info */}
          <Row className="mt-5">
            <Col xs={12}>
              <Card className="border-0 bg-light">
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold text-primary mb-3">Need Immediate Help?</h5>
                  <p className="text-muted mb-3">
                    If you're experiencing technical issues with the Lorem Ipsum Generator,
                    please try refreshing the page or check our FAQ section.
                  </p>
                  <Button variant="outline-primary" size="sm">
                    <i className="bi bi-question-circle me-2"></i>
                    View FAQ
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}