import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import PageSEO from '../SEO/PageSEO';

export default function Termsconditions() {
  return (
    <Container className="py-5">
      <PageSEO
        title="Terms & Conditions — Lorem Text Generator"
        description="Review the terms and acceptable use guidelines for Lorem Text Generator, including allowed usage, warranties, and liability information."
        keywords="lorem text generator terms, lorem ipsum generator terms of service, placeholder text usage policy"
        path="/termsconditions"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'TermsOfService',
          'name': 'Lorem Text Generator Terms & Conditions',
          'url': 'https://loremtextgenerator.com/termsconditions',
          'description': 'Terms of service governing the use of the Lorem Text Generator utility.'
        }}
      />
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">Terms & Conditions</h1>
            <p className="text-muted fs-5">
              Please read these terms carefully before using our Lorem Ipsum Generator
            </p>
            <div className="bg-primary mx-auto" style={{ height: '3px', width: '80px' }}></div>
          </div>

          {/* Last Updated Badge */}
          <div className="text-center mb-4">
            <Badge bg="outline-primary" text="primary" className="fs-6 px-3 py-2">
              <i className="bi bi-clock-history me-2"></i>
              Last Updated: December 2023
            </Badge>
          </div>

          {/* Main Content */}
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4 p-md-5">
              {/* Introduction */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted mb-0">
                  By accessing and using the Acodin Lorem Ipsum Generator ("the Service"),
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              {/* Description of Service */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">2. Description of Service</h2>
                <p className="text-muted mb-3">
                  The Acodin Lorem Ipsum Generator is a free online tool that provides:
                </p>
                <ul className="text-muted">
                  <li className="mb-2">Generation of placeholder text for design and development purposes</li>
                  <li className="mb-2">Multiple text formats including paragraphs, sentences, and titles</li>
                  <li className="mb-2">Customization options for HTML tags and CSS classes</li>
                  <li className="mb-2">One-click copy functionality for generated content</li>
                </ul>
              </section>

              {/* Use of Service */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">3. Use of Service</h2>
                <p className="text-muted mb-3">You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service.</p>

                <h5 className="fw-bold text-dark mb-2">Prohibited uses include:</h5>
                <ul className="text-muted">
                  <li className="mb-2">Using the Service for any illegal or unauthorized purpose</li>
                  <li className="mb-2">Attempting to disrupt or interfere with the Service's functionality</li>
                  <li className="mb-2">Using automated systems to access the Service in a manner that sends more request messages than a human can reasonably produce</li>
                  <li className="mb-2">Reproducing, duplicating, copying, or reselling any part of the Service</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">4. Intellectual Property</h2>
                <p className="text-muted mb-3">
                  The Service and its original content, features, and functionality are owned by Acodin
                  and are protected by international copyright, trademark, patent, trade secret, and
                  other intellectual property or proprietary rights laws.
                </p>
                <p className="text-muted mb-0">
                  The generated Lorem Ipsum text is free to use for any purpose, including commercial projects.
                </p>
              </section>

              {/* Disclaimer of Warranties */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">5. Disclaimer of Warranties</h2>
                <p className="text-muted mb-3">
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Acodin makes no
                  representations or warranties of any kind, express or implied, as to the operation
                  of the Service or the information, content, or materials included therein.
                </p>
                <p className="text-muted mb-0">
                  You expressly agree that your use of the Service is at your sole risk.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">6. Limitation of Liability</h2>
                <p className="text-muted mb-0">
                  To the fullest extent permitted by applicable law, Acodin shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, or any loss
                  of profits or revenues, whether incurred directly or indirectly, or any loss of data,
                  use, goodwill, or other intangible losses resulting from your use of the Service.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">7. Changes to Terms</h2>
                <p className="text-muted mb-0">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at
                  any time. If a revision is material, we will provide at least 30 days' notice prior
                  to any new terms taking effect. What constitutes a material change will be determined
                  at our sole discretion.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-4">
                <h2 className="h4 fw-bold text-primary mb-3">8. Contact Information</h2>
                <p className="text-muted mb-0">
                  If you have any questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@example.com" className="text-primary text-decoration-none">
                    legal@example.com
                  </a>
                </p>
              </section>

              {/* Quick Actions */}
              <Card className="bg-light border-0 mt-4">
                <Card.Body className="p-4">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h5 className="fw-bold text-dark mb-2">Need to review our Privacy Policy?</h5>
                      <p className="text-muted mb-0">Learn how we handle your data and protect your privacy.</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <a
                        href="/privacypolicy"
                        className="btn btn-primary px-4 fw-semibold"
                      >
                        <i className="bi bi-shield-check me-2"></i>
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>

          {/* Additional Information */}
          <Row className="mt-4">
            <Col md={6}>
              <Card className="border-0 bg-primary text-white h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-question-circle me-3 mt-1" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <h5 className="fw-bold mb-2">Questions?</h5>
                      <p className="mb-0 opacity-90">
                        If you have any questions about our terms, feel free to reach out to our support team.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 bg-light h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-clock me-3 mt-1 text-primary" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <h5 className="fw-bold text-dark mb-2">Quick Summary</h5>
                      <p className="text-muted mb-0">
                        Our service is free to use. Generated content is yours to use. No warranties provided.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}