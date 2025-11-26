import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const CaseConverter = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [activeCase, setActiveCase] = useState('uppercase');
  const [copyAlert, setCopyAlert] = useState(false);

  // SEO: Update document title
  useEffect(() => {

  }, []);



  const caseTypes = [
    {
      id: 'uppercase',
      label: 'UPPERCASE',
      description: 'Convert text to all capital letters',
      example: 'HELLO WORLD'
    },
    {
      id: 'lowercase',
      label: 'lowercase',
      description: 'Convert text to all small letters',
      example: 'hello world'
    },
    {
      id: 'sentencecase',
      label: 'Sentence case',
      description: 'Capitalize first letter of sentence',
      example: 'Hello world'
    },
    {
      id: 'titlecase',
      label: 'Title Case',
      description: 'Capitalize First Letter Of Each Word',
      example: 'Hello World'
    },
    {
      id: 'camelcase',
      label: 'camelCase',
      description: 'camelCase text formatting',
      example: 'helloWorld'
    },
    {
      id: 'pascalcase',
      label: 'PascalCase',
      description: 'PascalCase text formatting',
      example: 'HelloWorld'
    },
    {
      id: 'snakecase',
      label: 'snake_case',
      description: 'snake_case text formatting',
      example: 'hello_world'
    },
    {
      id: 'kebabcase',
      label: 'kebab-case',
      description: 'kebab-case text formatting',
      example: 'hello-world'
    }
  ];

  const convertText = (caseType) => {
    setActiveCase(caseType);

    if (!inputText.trim()) {
      setConvertedText('');
      return;
    }

    switch (caseType) {
      case 'uppercase':
        setConvertedText(inputText.toUpperCase());
        break;
      case 'lowercase':
        setConvertedText(inputText.toLowerCase());
        break;
      case 'sentencecase':
        setConvertedText(
          inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase()
        );
        break;
      case 'titlecase':
        setConvertedText(
          inputText.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
        );
        break;
      case 'camelcase':
        setConvertedText(
          inputText.toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
            .replace(/[^a-zA-Z0-9]/g, '')
        );
        break;
      case 'pascalcase':
        setConvertedText(
          inputText.toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())
            .replace(/[^a-zA-Z0-9]/g, '')
        );
        break;
      case 'snakecase':
        setConvertedText(
          inputText.toLowerCase().replace(/\s+/g, '_')
        );
        break;
      case 'kebabcase':
        setConvertedText(
          inputText.toLowerCase().replace(/\s+/g, '-')
        );
        break;
      default:
        setConvertedText(inputText);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
      setCopyAlert(true);
      setTimeout(() => setCopyAlert(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const clearText = () => {
    setInputText('');
    setConvertedText('');
  };

  const getWordCount = () => {
    return inputText.trim() ? inputText.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
  };

  const getLineCount = () => {
    return inputText ? inputText.split('\n').length : 0;
  };

  return (
    <>
      <Helmet>
        <title>Free Online Case Converter Tool - Convert Text Cases Instantly</title>
        <meta
          name="description"
          content="Free online text case converter tool. Convert text to uppercase, lowercase, title case, camelCase, snake_case and more. Fast, easy and responsive tool."
        />
        <meta
          name="keywords"
          content="case converter, text case tool, uppercase converter, lowercase converter, title case generator, camelCase converter, snake_case converter, text format tool, online case changer, sentence case converter, convert text online, free text case converter"
        />
        <link rel="canonical" href="https://loremtextgenerator.com/case-converter" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Free Online Case Converter Tool - Convert Text Cases Instantly" />
        <meta
          property="og:description"
          content="Instantly convert your text between uppercase, lowercase, title case, camelCase, snake_case, and more using our free online case converter tool."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://loremtextgenerator.com/site-logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Online Case Converter Tool - Convert Text Cases Instantly" />
        <meta
          name="twitter:description"
          content="Convert text to any case instantly — uppercase, lowercase, title case, and more with our free online case converter tool."
        />
      </Helmet>

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Case Converter Tool",
          "description": "Free online text case converter tool for converting text between different cases",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "features": ["UPPERCASE", "lowercase", "Title Case", "camelCase", "snake_case", "kebab-case"]
        })}
      </script>

      <Container className="my-5">
        {/* Header Section with SEO-friendly content */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold text-primary mb-3">
              Online Case Converter Tool
            </h1>
            <p className="lead text-muted">
              Free online tool to convert text between different cases instantly.
              Supports <strong>UPPERCASE</strong>, <strong>lowercase</strong>, <strong>Title Case</strong>,
              <strong>camelCase</strong>, <strong>snake_case</strong>, and more.
            </p>
            <Badge bg="success" className="me-2">Free</Badge>
            <Badge bg="info" className="me-2">No Registration</Badge>
            <Badge bg="warning">Instant Results</Badge>
          </Col>
        </Row>

        {/* Copy Alert */}
        {copyAlert && (
          <Row className="mb-3">
            <Col>
              <Alert variant="success" className="text-center">
                ✅ Text copied to clipboard successfully!
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          {/* Input Section */}
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-input-cursor-text me-2"></i>
                  Input Text
                </h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Enter your text to convert:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type or paste your text here to convert between different cases..."
                    className="border-2"
                    style={{ resize: 'vertical' }}
                  />
                </Form.Group>

                {/* Text Statistics */}
                <Card className="bg-light">
                  <Card.Body className="py-2">
                    <Row className="text-center">
                      <Col>
                        <small className="text-muted">Characters</small>
                        <div className="h5 mb-0 text-primary">{inputText.length}</div>
                      </Col>
                      <Col>
                        <small className="text-muted">Words</small>
                        <div className="h5 mb-0 text-success">{getWordCount()}</div>
                      </Col>
                      <Col>
                        <small className="text-muted">Lines</small>
                        <div className="h5 mb-0 text-info">{getLineCount()}</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          {/* Output Section */}
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-textarea-t me-2"></i>
                  Converted Text
                </h5>
                <div>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={!convertedText}
                    className="me-2"
                  >
                    <i className="bi bi-clipboard me-1"></i>
                    Copy
                  </Button>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={clearText}
                  >
                    <i className="bi bi-trash me-1"></i>
                    Clear
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    {activeCase ? `Text in ${caseTypes.find(c => c.id === activeCase)?.label}` : 'Converted Text'}:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    value={convertedText}
                    readOnly
                    placeholder="Converted text will appear here. Select a case type above to convert."
                    className="border-2 bg-light"
                    style={{ resize: 'vertical' }}
                  />
                </Form.Group>

                {/* Active Case Info */}
                {activeCase && (
                  <Card className="bg-info text-white">
                    <Card.Body className="py-2">
                      <small>
                        <strong>Current Format:</strong> {caseTypes.find(c => c.id === activeCase)?.label}
                        <br />
                        <strong>Description:</strong> {caseTypes.find(c => c.id === activeCase)?.description}
                        <br />
                        <strong>Example:</strong> {caseTypes.find(c => c.id === activeCase)?.example}
                      </small>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Case Selection Buttons */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">
                  <i className="bi bi-toggle-on me-2"></i>
                  Select Case Type
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {caseTypes.map((caseType) => (
                    <Col key={caseType.id} sm={6} md={4} lg={3} className="mb-3">
                      <Button
                        variant={activeCase === caseType.id ? "primary" : "outline-primary"}
                        className="w-100 text-start"
                        onClick={() => convertText(caseType.id)}
                        style={{ height: '80px' }}
                      >
                        <div className="fw-semibold">{caseType.label}</div>
                        <small className="d-block text-muted opacity-75">
                          {caseType.description}
                        </small>
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* SEO Content Section */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-light border-0">
              <Card.Body>
                <h2 className="h4 mb-4">About Case Converter Tool</h2>

                <h3 className="h5 text-primary">What is a Case Converter?</h3>
                <p>
                  A case converter is an online tool that transforms text from one letter case to another.
                  Our free case converter supports multiple text cases including uppercase, lowercase,
                  title case, camelCase, PascalCase, snake_case, and kebab-case.
                </p>

                <h3 className="h5 text-primary mt-4">Supported Case Types</h3>
                <Row>
                  {caseTypes.map((caseType) => (
                    <Col key={caseType.id} md={6} className="mb-3">
                      <strong>{caseType.label}:</strong> {caseType.description}
                    </Col>
                  ))}
                </Row>

                <h3 className="h5 text-primary mt-4">Why Use Our Case Converter?</h3>
                <ul>
                  <li><strong>Free & Unlimited:</strong> Convert text without any limitations</li>
                  <li><strong>Instant Results:</strong> Real-time conversion as you type</li>
                  <li><strong>Multiple Formats:</strong> Support for 8 different case types</li>
                  <li><strong>Mobile Friendly:</strong> Works perfectly on all devices</li>
                  <li><strong>No Registration:</strong> Use immediately without signing up</li>
                </ul>

                <h3 className="h5 text-primary mt-4">Common Use Cases</h3>
                <p>
                  Our text case converter is essential for programmers, writers, students, and professionals
                  who need to format text for coding variables, document titles, database fields,
                  file naming conventions, and content creation.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CaseConverter;