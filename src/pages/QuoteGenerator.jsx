import React, { useState, useEffect } from 'react';
import { quotes, quoteCategories, quoteLengths, perspectives, philosophicalInfluences, quoteTypes, tones, timePeriods } from './quotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';

const QuoteGeneratorTool = () => {
  // Filter states
  const [desiredQuote, setDesiredQuote] = useState("overcoming challenges");
  const [selectedLength, setSelectedLength] = useState("");
  const [selectedPerspective, setSelectedPerspective] = useState("");
  const [selectedPhilosophy, setSelectedPhilosophy] = useState("");
  const [keywords, setKeywords] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("");

  // Result states
  const [currentQuote, setCurrentQuote] = useState(null);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [fade, setFade] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with a random quote
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setFilteredQuotes(quotes);
  }, []);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    applyFilters();
  }, [desiredQuote, selectedLength, selectedPerspective, selectedPhilosophy, keywords, selectedType, selectedTone, selectedTimePeriod]);

  const applyFilters = () => {
    let filtered = quotes;

    // Filter by category/desired quote
    if (desiredQuote) {
      filtered = filtered.filter(quote =>
        quote.category.toLowerCase().includes(desiredQuote.toLowerCase()) ||
        quote.text.toLowerCase().includes(desiredQuote.toLowerCase())
      );
    }

    // Filter by length
    if (selectedLength) {
      filtered = filtered.filter(quote => quote.length === selectedLength);
    }

    // Filter by perspective
    if (selectedPerspective) {
      filtered = filtered.filter(quote => quote.perspective === selectedPerspective);
    }

    // Filter by philosophical influence
    if (selectedPhilosophy) {
      filtered = filtered.filter(quote => quote.philosophicalInfluence === selectedPhilosophy);
    }

    // Filter by keywords
    if (keywords) {
      const keywordArray = keywords.split(',').map(k => k.trim().toLowerCase());
      filtered = filtered.filter(quote =>
        keywordArray.some(keyword =>
          quote.keywords.some(kw => kw.toLowerCase().includes(keyword)) ||
          quote.text.toLowerCase().includes(keyword) ||
          quote.author.toLowerCase().includes(keyword)
        )
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(quote => quote.type === selectedType);
    }

    // Filter by tone
    if (selectedTone) {
      filtered = filtered.filter(quote => quote.tone === selectedTone);
    }

    // Filter by time period
    if (selectedTimePeriod) {
      filtered = filtered.filter(quote => quote.timePeriod === selectedTimePeriod);
    }

    setFilteredQuotes(filtered);

    // If current quote is no longer in filtered results, get a new one
    if (filtered.length > 0 && currentQuote && !filtered.find(q => q.id === currentQuote.id)) {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setCurrentQuote(filtered[randomIndex]);
    } else if (filtered.length === 0) {
      setCurrentQuote(null);
    }
  };

  const getRandomQuote = () => {
    if (isLoading || filteredQuotes.length === 0) return;

    setIsLoading(true);
    setFade(false);

    setTimeout(() => {
      if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        setCurrentQuote(filteredQuotes[randomIndex]);
      }
      setFade(true);
      setIsLoading(false);
    }, 500);
  };

  const clearFilters = () => {
    setDesiredQuote("");
    setSelectedLength("");
    setSelectedPerspective("");
    setSelectedPhilosophy("");
    setKeywords("");
    setSelectedType("");
    setSelectedTone("");
    setSelectedTimePeriod("");
  };

  const tweetQuote = () => {
    if (!currentQuote) return;
    const tweetText = `"${currentQuote.text}" - ${currentQuote.author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
  };

  const copyToClipboard = () => {
    if (!currentQuote) return;
    const quoteText = `"${currentQuote.text}" - ${currentQuote.author}`;
    navigator.clipboard.writeText(quoteText)
      .then(() => {
        const copyBtn = document.getElementById('copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check me-2"></i>Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
  };

  return (

    <>
      <Helmet>
        <title>Free Quote Maker & Quote Generator – AI, Inspirational & Random Quotes</title>

        <meta
          name="description"
          content="Create quotes instantly with the Free Quote Maker! Generate inspirational, motivational, love, life, funny and AI quotes. Use our online quote generator to design quote images, posters and backgrounds. Copy, customize & download quotes for free."
        />

        <meta
          name="keywords"
          content="quote maker, free quote maker, quote generator, online quote generator, ai quote generator, incorrect quote generator, inspirational quote generator, motivational quote generator, random quote generator, quote creator, quote editor, quote background maker, quote image generator, custom quote maker"
        />

        <link rel="canonical" href="https://loremtextgenerator.com/quote-maker" />

        {/* Open Graph */}
        <meta property="og:title" content="Free Quote Maker & Quote Generator (AI Supported)" />
        <meta property="og:description" content="Generate quotes online for free. AI quotes, inspirational quotes, posters, backgrounds and more." />
        <meta property="og:url" content="https://loremtextgenerator.com/quote-maker" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://loremtextgenerator.com/images/quote-maker-banner.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Quote Maker – Inspirational, Motivational & AI Quotes" />
        <meta name="twitter:description" content="Generate and customize quotes instantly. Free online quote generator with AI support." />
        <meta name="twitter:image" content="https://loremtextgenerator.com/images/quote-maker-banner.jpg" />

        {/* Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Quote Maker",
      "url": "https://loremtextgenerator.com/quote-maker",
      "description": "Free online quote generator with AI, inspirational, motivational, love, life and random quotes. Create quote images, posters and backgrounds.",
      "publisher": {
        "@type": "Organization",
        "name": "LoremTextGenerator",
        "logo": "https://loremtextgenerator.com/images/logo.png"
      },
      "image": "https://loremtextgenerator.com/images/quote-maker-banner.jpg"
    }
    `}
        </script>
      </Helmet>

      <div className="container-fluid min-vh-100 quote-generator-tool py-4">
        <div className="container">
          <div className="row">
            {/* Filters Sidebar */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">
                    <i className="fas fa-sliders-h me-2"></i>
                    Quote Filters
                  </h4>
                </div>
                <div className="card-body">
                  {/* Desired Quote */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Briefly Describe the Desired Quote</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., overcoming challenges"
                      value={desiredQuote}
                      onChange={(e) => setDesiredQuote(e.target.value)}
                    />
                  </div>

                  {/* Advanced Settings */}
                  <div className="advanced-settings">
                    <h6 className="border-bottom pb-2">Advanced Settings</h6>

                    {/* Quote Length */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Quote Length</label>
                      <select
                        className="form-select"
                        value={selectedLength}
                        onChange={(e) => setSelectedLength(e.target.value)}
                      >
                        <option value="">Any Length</option>
                        {quoteLengths.map(length => (
                          <option key={length} value={length}>
                            {length.charAt(0).toUpperCase() + length.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Perspective */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Perspective</label>
                      <select
                        className="form-select"
                        value={selectedPerspective}
                        onChange={(e) => setSelectedPerspective(e.target.value)}
                      >
                        <option value="">Any Perspective</option>
                        {perspectives.map(perspective => (
                          <option key={perspective} value={perspective}>
                            {perspective.charAt(0).toUpperCase() + perspective.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Philosophical Influence */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Philosophical Influence</label>
                      <select
                        className="form-select"
                        value={selectedPhilosophy}
                        onChange={(e) => setSelectedPhilosophy(e.target.value)}
                      >
                        <option value="">Any Influence</option>
                        {philosophicalInfluences.map(philosophy => (
                          <option key={philosophy} value={philosophy}>
                            {philosophy.charAt(0).toUpperCase() + philosophy.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Keywords */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Keywords</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g., success, love, motivation"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                      />
                      <div className="form-text">Separate multiple keywords with commas</div>
                    </div>

                    {/* Quote Type */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Quote Type</label>
                      <select
                        className="form-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                      >
                        <option value="">Any Type</option>
                        {quoteTypes.map(type => (
                          <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tone/Style */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Tone/Style</label>
                      <select
                        className="form-select"
                        value={selectedTone}
                        onChange={(e) => setSelectedTone(e.target.value)}
                      >
                        <option value="">Any Tone</option>
                        {tones.map(tone => (
                          <option key={tone} value={tone}>
                            {tone.charAt(0).toUpperCase() + tone.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Time Period */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Time Period</label>
                      <select
                        className="form-select"
                        value={selectedTimePeriod}
                        onChange={(e) => setSelectedTimePeriod(e.target.value)}
                      >
                        <option value="">Any Period</option>
                        {timePeriods.map(period => (
                          <option key={period} value={period}>
                            {period.charAt(0).toUpperCase() + period.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={clearFilters}
                    >
                      <i className="fas fa-times me-2"></i>
                      Clear All Filters
                    </button>
                  </div>

                  {/* Results Count */}
                  <div className="mt-3 p-3 bg-light rounded">
                    <small className="text-muted">
                      <i className="fas fa-filter me-1"></i>
                      Showing {filteredQuotes.length} of {quotes.length} quotes
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Display */}
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4 p-md-5 text-center">
                  <div className="mb-4">
                    <div className="quote-icon mb-3">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <h1 className="display-5 fw-bold text-gradient mb-2">Quote Maker</h1>
                    <p className="text-muted">Find the perfect quote with advanced filtering</p>
                  </div>

                  {/* Quote Display */}
                  {currentQuote ? (
                    <div className={`quote-container mb-4 ${fade ? 'fade-in' : 'fade-out'}`}>
                      <blockquote className="blockquote mb-0">
                        <p className="quote-text mb-3">
                          "{currentQuote.text}"
                        </p>
                        <footer className="blockquote-footer mt-3 author-text">
                          — {currentQuote.author}
                        </footer>
                      </blockquote>

                      {/* Quote Metadata */}
                      <div className="quote-metadata mt-4">
                        <div className="row justify-content-center">
                          <div className="col-auto">
                            <span className="badge bg-primary me-2">{currentQuote.category}</span>
                            <span className="badge bg-secondary me-2">{currentQuote.length}</span>
                            <span className="badge bg-info me-2">{currentQuote.type}</span>
                            <span className="badge bg-success me-2">{currentQuote.tone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="alert alert-warning">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      No quotes match your current filters. Try adjusting your criteria.
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                    <button
                      className="btn btn-primary btn-lg px-4"
                      onClick={getRandomQuote}
                      disabled={isLoading || filteredQuotes.length === 0}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Loading...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-random me-2"></i>
                          New Quote
                        </>
                      )}
                    </button>

                    <button
                      className="btn btn-outline-info btn-lg px-4"
                      onClick={tweetQuote}
                      disabled={!currentQuote}
                    >
                      <i className="fab fa-twitter me-2"></i>
                      Tweet
                    </button>

                    <button
                      id="copy-btn"
                      className="btn btn-outline-secondary btn-lg px-4"
                      onClick={copyToClipboard}
                      disabled={!currentQuote}
                    >
                      <i className="fas fa-copy me-2"></i>
                      Copy
                    </button>
                  </div>

                  {/* Filter Info */}
                  <div className="mt-4 text-muted">
                    <small>
                      <i className="fas fa-info-circle me-1"></i>
                      Use the filters to find quotes matching your specific criteria
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
          .quote-generator-tool {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .card {
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .quote-icon {
            font-size: 2.5rem;
            color: #667eea;
            opacity: 0.7;
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .quote-text {
            font-size: 1.4rem;
            line-height: 1.6;
            color: #333;
            font-weight: 500;
            font-style: italic;
          }
          
          .author-text {
            font-size: 1.2rem;
            color: #667eea;
            font-weight: 600;
          }
          
          .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .fade-out {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          .btn {
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
          }
          
          .badge {
            font-size: 0.7rem;
            border-radius: 10px;
          }
          
          .advanced-settings {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 10px;
            border-left: 4px solid #667eea;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default QuoteGeneratorTool;