import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const WeddingHashtagGenerator = () => {
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const generateHashtags = () => {
    if ((!brideName.trim() && !groomName.trim()) || !lastName.trim()) return;

    const brideFirst = brideName.split(' ')[0] || '';
    const groomFirst = groomName.split(' ')[0] || '';
    const last = lastName.trim();

    const generatedHashtags = [];

    // Basic combinations
    if (brideFirst && groomFirst) {
      generatedHashtags.push(`#${brideFirst}And${groomFirst}`);
      generatedHashtags.push(`#${brideFirst}Meets${groomFirst}`);
      generatedHashtags.push(`#${groomFirst}And${brideFirst}`);
    }

    // Last name combinations
    generatedHashtags.push(`#The${last}s`);
    generatedHashtags.push(`#${last}Wedding`);
    generatedHashtags.push(`#${last}Nuptials`);
    generatedHashtags.push(`#${last}Union`);

    // With "Forever"
    generatedHashtags.push(`#${last}Forever`);
    if (brideFirst && groomFirst) {
      generatedHashtags.push(`#${brideFirst}And${groomFirst}Forever`);
    }

    // With celebration words
    generatedHashtags.push(`#CelebratingThe${last}s`);
    generatedHashtags.push(`#${last}Celebration`);

    // With love themes
    generatedHashtags.push(`#${last}Love`);
    generatedHashtags.push(`#${last}LoveStory`);
    if (brideFirst && groomFirst) {
      generatedHashtags.push(`#${brideFirst}Loves${groomFirst}`);
    }

    // With date reference (generic)
    generatedHashtags.push(`#HappilyEver${last}`);
    generatedHashtags.push(`#BeginningOfThe${last}s`);

    setHashtags(generatedHashtags);
  };

  const copyToClipboard = () => {
    const text = hashtags.join(' ');
    navigator.clipboard.writeText(text);
    alert('Wedding hashtags copied to clipboard!');
  };

  const isFormValid = () => {
    return (
      (brideName.trim() || groomName.trim()) &&
      lastName.trim()
    );
  };

  return (
    <>
      <Helmet>
        <title>Wedding Hashtag Generator | Create Perfect Wedding Hashtags</title>
        <meta
          name="description"
          content="Generate unique and creative wedding hashtags for your special day. Free wedding hashtag generator tool for couples planning their wedding."
        />
        <meta
          name="keywords"
          content="wedding hashtag generator, wedding hashtags, wedding planning, bride, groom, wedding ideas, social media hashtags"
        />
        <meta property="og:title" content="Wedding Hashtag Generator | Create Perfect Wedding Hashtags" />
        <meta
          property="og:description"
          content="Generate unique and creative wedding hashtags for your special day. Free tool for couples planning their wedding."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/wedding-hashtag-generator" />
      </Helmet>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-success text-white">
                <h1 className="text-center mb-0 h2">Wedding Hashtag Generator</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="brideName" className="form-label">
                      Bride's First Name (optional):
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="brideName"
                      value={brideName}
                      onChange={(e) => setBrideName(e.target.value)}
                      placeholder="e.g., Sarah"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="groomName" className="form-label">
                      Groom's First Name (optional):
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="groomName"
                      value={groomName}
                      onChange={(e) => setGroomName(e.target.value)}
                      placeholder="e.g., Michael"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="form-label">
                    Last Name (required):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g., Johnson"
                    required
                  />
                  <div className="form-text">
                    * Enter at least one first name and the last name
                  </div>
                </div>

                <button
                  className="btn btn-success w-100 mb-4"
                  onClick={generateHashtags}
                  disabled={!isFormValid()}
                >
                  Generate Wedding Hashtags
                </button>

                {hashtags.length > 0 && (
                  <div className="hashtags-section">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h2 className="h5">Generated Wedding Hashtags:</h2>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={copyToClipboard}
                      >
                        Copy All
                      </button>
                    </div>
                    <div className="hashtags-container">
                      {hashtags.map((hashtag, index) => (
                        <span key={index} className="badge bg-light text-dark me-2 mb-2 p-2 fs-6">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 p-3 bg-light rounded">
                      <small className="text-muted">
                        💡 <strong>Tip:</strong> Choose 2-3 hashtags that are easy to remember and spell.
                        Share them with your guests so everyone uses the same hashtags!
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SEO Content Section */}
            <div className="mt-5">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">

                  <h2 className="h4 fw-bold mb-3 text-primary">
                    Create the Perfect Wedding Hashtag
                  </h2>

                  <p className="text-muted">
                    A great wedding hashtag helps collect all your wedding photos and memories in one
                    place on social media. Our wedding hashtag generator creates unique, personalized
                    hashtags based on your names—perfect for guests to use when sharing moments from
                    your special day.
                  </p>

                  <hr />

                  <h3 className="h5 fw-semibold mt-4 mb-2 text-secondary">
                    Why Use a Wedding Hashtag?
                  </h3>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-2">• Collect all wedding photos from guests in one place</li>
                    <li className="mb-2">• Easily relive and revisit your wedding memories</li>
                    <li className="mb-2">• Create a unique identity for your wedding celebration</li>
                    <li className="mb-2">• Encourage guest engagement and sharing</li>
                  </ul>

                  <h3 className="h5 fw-semibold mt-4 mb-2 text-secondary">
                    Tips for Choosing the Best Wedding Hashtag
                  </h3>
                  <ul className="list-unstyled ms-3">
                    <li className="mb-2">• Keep it short and easy to remember</li>
                    <li className="mb-2">• Make sure it’s simple to spell</li>
                    <li className="mb-2">• Check if it’s already used on Instagram or TikTok</li>
                    <li className="mb-2">• Avoid special characters and numbers</li>
                    <li className="mb-2">• Share it with guests before the wedding day</li>
                  </ul>

                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingHashtagGenerator;