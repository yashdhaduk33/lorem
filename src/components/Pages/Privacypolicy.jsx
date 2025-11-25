import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import PageSEO from '../SEO/PageSEO';

export default function Privacypolicy() {
  const lastUpdated = 'November 25, 2025';

  return (
    <Container className="py-5">
      <PageSEO
        title="Privacy Policy — Lorem Text Generator"
        description="Understand how Lorem Text Generator collects, stores, and protects limited usage data. We only keep the information required to operate our free placeholder text tools."
        keywords="lorem text generator privacy policy, lorem ipsum tool data, placeholder text generator privacy"
        path="/privacypolicy"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'PrivacyPolicy',
          'url': 'https://loremtextgenerator.com/privacypolicy',
          'name': 'Lorem Text Generator Privacy Policy',
          'dateModified': lastUpdated
        }}
      />
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">Privacy Policy</h1>
            <p className="text-muted fs-5">
              Transparency about the limited data we collect to keep Lorem Text Generator running smoothly.
            </p>
            <div className="bg-primary mx-auto" style={{ height: '3px', width: '80px' }}></div>
            <Badge bg="outline-primary" text="primary" className="fs-6 px-3 py-2 mt-4">
              <i className="bi bi-clock-history me-2"></i>
              Last Updated: {lastUpdated}
            </Badge>
          </div>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4 p-md-5">
              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">1. Information We Collect</h2>
                <p className="text-muted mb-3">
                  Lorem Text Generator does not require registration, so we avoid collecting personally identifiable information (PII).
                  We only gather minimal technical data to improve performance and security, including:
                </p>
                <ul className="text-muted">
                  <li className="mb-2">Anonymous usage metrics (page views, generated text counts, and device type)</li>
                  <li className="mb-2">Standard server logs for error diagnostics (IP address, browser, timestamp)</li>
                  <li className="mb-2">Local storage data that remains on your device for features like saving preferences</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">2. How We Use Data</h2>
                <p className="text-muted">
                  The limited data we store helps us monitor uptime, block abuse, and understand which tools are most helpful.
                  We do not sell, rent, or exchange your information with third parties. Aggregated analytics insights inform future improvements only.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">3. Cookies & Local Storage</h2>
                <p className="text-muted mb-3">
                  Most features rely on browser storage to remember UI settings (e.g., last used options in a generator).
                  These values never leave your device and can be removed by clearing the browser cache. We currently do not run third-party advertising pixels.
                </p>
                <Card className="bg-light border-0">
                  <Card.Body>
                    <h5 className="fw-bold text-dark mb-2">Managing Preferences</h5>
                    <p className="text-muted mb-0">
                      You can restrict cookies or local storage through your browser settings. Be aware that certain personalization options
                      may reset if storage is disabled.
                    </p>
                  </Card.Body>
                </Card>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">4. Third-Party Services</h2>
                <p className="text-muted">
                  We rely on trusted infrastructure vendors (for example, hosting, content delivery networks, and uptime monitoring).
                  These providers only receive the technical data required to operate the service on our behalf and are obligated to keep it secure.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">5. Data Retention & Security</h2>
                <p className="text-muted mb-3">
                  Diagnostic logs are automatically cycled and deleted after 30 days. Aggregated analytics contain no PII and may be stored longer for trend analysis.
                  We implement TLS encryption, least-privilege access, and continuous monitoring to protect the platform.
                </p>
                <ul className="text-muted">
                  <li className="mb-2">All traffic is served over HTTPS</li>
                  <li className="mb-2">Internal tooling requires multi-factor authentication</li>
                  <li className="mb-2">Automated alerts notify us of unusual error spikes</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold text-primary mb-3">6. Your Rights</h2>
                <p className="text-muted mb-3">
                  Because we minimize data collection, requests to delete or export personal data typically have no associated records.
                  If you believe we hold PII about you, contact us and we will respond within 30 days.
                </p>
                <Card className="bg-light border-0">
                  <Card.Body>
                    <h5 className="fw-bold text-dark mb-2">Contact for Privacy Questions</h5>
                    <p className="text-muted mb-0">
                      Email <a href="mailto:privacy@loremtextgenerator.com" className="text-primary text-decoration-none">privacy@loremtextgenerator.com</a>
                      with any concerns or to request additional details.
                    </p>
                  </Card.Body>
                </Card>
              </section>

              <section>
                <h2 className="h4 fw-bold text-primary mb-3">7. Policy Updates</h2>
                <p className="text-muted mb-0">
                  We may update this policy to reflect new tooling or compliance requirements. Significant changes will be highlighted here with a new effective date.
                  Continued use of Lorem Text Generator after updates constitutes acceptance of the revised policy.
                </p>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
