import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { petNames } from './petNamesData';
import './DogNameGenerator.css';

const DogNameGenerator = () => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [nameCount, setNameCount] = useState(12);
  const [generatedNames, setGeneratedNames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [copiedName, setCopiedName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const letters = ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Get all dog names with caching
  const getAllDogNames = React.useCallback(() => {
    const maleNames = petNames.dog.male || [];
    const femaleNames = petNames.dog.female || [];
    const unisexNames = petNames.dog.unisex || [];
    return [...new Set([...maleNames, ...femaleNames, ...unisexNames])]; // Remove duplicates
  }, []);

  // Generate names with better performance
  const generateNames = React.useCallback(async () => {
    setLoading(true);

    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));

    let availableNames = [];

    if (selectedGender === 'all') {
      availableNames = getAllDogNames();
    } else {
      availableNames = petNames.dog[selectedGender] || [];
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

    // Fisher-Yates shuffle for better randomness
    const shuffled = [...availableNames];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selected = shuffled.slice(0, Math.min(nameCount, shuffled.length));
    setGeneratedNames(selected);
    setLoading(false);
  }, [selectedGender, selectedLetter, nameCount, searchTerm, getAllDogNames]);

  // Rest of your functions remain the same...
  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

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
    const savedFavorites = localStorage.getItem('dogNameFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('dogNameFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Generate names when filters change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      generateNames();
    }, 300);

    return () => clearTimeout(timer);
  }, [generateNames]);

  const popularNames = ['Bella', 'Max', 'Luna', 'Charlie', 'Lucy', 'Cooper', 'Daisy', 'Buddy', 'Molly', 'Rocky'];
  const totalNames = getAllDogNames().length;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Dog Name Generator – Best Puppy Name Ideas (Male, Female & Unisex)</title>
        <meta
          name="description"
          content={`Find the perfect dog name! Explore ${totalNames}+ male, female and unisex puppy names. Filter by gender, first letter, and style. Save favorites and copy names instantly.`}
        />
        <meta
          name="keywords"
          content="dog name generator, puppy name ideas, male dog names, female dog names, cute dog names, unique dog names, pet name generator, dog naming tool"
        />
        <link
          rel="canonical"
          href="https://loremtextgenerator.com/dog-name-generator"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Dog Name Generator – Find the Perfect Puppy Name"
        />
        <meta
          property="og:description"
          content="Generate thousands of dog names instantly! Filter by gender, starting letter, and more. Save your favorite names and copy with one click."
        />
        <meta
          property="og:url"
          content="https://loremtextgenerator.com/dog-name-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://loremtextgenerator.com/images/dog-name-generator-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dog Name Generator – Best Puppy Name Ideas"
        />
        <meta
          name="twitter:description"
          content="Browse thousands of dog names. Powerful filters: male, female, unisex, cute and unique dog names. Free tool!"
        />
        <meta
          name="twitter:image"
          content="https://loremtextgenerator.com/images/dog-name-generator-banner.jpg"
        />

        {/* Structured Data (JSON-LD Schema) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dog Name Generator",
      "url": "https://loremtextgenerator.com/dog-name-generator",
      "description": "Free dog name generator with ${totalNames}+ male, female and unisex puppy names. Filter names and save favorites.",
      "publisher": {
        "@type": "Organization",
        "name": "LoremTextGenerator",
        "logo": "https://loremtextgenerator.com/images/logo.png"
      },
      "image": "https://loremtextgenerator.com/images/dog-name-generator-banner.jpg"
    }
    `}
        </script>

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="author" content="LoremTextGenerator Team" />
      </Helmet>


      <div className="container mt-4">
        {/* Enhanced Hero Section */}
        <header className="text-center mb-5 py-5 bg-gradient rounded-3 position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
            <div className="position-absolute" style={{ top: '20%', left: '10%' }}>🐕</div>
            <div className="position-absolute" style={{ top: '60%', right: '15%' }}>🐩</div>
            <div className="position-absolute" style={{ bottom: '20%', left: '20%' }}>🐶</div>
          </div>

          <h1 className="display-4 fw-bold text-white mb-3">
            <span className="d-block">Dog Name Generator</span>
            <small className="fs-5 fw-normal opacity-90">Find the Perfect Name for Your New Best Friend</small>
          </h1>

          <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Discover <strong>{totalNames}+ carefully curated dog names</strong> for every breed and personality.
            From classic to unique names, find the perfect match instantly!
          </p>
        </header>

        {/* Enhanced Stats Section */}
        <section aria-label="Statistics" className="row text-center mb-5">
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-primary mb-2">
                  <i className="fas fa-database fa-2x"></i>
                </div>
                <h3 className="text-primary mb-1">{totalNames}+</h3>
                <p className="text-muted mb-0">Unique Dog Names</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-success mb-2">
                  <i className="fas fa-paw fa-2x"></i>
                </div>
                <h3 className="text-success mb-1">All</h3>
                <p className="text-muted mb-0">Dog Breeds</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card stat-card h-100 border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="text-warning mb-2">
                  <i className="fas fa-star fa-2x"></i>
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
                  <i className="fas fa-mobile-alt fa-2x"></i>
                </div>
                <h3 className="text-info mb-1">100%</h3>
                <p className="text-muted mb-0">Mobile Friendly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Filters Section */}
        <section aria-label="Search Filters" className="card shadow-sm mb-5 border-0">
          <div className="card-body p-4">
            <h2 className="h4 card-title mb-4 text-dark">
              <i className="fas fa-sliders-h me-2"></i>
              Customize Your Dog Name Search
            </h2>

            <div className="row g-4">
              <div className="col-md-4">
                <label htmlFor="gender-select" className="form-label fw-semibold text-dark">
                  <i className="fas fa-venus-mars me-2"></i>
                  Gender Preference
                </label>
                <select
                  id="gender-select"
                  className="form-select form-select-lg border-0 shadow-sm"
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  aria-label="Select dog name gender"
                >
                  <option value="all">👥 All Genders</option>
                  <option value="male">♂️ Male Dog Names</option>
                  <option value="female">♀️ Female Dog Names</option>
                  <option value="unisex">⚧ Unisex Dog Names</option>
                </select>
              </div>

              <div className="col-md-4">
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

              <div className="col-md-4">
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
                aria-label="Generate new dog names"
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Generating Names...
                  </>
                ) : (
                  <>
                    <i className="fas fa-dice me-2"></i>
                    Generate New Dog Names
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Popular Names */}
        <section aria-label="Popular Dog Names" className="card shadow-sm mb-5 border-0">
          <div className="card-body">
            <h3 className="h5 card-title text-dark mb-3">
              <i className="fas fa-fire me-2"></i>
              Most Popular Dog Names
            </h3>
            <p className="text-muted mb-3">Quick access to trending dog names</p>
            <div className="d-flex flex-wrap gap-2">
              {popularNames.map((name, index) => (
                <button
                  key={index}
                  className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  onClick={() => {
                    setSearchTerm(name);
                    generateNames();
                  }}
                  aria-label={`Search for ${name} dog names`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="row">
          {/* Enhanced Generated Names Section */}
          <section aria-label="Generated Dog Names" className="col-lg-8 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center border-0">
                <h2 className="h5 mb-0">
                  <i className="fas fa-bullseye me-2"></i>
                  Generated Dog Names
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
                      <span className="visually-hidden">Loading dog names...</span>
                    </div>
                    <p className="text-muted">Finding the perfect dog names for you...</p>
                  </div>
                ) : generatedNames.length > 0 ? (
                  <div className="row">
                    {generatedNames.map((name, index) => (
                      <div key={index} className="col-md-4 col-sm-6 mb-3">
                        <div className="dog-name-card card h-100 border-0 shadow-sm">
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
                    <h4 className="h5">No dog names found</h4>
                    <p className="mb-0">Try adjusting your search criteria or browse all names</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Enhanced Sidebar */}
          <div className="col-lg-4">
            {/* Favorites Section */}
            <section aria-label="Your Favorite Dog Names" className="card shadow-sm mb-4 border-0">
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

            {/* Enhanced Tips Section */}
            <section aria-label="Dog Naming Tips" className="card shadow-sm border-0">
              <div className="card-header bg-info text-white border-0">
                <h4 className="h6 mb-0">
                  <i className="fas fa-lightbulb me-2"></i>
                  Dog Naming Tips
                </h4>
              </div>
              <div className="card-body">
                <div className="tips-list">
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-primary d-block mb-1">
                      <i className="fas fa-volume-up me-2"></i>
                      Sound Matters
                    </strong>
                    <p className="small mb-0 text-muted">Choose names with 1-2 syllables that are easy for dogs to recognize</p>
                  </div>
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-success d-block mb-1">
                      <i className="fas fa-ban me-2"></i>
                      Avoid Confusion
                    </strong>
                    <p className="small mb-0 text-muted">Stay away from names that sound like common commands (e.g., "Kit" vs "Sit")</p>
                  </div>
                  <div className="tip-item mb-3 p-3 bg-light rounded">
                    <strong className="text-warning d-block mb-1">
                      <i className="fas fa-heart me-2"></i>
                      Personality Match
                    </strong>
                    <p className="small mb-0 text-muted">Pick a name that reflects your dog's unique character and appearance</p>
                  </div>
                  <div className="tip-item p-3 bg-light rounded">
                    <strong className="text-info d-block mb-1">
                      <i className="fas fa-users me-2"></i>
                      Family Choice
                    </strong>
                    <p className="small mb-0 text-muted">Make sure everyone in the family can pronounce and likes the name</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Enhanced SEO Content Section */}
        <section aria-label="About Dog Name Generator" className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm bg-light border-0">
              <div className="card-body p-4">
                <h2 className="h3 mb-4 text-center text-dark">
                  Find the Perfect Dog Name for Your New Best Friend
                </h2>

                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="bg-white p-4 rounded shadow-sm h-100">
                      <h3 className="h5 text-primary mb-3">
                        <i className="fas fa-rocket me-2"></i>
                        Why Choose Our Dog Name Generator?
                      </h3>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Massive Database:</strong>
                            <p className="small mb-0 text-muted">{totalNames}+ hand-picked dog names across all categories</p>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <i className="fas fa-check text-success me-2 mt-1"></i>
                          <div>
                            <strong>Smart Filters:</strong>
                            <p className="small mb-0 text-muted">Find names by gender, starting letter, and naming style</p>
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
                        Popular Dog Name Categories
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="list-unstyled small">
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Classic Names:</strong> Max, Buddy, Bella
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Unique Names:</strong> Zephyr, Koda, Nova
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Food Names:</strong> Cookie, Brownie, Pepper
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Nature Names:</strong> River, Willow, Sky
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Strong Names:</strong> Titan, Zeus, Thor
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled small">
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Cute Names:</strong> Cupcake, Peanut, Honey
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Movie Names:</strong> Simba, Yoda, Leia
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Historical Names:</strong> Caesar, Cleo, Athena
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>International Names:</strong> Suki, Bjorn, Amara
                            </li>
                            <li className="mb-2">
                              <i className="fas fa-caret-right text-primary me-2"></i>
                              <strong>Funny Names:</strong> Sir Barksalot, Waffles, Nugget
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded shadow-sm">
                  <h3 className="h5 text-primary mb-3">About Our Dog Name Generator Tool</h3>
                  <p className="mb-3">
                    Our <strong>Dog Name Generator</strong> is the ultimate free tool for finding the perfect
                    name for your new furry family member. Whether you're looking for traditional, unique,
                    or trendy <strong>dog name ideas</strong>, our comprehensive database has you covered.
                  </p>
                  <p className="mb-3">
                    We've carefully curated thousands of names to help you find the ideal match for your
                    dog's personality, appearance, and spirit. From <strong>male dog names</strong> and
                    <strong> female dog names</strong> to <strong>unisex options</strong>, our generator
                    makes it easy to discover names you'll love.
                  </p>
                  <p className="mb-0">
                    <strong>Pro Tip:</strong> Use the favorite feature to save names that catch your eye,
                    then compare them later to choose the perfect one for your new best friend!
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

export default DogNameGenerator;