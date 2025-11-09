import React, { useState, useEffect } from 'react';
import GeneratorControls from '../components/GeneratorControls';
import GeneratedOutput from '../components/GeneratedOutput';
import { generateText } from '../utils/textGenerator';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState(null);

  const handleGenerate = (opts) => {
    const generated = generateText(opts);
    setItems(generated);
    setOptions(opts);
  };

  useEffect(() => {
    const defaultOpts = { type: 'paragraphs', count: 4, textCase: 'regular', htmlTag: '', className: '' };
    handleGenerate(defaultOpts);
  }, []);

  const SITE_URL = "https://loremtextgenerator.com";
  const OG_IMAGE = `${SITE_URL}/site-logo.png`;

  return (
    <>
      <Helmet>
        <title>Lorem Text Generator — Free Lorem Ipsum Generator for Designers & Developers</title>
        <meta
          name="description"
          content="Free Lorem Ipsum Generator — instantly create dummy text for your design and development projects. No signup, 100% free online tool."
        />

        {/* ✅ SEO-optimized, high-ranking keywords */}
        <meta
          name="keywords"
          content="lorem ipsum generator, dummy text generator, lorem ipsum text, lorem text generator, placeholder text generator, free lorem ipsum, lorem ipsum online, lorem ipsum paragraph generator, dummy content generator, web design text generator, fake text generator, lorem ipsum for designers, lorem ipsum tool, lorem ipsum maker, lorem ipsum website, random text generator, lorem text filler, best lorem ipsum generator, lorem ipsum generator online free"
        />

        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Lorem Ipsum Generator — Free Dummy Text Tool" />
        <meta
          property="og:description"
          content="Generate Lorem Ipsum dummy text for web design, mockups, and development — 100% free and easy to use."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lorem Ipsum Generator — Free Dummy Text Tool" />
        <meta
          name="twitter:description"
          content="Generate Lorem Ipsum dummy text instantly — ideal for design and development projects."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="bg-light min-vh-100">
        {/* Updated Hero Section - Clean & Professional */}
        <section
          className="hero-section py-5 py-md-6 border-bottom"
          style={{
            background: "linear-gradient(180deg, #e9f2ff 0%, #ffffff 100%)"
          }}
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                {/* Hero Tagline */}
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 px-3 py-2 rounded-pill shadow-sm">
                  Free Online Tool
                </span>

                {/* Main Title */}
                <h1 className="display-5 fw-bold text-dark mb-3">
                  Create Perfect <span className="text-primary">Lorem Ipsum</span> Text Instantly
                </h1>

                {/* Subtitle */}
                <p className="lead text-muted mb-4 fs-6">
                  Generate clean, ready-to-use dummy text for your design, development, or SEO content in just one click.
                </p>

                {/* Call to Action Buttons */}
                <div className="d-flex justify-content-center gap-3 mb-5">
                  <a href="#generator" className="btn btn-primary btn-lg px-4 shadow-sm">
                    Generate Text
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Main Tool Section */}
        <Container className="py-5 " id="generator">
          <Row className="g-4 align-items-start">
            <Col lg={4}>
              <Card className="sticky-top border-0 shadow-sm" style={{ top: '100px' }}>
                <Card.Header className="bg-white border-bottom-0 py-4">
                  <h4 className="fw-bold mb-0 text-primary">
                    <i className="bi bi-sliders me-2"></i>
                    Customize Output
                  </h4>
                </Card.Header>
                <Card.Body className="p-0">
                  <GeneratorControls onGenerate={handleGenerate} />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-bottom-0 py-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0 text-primary">
                      <i className="bi bi-text-paragraph me-2"></i>
                      {options ? `Generated ${options.type}` : 'Generated Lorem Ipsum'}
                    </h4>
                    <Badge bg="primary" className="fs-6">
                      {items.length} items
                    </Badge>
                  </div>
                </Card.Header>
                <Card.Body className="p-0">
                  <GeneratedOutput
                    items={items}
                    title={options ? `Generated ${options.type}` : 'Generated Lorem Ipsum'}
                    htmlTag={options?.htmlTag}
                    className={options?.className}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Features Section */}
          <section className="py-5 bg-white mt-5">
            <Container>
              <div className="text-center mb-5">
                <h2 className="fw-bold text-primary mb-3">Why Choose Our Generator?</h2>
                <p className="text-muted lead">Everything you need for professional content prototyping</p>
              </div>

              <Row className="g-4">
                {[
                  {
                    icon: 'bi-lightning',
                    title: 'Lightning Fast',
                    desc: 'Generate text instantly with real-time preview'
                  },
                  {
                    icon: 'bi-code-slash',
                    title: 'Developer Friendly',
                    desc: 'Custom HTML tags, classes, and formatting options'
                  },
                  {
                    icon: 'bi-clipboard-check',
                    title: 'Smart Copy',
                    desc: 'Copy individual items or bulk content with one click'
                  },
                  {
                    icon: 'bi-phone',
                    title: 'Mobile Optimized',
                    desc: 'Perfect experience on all devices and screen sizes'
                  },
                  {
                    icon: 'bi-infinity',
                    title: 'Unlimited Free',
                    desc: 'No limits, no signups, no watermarks - completely free'
                  },
                  {
                    icon: 'bi-shield-check',
                    title: 'Privacy First',
                    desc: 'All processing happens in your browser - no data stored'
                  }
                ].map((feature, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm feature-card hover-lift">
                      <Card.Body className="p-4 text-center">
                        <div className="text-primary mb-3">
                          <i className={`bi ${feature.icon}`} style={{ fontSize: '2.5rem' }}></i>
                        </div>
                        <h5 className="fw-bold mb-3">{feature.title}</h5>
                        <p className="text-muted mb-0">{feature.desc}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* About Section */}
          <section className="py-5 bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary mb-3">Everything About Lorem Ipsum</h2>
                    <p className="text-muted lead">Learn how placeholder text can improve your workflow</p>
                  </div>

                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <Row className="g-4">
                        <Col md={6}>
                          <div className="pe-md-4">
                            <h4 className="fw-bold text-primary mb-3">What is Lorem Ipsum?</h4>
                            <p className="text-muted mb-4">
                              <strong>Lorem Ipsum</strong> is standardized placeholder text used since the 1500s
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <h5 className="fw-bold mb-3">Key Benefits:</h5>
                            <ul className="text-muted">
                              <li className="mb-2">Focus on design rather than content</li>
                              <li className="mb-2">Realistic text block appearance</li>
                              <li className="mb-2">Industry standard for prototyping</li>
                              <li>Multiple formatting options available</li>
                            </ul>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="ps-md-4 border-start-md">
                            <h4 className="fw-bold text-primary mb-3">Perfect For:</h4>

                            <div className="d-flex align-items-start mb-4">
                              <Badge bg="primary" className="me-3 mt-1">D</Badge>
                              <div>
                                <h6 className="fw-bold mb-1">Designers</h6>
                                <p className="text-muted small mb-0">
                                  Create realistic mockups with proper text flow and spacing
                                </p>
                              </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                              <Badge bg="success" className="me-3 mt-1">DEV</Badge>
                              <div>
                                <h6 className="fw-bold mb-1">Developers</h6>
                                <p className="text-muted small mb-0">
                                  Generate HTML-ready content for testing layouts and components
                                </p>
                              </div>
                            </div>

                            <div className="d-flex align-items-start">
                              <Badge bg="info" className="me-3 mt-1">C</Badge>
                              <div>
                                <h6 className="fw-bold mb-1">Content Creators</h6>
                                <p className="text-muted small mb-0">
                                  Plan content structure and layout with realistic placeholders
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  <section className="tools-section py-5 bg-white">
                    <Container>
                      <Row className="text-center mb-5">
                        <Col lg={8} className="mx-auto">
                          <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill fs-6">
                            🛠️ Our Tool Collection
                          </Badge>
                          <h2 className="display-6 fw-bold text-dark mb-3">Explore Our Free Tools</h2>
                          <p className="lead text-muted mb-4">
                            Discover our suite of powerful, easy-to-use text and content tools —
                            built for developers, designers, and content creators.
                          </p>
                        </Col>
                      </Row>

                      <Row className="g-4 justify-content-center">
                        {/* Name Generator */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <Link to="/name-generator" className="text-decoration-none">
                            <Card className="h-100 border-0 shadow-sm tool-card hover-lift transition-all">
                              <Card.Body className="text-center p-4">
                                <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-3">
                                  <i className="bi bi-person-badge text-primary fs-3"></i>
                                </div>
                                <h5 className="fw-semibold text-dark mb-2">Name Generator</h5>
                                <p className="text-muted small mb-3">
                                  Generate random or custom names for characters, projects, and brands instantly.
                                </p>
                                <Badge bg="outline-primary" text="primary" className="fs-7 px-2 py-1">
                                  Popular
                                </Badge>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>

                        {/* Word Counter */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <Link to="/word-counter" className="text-decoration-none">
                            <Card className="h-100 border-0 shadow-sm tool-card hover-lift transition-all">
                              <Card.Body className="text-center p-4">
                                <div className="icon-wrapper bg-success bg-opacity-10 rounded-circle mx-auto mb-3">
                                  <i className="bi bi-fonts text-success fs-3"></i>
                                </div>
                                <h5 className="fw-semibold text-dark mb-2">Word Counter</h5>
                                <p className="text-muted small mb-3">
                                  Count words, characters, sentences, and paragraphs with detailed analytics.
                                </p>
                                <Badge bg="outline-success" text="success" className="fs-7 px-2 py-1">
                                  Essential
                                </Badge>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>

                        {/* Case Converter */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <Link to="/case-converter" className="text-decoration-none">
                            <Card className="h-100 border-0 shadow-sm tool-card hover-lift transition-all">
                              <Card.Body className="text-center p-4">
                                <div className="icon-wrapper bg-info bg-opacity-10 rounded-circle mx-auto mb-3">
                                  <i className="bi bi-text-paragraph text-info fs-3"></i>
                                </div>
                                <h5 className="fw-semibold text-dark mb-2">Case Converter</h5>
                                <p className="text-muted small mb-3">
                                  Convert text between uppercase, lowercase, title case, and more with one click.
                                </p>
                                <Badge bg="outline-info" text="info" className="fs-7 px-2 py-1">
                                  New
                                </Badge>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>

                        {/* Emoji Text Generator */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <Link to="/emoji-text-generator" className="text-decoration-none">
                            <Card className="h-100 border-0 shadow-sm tool-card hover-lift transition-all">
                              <Card.Body className="text-center p-4">
                                <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle mx-auto mb-3">
                                  <i className="bi bi-emoji-smile text-warning fs-3"></i>
                                </div>
                                <h5 className="fw-semibold text-dark mb-2">Emoji Text Generator</h5>
                                <p className="text-muted small mb-3">
                                  Transform your text into fun, expressive emoji versions for social media and chats.
                                </p>
                                <Badge bg="outline-warning" text="warning" className="fs-7 px-2 py-1">
                                  Fun
                                </Badge>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>

                        {/* Lorem Picsum */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <Link to="/lorem-picsum" className="text-decoration-none">
                            <Card className="h-100 border-0 shadow-sm tool-card hover-lift transition-all">
                              <Card.Body className="text-center p-4">
                                <div className="icon-wrapper bg-danger bg-opacity-10 rounded-circle mx-auto mb-3">
                                  <i className="bi bi-image text-danger fs-3"></i>
                                </div>
                                <h5 className="fw-semibold text-dark mb-2">Lorem Picsum</h5>
                                <p className="text-muted small mb-3">
                                  Generate high-quality random placeholder images for your designs and mockups.
                                </p>
                                <Badge bg="outline-danger" text="danger" className="fs-7 px-2 py-1">
                                  Design
                                </Badge>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>

                        {/* More Tools Coming Soon */}
                        <Col xl={3} lg={4} md={6} sm={6}>
                          <div className="card h-100 border-2 border-dashed bg-light">
                            <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
                              <div className="icon-wrapper bg-secondary bg-opacity-10 rounded-circle mx-auto mb-3">
                                <i className="bi bi-plus-lg text-secondary fs-3"></i>
                              </div>
                              <h5 className="fw-semibold text-secondary mb-2">More Tools Coming</h5>
                              <p className="text-muted small mb-0">
                                We're constantly adding new tools to help you work smarter and faster.
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>

                    </Container>
                  </section>


                  {/* Use Cases Grid */}
                  <Row className="mt-5 g-4">
                    <Col lg={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                          <div className="text-primary mb-3">
                            <i className="bi bi-layout-wtf" style={{ fontSize: '2rem' }}></i>
                          </div>
                          <h5 className="fw-bold mb-3">Web Design</h5>
                          <p className="text-muted mb-0">
                            Perfect for website mockups, landing pages, and UI/UX design prototypes
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                          <div className="text-primary mb-3">
                            <i className="bi bi-phone" style={{ fontSize: '2rem' }}></i>
                          </div>
                          <h5 className="fw-bold mb-3">App Development</h5>
                          <p className="text-muted mb-0">
                            Ideal for mobile app interfaces, dashboard layouts, and software prototypes
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                          <div className="text-primary mb-3">
                            <i className="bi bi-file-text" style={{ fontSize: '2rem' }}></i>
                          </div>
                          <h5 className="fw-bold mb-3">Print & Publishing</h5>
                          <p className="text-muted mb-0">
                            Great for magazine layouts, book formatting, and print material design
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* FAQ Section */}
          <section className="py-5 bg-white">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary mb-3">Frequently Asked Questions</h2>
                    <p className="text-muted">Quick answers to common questions</p>
                  </div>

                  <div className="accordion" id="faqAccordion">
                    {[
                      {
                        question: "Is this Lorem Ipsum generator really free?",
                        answer: "Yes, absolutely! Our Lorem Ipsum generator is 100% free with no hidden costs, no signup required, and no usage limits."
                      },
                      {
                        question: "Can I use the generated text commercially?",
                        answer: "Yes, Lorem Ipsum text is not copyrighted and can be used freely for any purpose including commercial projects."
                      },
                      {
                        question: "What's the difference between words, sentences, and paragraphs?",
                        answer: "Words generate individual words, sentences create complete sentences, and paragraphs generate multi-sentence blocks - choose based on your needs."
                      },
                      {
                        question: "Do you store any of my data?",
                        answer: "No, all text generation happens locally in your browser. We don't store any personal data or generated content."
                      }
                    ].map((faq, index) => (
                      <Card key={index} className="border-0 shadow-sm mb-3">
                        <Card.Header className="bg-white border-0 p-0">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link text-decoration-none w-100 text-start text-primary fw-bold p-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq${index}`}
                            >
                              <i className="bi bi-question-circle me-2"></i>
                              {faq.question}
                            </button>
                          </h5>
                        </Card.Header>
                        <div id={`faq${index}`} className="collapse" data-bs-parent="#faqAccordion">
                          <Card.Body className="text-muted">
                            {faq.answer}
                          </Card.Body>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <p className="mb-0">&copy; 2024 Lorem Text Generator. All rights reserved.</p>
              </Col>
              <Col md={6} className="text-md-end">
                <small className="text-white-50">
                  Made with ❤️ for designers and developers worldwide
                </small>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>

      {/* Add custom styles */}
      <style>{`
        .feature-card {
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        .sticky-top {
          position: sticky;
          z-index: 10;
        }
        .tracking-wide {
          letter-spacing: 0.025em;
        }
        @media (max-width: 991.98px) {
          .border-start-md {
            border-left: none !important;
            padding-left: 0 !important;
            margin-top: 2rem;
          }
        }

        .tool-card {
          transition: all 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15) !important;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
        }
        .icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .tool-card:hover .icon-wrapper {
          transform: scale(1.1);
        }
        .border-dashed {
          border-style: dashed !important;
        }
        .fs-7 {
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
};

export default Index;