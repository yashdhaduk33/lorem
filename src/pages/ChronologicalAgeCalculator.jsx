// ChronologicalAgeCalculator.js
import React, { useState, useEffect } from 'react';
import './ChronologicalAgeCalculator.css';
import { Helmet } from 'react-helmet-async';

const ChronologicalAgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageAtDate, setAgeAtDate] = useState('');
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // SEO: Dynamic meta tags and structured data
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'Chronological Age Calculator | Calculate Exact Age in Years, Months & Days';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Free online chronological age calculator. Calculate exact age in years, months, days, and total days. Perfect for school enrollment, medical purposes, and personal use.');
    }

    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Chronological Age Calculator",
      "description": "Calculate exact chronological age in years, months, and days",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Calculate age in years, months, days",
        "Total days calculation",
        "Age at specific date",
        "Detailed age breakdown"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const calculateAge = () => {
    if (!birthDate) {
      alert('Please enter your birth date');
      return;
    }

    const birth = new Date(birthDate);
    const target = ageAtDate ? new Date(ageAtDate) : new Date();

    // Validate dates
    if (birth > target) {
      alert('Birth date cannot be in the future');
      return;
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total days
    const timeDiff = target.getTime() - birth.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const totalMonths = years * 12 + months;
    const totalWeeks = Math.floor(totalDays / 7);

    setCalculatedAge({
      years,
      months,
      days,
      totalDays,
      totalMonths,
      totalWeeks,
      birthDate: birth,
      targetDate: target,
      nextBirthday: calculateNextBirthday(birth, target)
    });
    setShowDetails(true);
  };

  const calculateNextBirthday = (birth, target) => {
    const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());

    if (nextBirthday < target) {
      nextBirthday.setFullYear(target.getFullYear() + 1);
    }

    const timeDiff = nextBirthday.getTime() - target.getTime();
    const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return {
      date: nextBirthday,
      daysUntil: daysUntil
    };
  };

  const resetCalculator = () => {
    setBirthDate('');
    setAgeAtDate('');
    setCalculatedAge(null);
    setShowDetails(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const getAgeGroup = (years) => {
    if (years < 1) return { group: 'Infant', color: 'info' };
    if (years < 3) return { group: 'Toddler', color: 'primary' };
    if (years < 13) return { group: 'Child', color: 'success' };
    if (years < 20) return { group: 'Teenager', color: 'warning' };
    if (years < 40) return { group: 'Young Adult', color: 'primary' };
    if (years < 65) return { group: 'Adult', color: 'success' };
    return { group: 'Senior', color: 'secondary' };
  };

  const calculateMilestones = (years) => {
    const milestones = [];
    const nextMilestone = Math.ceil(years / 5) * 5;

    if (nextMilestone > years) {
      const yearsToGo = nextMilestone - years;
      milestones.push({
        milestone: `${nextMilestone} years`,
        yearsToGo: yearsToGo,
        date: new Date(new Date().setFullYear(new Date().getFullYear() + yearsToGo))
      });
    }

    return milestones;
  };

  return (
    <>
      <Helmet>
        <title>Chronological Age Calculator – Calculate Exact Age in Years, Months & Days</title>

        <meta
          name="description"
          content="Free Chronological Age Calculator to find exact age in years, months, days, and total days lived. Perfect for school admissions, medical assessments, research, and personal use."
        />

        <meta
          name="keywords"
          content="chronological age calculator, exact age calculator, age in years months days, age calculator online, date of birth calculator, school admission age calculator"
        />
        <link rel="canonical" href="https://loremtextgenerator.com/chronological-age-calculator" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Chronological Age Calculator",
            "url": "https://www.loremtextgenerator.com/chronological-age-calculator",
            "description": "Online tool to calculate exact chronological age in years, months, days, and total days lived.",
            "inLanguage": "en",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
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
              "name": "Chronological Age Calculator Tool",
              "description": "Calculates the exact age from date of birth to any specific date."
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Age in years, months, and days",
              "Total days lived",
              "Calculate age as of a specific date",
              "Detailed age breakdown"
            ]
          })}
        </script>
      </Helmet>

      <div className="chronological-age-calculator">
        {/* SEO: Semantic HTML structure */}
        <header className="calculator-header text-center mb-5">
          <div className="container">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Chronological Age Calculator
            </h1>
            <p className="lead text-muted">
              Calculate your exact age in years, months, and days with precision
            </p>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Main Calculator Card */}
              <div className="calculator-card card shadow-lg border-0 mb-4">
                <div className="card-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="input-section">
                        <div className="mb-4">
                          <label htmlFor="birthDate" className="form-label fw-semibold">
                            <i className="fas fa-calendar-alt me-2"></i>
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            max={new Date().toISOString().split('T')[0]}
                          />
                          <div className="form-text">
                            Enter your complete date of birth
                          </div>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="ageAtDate" className="form-label fw-semibold">
                            <i className="fas fa-calendar-day me-2"></i>
                            Calculate Age As Of (Optional)
                          </label>
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="ageAtDate"
                            value={ageAtDate}
                            onChange={(e) => setAgeAtDate(e.target.value)}
                            max={new Date().toISOString().split('T')[0]}
                          />
                          <div className="form-text">
                            Leave empty to calculate age today
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex">
                          <button
                            className="btn btn-primary btn-lg flex-fill"
                            onClick={calculateAge}
                            disabled={!birthDate}
                          >
                            <i className="fas fa-calculator me-2"></i>
                            Calculate Age
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-lg"
                            onClick={resetCalculator}
                          >
                            <i className="fas fa-redo me-2"></i>
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="result-section">
                        {calculatedAge ? (
                          <div className="result-card">
                            <h3 className="text-success mb-4 text-center">
                              <i className="fas fa-birthday-cake me-2"></i>
                              Age Calculation Result
                            </h3>

                            {/* Main Age Display */}
                            <div className="main-age-display text-center mb-4">
                              <div className="age-badge-large">
                                <span className="years">{calculatedAge.years}</span>
                                <span className="unit">years</span>
                                <span className="months">{calculatedAge.months}</span>
                                <span className="unit">months</span>
                                <span className="days">{calculatedAge.days}</span>
                                <span className="unit">days</span>
                              </div>
                            </div>

                            {/* Age Group */}
                            <div className="age-group-badge text-center mb-3">
                              {(() => {
                                const ageGroup = getAgeGroup(calculatedAge.years);
                                return (
                                  <span className={`badge bg-${ageGroup.color} fs-6`}>
                                    {ageGroup.group}
                                  </span>
                                );
                              })()}
                            </div>

                            {/* Quick Stats */}
                            <div className="quick-stats row text-center mb-3">
                              <div className="col-4">
                                <div className="stat-item">
                                  <div className="stat-number text-primary">
                                    {calculatedAge.totalDays}
                                  </div>
                                  <div className="stat-label">Total Days</div>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="stat-item">
                                  <div className="stat-number text-success">
                                    {calculatedAge.totalMonths}
                                  </div>
                                  <div className="stat-label">Total Months</div>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="stat-item">
                                  <div className="stat-number text-warning">
                                    {calculatedAge.totalWeeks}
                                  </div>
                                  <div className="stat-label">Total Weeks</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="placeholder-result text-center">
                            <div className="placeholder-icon mb-3">
                              <i className="fas fa-calculator fa-4x text-muted"></i>
                            </div>
                            <h4 className="text-muted mb-3">Ready to Calculate</h4>
                            <p className="text-muted">
                              Enter your date of birth to discover your exact chronological age
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Results */}
              {calculatedAge && showDetails && (
                <div className="detailed-results card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h4 className="card-title mb-4">
                      <i className="fas fa-chart-bar me-2"></i>
                      Detailed Analysis
                    </h4>

                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="detail-card">
                          <h5 className="text-primary">Date Information</h5>
                          <ul className="list-unstyled">
                            <li className="d-flex justify-content-between py-2 border-bottom">
                              <span className="fw-semibold">Birth Date:</span>
                              <span>{formatDate(calculatedAge.birthDate)}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2 border-bottom">
                              <span className="fw-semibold">Calculation Date:</span>
                              <span>{formatDate(calculatedAge.targetDate)}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2">
                              <span className="fw-semibold">Next Birthday:</span>
                              <span>{formatDate(calculatedAge.nextBirthday.date)}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="detail-card">
                          <h5 className="text-success">Time Breakdown</h5>
                          <ul className="list-unstyled">
                            <li className="d-flex justify-content-between py-2 border-bottom">
                              <span className="fw-semibold">Days until next birthday:</span>
                              <span className="badge bg-warning">
                                {calculatedAge.nextBirthday.daysUntil} days
                              </span>
                            </li>
                            <li className="d-flex justify-content-between py-2 border-bottom">
                              <span className="fw-semibold">Total hours lived:</span>
                              <span>{(calculatedAge.totalDays * 24).toLocaleString()}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2">
                              <span className="fw-semibold">Total minutes lived:</span>
                              <span>{(calculatedAge.totalDays * 24 * 60).toLocaleString()}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="milestones-section mt-4">
                      <h5 className="text-info mb-3">
                        <i className="fas fa-flag me-2"></i>
                        Upcoming Milestones
                      </h5>
                      <div className="row">
                        {calculateMilestones(calculatedAge.years).map((milestone, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="milestone-card p-3 border rounded">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-semibold">{milestone.milestone}</span>
                                <span className="badge bg-info">
                                  in {milestone.yearsToGo} year{milestone.yearsToGo !== 1 ? 's' : ''}
                                </span>
                              </div>
                              <small className="text-muted">
                                {formatDate(milestone.date)}
                              </small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SEO: Informational Content */}
              <div className="seo-content mt-5">
                <div className="row">
                  <div className="col-12">
                    <h2 className="h3 mb-4 text-primary">Understanding Chronological Age</h2>

                    <div className="content-card card border-0 shadow-sm">
                      <div className="card-body">
                        <div className="row g-4">
                          <div className="col-md-6">
                            <h3 className="h5 text-success">
                              <i className="fas fa-info-circle me-2"></i>
                              What is Chronological Age?
                            </h3>
                            <p>
                              Chronological age is the exact amount of time that has passed
                              from your birth to a specific date. It's measured in years,
                              months, and days, and is the most common way to express age
                              for legal, medical, and educational purposes.
                            </p>

                            <h3 className="h5 text-success mt-4">
                              <i className="fas fa-stethoscope me-2"></i>
                              Medical Importance
                            </h3>
                            <p>
                              In healthcare, chronological age helps determine:
                            </p>
                            <ul>
                              <li>Vaccination schedules</li>
                              <li>Developmental milestones</li>
                              <li>Medical screening timelines</li>
                              <li>Age-appropriate treatments</li>
                            </ul>
                          </div>

                          <div className="col-md-6">
                            <h3 className="h5 text-success">
                              <i className="fas fa-graduation-cap me-2"></i>
                              Educational Applications
                            </h3>
                            <p>
                              Schools and educational institutions use chronological age for:
                            </p>
                            <ul>
                              <li>Grade placement and enrollment</li>
                              <li>Age-appropriate curriculum planning</li>
                              <li>Extracurricular activity eligibility</li>
                              <li>Standardized testing requirements</li>
                            </ul>

                            <h3 className="h5 text-success mt-4">
                              <i className="fas fa-balance-scale me-2"></i>
                              Legal Significance
                            </h3>
                            <p>
                              Chronological age determines many legal rights and
                              responsibilities including:
                            </p>
                            <ul>
                              <li>Voting eligibility</li>
                              <li>Driving privileges</li>
                              <li>Contractual capacity</li>
                              <li>Retirement benefits</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-light rounded">
                          <h4 className="h6 text-primary mb-2">
                            <i className="fas fa-lightbulb me-2"></i>
                            Pro Tip
                          </h4>
                          <p className="mb-0">
                            Use the "Calculate Age As Of" feature to determine your age
                            at any specific date in the past or future. This is particularly
                            useful for planning events, meeting age requirements, or
                            historical research.
                          </p>
                        </div>
                      </div>
                    </div>
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

export default ChronologicalAgeCalculator;