import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';

const WordCounter = () => {
  const [text, setText] = useState('');

  // Calculate statistics
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
  const paragraphCount = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;
  const readingTime = Math.ceil(wordCount / 200);

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleCopyText = useCallback(() => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  }, [text]);

  const handleClearText = useCallback(() => {
    setText('');
  }, []);

  const SITE_URL = "https://loremtextgenerator.com/word-counter";
  const OG_IMAGE = "https://loremtextgenerator.com/site-logo.png";

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Free Word Counter Online — Count Words & Characters Instantly</title>
        <meta
          name="description"
          content="Count words, characters, sentences, and paragraphs in real-time with our free online word counter. Perfect for writers, students, and professionals. No signup required."
        />
        <meta
          name="keywords"
          content="word counter, character counter, word count, character count, online word counter, free word counter, text analysis, writing tool, word checker, paragraph counter, sentence counter, text counter, writing assistant, word calculator, text statistics"
        />
        <link rel="canonical" href="https://loremtextgenerator.com/word-counter" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Free Word Counter Online — Count Words & Characters Instantly" />
        <meta
          property="og:description"
          content="Real-time word counter and character counter tool. Get instant text statistics including sentences, paragraphs, and reading time. 100% free online tool."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Word Counter Online" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content="Free Word Counter Online — Count Words & Characters Instantly" />
        <meta
          property="twitter:description"
          content="Instant word and character counter with detailed text analysis. Perfect for essays, articles, and social media posts. Completely free online tool."
        />
        <meta property="twitter:image" content={OG_IMAGE} />

        {/* Additional SEO Enhancements */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Word Counter Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Language and Region */}
        <meta name="language" content="English" />
        <meta name="rating" content="general" />

        {/* Mobile Specific */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Word Counter" />
      </Helmet>

      <div className="container-fluid min-vh-100 py-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center text-white mb-4">
              <h1 className="display-4 fw-bold mb-3" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Word Counter
              </h1>
              <p className="lead mb-0 opacity-90" style={{ fontSize: '1.25rem' }}>
                Count words, characters, and more in real-time
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
              <div className="card-body p-0">
                {/* Stats Cards - Top */}
                <div className="row g-0 bg-light">
                  {[
                    { title: 'Words', value: wordCount, color: 'success', icon: '📝' },
                    { title: 'Characters', value: characterCount, color: 'primary', icon: '🔤' },
                    { title: 'No Spaces', value: characterCountNoSpaces, color: 'info', icon: '␣' },
                    { title: 'Sentences', value: sentenceCount, color: 'warning', icon: '💬' },
                    { title: 'Paragraphs', value: paragraphCount, color: 'danger', icon: '📑' },
                    { title: 'Reading Time', value: `${readingTime} min`, color: 'dark', icon: '⏱️' }
                  ].map((stat, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2">
                      <div className="text-center p-3 border-end border-bottom">
                        <div className="mb-2" style={{ fontSize: '1.5rem' }}>{stat.icon}</div>
                        <h3 className={`fw-bold text-${stat.color} mb-1`} style={{ fontSize: '1.75rem' }}>
                          {stat.value}
                        </h3>
                        <small className="text-muted fw-medium">{stat.title}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Text Area Section */}
                <div className="p-4">
                  <div className="mb-4">
                    <textarea
                      value={text}
                      onChange={handleTextChange}
                      placeholder="Start typing or paste your text here to analyze..."
                      className="form-control border-0 shadow-none"
                      rows="12"
                      style={{
                        fontSize: '16px',
                        resize: 'none',
                        background: 'transparent',
                        lineHeight: '1.6'
                      }}
                      autoFocus
                    />
                  </div>

                  <div className="d-flex gap-3 flex-column flex-md-row">
                    <button
                      onClick={handleCopyText}
                      className="btn btn-primary btn-lg flex-fill fw-semibold d-flex align-items-center justify-content-center gap-2"
                      disabled={!text}
                      style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '12px'
                      }}
                    >
                      <i className="bi bi-clipboard"></i>
                      Copy Text
                    </button>
                    <button
                      onClick={handleClearText}
                      className="btn btn-outline-danger btn-lg flex-fill fw-semibold d-flex align-items-center justify-content-center gap-2"
                      disabled={!text}
                      style={{
                        padding: '12px 24px',
                        borderRadius: '12px',
                        borderWidth: '2px'
                      }}
                    >
                      <i className="bi bi-trash"></i>
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-5">
                <h2 className="text-center mb-5 fw-bold" style={{
                  color: '#2c3e50',
                  fontSize: '2rem'
                }}>
                  Why Choose Our Word Counter?
                </h2>
                <div className="row g-4">
                  {[
                    {
                      icon: '⚡',
                      title: 'Lightning Fast',
                      description: 'Real-time counting as you type with instant results'
                    },
                    {
                      icon: '🎯',
                      title: 'Highly Accurate',
                      description: 'Precise word, character, and sentence counting algorithms'
                    },
                    {
                      icon: '📊',
                      title: 'Detailed Analytics',
                      description: 'Comprehensive text statistics and reading time estimates'
                    },
                    {
                      icon: '💾',
                      title: 'Easy Export',
                      description: 'One-click copy functionality for seamless workflow'
                    },
                    {
                      icon: '🔒',
                      title: 'Privacy First',
                      description: 'Your text never leaves your browser - completely secure'
                    },
                    {
                      icon: '🎨',
                      title: 'Modern Interface',
                      description: 'Clean, intuitive design that works on all devices'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div className="text-center p-4 h-100" style={{
                        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                          {feature.icon}
                        </div>
                        <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
                          {feature.title}
                        </h5>
                        <p className="text-muted mb-0" style={{ lineHeight: '1.5' }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-5">
                <h3 className="text-center mb-4 fw-bold" style={{ color: '#2c3e50' }}>
                  Perfect For All Your Writing Needs
                </h3>
                <div className="row g-3 text-center">
                  {[
                    { icon: '📝', label: 'Academic Essays', color: 'primary' },
                    { icon: '✍️', label: 'Blog Posts', color: 'success' },
                    { icon: '📱', label: 'Social Media', color: 'info' },
                    { icon: '📄', label: 'Documents', color: 'warning' },
                    { icon: '📧', label: 'Emails', color: 'danger' },
                    { icon: '📚', label: 'Research Papers', color: 'dark' }
                  ].map((item, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2">
                      <div className="p-3 rounded-3 h-100" style={{
                        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <div className="mb-2" style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                        <small className="fw-semibold" style={{ color: '#2c3e50' }}>
                          {item.label}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center text-white opacity-75">
              <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                © 2024 Word Counter Tool. Free online word and character counting utility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add some custom styles */}
      <style>{`
        .card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95) !important;
        }
        
        .form-control:focus {
          box-shadow: none;
          outline: none;
        }
        
        .feature-icon {
          transition: transform 0.3s ease;
        }
        
        .col-12.col-md-6.col-lg-4:hover .feature-icon {
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default WordCounter;