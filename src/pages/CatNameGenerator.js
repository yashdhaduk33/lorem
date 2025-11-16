import React, { useState, useEffect, useCallback } from 'react';
import { catNames, catNameCategories } from './petNamesData';
import './CatNameGenerator.css';
import { Helmet } from 'react-helmet-async';

const CatNameGenerator = () => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [nameCount, setNameCount] = useState(12);
  const [generatedNames, setGeneratedNames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [copiedName, setCopiedName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const letters = ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'elegant', label: '👑 Elegant' },
    { value: 'mystical', label: '🔮 Mystical' },
    { value: 'food', label: '🍰 Food Inspired' },
    { value: 'nature', label: '🌿 Nature' },
    { value: 'literary', label: '📚 Literary' }
  ];

  // Get all cat names
  const getAllCatNames = useCallback(() => {
    const maleNames = catNames.cat.male || [];
    const femaleNames = catNames.cat.female || [];
    const unisexNames = catNames.cat.unisex || [];
    return [...new Set([...maleNames, ...femaleNames, ...unisexNames])];
  }, []);

  // Generate names based on filters
  const generateNames = useCallback(async () => {
    setLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 300));

    let availableNames = [];

    // Filter by gender
    if (selectedGender === 'all') {
      availableNames = getAllCatNames();
    } else {
      availableNames = catNames.cat[selectedGender] || [];
    }

    // Filter by category
    if (selectedCategory !== 'all' && catNameCategories[selectedCategory]) {
      availableNames = [...availableNames, ...catNameCategories[selectedCategory]];
    }

    // Filter by first letter
    if (selectedLetter !== 'all') {
      availableNames = availableNames.filter(name =>
        name.toLowerCase().startsWith(selectedLetter.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      availableNames = availableNames.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }

    // Remove duplicates and shuffle
    const uniqueNames = [...new Set(availableNames)];
    const shuffled = [...uniqueNames].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(nameCount, shuffled.length));

    setGeneratedNames(selected);
    setLoading(false);
  }, [selectedGender, selectedLetter, selectedCategory, nameCount, searchTerm, getAllCatNames]);

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

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('catNameFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('catNameFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Generate names when filters change
  useEffect(() => {
    const timer = setTimeout(() => {
      generateNames();
    }, 300);

    return () => clearTimeout(timer);
  }, [generateNames]);

  const popularCatNames = ['Luna', 'Bella', 'Oliver', 'Leo', 'Milo', 'Chloe', 'Lucy', 'Simba', 'Loki', 'Nala'];
  const totalNames = getAllCatNames().length;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Cat Name Generator – Cute, Unique & Mystic Kitten Names</title>
        <meta
          name="description"
          content={`Discover ${totalNames}+ unique cat names with our free generator. Filter by gender, starting letter, and name style. Find elegant, mystical, cute, funny, male, female & unisex kitten names!`}
        />
        <meta
          name="keywords"
          content="cat name generator, kitten name ideas, male cat names, female cat names, cute cat names, unique cat names, mystical cat names, pet name generator"
        />
        <link
          rel="canonical"
          href="https://loremtextgenerator.com/cat-name-generator"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Cat Name Generator – Find the Perfect Kitten Name"
        />
        <meta
          property="og:description"
          content="Generate thousands of cat names instantly! Cute, elegant, mystical, male, female & unisex kitten names. Filter and save your favorites!"
        />
        <meta
          property="og:url"
          content="https://loremtextgenerator.com/cat-name-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://loremtextgenerator.com/images/cat-name-generator-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cat Name Generator – Cute & Unique Cat Names"
        />
        <meta
          name="twitter:description"
          content="Explore thousands of cat names: cute, mystical, elegant, male, female & unisex. Free cat name generator tool!"
        />
        <meta
          name="twitter:image"
          content="https://loremtextgenerator.com/images/cat-name-generator-banner.jpg"
        />

        {/* Structured Data (JSON-LD Schema) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cat Name Generator",
      "url": "https://loremtextgenerator.com/cat-name-generator",
      "description": "Free Cat Name Generator with ${totalNames}+ cute, mystical, elegant, male, female and unisex cat names. Filter names and save favorites.",
      "publisher": {
        "@type": "Organization",
        "name": "LoremTextGenerator",
        "logo": "https://loremtextgenerator.com/images/logo.png"
      },
      "image": "https://loremtextgenerator.com/images/cat-name-generator-banner.jpg"
    }
    `}
        </script>

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="author" content="LoremTextGenerator Team" />
      </Helmet>


      <div className="container mt-4">
        {/* Hero Section */}
        <header className="text-center mb-5 py-5 cat-hero-gradient rounded-3 position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
            <div className="position-absolute" style={{ top: '20%', left: '10%' }}>🐱</div>
            <div className="position-absolute" style={{ top: '60%', right: '15%' }}>😺</div>
            <div className="position-absolute" style={{ bottom: '20%', left: '20%' }}>😸</div>
          </div>

          <h1 className="display-4 fw-bold text-white mb-3">
            <span className="d-block">Cat Name Generator</span>
            <small className="fs-5 fw-normal opacity-90">Find the Purr-fect Name for Your New Feline Friend</small>
          </h1>

          <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Discover <strong>{totalNames}+ carefully curated cat names</strong> for every personality and style.
            From elegant to playful names, find the ideal match for your kitten!
          </p>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="input-group input-group-lg shadow">
                <input
                  type="text"
                  className="form-control form-control-lg border-0"
                  placeholder="Search cat names (e.g., 'Luna', 'Oliver', 'Bella')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search cat names"
                />
                <button
                  className="btn btn-light border-0 px-4"
                  onClick={generateNames}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" />
                  ) : (
                    '🔍'
                  )}
                  Search
                </button>
              </div>
              <div className="mt-2 text-light small">
                Try: <strong>Luna, Oliver, Bella, Leo, Chloe</strong> or search by style
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section aria-label="Statistics" className="row text-center mb-5">
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-primary mb-2">
                  <i className="fas fa-paw fa-2x"></i>
                </div>
                <h3 className="text-primary mb-1">{totalNames}+</h3>
                <p className="text-muted mb-0">Unique Cat Names</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-success mb-2">
                  <i className="fas fa-cat fa-2x"></i>
                </div>
                <h3 className="text-success mb-1">5+</h3>
                <p className="text-muted mb-0">Name Categories</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-warning mb-2">
                  <i className="fas fa-crown fa-2x"></i>
                </div>
                <h3 className="text-warning mb-1">Free</h3>
                <p className="text-muted mb-0">Forever</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-info mb-2">
                  <i className="fas fa-magic fa-2x"></i>
                </div>
                <h3 className="text-info mb-1">Instant</h3>
                <p className="text-muted mb-0">Name Generation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section aria-label="Search Filters" className="card shadow-sm mb-5 border-0">
          <div className="card-body p-4">
            <h2 className="h4 card-title mb-4 text-dark">
              <i className="fas fa-sliders-h me-2"></i>
              Customize Your Cat Name Search
            </h2>

            <div className="row g-4">
              <div className="col-md-3">
                <label htmlFor="gender-select" className="form-label fw-semibold text-dark">
                  <i className="fas fa-venus-mars me-2"></i>
                  Gender
                </label>
                <select
                  id="gender-select"
                  className="form-select form-select-lg border-0 shadow-sm"
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  aria-label="Select cat name gender"
                >
                  <option value="all">👥 All Genders</option>
                  <option value="male">♂️ Male Cat Names</option>
                  <option value="female">♀️ Female Cat Names</option>
                  <option value="unisex">⚧ Unisex Cat Names</option>
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="letter-select" className="form-label fw-semibold text-dark">
                  <i className="fas fa-font me-2"></i>
                  Starting Letter
                </label>
                <select
                  id="letter-select"
                  className="form-select form-select-lg border-0 shadow-sm"
                  value={selectedLetter}
                  onChange={(e) => setSelectedLetter(e.target.value)}
                  aria-label="Select starting letter"
                >
                  {letters.map(letter => (
                    <option key={letter} value={letter}>
                      {letter === 'all' ? '🔤 Any Letter' : ` ${letter.toUpperCase()} - ${letter}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="category-select" className="form-label fw-semibold text-dark">
                  <i className="fas fa-tags me-2"></i>
                  Category
                </label>
                <select
                  id="category-select"
                  className="form-select form-select-lg border-0 shadow-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Select name category"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="count-select" className="form-label fw-semibold text-dark">
                  <i className="fas fa-list-ol me-2"></i>
                  Names to Show
                </label>
                <select
                  id="count-select"
                  className="form-select form-select-lg border-0 shadow-sm"
                  value={nameCount}
                  onChange={(e) => setNameCount(parseInt(e.target.value))}
                  aria-label="Select number of names to display"
                >
                  <option value={6}>6 Names</option>
                  <option value={12}>12 Names</option>
                  <option value={18}>18 Names</option>
                  <option value={24}>24 Names</option>
                  <option value={50}>50 Names</option>
                </select>
              </div>
            </div>

            <div className="mt-4 pt-3 border-top">
              <button
                className="btn btn-primary btn-lg w-100 py-3 shadow"
                onClick={generateNames}
                disabled={loading}
                aria-label="Generate new cat names"
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Generating Names...
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic me-2"></i>
                    Generate New Cat Names
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Popular Names */}
        <section aria-label="Popular Cat Names" className="card shadow-sm mb-5 border-0">
          <div className="card-body">
            <h3 className="h5 card-title text-dark mb-3">
              <i className="fas fa-fire me-2"></i>
              Most Popular Cat Names
            </h3>
            <p className="text-muted mb-3">Quick access to trending cat names worldwide</p>
            <div className="d-flex flex-wrap gap-2">
              {popularCatNames.map((name, index) => (
                <button
                  key={index}
                  className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  onClick={() => {
                    setSearchTerm(name);
                    generateNames();
                  }}
                  aria-label={`Search for ${name} cat names`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="row">
          {/* Generated Names Section */}
          <section aria-label="Generated Cat Names" className="col-lg-8 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center border-0">
                <h2 className="h5 mb-0">
                  <i className="fas fa-bullseye me-2"></i>
                  Generated Cat Names
                  <span className="badge bg-light text-primary ms-2">
                    {generatedNames.length} names
                  </span>
                </h2>
                <button
                  className="btn btn-light btn-sm"
                  onClick={generateNames}
                  disabled={loading}
                  aria-label="Refresh names"
                >
                  <i className="fas fa-sync-alt me-1"></i>
                  Refresh
                </button>
              </div>
              <div className="card-body">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Loading cat names...</span>
                    </div>
                    <p className="text-muted">Finding the perfect cat names for you...</p>
                  </div>
                ) : generatedNames.length > 0 ? (
                  <div className="row">
                    {generatedNames.map((name, index) => (
                      <div key={index} className="col-md-4 col-sm-6 mb-3">
                        <div className="cat-name-card card h-100 border-0 shadow-sm">
                          <div className="card-body text-center p-3">
                            <h3 className="h6 card-title text-primary mb-3 fw-bold">{name}</h3>
                            <div className="d-flex justify-content-center gap-2">
                              <button
                                className={`btn ${favorites.includes(name) ? 'btn-warning' : 'btn-outline-warning'} btn-sm rounded-pill`}
                                onClick={() => toggleFavorite(name)}
                                title={favorites.includes(name) ? 'Remove from favorites' : 'Add to favorites'}
                                aria-label={favorites.includes(name) ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
                              >
                                <i className={`fas ${favorites.includes(name) ? 'fa-star' : 'fa-star'}`}></i>
                              </button>
                              <button
                                className="btn btn-outline-success btn-sm rounded-pill"
                                onClick={() => copyToClipboard(name)}
                                title="Copy to clipboard"
                                aria-label={`Copy ${name} to clipboard`}
                              >
                                {copiedName === name ? (
                                  <>
                                    <i className="fas fa-check me-1"></i>
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <i className="fas fa-copy me-1"></i>
                                    Copy
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted py-5">
                    <i className="fas fa-search fa-3x mb-3 opacity-50"></i>
                    <h4 className="h5">No cat names found</h4>
                    <p className="mb-0">Try adjusting your search criteria or browse all names</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Favorites Section */}
            <section aria-label="Your Favorite Cat Names" className="card shadow-sm mb-4 border-0">
              <div className="card-header bg-warning text-dark border-0">
                <h3 className="h5 mb-0">
                  <i className="fas fa-star me-2"></i>
                  Your Favorite Names
                </h3>
              </div>
              <div className="card-body">
                {favorites.length > 0 ? (
                  <div className="favorites-list">
                    {favorites.map((name, index) => (
                      <div key={index} className="favorite-item d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                        <span className="fw-bold text-dark">{name}</span>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-success me-1 rounded-circle"
                            onClick={() => copyToClipboard(name)}
                            title="Copy to clipboard"
                            aria-label={`Copy ${name} to clipboard`}
                          >
                            <i className="fas fa-copy"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger rounded-circle"
                            onClick={() => toggleFavorite(name)}
                            title="Remove from favorites"
                            aria-label={`Remove ${name} from favorites`}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="mt-3">
                      <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to clear all favorites?')) {
                            setFavorites([]);
                          }
                        }}
                        aria-label="Clear all favorites"
                      >
                        <i className="fas fa-trash me-1"></i>
                        Clear All Favorites
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted py-3">
                    <i className="fas fa-star fa-2x mb-3 opacity-25"></i>
                    <p className="mb-0">No favorites yet. Click the star icon to save names you love!</p>
                  </div>
                )}
              </div>
            </section>

            {/* Cat Naming Tips */}
            <section aria-label="Cat Naming Tips" className="card shadow-sm border-0">
              <div className="card-header bg-info text-white border-0">
                <h4 className="h6 mb-0">
                  <i className="fas fa-lightbulb me-2"></i>
                  Cat Naming Tips
                </h4>
              </div>
              <div className="card-body">
                <div className="tips-list">
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-primary d-block mb-1">
                      <i className="fas fa-volume-up me-2"></i>
                      Sound & Syllables
                    </strong>
                    <p className="small mb-0 text-muted">Cats respond best to 1-2 syllable names ending with 'ee' sounds</p>
                  </div>
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-success d-block mb-1">
                      <i className="fas fa-cat me-2"></i>
                      Personality Match
                    </strong>
                    <p className="small mb-0 text-muted">Observe your cat's behavior for a few days before choosing a name</p>
                  </div>
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-warning d-block mb-1">
                      <i className="fas fa-expand-alt me-2"></i>
                      Nickname Potential
                    </strong>
                    <p className="small mb-0 text-muted">Choose names that can be shortened into cute nicknames</p>
                  </div>
                  <div className="tip-item p-3 bg-light rounded">
                    <strong className="text-info d-block mb-1">
                      <i className="fas fa-theater-masks me-2"></i>
                      Unique but Simple
                    </strong>
                    <p className="small mb-0 text-muted">Pick a name that's distinctive but easy for everyone to pronounce</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* SEO Content Section */}
        <section aria-label="About Cat Name Generator" className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm bg-light border-0">
              <div className="card-body p-4">
                <h2 className="h3 mb-4 text-center text-dark">
                  Find the Perfect Cat Name for Your New Feline Companion
                </h2>

                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="bg-white p-4 rounded shadow-sm h-100">
                      <h3 className="h5 text-primary mb-3">
                        <i className="fas fa-rocket me-2"></i>
                        Why Use Our Cat Name Generator?
                      </h3>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Massive Database:</strong>
                            <p className="small mb-0 text-muted">{totalNames}+ hand-picked cat names across all categories</p>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Smart Filters:</strong>
                            <p className="small mb-0 text-muted">Find names by gender, starting letter, and themed categories</p>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Save Favorites:</strong>
                            <p className="small mb-0 text-muted">Bookmark names you love and compare them later</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Completely Free:</strong>
                            <p className="small mb-0 text-muted">No limits, no registration required - use it as much as you want</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="bg-white p-4 rounded shadow-sm h-100">
                      <h3 className="h5 text-primary mb-3">
                        <i className="fas fa-tags me-2"></i>
                        Popular Cat Name Categories
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="list-unstyled small">
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Elegant:</strong> Aurora, Athena, Sebastian
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Mystical:</strong> Luna, Merlin, Phoenix
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Food Inspired:</strong> Mochi, Biscuit, Cappuccino
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Nature:</strong> Willow, Ivy, River
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Literary:</strong> Hermione, Gatsby, Sherlock
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled small">
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Playful:</strong> Ziggy, Pixie, Mischief
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Royal:</strong> Cleopatra, King, Duchess
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Color-Based:</strong> Shadow, Snowball, Ginger
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Mythological:</strong> Zeus, Freya, Apollo
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Human Names:</strong> Oliver, Chloe, Jack
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded shadow-sm">
                  <h3 className="h5 text-primary mb-3">About Our Cat Name Generator Tool</h3>
                  <p className="mb-3">
                    Our <strong>Cat Name Generator</strong> is the ultimate free tool for finding the perfect
                    name for your new feline companion. Whether you're welcoming a playful kitten or adopting
                    a dignified adult cat, our comprehensive database has the ideal name for every personality.
                  </p>
                  <p className="mb-3">
                    We've carefully curated thousands of names across multiple categories including
                    <strong> elegant cat names</strong>, <strong>mystical cat names</strong>,
                    <strong> food-inspired names</strong>, and <strong>literary references</strong>.
                    From <strong>male cat names</strong> like Oliver and Leo to
                    <strong> female cat names</strong> like Luna and Bella, our generator makes it
                    easy to discover names that perfectly suit your cat's unique character.
                  </p>
                  <p className="mb-0">
                    <strong>Pro Tip:</strong> Use the favorite feature to save names that catch your eye,
                    then test them out with your cat to see which one they respond to best!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CatNameGenerator;