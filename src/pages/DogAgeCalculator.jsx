// DogAgeCalculator.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './DogAgeCalculator.css';

const DogAgeCalculator = () => {
  const [dogAge, setDogAge] = useState('');
  const [dogSize, setDogSize] = useState('medium');
  const [humanAge, setHumanAge] = useState(null);
  const [calculationMethod, setCalculationMethod] = useState('traditional');

  const calculateAge = () => {
    if (!dogAge || dogAge <= 0) {
      setHumanAge(null);
      return;
    }

    let calculatedAge;

    if (calculationMethod === 'traditional') {
      if (dogAge === 1) calculatedAge = 15;
      else if (dogAge === 2) calculatedAge = 24;
      else calculatedAge = 24 + (dogAge - 2) * 5;
    } else {
      const age = parseFloat(dogAge);
      if (age <= 2) {
        calculatedAge = age * 12;
      } else {
        const multipliers = {
          small: 4,
          medium: 5,
          large: 6,
          giant: 7
        };
        calculatedAge = 24 + (age - 2) * multipliers[dogSize];
      }
    }

    setHumanAge(Math.round(calculatedAge));
  };

  const resetCalculator = () => {
    setDogAge('');
    setDogSize('medium');
    setHumanAge(null);
  };

  const getAgeDescription = (age) => {
    if (age < 15) return "Puppy stage";
    if (age < 24) return "Young adult";
    if (age < 35) return "Adult";
    if (age < 50) return "Mature";
    return "Senior";
  };

  return (
    <>
      {/* SEO Using react-helmet-async */}
      <Helmet>
        <title>Dog Age Calculator – Convert Dog Years to Human Years Accurately</title>

        <meta
          name="description"
          content="Use the free Dog Age Calculator to instantly convert dog years to human years. Accurate results based on breed size, science-backed formula, and veterinary guidelines."
        />

        <meta
          name="keywords"
          content="dog age calculator, dog years to human years, dog age converter, pet age calculator, calculate dog age, dog human age chart"
        />
        <link rel="canonical" href="https://loremtextgenerator.com/dog-age-calculator" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Dog Age Calculator",
            "url": "https://www.loremtextgenerator.com/dog-age-calculator",
            "description": "Free online tool to convert dog years to human years accurately.",
            "inLanguage": "en",
            "applicationCategory": "Utility",
            "operatingSystem": "All",
            "author": {
              "@type": "Organization",
              "name": "LoremTextGenerator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LoremTextGenerator"
            },
            "mainEntity": {
              "@type": "Thing",
              "name": "Dog Age Conversion Tool",
              "description": "Convert dog age to human years based on science and breed size."
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>


      <div className="dog-age-calculator">
        <header className="calculator-header text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Dog Age Calculator</h1>
          <p className="lead text-muted">
            Convert your dog's age to human years accurately
          </p>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* Calculator Card */}
              <div className="calculator-card card shadow-lg border-0">
                <div className="card-body p-4">
                  <div className="row">

                    {/* Left Section */}
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label htmlFor="dogAge" className="form-label fw-semibold">
                          Dog's Age (Years)
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="dogAge"
                          value={dogAge}
                          onChange={(e) => setDogAge(e.target.value)}
                          min="0"
                          max="30"
                          step="0.1"
                          placeholder="Enter dog's age"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          Calculation Method
                        </label>
                        <div className="btn-group w-100">
                          <button
                            className={`btn ${calculationMethod === 'traditional' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setCalculationMethod('traditional')}
                          >
                            Traditional
                          </button>
                          <button
                            className={`btn ${calculationMethod === 'scientific' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setCalculationMethod('scientific')}
                          >
                            Scientific
                          </button>
                        </div>
                      </div>

                      {calculationMethod === 'scientific' && (
                        <div className="mb-4">
                          <label htmlFor="dogSize" className="form-label fw-semibold">
                            Dog Size
                          </label>
                          <select
                            className="form-select form-select-lg"
                            id="dogSize"
                            value={dogSize}
                            onChange={(e) => setDogSize(e.target.value)}
                          >
                            <option value="small">Small (under 20 lbs)</option>
                            <option value="medium">Medium (21–50 lbs)</option>
                            <option value="large">Large (51–90 lbs)</option>
                            <option value="giant">Giant (90+ lbs)</option>
                          </select>
                        </div>
                      )}

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary btn-lg"
                          onClick={calculateAge}
                          disabled={!dogAge}
                        >
                          Calculate Human Age
                        </button>
                        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
                          Reset
                        </button>
                      </div>
                    </div>

                    {/* Right Section (Results) */}
                    <div className="col-md-6 text-center">
                      {humanAge !== null ? (
                        <div className="result-card">
                          <h3 className="text-success mb-3">Calculation Result</h3>
                          <div className="age-display mb-3">
                            <span className="dog-age-badge">{dogAge} dog years</span>
                            <span className="mx-3">=</span>
                            <span className="human-age-badge">{humanAge} human years</span>
                          </div>

                          <p className="fw-semibold text-muted">
                            {getAgeDescription(humanAge)}
                          </p>

                          <small className="text-muted">
                            Method: {calculationMethod === 'traditional' ? 'Traditional' : 'Scientific (size-based)'}
                          </small>
                        </div>
                      ) : (
                        <div className="placeholder-result">
                          <i className="fas fa-paw fa-3x text-muted mb-3"></i>
                          <h4 className="text-muted">Enter your dog's details</h4>
                          <p className="text-muted">
                            Get accurate dog to human age conversion
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Info Section */}
              <div className="seo-content mt-5">
                <h2 className="h4 mb-3">Understanding Dog Age Conversion</h2>

                <div className="card border-0">
                  <div className="card-body">
                    <h3 className="h5">Traditional Method</h3>
                    <p>
                      The old "1 dog year = 7 human years" is inaccurate. A more accurate formula uses:
                      15 human years for the first year, 9 for the second, then 5 for each year after.
                    </p>

                    <h3 className="h5 mt-4">Scientific Method</h3>
                    <p>Different dog sizes age at different speeds:</p>
                    <ul>
                      <li><strong>Small dogs</strong> age more slowly</li>
                      <li><strong>Medium dogs</strong> age moderately</li>
                      <li><strong>Large dogs</strong> age faster</li>
                      <li><strong>Giant breeds</strong> have much shorter lifespans</li>
                    </ul>

                    <h3 className="h5 mt-4">Why Age Conversion Matters</h3>
                    <ul>
                      <li>Better diet planning</li>
                      <li>Health checkup scheduling</li>
                      <li>Understanding behavioral changes</li>
                      <li>Preparing for age-related health issues</li>
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

export default DogAgeCalculator;
