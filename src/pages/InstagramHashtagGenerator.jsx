import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const InstagramHashtagGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [category, setCategory] = useState('general');

  const generateHashtags = () => {
    if (!keyword.trim()) return;

    const baseHashtags = {
      general: [
        `#${keyword.replace(/\s+/g, '')}`,
        `#${keyword.replace(/\s+/g, '')}Love`,
        `#${keyword.replace(/\s+/g, '')}Life`,
        `#${keyword.replace(/\s+/g, '')}Daily`,
        `#${keyword.replace(/\s+/g, '')}Goals`
      ],
      travel: [
        `#Travel${keyword.replace(/\s+/g, '')}`,
        `#${keyword.replace(/\s+/g, '')}Travel`,
        `#Explore${keyword.replace(/\s+/g, '')}`,
        `#Wanderlust${keyword.replace(/\s+/g, '')}`,
        `#Adventure${keyword.replace(/\s+/g, '')}`
      ],
      food: [
        `#Foodie${keyword.replace(/\s+/g, '')}`,
        `#${keyword.replace(/\s+/g, '')}Food`,
        `#Delicious${keyword.replace(/\s+/g, '')}`,
        `#Yummy${keyword.replace(/\s+/g, '')}`,
        `#FoodPorn${keyword.replace(/\s+/g, '')}`
      ],
      fashion: [
        `#Fashion${keyword.replace(/\s+/g, '')}`,
        `#${keyword.replace(/\s+/g, '')}Style`,
        `#OOTD${keyword.replace(/\s+/g, '')}`,
        `#Style${keyword.replace(/\s+/g, '')}`,
        `#FashionBlogger${keyword.replace(/\s+/g, '')}`
      ]
    };

    const generated = baseHashtags[category] || baseHashtags.general;
    setHashtags(generated);
  };

  const copyToClipboard = () => {
    const text = hashtags.join(' ');
    navigator.clipboard.writeText(text);
    alert('Hashtags copied to clipboard!');
  };

  return (
    <>
      <Helmet>
        <title>Instagram Hashtag Generator - Boost Reach & Get Trending Hashtags</title>
        <meta
          name="description"
          content="Generate powerful Instagram hashtags instantly. Boost your reach, increase followers, and get trending hashtag ideas for reels, posts, selfies, travel, fashion, fitness, and more."
        />
        <meta
          name="keywords"
          content="instagram hashtag generator, insta hashtags, best instagram hashtags, reel hashtags, viral hashtags, hasthag generator tool"
        />
      </Helmet>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h2 className="text-center mb-0">Instagram Hashtag Generator</h2>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="keyword" className="form-label">
                    Enter your keyword or phrase:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g., summer, photography, fitness"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Select category:
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="fashion">Fashion</option>
                  </select>
                </div>

                <button
                  className="btn btn-primary w-100 mb-4"
                  onClick={generateHashtags}
                  disabled={!keyword.trim()}
                >
                  Generate Hashtags
                </button>

                {hashtags.length > 0 && (
                  <div className="hashtags-section">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Generated Hashtags:</h5>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={copyToClipboard}
                      >
                        Copy All
                      </button>
                    </div>
                    <div className="hashtags-container">
                      {hashtags.map((hashtag, index) => (
                        <span key={index} className="badge bg-light text-dark me-2 mb-2 p-2">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
          SEO CONTENT SECTION
      ============================ */}
      <div className="mt-5">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">

            <h2 className="h4 fw-bold text-primary mb-3">
              Instagram Hashtag Generator
            </h2>

            <p className="text-muted">
              Increase your Instagram reach and engagement with our free Instagram Hashtag
              Generator. Instantly create trending and niche-specific hashtags for reels,
              posts, selfies, travel photos, and more. Perfect for influencers, creators,
              and businesses looking to grow naturally.
            </p>

            <hr />

            <h3 className="h5 fw-semibold text-secondary mt-4 mb-2">
              Why Use an Instagram Hashtag Generator?
            </h3>
            <ul className="list-unstyled ms-3">
              <li className="mb-2">• Boost reach and improve post visibility</li>
              <li className="mb-2">• Get trending hashtags tailored to your content</li>
              <li className="mb-2">• Save time from manual hashtag research</li>
              <li className="mb-2">• Increase chances of going viral on reels</li>
              <li className="mb-2">• Attract more followers organically</li>
            </ul>

            <h3 className="h5 fw-semibold text-secondary mt-4 mb-2">
              Tips for Choosing the Best Instagram Hashtags
            </h3>
            <ul className="list-unstyled ms-3">
              <li className="mb-2">• Mix popular and niche-specific hashtags</li>
              <li className="mb-2">• Avoid banned or overused hashtags</li>
              <li className="mb-2">• Use 10–20 well-chosen hashtags, not all 30</li>
              <li className="mb-2">• Keep hashtags relevant to your content</li>
              <li className="mb-2">• Update your hashtag sets regularly</li>
            </ul>

            <h3 className="h5 fw-semibold text-secondary mt-4 mb-2">
              Popular Instagram Hashtag Categories
            </h3>
            <ul className="list-unstyled ms-3">
              <li className="mb-2">• Travel Hashtags</li>
              <li className="mb-2">• Fashion & Outfit Hashtags</li>
              <li className="mb-2">• Fitness & Gym Hashtags</li>
              <li className="mb-2">• Food & Cooking Hashtags</li>
              <li className="mb-2">• Selfie & Lifestyle Hashtags</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramHashtagGenerator;