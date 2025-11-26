import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextCaseConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionType, setConversionType] = useState('lowercase');

  const handleConvert = () => {
    if (!inputText.trim()) {
      setOutputText('');
      return;
    }

    switch (conversionType) {
      case 'lowercase':
        setOutputText(inputText.toLowerCase());
        break;
      case 'uppercase':
        setOutputText(inputText.toUpperCase());
        break;
      case 'sentencecase':
        setOutputText(
          inputText.toLowerCase().replace(/^\s*\w|\.\s*\w/g, (c) => c.toUpperCase())
        );
        break;
      case 'titlecase':
        setOutputText(
          inputText.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
        );
        break;
      case 'togglecase':
        setOutputText(
          inputText.replace(/([a-z]+)|([A-Z]+)/g, (match, lower, upper) =>
            lower ? match.toUpperCase() : match.toLowerCase()
          )
        );
        break;
      default:
        setOutputText(inputText);
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert('text copied to clipboard!');
  };

  return (
    <HelmetProvider>
      <div className="container-fluid bg-light min-vh-100 py-5">
        {/* seo meta tags */}
        <Helmet>
          <title> convert capital to lowercase |free text case converter |uppercase to lowercase converter </title>
          <meta
            name="description"
            content="free online text case converter tool. convert text to uppercase, lowercase, sentence case, title case, and toggle case instantly. no registration required."
          />
          <meta
            name="keywords"
            content="text case converter, uppercase to lowercase, lowercase to uppercase, sentence case, title case, text tool, online converter, case converter, text formatter , convert capital to lowercase"
          />
          <meta name="author" content="text tools" />
          <meta property="og:title" content="free text case converter tool | uppercase lowercase converter" />
          <meta
            property="og:description"
            content="convert text between different cases instantly with our free online tool. support for uppercase, lowercase, sentence case, and title case."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://loremtextgenerator.com/text-case-converter" />
        </Helmet>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            {/* header section */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-3">
                text case converter
              </h1>
              <p className="lead text-muted">
                convert your text between different cases instantly. supports uppercase, lowercase, sentence case, title case, and more.
              </p>
            </div>

            {/* conversion options */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="conversionType" className="form-label fw-semibold">
                      conversion type
                    </label>
                    <select
                      id="conversionType"
                      className="form-select"
                      value={conversionType}
                      onChange={(e) => setConversionType(e.target.value)}
                    >
                      <option value="lowercase">lower case</option>
                      <option value="uppercase">upper case</option>
                      <option value="sentencecase">sentence case</option>
                      <option value="titlecase">title case</option>
                      <option value="togglecase">toggle case</option>
                    </select>
                  </div>
                  <div className="col-md-6 d-flex align-items-end">
                    <div className="d-grid gap-2 d-md-flex">
                      <button
                        className="btn btn-primary px-4"
                        onClick={handleConvert}
                      >
                        convert text
                      </button>
                      <button
                        className="btn btn-outline-secondary px-4"
                        onClick={handleClear}
                      >
                        clear all
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* input and output areas */}
            <div className="row g-4">
              {/* input section */}
              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-header bg-transparent">
                    <h5 className="card-title mb-0 text-dark">
                      input text
                    </h5>
                  </div>
                  <div className="card-body">
                    <textarea
                      className="form-control"
                      rows="12"
                      placeholder="enter your text here to convert..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      style={{ resize: 'none' }}
                    />
                    <div className="mt-2 text-muted small">
                      characters: {inputText.length} | words: {inputText.trim() ? inputText.trim().split(/\s+/).length : 0}
                    </div>
                  </div>
                </div>
              </div>

              {/* output section */}
              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0 text-dark">
                      converted text
                    </h5>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={handleCopy}
                      disabled={!outputText}
                    >
                      copy text
                    </button>
                  </div>
                  <div className="card-body">
                    <div
                      className="form-control bg-light"
                      style={{
                        minHeight: '200px',
                        maxHeight: '300px',
                        overflowY: 'auto',
                        whiteSpace: 'pre-wrap',
                        border: '1px solid #dee2e6'
                      }}
                    >
                      {outputText || 'converted text will appear here...'}
                    </div>
                    <div className="mt-2 text-muted small">
                      characters: {outputText.length} | words: {outputText.trim() ? outputText.trim().split(/\s+/).length : 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* features section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">supported case conversions</h3>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">lower case</h6>
                        <p className="small text-muted mb-0">
                          convert all text to lowercase letters
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">upper case</h6>
                        <p className="small text-muted mb-0">
                          convert all text to uppercase letters
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">sentence case</h6>
                        <p className="small text-muted mb-0">
                          capitalize the first letter of each sentence
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">title case</h6>
                        <p className="small text-muted mb-0">
                          capitalize the first letter of each word
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">toggle case</h6>
                        <p className="small text-muted mb-0">
                          switch between uppercase and lowercase letters
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h6 className="text-primary">capitalize text</h6>
                        <p className="small text-muted mb-0">
                          capitalize the first letter of your text
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* seo content section */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h4 className="h6 text-primary mb-3">about text case conversion</h4>
                    <p className="small text-muted mb-2">
                      our free text case converter tool helps you transform text between different letter cases quickly and easily.
                      whether you need to convert uppercase to lowercase for better readability, or format text for titles and headings,
                      this tool provides instant results with no registration required.
                    </p>
                    <p className="small text-muted mb-0">
                      perfect for writers, students, developers, and anyone who works with text regularly.
                      the tool supports multiple conversion types and includes useful features like character counting
                      and copy-to-clipboard functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default TextCaseConverter;