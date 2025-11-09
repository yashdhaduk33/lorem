import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Badge, Dropdown } from 'react-bootstrap';
import { CheckCircle, Zap, Smartphone, FileText } from "lucide-react";

export default function Home() {
  const [generationType, setGenerationType] = useState('paragraphs');
  const [numParagraphs, setNumParagraphs] = useState(3);
  const [numSentences, setNumSentences] = useState(5);
  const [numWords, setNumWords] = useState(50);
  const [paragraphLength, setParagraphLength] = useState('medium');
  const [includeHtml, setIncludeHtml] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [wrapperTag, setWrapperTag] = useState('p');
  const [wrapperClass, setWrapperClass] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur',
    'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui',
    'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ];

  const generationOptions = [
    { value: 'paragraphs', label: 'Paragraphs', icon: 'text-paragraph' },
    { value: 'sentences', label: 'Sentences', icon: 'chat-quote' },
    { value: 'words', label: 'Words', icon: 'fonts' },
    { value: 'titles', label: 'Titles', icon: 'type' },
    { value: 'captions', label: 'Captions', icon: 'caption' },
    { value: 'names', label: 'Names', icon: 'person' },
    { value: 'realnames', label: 'Real names', icon: 'people' }
  ];

  const firstNames = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

  const generateSentence = (wordCount = null) => {
    const count = wordCount || Math.floor(Math.random() * 15) + 8;
    const words = [];

    for (let j = 0; j < count; j++) {
      const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
      if (j === 0) {
        words.push(randomWord.charAt(0).toUpperCase() + randomWord.slice(1));
      } else {
        words.push(randomWord);
      }
    }

    return words.join(' ') + '.';
  };

  const generateParagraph = () => {
    let sentenceCount;
    switch (paragraphLength) {
      case 'short':
        sentenceCount = 2;
        break;
      case 'long':
        sentenceCount = 8;
        break;
      default:
        sentenceCount = 4;
    }

    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }

    return sentences.join(' ');
  };

  const generateWords = (count) => {
    const words = [];
    for (let i = 0; i < count; i++) {
      const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
      if (i === 0) {
        words.push(randomWord.charAt(0).toUpperCase() + randomWord.slice(1));
      } else {
        words.push(randomWord);
      }
    }
    return words.join(' ') + '.';
  };

  const generateText = () => {
    setIsGenerating(true);

    // Simulate loading for better UX
    setTimeout(() => {
      let result = '';

      switch (generationType) {
        case 'paragraphs':
          const paragraphs = [];
          for (let i = 0; i < numParagraphs; i++) {
            let paragraph = generateParagraph();
            if (includeHtml) {
              paragraph = `<p>${paragraph}</p>`;
            }
            paragraphs.push(paragraph);
          }
          result = includeHtml ? paragraphs.join('\n') : paragraphs.join('\n\n');
          break;

        case 'sentences':
          const sentences = [];
          for (let i = 0; i < numSentences; i++) {
            sentences.push(generateSentence());
          }
          result = sentences.join(' ');
          break;

        case 'words':
          result = generateWords(numWords);
          break;

        case 'titles': {
          const titles = [];
          for (let i = 0; i < numParagraphs; i++) {
            const wordCount = Math.max(2, Math.floor(Math.random() * 5) + 2);
            const words = [];
            for (let j = 0; j < wordCount; j++) {
              const w = loremWords[Math.floor(Math.random() * loremWords.length)];
              // Title case each word
              words.push(w.charAt(0).toUpperCase() + w.slice(1));
            }
            titles.push(words.join(' '));
          }
          // If HTML output requested, wrap titles in an ordered list
          result = includeHtml ? `<ol>${titles.map(t => `<li>${t}</li>`).join('')}</ol>` : titles.join('\n');
          break;
        }

        case 'captions': {
          const captions = [];
          for (let i = 0; i < Math.max(1, Math.floor(numSentences / 2)); i++) {
            const wc = Math.max(3, Math.floor(Math.random() * 10) + 3);
            captions.push(generateSentence(wc));
          }
          result = captions.join('\n');
          break;
        }

        case 'names': {
          const names = [];
          for (let i = 0; i < numParagraphs; i++) {
            const first = loremWords[Math.floor(Math.random() * loremWords.length)];
            const last = loremWords[Math.floor(Math.random() * loremWords.length)];
            names.push((first.charAt(0).toUpperCase() + first.slice(1)) + ' ' + (last.charAt(0).toUpperCase() + last.slice(1)));
          }
          result = names.join('\n');
          break;
        }

        case 'realnames': {
          const names = [];
          for (let i = 0; i < numParagraphs; i++) {
            const first = firstNames[Math.floor(Math.random() * firstNames.length)];
            const last = lastNames[Math.floor(Math.random() * lastNames.length)];
            names.push(`${first} ${last}`);
          }
          result = names.join('\n');
          break;
        }

        default:
          result = 'Please select a generation type.';
      }

      setGeneratedText(result);
      setIsGenerating(false);
    }, 500);
  };



  const adjustCount = (delta) => {
    const paragraphLike = ['paragraphs', 'titles', 'names', 'realnames'];
    if (paragraphLike.includes(generationType)) {
      setNumParagraphs((n) => Math.max(1, Math.min(100, n + delta)));
    } else if (generationType === 'sentences') {
      setNumSentences((n) => Math.max(1, Math.min(500, n + delta)));
    } else if (generationType === 'words') {
      setNumWords((n) => Math.max(1, Math.min(2000, n + delta)));
    }
  };

  const copyParagraph = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy paragraph: ', err);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const clearText = () => {
    setGeneratedText('');
    setCopied(false);
  };

  const renderTypeSpecificControls = () => {
    switch (generationType) {
      case 'paragraphs':
        return (
          <>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-dark mb-3">
                  <i className="bi bi-text-paragraph me-2"></i>
                  Number of Paragraphs: <Badge bg="primary" className="fs-6">{numParagraphs}</Badge>
                </Form.Label>
                <Form.Range
                  min="1"
                  max="20"
                  value={numParagraphs}
                  onChange={(e) => setNumParagraphs(parseInt(e.target.value))}
                  className="mb-2"
                />
                <div className="d-flex justify-content-between text-muted small">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-dark mb-3">
                  <i className="bi bi-rulers me-2"></i>
                  Paragraph Length
                </Form.Label>
                <div className="d-grid gap-2 d-md-flex">
                  {['short', 'medium', 'long'].map((length) => (
                    <Button
                      key={length}
                      variant={paragraphLength === length ? "primary" : "outline-primary"}
                      onClick={() => setParagraphLength(length)}
                      className="text-capitalize flex-fill"
                    >
                      {length}
                    </Button>
                  ))}
                </div>
              </Form.Group>
            </Col>
          </>
        );

      case 'sentences':
        return (
          <Col md={12}>
            <Form.Group>
              <Form.Label className="fw-semibold text-dark mb-3">
                <i className="bi bi-chat-quote me-2"></i>
                Number of Sentences: <Badge bg="primary" className="fs-6">{numSentences}</Badge>
              </Form.Label>
              <Form.Range
                min="1"
                max="50"
                value={numSentences}
                onChange={(e) => setNumSentences(parseInt(e.target.value))}
                className="mb-2"
              />
              <div className="d-flex justify-content-between text-muted small">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>
            </Form.Group>
          </Col>
        );

      case 'words':
        return (
          <Col md={12}>
            <Form.Group>
              <Form.Label className="fw-semibold text-dark mb-3">
                <i className="bi bi-fonts me-2"></i>
                Number of Words: <Badge bg="primary" className="fs-6">{numWords}</Badge>
              </Form.Label>
              <Form.Range
                min="1"
                max="500"
                value={numWords}
                onChange={(e) => setNumWords(parseInt(e.target.value))}
                className="mb-2"
              />
              <div className="d-flex justify-content-between text-muted small">
                <span>1</span>
                <span>250</span>
                <span>500</span>
              </div>
            </Form.Group>
          </Col>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-vh-100 bg-light py-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={12}>

              <Row className="text-center mb-5">
                <Col>
                  <h1 className="display-4 fw-bold text-primary mb-3">
                    Lorem Ipsum Generator
                  </h1>
                </Col>
              </Row>

              {/* Main Generator Card - UPDATED */}
              <Card className="shadow-sm border-0 rounded-3 mb-4">
                <Card.Header className="bg-primary text-white py-4">
                  <h2 className="card-title mb-0 h4">
                    <i className="bi bi-magic me-2"></i>
                    Generate Lorem Ipsum Text
                  </h2>
                </Card.Header>
                <Card.Body className="p-4">

                  {/* Generation Type Selection (Dropdown with icons + check) */}
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-dark mb-3 h5">
                      <i className="bi bi-type me-2"></i>
                      Generate By
                    </Form.Label>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="input-group" style={{width: 140}}>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => adjustCount(-1)}>-</button>
                        <input
                          type="number"
                          min="1"
                          className="form-control text-center"
                          value={generationType === 'words' ? numWords : generationType === 'sentences' ? numSentences : numParagraphs}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10) || 1;
                            const paragraphLike = ['paragraphs', 'titles', 'names', 'realnames'];
                            if (paragraphLike.includes(generationType)) {
                              setNumParagraphs(Math.max(1, Math.min(100, val)));
                            } else if (generationType === 'sentences') {
                              setNumSentences(Math.max(1, Math.min(500, val)));
                            } else if (generationType === 'words') {
                              setNumWords(Math.max(1, Math.min(2000, val)));
                            }
                          }}
                        />
                        <button className="btn btn-outline-secondary" type="button" onClick={() => adjustCount(1)}>+</button>
                      </div>

                      <Dropdown className="flex-fill">
                        <Dropdown.Toggle variant="outline-secondary" id="generation-type-dropdown" className="w-100 text-start d-flex justify-content-between align-items-center">
                          <span>
                            <i className={`bi bi-${generationOptions.find(o => o.value === generationType).icon} me-2`}></i>
                            {generationOptions.find(o => o.value === generationType).label}
                          </span>
                          <small className="text-muted">Change</small>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                          {generationOptions.map((opt) => (
                            <Dropdown.Item
                              key={opt.value}
                              onClick={() => setGenerationType(opt.value)}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span>
                                <i className={`bi bi-${opt.icon} me-2`}></i>
                                {opt.label}
                              </span>
                              {generationType === opt.value && (
                                <i className="bi bi-check-lg text-success"></i>
                              )}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>

                      <button className="btn btn-link text-decoration-none" onClick={() => setShowOptions(s => !s)}>
                        {showOptions ? 'Hide options' : 'See more options'}
                      </button>
                    </div>
                  </Form.Group>

                  {/* Type-specific Controls */}
                  <Row className="g-4 mb-4">
                    {renderTypeSpecificControls()}
                  </Row>

                  {/* HTML Toggle (only for paragraphs) */}
                  {generationType === 'paragraphs' && (
                    <Form.Group className="mb-4">
                      <Form.Check
                        type="switch"
                        id="includeHtml"
                        label={
                          <span className="fw-semibold text-dark">
                            <i className="bi bi-code-slash me-2"></i>
                            Include HTML &lt;p&gt; Tags
                          </span>
                        }
                        checked={includeHtml}
                        onChange={(e) => setIncludeHtml(e.target.checked)}
                        className="fs-6"
                      />
                    </Form.Group>
                  )}

                  {/* Action Buttons */}
                  <Row>
                    <Col className="text-center">
                      <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={generateText}
                          disabled={isGenerating}
                          className="px-5 py-2"
                        >
                          {isGenerating ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Generating...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-magic me-2"></i>
                              Generate Text
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="lg"
                          onClick={clearText}
                          disabled={!generatedText || isGenerating}
                          className="px-5 py-2"
                        >
                          <i className="bi bi-trash me-2"></i>
                          Clear
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Output Section */}
              {generatedText && (
                <Card className="shadow-sm border-0 rounded-3 mb-4">
                  <Card.Header className="bg-success text-white py-3 d-flex justify-content-between align-items-center">
                    <h3 className="card-title mb-0 h5">
                      <i className="bi bi-text-left me-2"></i>
                      Generated {generationOptions.find(o => o.value === generationType)?.label || generationType}
                    </h3>
                    <div className="d-flex align-items-center gap-2">
                      <Badge bg="light" text="dark" className="fs-6">
                        {generationType === 'words'
                          ? `${numWords} words`
                          : generationType === 'sentences'
                            ? `${numSentences} sentences`
                            : generationType === 'paragraphs'
                              ? `${numParagraphs} paragraphs`
                              : generationType === 'titles'
                                ? `${numParagraphs} titles`
                                : generationType === 'captions'
                                  ? `${Math.max(1, Math.floor(numSentences/2))} captions`
                                  : generationType === 'names'
                                    ? `${numParagraphs} names`
                                    : generationType === 'realnames'
                                      ? `${numParagraphs} names`
                                      : ''
                        }
                      </Badge>
                      <Button
                        variant={copied ? "light" : "outline-light"}
                        size="sm"
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <>
                            <i className="bi bi-check-circle me-2"></i>
                            Copied
                          </>
                        ) : (
                          <>
                            <i className="bi bi-clipboard me-2"></i>
                            Copy All
                          </>
                        )}
                      </Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <div className="bg-light rounded p-4">
                      {generationType === 'titles' ? (
                        (() => {
                          const titleItems = includeHtml
                            ? Array.from(generatedText.matchAll(/<li>(.*?)<\/li>/gi)).map(m => m[1])
                            : generatedText.split(/\n{2,}|\r\n\r\n/);
                          return (
                            <ol className="ps-4 mb-0">
                              {titleItems.map((para, idx) => (
                                <li key={idx} className="d-flex align-items-start mb-3">
                                  <div className="flex-fill">
                                    <h4 className="h5 mb-0 text-dark">{para}</h4>
                                  </div>
                                  <div className="ms-3">
                                    <Button variant={copiedIndex === idx ? 'light' : 'outline-secondary'} size="sm" onClick={() => copyParagraph(para, idx)}>
                                      {copiedIndex === idx ? 'Copied' : 'Copy'}
                                    </Button>
                                  </div>
                                </li>
                              ))}
                            </ol>
                          );
                        })()
                      ) : (
                        generatedText.split(/\n{2,}|\r\n\r\n/).map((para, idx) => (
                          <div key={idx} className="d-flex align-items-start mb-3">
                            <div className="me-3 text-muted" style={{width: 28}}>
                              <i className="bi bi-file-earmark-text"></i>
                            </div>
                            <div className="flex-fill text-muted lh-base fs-6" dangerouslySetInnerHTML={includeHtml ? { __html: para } : undefined}>
                              {!includeHtml && para}
                            </div>
                            <div className="ms-3">
                              <Button variant={copiedIndex === idx ? 'light' : 'outline-secondary'} size="sm" onClick={() => copyParagraph(para, idx)}>
                                {copiedIndex === idx ? 'Copied' : 'Copy'}
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Hero Section - UPDATED */}
              <Row className="text-center mb-5">
                <Col>
                  <p className="lead text-muted mb-4">
                    Free online tool to generate dummy text for designers and developers.
                    Create Lorem Ipsum in paragraphs, sentences, or custom word counts.
                    <strong> No registration required - 100% free</strong>.
                  </p>
                  <Alert variant="info" className="d-inline-block">
                    <i className="bi bi-lightning me-2"></i>
                    Instant generation • Multiple formats • Copy with one click
                  </Alert>
                </Col>
              </Row>





              {/* SEO Content Section */}
              <Row className="my-5">
                <Col lg={12} className="mx-auto">
                  <Card className="border-0 shadow-sm bg-white rounded-4">
                    <Card.Body className="p-5">
                      <h2 className="h3 text-primary fw-bold mb-4 text-center">
                        What is Lorem Ipsum?
                      </h2>
                      <p className="text-secondary fs-6 mb-3">
                        <strong>Lorem Ipsum</strong> is simply dummy text used in the
                        printing and typesetting industry. It’s been the industry’s
                        standard placeholder text since the 1500s, when an unknown printer
                        scrambled type to create a specimen book.
                      </p>
                      <p className="text-secondary fs-6 mb-4">
                        Our <strong>Lorem Ipsum Generator</strong> instantly provides
                        placeholder text for your web designs, apps, and marketing
                        materials. Generate paragraphs, sentences, or specific word
                        counts—all formatted perfectly for your project.
                      </p>

                      <h3 className="h5 text-primary fw-semibold mb-3">
                        Why Use Our Lorem Ipsum Generator?
                      </h3>
                      <ul className="list-unstyled text-secondary">
                        <li className="d-flex align-items-center mb-2">
                          <CheckCircle className="text-success me-2" size={18} />
                          <strong>Free & No Registration</strong> – Use it instantly.
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <FileText className="text-info me-2" size={18} />
                          <strong>Multiple Formats</strong> – Generate paragraphs,
                          sentences, or word counts.
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <Zap className="text-warning me-2" size={18} />
                          <strong>HTML Support</strong> – Add &lt;p&gt; tags easily for
                          web projects.
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <CheckCircle className="text-success me-2" size={18} />
                          <strong>Copy & Paste</strong> – One-click copy functionality.
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <Smartphone className="text-danger me-2" size={18} />
                          <strong>Mobile Friendly</strong> – Works smoothly on all
                          devices.
                        </li>
                      </ul>

                      <div className="text-center mt-4">
                        <Button variant="primary" size="lg" className="rounded-pill px-4">
                          Generate Lorem Ipsum Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Stats Section */}
              <Card className="border-0 bg-transparent mt-4">
                <Card.Body>
                  <Row className="g-4 text-center">
                    <Col md={3}>
                      <div className="p-3">
                        <h3 className="text-primary fw-bold">{loremWords.length}+</h3>
                        <p className="text-muted mb-0">Latin Words</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="p-3">
                        <h3 className="text-primary fw-bold">3</h3>
                        <p className="text-muted mb-0">Generation Types</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="p-3">
                        <h3 className="text-primary fw-bold">20</h3>
                        <p className="text-muted mb-0">Max Paragraphs</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="p-3">
                        <h3 className="text-primary fw-bold">500</h3>
                        <p className="text-muted mb-0">Max Words</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}