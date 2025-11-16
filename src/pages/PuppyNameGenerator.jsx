import React, { useState, useEffect } from 'react';
import { petNames } from './petNamesData';
import './PuppyNameGenerator.css';
import { Helmet } from 'react-helmet-async';

const PuppyNameGenerator = () => {
  const [selectedPet, setSelectedPet] = useState('dog');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [nameCount, setNameCount] = useState(10);
  const [generatedNames, setGeneratedNames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [copiedName, setCopiedName] = useState('');

  // Available letters for filtering
  const letters = ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Generate names based on filters
  const generateNames = () => {
    let availableNames = [];

    if (selectedGender === 'all') {
      // Combine all genders
      const maleNames = petNames[selectedPet]?.male || [];
      const femaleNames = petNames[selectedPet]?.female || [];
      const unisexNames = petNames[selectedPet]?.unisex || [];
      availableNames = [...maleNames, ...femaleNames, ...unisexNames];
    } else {
      availableNames = petNames[selectedPet]?.[selectedGender] || [];
    }

    // Filter by first letter if specified
    if (selectedLetter !== 'all') {
      availableNames = availableNames.filter(name =>
        name.toLowerCase().startsWith(selectedLetter.toLowerCase())
      );
    }

    // Shuffle and select required number of names
    const shuffled = [...availableNames].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(nameCount, shuffled.length));

    setGeneratedNames(selected);
  };

  // Add/remove from favorites
  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  // Copy name to clipboard
  const copyToClipboard = async (name) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedName(name);
      setTimeout(() => setCopiedName(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('petNameFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('petNameFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Generate names when component mounts or filters change
  useEffect(() => {
    generateNames();
  }, [selectedPet, selectedGender, selectedLetter, nameCount]);

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Puppy Name Generator – Cute, Unique & Popular Puppy Names</title>
        <meta
          name="description"
          content={`Generate the best puppy names! Explore cute, unique, male, female & unisex puppy name ideas. Filter by gender, first letter, name style, and save your favorites.`}
        />
        <meta
          name="keywords"
          content="puppy name generator, puppy names, cute puppy names, male puppy names, female puppy names, unique puppy names, dog name generator, pet name ideas"
        />
        <link
          rel="canonical"
          href="https://loremtextgenerator.com/puppy-name-generator"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Puppy Name Generator – Find Cute & Unique Puppy Names"
        />
        <meta
          property="og:description"
          content="Discover thousands of cute and unique puppy names. Filter by male, female, unisex, first letter, and more. Save and copy names instantly!"
        />
        <meta
          property="og:url"
          content="https://loremtextgenerator.com/puppy-name-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://loremtextgenerator.com/images/puppy-name-generator-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Puppy Name Generator – Cute & Unique Puppy Names"
        />
        <meta
          name="twitter:description"
          content="Generate thousands of puppy names. Cute, unique, male, female & unisex name ideas. Free tool with filters!"
        />
        <meta
          name="twitter:image"
          content="https://loremtextgenerator.com/images/puppy-name-generator-banner.jpg"
        />

        {/* Structured Data (JSON-LD Schema) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Puppy Name Generator",
      "url": "https://loremtextgenerator.com/puppy-name-generator",
      "description": "Free Puppy Name Generator with cute, unique, male, female and unisex puppy name ideas. Filter names by style, letter and gender.",
      "publisher": {
        "@type": "Organization",
        "name": "LoremTextGenerator",
        "logo": "https://loremtextgenerator.com/images/logo.png"
      },
      "image": "https://loremtextgenerator.com/images/puppy-name-generator-banner.jpg"
    }
    `}
        </script>

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="author" content="LoremTextGenerator Team" />
      </Helmet>

      <div className="container mt-4">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary fw-bold">🐕 Puppy Name Generator</h1>
          <p className="lead text-muted">
            Find the perfect name for your new furry friend! Browse through thousands of
            <strong> dog name ideas</strong> and generate unique names with our
            <strong> dog name generator</strong>.
          </p>
        </div>

        {/* Filters Section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Find Your Perfect Pet Name</h5>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Pet Type</label>
                <select
                  className="form-select"
                  value={selectedPet}
                  onChange={(e) => setSelectedPet(e.target.value)}
                >
                  <option value="dog">🐕 Dog</option>
                  <option value="cat">🐱 Cat</option>
                  <option value="bird">🐦 Bird</option>
                  <option value="rabbit">🐰 Rabbit</option>
                  <option value="hamster">🐹 Hamster</option>
                  <option value="fish">🐠 Fish</option>
                  <option value="reptile">🦎 Reptile</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                >
                  <option value="all">All Genders</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Starts With</label>
                <select
                  className="form-select"
                  value={selectedLetter}
                  onChange={(e) => setSelectedLetter(e.target.value)}
                >
                  {letters.map(letter => (
                    <option key={letter} value={letter}>
                      {letter === 'all' ? 'Any Letter' : letter.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Number of Names</label>
                <select
                  className="form-select"
                  value={nameCount}
                  onChange={(e) => setNameCount(parseInt(e.target.value))}
                >
                  <option value={5}>5 Names</option>
                  <option value={10}>10 Names</option>
                  <option value={15}>15 Names</option>
                  <option value={20}>20 Names</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={generateNames}
              >
                🔄 Generate New Names
              </button>
            </div>
          </div>
        </div>

        {/* Generated Names Section */}
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  🎯 Generated Names
                  <span className="badge bg-light text-primary ms-2">
                    {generatedNames.length} names
                  </span>
                </h5>
              </div>
              <div className="card-body">
                {generatedNames.length > 0 ? (
                  <div className="row">
                    {generatedNames.map((name, index) => (
                      <div key={index} className="col-md-4 col-sm-6 mb-3">
                        <div className="name-card card h-100">
                          <div className="card-body text-center">
                            <h5 className="card-title">{name}</h5>
                            <div className="btn-group btn-group-sm">
                              <button
                                className={`btn ${favorites.includes(name) ? 'btn-warning' : 'btn-outline-warning'}`}
                                onClick={() => toggleFavorite(name)}
                                title={favorites.includes(name) ? 'Remove from favorites' : 'Add to favorites'}
                              >
                                {favorites.includes(name) ? '★' : '☆'}
                              </button>
                              <button
                                className="btn btn-outline-primary"
                                onClick={() => copyToClipboard(name)}
                                title="Copy to clipboard"
                              >
                                {copiedName === name ? '✓ Copied!' : '📋 Copy'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted py-4">
                    <p>No names found with the current filters. Try different settings!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Favorites Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">⭐ Favorite Names</h5>
              </div>
              <div className="card-body">
                {favorites.length > 0 ? (
                  <div className="favorites-list">
                    {favorites.map((name, index) => (
                      <div key={index} className="favorite-item d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                        <span className="fw-bold">{name}</span>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-danger me-1"
                            onClick={() => copyToClipboard(name)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => toggleFavorite(name)}
                            title="Remove from favorites"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="mt-3">
                      <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => setFavorites([])}
                      >
                        Clear All Favorites
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted py-3">
                    <p>No favorites yet. Click the star icon to add names to your favorites!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tips Section */}
            <div className="card shadow-sm mt-4">
              <div className="card-header bg-info text-white">
                <h6 className="mb-0">💡 Naming Tips</h6>
              </div>
              <div className="card-body">
                <ul className="list-unstyled small">
                  <li className="mb-2">✅ Choose short, easy-to-pronounce names</li>
                  <li className="mb-2">✅ Avoid names that sound like commands</li>
                  <li className="mb-2">✅ Consider your pet's personality</li>
                  <li className="mb-2">✅ Test the name for a few days</li>
                  <li>✅ Make sure all family members like the name</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h4 mb-3">Find the Perfect Dog Name</h3>
                <p>
                  Our <strong>Puppy Name Generator</strong> is the ultimate tool for finding
                  the perfect name for your new furry family member. Whether you're looking for
                  traditional, unique, or trendy <strong>dog name ideas</strong>, our comprehensive
                  database has you covered.
                </p>

                <h4 className="h5 mt-4">Why Use Our Dog Name Generator?</h4>
                <ul>
                  <li><strong>Extensive Database:</strong> Thousands of carefully curated names for all pet types</li>
                  <li><strong>Smart Filtering:</strong> Filter by gender, starting letter, and pet type</li>
                  <li><strong>Save Your Favorites:</strong> Keep track of names you love</li>
                  <li><strong>Completely Free:</strong> No registration required</li>
                </ul>

                <h4 className="h5 mt-4">Popular Dog Name Categories</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Classic Dog Names</li>
                      <li>Unique Dog Names</li>
                      <li>Food-Inspired Names</li>
                      <li>Nature-Themed Names</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Movie & TV Character Names</li>
                      <li>Historical Names</li>
                      <li>Mythological Names</li>
                      <li>International Names</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuppyNameGenerator;