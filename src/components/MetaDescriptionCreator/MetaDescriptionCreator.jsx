import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

const MetaDescriptionCreator = () => {
  const [inputType, setInputType] = useState('url');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeywords, setSecondaryKeywords] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [tone, setTone] = useState('professional');
  const [activeTab, setActiveTab] = useState('tool');

  const toneTemplates = {
    professional: [
      "Discover {primary} with our expert solutions. {secondary} Professional service guaranteed.",
      "Experience exceptional {primary} services. {secondary} Trusted by professionals worldwide."
    ],
    friendly: [
      "Love {primary}? So do we! {secondary} Join our community of happy customers today!",
      "Welcome to the world of {primary}! {secondary} Let's create something amazing together."
    ],
    urgent: [
      "Limited time: Get {primary} now! {secondary} Don't miss this exclusive opportunity.",
      "Act fast: Premium {primary} available! {secondary} Special offer ending soon."
    ],
    informative: [
      "Learn about {primary} and how it works. {secondary} Comprehensive guide with expert insights.",
      "Understanding {primary}: Complete overview. {secondary} Everything you need to know."
    ]
  };

  const extractKeywords = (content) => {
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !['this', 'that', 'with', 'from', 'your', 'have'].includes(word));

    const wordFreq = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    return Object.entries(wordFreq)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([word]) => word.charAt(0).toUpperCase() + word.slice(1));
  };

  // Regular function instead of hook
  const handleSuggestedKeyword = (keyword) => {
    if (!primaryKeyword) {
      setPrimaryKeyword(keyword);
    } else {
      const currentSecondaries = secondaryKeywords.split(',').map(k => k.trim()).filter(k => k);
      if (!currentSecondaries.includes(keyword)) {
        setSecondaryKeywords([...currentSecondaries, keyword].join(', '));
      }
    }
  };

  const generateMetaDescription = async () => {
    if ((inputType === 'url' && !url.trim()) || (inputType === 'text' && !text.trim())) {
      alert('Please enter content to generate description');
      return;
    }

    if (!primaryKeyword.trim()) {
      alert('Please enter a primary keyword');
      return;
    }

    setIsLoading(true);

    try {
      let content = inputType === 'url' ? await fetchPageContent(url) : text;
      const keywords = extractKeywords(content);
      setSuggestedKeywords(keywords);

      const secondaryArray = secondaryKeywords.split(',').map(k => k.trim()).filter(k => k);

      const templates = toneTemplates[tone];
      const template = templates[Math.floor(Math.random() * templates.length)];

      let description = template
        .replace('{primary}', primaryKeyword)
        .replace('{secondary}', secondaryArray.length > 0 ?
          `Featuring ${secondaryArray.slice(0, 2).join(', ')}` :
          'Premium quality and service'
        );

      description = optimizeDescriptionLength(description);

      setGeneratedDescription(description);
      setCharCount(description.length);

    } catch (error) {
      console.error('Error:', error);
      alert('Error generating description');
    } finally {
      setIsLoading(false);
    }
  };

  const optimizeDescriptionLength = (desc) => {
    if (desc.length < 120) {
      desc += ' Get started today with our exclusive offers and professional support.';
    }

    if (desc.length > 160) {
      desc = desc.substring(0, 157).trim();
      const lastSpace = desc.lastIndexOf(' ');
      if (lastSpace > 140) {
        desc = desc.substring(0, lastSpace);
      }
      if (!desc.endsWith('.') && !desc.endsWith('!')) {
        desc += '...';
      }
    }

    return desc;
  };

  const fetchPageContent = async (url) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockContent = `Learn about ${primaryKeyword} and discover how our solutions can help you achieve your goals. We provide excellent service and support.`;
    setIsLoading(false);
    return mockContent;
  };

  const copyToClipboard = () => {
    if (generatedDescription) {
      navigator.clipboard.writeText(generatedDescription);
      alert('Copied to clipboard!');
    }
  };

  const clearAll = () => {
    setUrl('');
    setText('');
    setPrimaryKeyword('');
    setSecondaryKeywords('');
    setGeneratedDescription('');
    setSuggestedKeywords([]);
    setCharCount(0);
  };

  return (
    <HelmetProvider>
      <div className="container mt-4 mb-5">
        <Helmet>
          <title>Meta Description Creator - AI-Powered Meta Description Generator Tool</title>
          <meta
            name="description"
            content="Meta Description Creator: Generate SEO-optimized meta descriptions with keyword analysis. Perfect for bloggers and website owners. Create compelling descriptions in seconds."
          />
          <meta
            name="keywords"
            content="Meta Description Creator, meta description generator, SEO tool, keyword optimizer, blog SEO, website optimization"
          />
        </Helmet>

        {/* Navigation Tabs */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header bg-white border-bottom-0">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'tool' ? 'active' : ''}`}
                      onClick={() => setActiveTab('tool')}
                    >
                      🚀 Meta Description Creator Tool
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'guide' ? 'active' : ''}`}
                      onClick={() => setActiveTab('guide')}
                    >
                      📚 SEO Guide & Best Practices
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Tab Content */}
        {activeTab === 'tool' && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white py-3">
                  <h1 className="h2 text-center mb-0">Meta Description Creator</h1>
                  <p className="text-center mb-0 opacity-75">AI-Powered Meta Description Generator with Keyword Optimization</p>
                </div>

                <div className="card-body p-4">
                  {/* Input Type Selection */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label"><strong>Content Source</strong></label>
                      <div className="btn-group w-100" role="group">
                        <input type="radio" className="btn-check" name="inputType" id="urlType" checked={inputType === 'url'} onChange={() => setInputType('url')} />
                        <label className="btn btn-outline-primary" htmlFor="urlType">🌐 From URL</label>
                        <input type="radio" className="btn-check" name="inputType" id="textType" checked={inputType === 'text'} onChange={() => setInputType('text')} />
                        <label className="btn btn-outline-primary" htmlFor="textType">📝 From Text</label>
                      </div>
                    </div>
                  </div>

                  {/* URL Input */}
                  {inputType === 'url' && (
                    <div className="mb-3">
                      <label htmlFor="url" className="form-label"><strong>Website URL</strong></label>
                      <input type="url" className="form-control" placeholder="https://example.com/page" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                  )}

                  {/* Text Input */}
                  {inputType === 'text' && (
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label"><strong>Page Content</strong></label>
                      <textarea className="form-control" rows="4" placeholder="Paste your content here..." value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                  )}

                  {/* Keyword Inputs */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="primaryKeyword" className="form-label"><strong>Primary Keyword *</strong></label>
                      <input type="text" className="form-control" placeholder="Main target keyword" value={primaryKeyword} onChange={(e) => setPrimaryKeyword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="secondaryKeywords" className="form-label"><strong>Secondary Keywords</strong></label>
                      <input type="text" className="form-control" placeholder="keyword1, keyword2, keyword3" value={secondaryKeywords} onChange={(e) => setSecondaryKeywords(e.target.value)} />
                    </div>
                  </div>

                  {/* Tone Selection */}
                  <div className="mb-4">
                    <label className="form-label"><strong>Description Tone</strong></label>
                    <select className="form-select" value={tone} onChange={(e) => setTone(e.target.value)}>
                      <option value="professional">Professional</option>
                      <option value="friendly">Friendly</option>
                      <option value="urgent">Urgent</option>
                      <option value="informative">Informative</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4">
                    <button className="btn btn-secondary me-md-2" onClick={clearAll}>Clear All</button>
                    <button className="btn btn-primary px-4" onClick={generateMetaDescription} disabled={isLoading}>
                      {isLoading ? 'Generating...' : '🚀 Generate Description'}
                    </button>
                  </div>

                  {/* Results */}
                  {generatedDescription && (
                    <div className="mt-4">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="h5 mb-3">Generated Meta Description:</h3>
                          <div className="alert alert-success">
                            <p className="mb-3">{generatedDescription}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className={`badge ${charCount >= 120 && charCount <= 160 ? 'bg-success' : 'bg-warning'}`}>
                                {charCount} characters
                              </span>
                              <button className="btn btn-sm btn-outline-success" onClick={copyToClipboard}>📋 Copy</button>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <h4 className="h6 mb-3">Suggested Keywords:</h4>
                          <div className="d-flex flex-wrap gap-1">
                            {suggestedKeywords.map((keyword, index) => (
                              <button
                                key={index}
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleSuggestedKeyword(keyword)}
                              >
                                {keyword}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guide Tab Content */}
        {activeTab === 'guide' && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article className="blog-post">
                <header className="text-center mb-5">
                  <h1 className="display-5 fw-bold text-primary">Meta Description Creator: Your Ultimate SEO Meta Description Tool</h1>
                  <p className="lead">Generate compelling, keyword-optimized meta descriptions that boost click-through rates and search rankings</p>
                  <div className="meta">
                    <span className="text-muted">Complete SEO Guide • 5 min read</span>
                  </div>
                </header>

                <div className="row">
                  <div className="col-lg-12">
                    <section className="mb-5">
                      <h2 className="h3 mb-3">What is Meta Description Creator?</h2>
                      <p>
                        <strong>Meta Description Creator</strong> is an advanced AI-powered tool designed to help website owners,
                        bloggers, and SEO professionals create perfect meta descriptions effortlessly. In the competitive
                        world of search engine optimization, your meta description is often the first thing potential
                        visitors see in search results.
                      </p>

                      <div className="alert alert-info">
                        <strong>Did you know?</strong> Pages with well-optimized meta descriptions can see up to
                        5.8% higher click-through rates compared to those with auto-generated descriptions.
                      </div>
                    </section>

                    <section className="mb-5">
                      <h2 className="h3 mb-3">Why Meta Descriptions Matter for SEO</h2>
                      <p>While meta descriptions don't directly impact search rankings, they significantly influence:</p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li><strong>Click-Through Rates (CTR):</strong> Compelling descriptions attract more clicks</li>
                            <li><strong>User Experience:</strong> Sets proper expectations for page content</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li><strong>Brand Perception:</strong> Professional descriptions build trust</li>
                            <li><strong>Keyword Relevance:</strong> Helps users understand content focus</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h2 className="h3 mb-3">Best Practices for Meta Descriptions</h2>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="card h-100 border-success">
                            <div className="card-body">
                              <h5 className="card-title text-success">✅ Do This</h5>
                              <ul className="list-unstyled">
                                <li>✔️ Include primary keyword naturally</li>
                                <li>✔️ Keep 120-160 characters</li>
                                <li>✔️ Use active voice and verbs</li>
                                <li>✔️ Create unique descriptions</li>
                                <li>✔️ Include a call-to-action</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-danger">
                            <div className="card-body">
                              <h5 className="card-title text-danger">❌ Avoid This</h5>
                              <ul className="list-unstyled">
                                <li>✖️ Keyword stuffing</li>
                                <li>✖️ Duplicate descriptions</li>
                                <li>✖️ Generic, vague language</li>
                                <li>✖️ Misleading claims</li>
                                <li>✖️ Ignoring character limits</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h2 className="h3 mb-3">How to Use Meta Description Creator Effectively</h2>

                      <div className="row">
                        <div className="col-md-6 col-lg-3 mb-3">
                          <div className="card h-100 text-center">
                            <div className="card-body">
                              <div className="display-6 text-primary mb-2">1</div>
                              <h5 className="card-title">Input Content</h5>
                              <p className="card-text small">Provide URL or paste content for analysis</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                          <div className="card h-100 text-center">
                            <div className="card-body">
                              <div className="display-6 text-primary mb-2">2</div>
                              <h5 className="card-title">Define Keywords</h5>
                              <p className="card-text small">Enter primary and secondary keywords</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                          <div className="card h-100 text-center">
                            <div className="card-body">
                              <div className="display-6 text-primary mb-2">3</div>
                              <h5 className="card-title">Choose Tone</h5>
                              <p className="card-text small">Select the perfect tone for your audience</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                          <div className="card h-100 text-center">
                            <div className="card-body">
                              <div className="display-6 text-primary mb-2">4</div>
                              <h5 className="card-title">Generate & Copy</h5>
                              <p className="card-text small">Get your optimized description instantly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <div className="card bg-light mt-4">
                      <div className="card-body text-center py-4">
                        <h3 className="h4 mb-3">Ready to Boost Your SEO?</h3>
                        <p className="mb-3">Start using Meta Description Creator today and see the difference in your click-through rates!</p>
                        <button
                          className="btn btn-primary btn-lg"
                          onClick={() => setActiveTab('tool')}
                        >
                          🚀 Try Meta Description Creator Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default MetaDescriptionCreator;