import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Alert } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './NameGenerator.css';

// Extensive name database
const nameData = {
  fantasy: [
    "Aragorn", "Gandalf", "Legolas", "Frodo", "Arwen", "Galadriel", "Thorin",
    "Sauron", "Elrond", "Bilbo", "Gimli", "Saruman", "Boromir", "Faramir",
    "Eowyn", "Merry", "Pippin", "Samwise", "Treebeard", "WitchKing", "Celeborn",
    "Denethor", "Eomer", "Faramir", "Galadhon", "Haldir", "Isildur", "Luthien"
  ],
  scifi: [
    "Neo", "Trinity", "Morpheus", "Spock", "Kirk", "Leia", "Han", "Vader",
    "Rey", "Kylo", "Ripley", "Deckard", "Starbuck", "Apollo", "Atreides",
    "Skywalker", "Solo", "Kenobi", "Data", "Picard", "Worf", "Seven", "Jadzia",
    "Malcolm", "Kaylee", "Zoe", "Wash", "River", "Simon", "Derrial"
  ],
  modern: [
    "Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Avery",
    "Quinn", "Peyton", "Dakota", "Skyler", "Cameron", "Drew", "Blake",
    "Sage", "Rowan", "Emerson", "Finley", "Hayden", "Kai", "Phoenix", "River"
  ],
  mythological: [
    "Zeus", "Hera", "Athena", "Apollo", "Artemis", "Odin", "Thor", "Loki",
    "Freyja", "Tyr", "Anubis", "Ra", "Isis", "Osiris", "Horus", "Set",
    "Bastet", "Sobek", "Persephone", "Hades", "Poseidon", "Hephaestus", "Ares",
    "Aphrodite", "Hermes", "Dionysus", "Hestia", "Demeter", "Freyr", "Heimdall"
  ],
  business: [
    "InnovateX", "TechSphere", "GlobalSync", "NextGen", "PrimeCore",
    "EliteWorks", "SynergyPlus", "Visionary", "PinnacleGroup", "ApexSolutions",
    "QuantumLeap", "InfinityCorp", "NexusVentures", "OmniTech", "StellarSolutions",
    "CatalystGroup", "MomentumWorks", "HorizonLabs", "VertexEnterprises", "ZenithSystems"
  ],
  medieval: [
    "Arthur", "Guinevere", "Lancelot", "Merlin", "Morgana", "Galahad", "Percival",
    "Gawain", "Tristan", "Isolde", "Uther", "Igraine", "Mordred", "Vortigern",
    "Bedivere", "Kay", "Bors", "Gareth", "Gaheris", "Elaine", "Vivian", "Nimue"
  ]
};

const NameGenerator = () => {
  const [filters, setFilters] = useState({
    category: 'fantasy',
    startsWith: '',
    endsWith: '',
    quantity: 12
  });
  const [generatedNames, setGeneratedNames] = useState([]);
  const [savedNames, setSavedNames] = useState([]);
  const [copiedName, setCopiedName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNames = useCallback(() => {
    setIsGenerating(true);

    // Simulate processing time for better UX
    setTimeout(() => {
      let names = [...nameData[filters.category] || []];

      // Apply filters
      if (filters.startsWith) {
        names = names.filter(name =>
          name.toLowerCase().startsWith(filters.startsWith.toLowerCase())
        );
      }

      if (filters.endsWith) {
        names = names.filter(name =>
          name.toLowerCase().endsWith(filters.endsWith.toLowerCase())
        );
      }

      // Shuffle and limit
      const shuffled = [...names].sort(() => Math.random() - 0.5);
      const limited = shuffled.slice(0, filters.quantity);
      setGeneratedNames(limited);
      setIsGenerating(false);
    }, 300);
  }, [filters]);

  const saveName = (name) => {
    if (!savedNames.includes(name)) {
      setSavedNames(prev => [...prev, name]);
    }
  };

  const removeSavedName = (nameToRemove) => {
    setSavedNames(prev => prev.filter(name => name !== nameToRemove));
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedName(text);
      setTimeout(() => setCopiedName(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const exportNames = () => {
    const data = savedNames.join('\n');
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'saved-names.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAllSaved = () => {
    setSavedNames([]);
  };

  return (
    <HelmetProvider>
      <>
      <Helmet>
        <title>Free Name Generator — Create Unique Names for Characters, Brands & Projects</title>
        <meta
          name="description"
          content="Generate unique names for characters, brands, projects, and more. Free name generator with fantasy, sci-fi, modern, mythological, business, and medieval categories."
        />
        <meta
          name="keywords"
          content="name generator, character name generator, brand name generator, fantasy names, sci-fi names, business name generator, unique names"
        />
        <link rel="canonical" href="https://loremtextgenerator.com/name-generator" />
      </Helmet>
    <Container className="py-4">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-primary mb-3">
              <i className="bi bi-person-badge me-3"></i>
              Free Name Generator
            </h1>
            <p className="lead text-muted mb-4">
              Create unique names for characters, brands, projects, and more.
              Perfect for writers, developers, and creative projects.
            </p>

            {/* Quick Stats */}
            <Row className="g-4 mb-4">
              <Col md={3}>
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <h3 className="text-primary mb-0">{Object.values(nameData).flat().length}+</h3>
                    <small className="text-muted">Total Names</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <h3 className="text-primary mb-0">{Object.keys(nameData).length}</h3>
                    <small className="text-muted">Categories</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <h3 className="text-primary mb-0">100%</h3>
                    <small className="text-muted">Free Tool</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <h3 className="text-primary mb-0">Instant</h3>
                    <small className="text-muted">Results</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Controls Sidebar */}
        <Col lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white py-3">
              <h5 className="mb-0">
                <i className="bi bi-sliders me-2"></i>
                Generator Settings
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Category</Form.Label>
                  <Form.Select
                    value={filters.category}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="border-primary"
                  >
                    <option value="fantasy">Fantasy & Medieval</option>
                    <option value="scifi">Sci-Fi & Futuristic</option>
                    <option value="modern">Modern & Unisex</option>
                    <option value="mythological">Mythological</option>
                    <option value="business">Business & Brands</option>
                    <option value="medieval">Medieval & Arthurian</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Starts With</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., A, El, Th"
                    value={filters.startsWith}
                    onChange={(e) => setFilters(prev => ({ ...prev, startsWith: e.target.value }))}
                    className="border-primary"
                  />
                  <Form.Text className="text-muted">
                    Filter names starting with specific letters
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Ends With</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., a, on, us"
                    value={filters.endsWith}
                    onChange={(e) => setFilters(prev => ({ ...prev, endsWith: e.target.value }))}
                    className="border-primary"
                  />
                  <Form.Text className="text-muted">
                    Filter names ending with specific letters
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    Number of Names: <Badge bg="primary">{filters.quantity}</Badge>
                  </Form.Label>
                  <Form.Range
                    min="1"
                    max="20"
                    value={filters.quantity}
                    onChange={(e) => setFilters(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                    className="border-primary"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 py-2 fw-semibold"
                  onClick={generateNames}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Generating...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-lightning me-2"></i>
                      Generate Names
                    </>
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Saved Names */}
          {savedNames.length > 0 && (
            <Card className="shadow-sm border-0 mt-4">
              <Card.Header className="bg-success text-white py-3 d-flex justify-content-between align-items-center">
                <h6 className="mb-0">
                  <i className="bi bi-bookmark me-2"></i>
                  Saved Names ({savedNames.length})
                </h6>
                <div>
                  <Button variant="outline-light" size="sm" onClick={exportNames} className="me-2">
                    <i className="bi bi-download me-1"></i>
                    Export
                  </Button>
                  <Button variant="outline-light" size="sm" onClick={clearAllSaved}>
                    <i className="bi bi-trash me-1"></i>
                    Clear
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="saved-names-list">
                  {savedNames.map((name, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                      <span className="fw-medium">{name}</span>
                      <div>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => copyToClipboard(name)}
                          className="me-1"
                        >
                          <i className="bi bi-copy"></i>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeSavedName(name)}
                        >
                          <i className="bi bi-x"></i>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>

        {/* Results */}
        <Col lg={8}>
          {copiedName && (
            <Alert variant="success" className="d-flex align-items-center border-0 shadow-sm">
              <i className="bi bi-check-circle-fill me-2"></i>
              Copied "<strong>{copiedName}</strong>" to clipboard!
            </Alert>
          )}

          <Card className="shadow-sm border-0">
            <Card.Header className="bg-light py-3">
              <h5 className="mb-0 d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-list-ul me-2"></i>
                  Generated Names
                  {generatedNames.length > 0 && (
                    <Badge bg="primary" className="ms-2">{generatedNames.length}</Badge>
                  )}
                </span>
                {generatedNames.length > 0 && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => generatedNames.forEach(name => saveName(name))}
                  >
                    <i className="bi bi-bookmark-plus me-1"></i>
                    Save All
                  </Button>
                )}
              </h5>
            </Card.Header>
            <Card.Body>
              {generatedNames.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <i className="bi bi-people display-1 d-block mb-3 opacity-50"></i>
                  <h5>Ready to Generate Names</h5>
                  <p className="mb-4">Choose your settings and click the generate button to create unique names!</p>
                  <div className="row g-3 text-start">
                    <div className="col-md-6">
                      <h6><i className="bi bi-stars me-2 text-primary"></i>Perfect for:</h6>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check me-2 text-success"></i>Character Names</li>
                        <li><i className="bi bi-check me-2 text-success"></i>Brand Names</li>
                        <li><i className="bi bi-check me-2 text-success"></i>Project Names</li>
                        <li><i className="bi bi-check me-2 text-success"></i>Username Ideas</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6><i className="bi bi-lightning me-2 text-primary"></i>Features:</h6>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check me-2 text-success"></i>6 Categories</li>
                        <li><i className="bi bi-check me-2 text-success"></i>Advanced Filters</li>
                        <li><i className="bi bi-check me-2 text-success"></i>Save & Export</li>
                        <li><i className="bi bi-check me-2 text-success"></i>100% Free</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Row className="g-3">
                  {generatedNames.map((name, index) => (
                    <Col key={index} md={6} lg={4}>
                      <Card className="name-card h-100 border-0 shadow-sm">
                        <Card.Body className="text-center d-flex flex-column p-3">
                          <h6 className="card-title flex-grow-1 d-flex align-items-center justify-content-center mb-3">
                            {name}
                          </h6>
                          <div className="d-grid gap-2">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => copyToClipboard(name)}
                            >
                              <i className="bi bi-copy me-1"></i>
                              Copy
                            </Button>
                            <Button
                              variant={savedNames.includes(name) ? "success" : "outline-success"}
                              size="sm"
                              onClick={() => saveName(name)}
                              disabled={savedNames.includes(name)}
                            >
                              <i className={`bi ${savedNames.includes(name) ? 'bi-bookmark-check' : 'bi-bookmark'} me-1`}></i>
                              {savedNames.includes(name) ? 'Saved' : 'Save'}
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Card.Body>
          </Card>

          {/* SEO Content */}
          <Card className="shadow-sm border-0 mt-4">
            <Card.Body>
              <h5 className="text-primary mb-3">About Our Name Generator Tool</h5>
              <p>
                Our free Name Generator tool at <strong>LoremTextGenerator.com</strong> helps you create
                unique and meaningful names for various purposes. Whether you're a writer needing character
                names, a developer creating usernames, or an entrepreneur brainstorming brand names, our
                tool provides instant inspiration.
              </p>

              <h6 className="mt-4">Key Features:</h6>
              <ul>
                <li><strong>Multiple Categories:</strong> Fantasy, Sci-Fi, Modern, Mythological, Business, and Medieval names</li>
                <li><strong>Advanced Filtering:</strong> Filter by starting/ending letters</li>
                <li><strong>Save & Export:</strong> Save your favorite names and export them as a text file</li>
                <li><strong>Copy to Clipboard:</strong> One-click copying for easy use</li>
                <li><strong>Completely Free:</strong> No registration required, unlimited use</li>
              </ul>

              <div className="alert alert-info mt-3">
                <i className="bi bi-lightbulb me-2"></i>
                <strong>Pro Tip:</strong> Combine names from different categories or modify them slightly
                to create truly unique names for your projects!
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </>
    </HelmetProvider>
  );
};

export default NameGenerator;