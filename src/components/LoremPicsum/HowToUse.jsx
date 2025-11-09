// src/components/LoremPicsum/HowToUse.js
import React from 'react';

const HowToUse = ({ filters }) => {
  // Add safety check for undefined filters
  const safeFilters = filters || {
    width: 300,
    height: 300,
    grayscale: false,
    blur: 0
  };

  const codeExamples = {
    basic: `https://picsum.photos/200/300`,
    specific: `https://picsum.photos/seed/picsum/200/300`,
    grayscale: `https://picsum.photos/200/300?grayscale`,
    blur: `https://picsum.photos/200/300?blur=2`,
    multiple: `https://picsum.photos/200/300?grayscale&blur=2`,
    custom: `https://picsum.photos/${safeFilters.width}/${safeFilters.height}${safeFilters.grayscale ? '?grayscale' : ''}${safeFilters.blur > 0 ? `${safeFilters.grayscale ? '&' : '?'}blur=${safeFilters.blur}` : ''}`
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-primary text-white">
            <h4 className="card-title mb-0">
              <i className="fas fa-rocket me-2"></i>
              Getting Started with Lorem Picsum
            </h4>
          </div>
          <div className="card-body">
            <p className="lead">
              Lorem Picsum provides beautiful, random images that you can use freely in your projects.
              Here's everything you need to know to get started.
            </p>
          </div>
        </div>

        {/* Basic Usage */}
        <div className="card shadow-sm mb-4">
          <div className="card-header">
            <h5 className="card-title mb-0 text-primary">
              <i className="fas fa-image me-2"></i>
              Basic Image Usage
            </h5>
          </div>
          <div className="card-body">
            <p>Use the simplest form to get a random image with specified dimensions:</p>

            <div className="bg-dark text-light p-3 rounded mb-3">
              <code className="text-info">{codeExamples.basic}</code>
            </div>

            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              <strong>Tip:</strong> Replace <code>200</code> and <code>300</code> with your desired width and height.
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <i className="fas fa-ruler-combined text-primary fa-2x"></i>
                </div>
                <h5 className="card-title">Custom Dimensions</h5>
                <p className="card-text text-muted">
                  Set any width and height (100-1000px) to get perfectly sized images for your layout.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <i className="fas fa-magic text-success fa-2x"></i>
                </div>
                <h5 className="card-title">Image Filters</h5>
                <p className="card-text text-muted">
                  Apply grayscale and blur effects (1-10) to match your design aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="card shadow-sm mb-4">
          <div className="card-header">
            <h5 className="card-title mb-0 text-primary">
              <i className="fas fa-cogs me-2"></i>
              Advanced Features
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h6><i className="fas fa-palette me-2 text-warning"></i>Grayscale Images</h6>
                <div className="bg-dark text-light p-3 rounded mb-2">
                  <code className="text-info">{codeExamples.grayscale}</code>
                </div>
                <small className="text-muted">Add <code>?grayscale</code> parameter</small>
              </div>

              <div className="col-md-6 mb-3">
                <h6><i className="fas fa-cloud-meatball me-2 text-info"></i>Blur Effect</h6>
                <div className="bg-dark text-light p-3 rounded mb-2">
                  <code className="text-info">{codeExamples.blur}</code>
                </div>
                <small className="text-muted">Add <code>?blur=1-10</code> for blur intensity</small>
              </div>
            </div>

            <div className="mt-3">
              <h6><i className="fas fa-code me-2 text-success"></i>Combined Filters</h6>
              <div className="bg-dark text-light p-3 rounded mb-2">
                <code className="text-info">{codeExamples.multiple}</code>
              </div>
              <small className="text-muted">Combine multiple parameters with <code>&</code></small>
            </div>
          </div>
        </div>

        {/* Your Current Configuration */}
        <div className="card shadow-sm mb-4">
          <div className="card-header">
            <h5 className="card-title mb-0 text-primary">
              <i className="fas fa-sliders-h me-2"></i>
              Your Current Configuration
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <h6>Generated URL:</h6>
                <div className="bg-light border p-3 rounded">
                  <code className="text-primary">{codeExamples.custom}</code>
                </div>
              </div>
              <div className="col-md-4">
                <h6>Your Settings:</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Width:</span>
                    <strong>{safeFilters.width}px</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Height:</span>
                    <strong>{safeFilters.height}px</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Grayscale:</span>
                    <strong>{safeFilters.grayscale ? 'Yes' : 'No'}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Blur:</span>
                    <strong>{safeFilters.blur > 0 ? safeFilters.blur : 'None'}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title mb-0 text-primary">
              <i className="fas fa-lightbulb me-2"></i>
              Common Use Cases
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-laptop-code text-primary me-3 mt-1"></i>
                  <div>
                    <h6>Web Development</h6>
                    <small className="text-muted">Placeholder images during development</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-paint-brush text-success me-3 mt-1"></i>
                  <div>
                    <h6>Design Mockups</h6>
                    <small className="text-muted">Visual content for prototypes</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="d-flex align-items-start">
                  <i className="fas fa-blog text-warning me-3 mt-1"></i>
                  <div>
                    <h6>Blog Content</h6>
                    <small className="text-muted">Featured images for articles</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;