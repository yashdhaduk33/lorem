import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { petNames } from './petNamesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PetNameGenerator.css'; // We'll create this CSS file

// Constants for SEO
const SITE_URL = "https://loremtextgenerator.com/pet-name-generator";
const OG_IMAGE = "https://loremtextgenerator.com/site-logo.png";

const PetNameGenerator = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const [savedNames, setSavedNames] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load saved names from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('savedPetNames');
    if (saved) {
      setSavedNames(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever savedNames changes
  useEffect(() => {
    localStorage.setItem('savedPetNames', JSON.stringify(savedNames));
  }, [savedNames]);

  const generateName = () => {
    if (!selectedType || !selectedGender) {
      alert('Please select both pet type and gender!');
      return;
    }

    const typeNames = petNames[selectedType];
    if (!typeNames) {
      alert('No names found for selected type!');
      return;
    }

    const genderNames = typeNames[selectedGender] || typeNames.unisex || [];
    if (genderNames.length === 0) {
      alert('No names available for this combination!');
      return;
    }

    // Animation effect
    setIsAnimating(true);
    
    // Create a shuffling effect before showing the final name
    let shuffleCount = 0;
    const maxShuffles = 10;
    const shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * genderNames.length);
      setGeneratedName(genderNames[randomIndex]);
      shuffleCount++;
      
      if (shuffleCount >= maxShuffles) {
        clearInterval(shuffleInterval);
        const finalIndex = Math.floor(Math.random() * genderNames.length);
        const finalName = genderNames[finalIndex];
        setGeneratedName(finalName);
        setIsAnimating(false);
        
        // Add to history
        setNameHistory(prev => [
          { name: finalName, type: selectedType, gender: selectedGender, timestamp: new Date() },
          ...prev.slice(0, 9) // Keep only last 10
        ]);
      }
    }, 100);
  };

  const saveName = () => {
    if (generatedName && !savedNames.includes(generatedName)) {
      const updatedNames = [...savedNames, generatedName];
      setSavedNames(updatedNames);
    }
  };

  const clearSavedNames = () => {
    setSavedNames([]);
  };

  const resetGenerator = () => {
    setSelectedType('');
    setSelectedGender('');
    setGeneratedName('');
    setIsAnimating(false);
  };

  const removeSavedName = (nameToRemove) => {
    setSavedNames(savedNames.filter(name => name !== nameToRemove));
  };

  const getPetEmoji = (type) => {
    const emojis = {
      dog: '🐶',
      cat: '🐱',
      bird: '🐦',
      rabbit: '🐰',
      hamster: '🐹',
      fish: '🐠',
      reptile: '🦎',
      horse: '🐴'
    };
    return emojis[type] || '🐾';
  };

  return (
    <HelmetProvider>
      <div className="pet-name-generator">
        {/* Comprehensive SEO Head Section */}
        <Helmet>
          <title>Pet Name Generator — Find Perfect Names for Dogs, Cats & More</title>
          <meta
            name="description"
            content="Generate perfect pet names instantly! Free tool with thousands of creative names for dogs, cats, birds, rabbits, and all pets. Filter by gender and pet type."
          />
          <meta
            name="keywords"
            content="pet name generator, dog names, cat names, pet names, name generator, pet name ideas, bird names, rabbit names, hamster names, fish names, reptile names, male pet names, female pet names, unisex pet names"
          />
          <link rel="canonical" href="https://loremtextgenerator.com/pet-name-generator" />

          {/* Open Graph */}
          <meta property="og:title" content="Pet Name Generator — Perfect Names for Dogs, Cats & All Pets" />
          <meta
            property="og:description"
            content="Generate creative pet names for your new friend. Thousands of names for dogs, cats, birds, rabbits, and more. 100% free, no signup required."
          />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Pet Name Generator" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Pet Name Generator — Creative Names for All Pets" />
          <meta
            name="twitter:description"
            content="Find the perfect name for your pet! Generate thousands of creative names for dogs, cats, birds, and more."
          />
          <meta name="twitter:image" content={OG_IMAGE} />
          <meta name="twitter:creator" content="@yourusername" />

          {/* JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Pet Name Generator",
              "url": SITE_URL,
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
              "description": "Free online tool to generate perfect pet names for dogs, cats, birds, rabbits, and all types of pets. Filter by gender and pet type.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Pet Name Generator"
              },
              "featureList": [
                "Generate names for multiple pet types",
                "Filter by male, female, or unisex names",
                "Save favorite names",
                "100% free to use"
              ]
            })}
          </script>
        </Helmet>

        {/* Animated Background */}
        <div className="animated-bg"></div>

        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-card card shadow-lg border-0">
                <div className="card-header gradient-bg text-white text-center py-4">
                  <div className="header-content">
                    <div className="pet-emoji-header">
                      {['🐶', '🐱', '🐰', '🐦', '🐠'].map((emoji, index) => (
                        <span key={index} className="bouncing-emoji" style={{ animationDelay: `${index * 0.2}s` }}>
                          {emoji}
                        </span>
                      ))}
                    </div>
                    <h1 className="display-5 fw-bold mb-3">Pet Name Generator</h1>
                    <p className="lead mb-0">Find the perfect name for your new best friend!</p>
                  </div>
                </div>

                <div className="card-body p-4 p-md-5">
                  {/* Selection Section */}
                  <div className="selection-section mb-5">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="petType" className="form-label fw-bold fs-5">
                            <i className="fas fa-paw me-2"></i>
                            Pet Type:
                          </label>
                          <select
                            id="petType"
                            className="form-select form-select-lg custom-select"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                          >
                            <option value="">Choose your pet type...</option>
                            {Object.keys(petNames).map((type) => (
                              <option key={type} value={type}>
                                {getPetEmoji(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label fw-bold fs-5 d-block">
                            <i className="fas fa-venus-mars me-2"></i>
                            Gender:
                          </label>
                          <div className="btn-group w-100 custom-btn-group" role="group">
                            {[
                              { id: 'male', label: '♂ Male', emoji: '♂' },
                              { id: 'female', label: '♀ Female', emoji: '♀' },
                              { id: 'unisex', label: '⚥ Unisex', emoji: '⚥' }
                            ].map((gender) => (
                              <React.Fragment key={gender.id}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="gender"
                                  id={gender.id}
                                  checked={selectedGender === gender.id}
                                  onChange={() => setSelectedGender(gender.id)}
                                />
                                <label 
                                  className={`btn btn-outline-primary btn-lg gender-btn ${
                                    selectedGender === gender.id ? 'selected' : ''
                                  }`} 
                                  htmlFor={gender.id}
                                >
                                  <span className="gender-emoji">{gender.emoji}</span>
                                  <span className="gender-text">{gender.label.split(' ')[1]}</span>
                                </label>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons mb-5">
                    <div className="row g-3">
                      <div className="col-md-8 offset-md-2">
                        <div className="d-grid gap-2 d-md-flex justify-content-center">
                          <button
                            className="btn btn-success btn-lg generate-btn px-4 py-3"
                            onClick={generateName}
                            disabled={!selectedType || !selectedGender || isAnimating}
                          >
                            {isAnimating ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Generating...
                              </>
                            ) : (
                              <>
                                <i className="fas fa-magic me-2"></i>
                                Generate Name
                              </>
                            )}
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-lg px-4 py-3"
                            onClick={resetGenerator}
                          >
                            <i className="fas fa-redo me-2"></i>
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Generated Name Display */}
                  {generatedName && (
                    <div className={`generated-name-section mb-5 ${isAnimating ? 'animating' : ''}`}>
                      <div className="alert alert-info border-0 text-center name-display">
                        <h3 className="mb-3 text-muted">
                          <i className="fas fa-heart me-2"></i>
                          Your Pet's Name:
                        </h3>
                        <div className={`display-2 fw-bold text-primary mb-4 name-text ${isAnimating ? 'shuffling' : 'final'}`}>
                          {generatedName}
                        </div>
                        <div className="action-buttons">
                          <button
                            className="btn btn-primary btn-lg me-3 px-4"
                            onClick={saveName}
                            disabled={savedNames.includes(generatedName)}
                          >
                            <i className="fas fa-save me-2"></i>
                            {savedNames.includes(generatedName) ? 'Already Saved' : 'Save Name'}
                          </button>
                          <button 
                            className="btn btn-outline-info btn-lg px-4"
                            onClick={() => setShowHistory(!showHistory)}
                          >
                            <i className="fas fa-history me-2"></i>
                            History
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Name History */}
                  {showHistory && nameHistory.length > 0 && (
                    <div className="history-section mb-4">
                      <div className="card border-0 shadow-sm">
                        <div className="card-header bg-light">
                          <h5 className="mb-0">
                            <i className="fas fa-clock me-2"></i>
                            Recently Generated Names
                          </h5>
                        </div>
                        <div className="card-body">
                          <div className="row g-2">
                            {nameHistory.map((item, index) => (
                              <div key={index} className="col-md-4 col-sm-6">
                                <div className="history-item p-3 border rounded">
                                  <div className="fw-bold fs-5">{item.name}</div>
                                  <div className="text-muted small">
                                    {getPetEmoji(item.type)} {item.type} • {item.gender}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Saved Names Section */}
                  {savedNames.length > 0 && (
                    <div className="saved-names-section mt-5">
                      <div className="card border-0 shadow-sm">
                        <div className="card-header bg-light d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">
                            <i className="fas fa-bookmark me-2 text-warning"></i>
                            Your Saved Names ({savedNames.length})
                          </h5>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={clearSavedNames}
                          >
                            <i className="fas fa-trash me-1"></i>
                            Clear All
                          </button>
                        </div>
                        <div className="card-body">
                          <div className="row g-3">
                            {savedNames.map((name, index) => (
                              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="saved-name-item p-3 border rounded d-flex justify-content-between align-items-center">
                                  <span className="fw-bold fs-6">{name}</span>
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => removeSavedName(name)}
                                    title="Remove name"
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="card-footer text-center py-3 bg-light">
                  <p className="mb-0 text-muted">
                    <i className="fas fa-heart text-danger me-1"></i>
                    Found the perfect name for your new friend! 
                    <span className="d-none d-md-inline"> Share this generator with other pet lovers!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PetNameGenerator;