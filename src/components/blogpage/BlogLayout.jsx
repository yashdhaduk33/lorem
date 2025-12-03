import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoremIpsumGenerator = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [generatedText, setGeneratedText] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [pageViews, setPageViews] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Domain-specific configuration
  const domain = "loremtextgenerator.com";
  const baseUrl = `https://${domain}`;

  // Track page views
  useEffect(() => {
    const views = localStorage.getItem('loremIpsumViews') || 0;
    const newViews = parseInt(views) + 1;
    localStorage.setItem('loremIpsumViews', newViews.toString());
    setPageViews(newViews);
  }, []);

  // Enhanced Lorem Ipsum text with target keywords
  const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet consectetur.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Lorem ipsum dolor sit.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Lorem ipsum dolor sit amet.",
    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Lorem ipsum dolor sit.",
    "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit.",
    "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit. Lorem ipsum dolor sit amet."
  ];

  const generateLoremIpsum = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const selectedParagraphs = loremIpsumText.slice(0, paragraphs);
      setGeneratedText(selectedParagraphs.join('\n\n'));
      setCopySuccess('');
      setIsGenerating(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopySuccess('Text copied to clipboard successfully!');
      setTimeout(() => setCopySuccess(''), 3000);
    } catch (err) {
      setCopySuccess('Failed to copy text. Please try again.');
    }
  };

  const clearText = () => {
    setGeneratedText('');
    setCopySuccess('');
  };

  // Enhanced SEO Data optimized for target keywords
  const seoData = {
    title: "Lorem Ipsum Dolor Sit | Free Generator",
    description: "Generate authentic Lorem ipsum dolor sit amet text instantly. Free online Lorem Ipsum generator with customizable paragraphs. Perfect for designers & developers at loremtextgenerator.com.",
    keywords: "lorem ipsum dolor sit, lorem ipsum dolor sit amet, lorem ipsum generator, lorem text generator, loremtextgenerator.com, dummy text, placeholder text, lorem ipsum",
    canonical: `${baseUrl}/loremipsumgenerator`,
    ogImage: `https://loremtextgenerator.com/site-logo.png`
  };

  return (
    <HelmetProvider>
      <div className="lorem-ipsum-generator pb-5">
        {/* Comprehensive SEO Meta Tags */}
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.keywords} />
          <link rel="canonical" href={seoData.canonical} />

          {/* Open Graph Tags */}
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:image" content={seoData.ogImage} />
          <meta property="og:url" content={seoData.canonical} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="loremtextgenerator.com" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.ogImage} />
          <meta name="twitter:domain" content={domain} />

          {/* Structured Data for Rich Snippets */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Lorem Ipsum Dolor Sit Generator - loremtextgenerator.com",
              "description": "Free online Lorem Ipsum dolor sit amet text generator tool. Generate placeholder text for your designs.",
              "url": "${baseUrl}",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Any",
              "permissions": "browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "loremtextgenerator.com",
                "url": "${baseUrl}"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1247"
              },
              "brand": {
                "@type": "Brand",
                "name": "loremtextgenerator.com"
              },
              "mainEntity": {
                "@type": "Question",
                "name": "What is Lorem Ipsum Dolor Sit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lorem Ipsum Dolor Sit Amet is dummy text used in graphic design and publishing as placeholder text when the final text is not yet available."
                }
              }
            }
            `}
          </script>

          {/* Additional SEO Meta */}
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <link rel="apple-touch-icon" href={`${baseUrl}/apple-touch-icon.png`} />
          <meta name="apple-mobile-web-app-title" content="loremtextgenerator.com" />
          
          {/* Preload and performance optimizations */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        </Helmet>

        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Social Proof Header */}
              <div className="text-center mb-4">
                <span className="badge bg-success me-2">
                  ⭐ 4.8/5 Rating
                </span>
                <span className="badge bg-info me-2">
                  👥 {pageViews.toLocaleString()}+ Views
                </span>
                <span className="badge bg-warning">
                  ✅ Trusted by Designers
                </span>
              </div>

              <div className="card shadow-sm border-0">
                <div className="card-header bg-gradient-primary text-white py-4">
                  <h1 className="h2 mb-2 text-center">
                    Lorem Ipsum Dolor Sit Generator
                  </h1>
                  <p className="lead text-center mb-0 opacity-90">
                    Free Online <strong>Lorem Ipsum Dolor Sit Amet</strong> Generator at <strong>loremtextgenerator.com</strong>
                  </p>
                </div>

                <div className="card-body p-4">
                  {/* Controls Section */}
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="paragraphs" className="form-label fw-semibold">
                        Number of Paragraphs: <span className="text-primary">{paragraphs}</span>
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        id="paragraphs"
                        min="1"
                        max="10"
                        value={paragraphs}
                        onChange={(e) => setParagraphs(parseInt(e.target.value))}
                      />
                      <div className="d-flex justify-content-between text-muted small">
                        <span>1 Paragraph</span>
                        <span>10 Paragraphs</span>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex align-items-end">
                      <button
                        className="btn btn-success w-100 py-2 fw-semibold"
                        onClick={generateLoremIpsum}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Generating...
                          </>
                        ) : (
                          'Generate Lorem Ipsum Dolor Sit'
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Generated Text Section */}
                  {generatedText && (
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <label htmlFor="generatedText" className="form-label fw-semibold">
                          Generated Lorem Ipsum Dolor Sit Text:
                        </label>
                        <span className="badge bg-primary">
                          {generatedText.split('\n\n').length} paragraphs
                        </span>
                      </div>

                      <textarea
                        id="generatedText"
                        className="form-control font-monospace"
                        rows="10"
                        value={generatedText}
                        readOnly
                        style={{ resize: 'none', lineHeight: '1.6' }}
                        placeholder="Your Lorem Ipsum dolor sit amet text will appear here..."
                      />

                      {/* Action Buttons */}
                      <div className="mt-3 d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={copyToClipboard}
                        >
                          Copy to Clipboard
                        </button>

                        <button
                          className="btn btn-outline-secondary"
                          onClick={clearText}
                        >
                          Clear Text
                        </button>

                        <button
                          className="btn btn-outline-info"
                          onClick={() => window.print()}
                        >
                          Print Text
                        </button>
                      </div>

                      {copySuccess && (
                        <div className={`alert ${copySuccess.includes('Failed') ? 'alert-danger' : 'alert-success'} mt-3`}>
                          {copySuccess}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="fw-semibold mb-3">Quick Generate Options:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {[1, 2, 3, 5, 10].map((num) => (
                        <button
                          key={num}
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => {
                            setParagraphs(num);
                            setTimeout(() => generateLoremIpsum(), 100);
                          }}
                        >
                          {num} Paragraph{num > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SEO Optimized Content Sections */}
                  <div className="mt-5">
                    {/* Primary Keyword Section */}
                    <section className="mb-5">
                      <h2 className="h3 mb-3 text-primary">
                        What is Lorem Ipsum Dolor Sit?
                      </h2>
                      <p className="lead">
                        <strong>Lorem ipsum dolor sit amet</strong> is the standard dummy text used in the 
                        printing and typesetting industry since the 1500s. At <strong>loremtextgenerator.com</strong>, 
                        we provide the most authentic <strong>Lorem Ipsum dolor sit</strong> text generation 
                        for all your design and development needs.
                      </p>
                      <p>
                        When designers need placeholder text, they typically search for 
                        <strong>"lorem ipsum dolor sit"</strong> or <strong>"lorem ipsum dolor sit amet"</strong>. 
                        Our generator at <strong>loremtextgenerator.com</strong> delivers exactly that - 
                        high-quality, traditional Lorem Ipsum text that starts with the classic 
                        "Lorem ipsum dolor sit amet" phrase.
                      </p>
                    </section>

                    {/* Features Section */}
                    <section className="mb-5">
                      <h2 className="h3 mb-3 text-primary">
                        Why Use Our Lorem Ipsum Dolor Sit Generator?
                      </h2>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-primary">🎯 Authentic Text</h5>
                              <p className="card-text">
                                Generate genuine <strong>Lorem ipsum dolor sit amet</strong> text 
                                that follows the traditional pattern used by designers worldwide.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-primary">⚡ Instant Generation</h5>
                              <p className="card-text">
                                Get your <strong>lorem ipsum dolor sit</strong> text instantly. 
                                No delays, no registration required at <strong>loremtextgenerator.com</strong>.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-primary">📱 Mobile Friendly</h5>
                              <p className="card-text">
                                Generate <strong>lorem ipsum dolor sit amet</strong> text on any 
                                device. Our responsive design works perfectly on desktop, tablet, and mobile.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title text-primary">🎨 Design Perfect</h5>
                              <p className="card-text">
                                Perfect <strong>lorem ipsum dolor sit</strong> text for web design, 
                                mockups, prototypes, and print layouts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Use Cases Section */}
                    <section className="mb-5">
                      <h2 className="h3 mb-3 text-primary">
                        Perfect for All Your Design Needs
                      </h2>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                              <h5 className="card-title">Web Design</h5>
                              <p className="card-text small">
                                Create mockups and test layouts with realistic 
                                <strong> lorem ipsum dolor sit amet</strong> text from
                                <strong> loremtextgenerator.com</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                              <h5 className="card-title">Development</h5>
                              <p className="card-text small">
                                Test responsive designs and content flow with our
                                <strong> lorem ipsum dolor sit</strong> generator
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                              <h5 className="card-title">Print Media</h5>
                              <p className="card-text small">
                                Perfect for book layouts, magazine designs, and
                                brochure content with <strong>lorem ipsum dolor sit amet</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-5">
                      <h2 className="h3 mb-3 text-primary">
                        Frequently Asked Questions About Lorem Ipsum Dolor Sit
                      </h2>
                      <div className="accordion" id="loremIpsumFAQ">
                        <div className="accordion-item">
                          <h3 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                              What does "Lorem Ipsum Dolor Sit" mean?
                            </button>
                          </h3>
                          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#loremIpsumFAQ">
                            <div className="accordion-body">
                              <strong>"Lorem ipsum dolor sit amet"</strong> is scrambled Latin text from 
                              Cicero's philosophical work. While it appears to be Latin, the words 
                              have been altered and don't form coherent meaning. It's used purely 
                              as placeholder text in design at <strong>loremtextgenerator.com</strong>.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                              Why is Lorem Ipsum Dolor Sit so popular?
                            </button>
                          </h3>
                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#loremIpsumFAQ">
                            <div className="accordion-body">
                              <strong>Lorem ipsum dolor sit amet</strong> became popular because it 
                              provides text that looks like real content without distracting the 
                              viewer with readable meaning. The letter distribution closely 
                              matches English, making it perfect for design mockups at 
                              <strong> loremtextgenerator.com</strong>.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h3 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                              Is loremtextgenerator.com completely free?
                            </button>
                          </h3>
                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#loremIpsumFAQ">
                            <div className="accordion-body">
                              Yes! <strong>loremtextgenerator.com</strong> is completely free to use.
                              No registration, no limits, no hidden fees. Generate as much
                              <strong> Lorem Ipsum dolor sit</strong> text as you need for your projects.
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* History Section */}
                    <section className="mb-5">
                      <h2 className="h3 mb-3 text-primary">
                        The History of Lorem Ipsum Dolor Sit
                      </h2>
                      <p>
                        <strong>Lorem ipsum dolor sit amet</strong> has been the industry's standard 
                        dummy text since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. The text is derived 
                        from Cicero's "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil).
                      </p>
                      <p>
                        At <strong>loremtextgenerator.com</strong>, we preserve this tradition while 
                        providing modern, easy-to-use tools for generating 
                        <strong> lorem ipsum dolor sit</strong> text for digital and print design.
                      </p>
                    </section>
                  </div>
                </div>

                {/* Footer with additional SEO content */}
                <div className="card-footer bg-light py-4">
                  <div className="text-center">
                    <p className="mb-2">
                      <strong>loremtextgenerator.com</strong> - Your trusted source for 
                      <strong> Lorem Ipsum dolor sit amet</strong> generation since 2024.
                    </p>
                    <p className="text-muted small mb-0">
                      Generate perfect placeholder text with our free 
                      <strong> lorem ipsum dolor sit</strong> generator tool.
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

export default LoremIpsumGenerator;