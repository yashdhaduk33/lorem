// src/components/LoremPicsum/FilterControls.js
import React from 'react';

const FilterControls = ({ filters, loading, onFilterChange, onApplyFilters }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h5 className="card-title mb-0">
              <i className="fas fa-sliders-h me-2"></i>
              Image Filters
            </h5>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-3">
                <label htmlFor="width" className="form-label fw-semibold">Width</label>
                <div className="input-group">
                  <input
                    type="number"
                    id="width"
                    className="form-control"
                    value={filters.width}
                    onChange={(e) => onFilterChange('width', parseInt(e.target.value) || 300)}
                    min="100"
                    max="1000"
                  />
                  <span className="input-group-text">px</span>
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="height" className="form-label fw-semibold">Height</label>
                <div className="input-group">
                  <input
                    type="number"
                    id="height"
                    className="form-control"
                    value={filters.height}
                    onChange={(e) => onFilterChange('height', parseInt(e.target.value) || 300)}
                    min="100"
                    max="1000"
                  />
                  <span className="input-group-text">px</span>
                </div>
              </div>

              <div className="col-md-2">
                <label htmlFor="blur" className="form-label fw-semibold">Blur</label>
                <select
                  id="blur"
                  className="form-select"
                  value={filters.blur}
                  onChange={(e) => onFilterChange('blur', parseInt(e.target.value))}
                >
                  <option value={0}>None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>

              <div className="col-md-2">
                <div className="form-check form-switch mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="grayscale"
                    checked={filters.grayscale}
                    onChange={(e) => onFilterChange('grayscale', e.target.checked)}
                  />
                  <label className="form-check-label fw-semibold" htmlFor="grayscale">
                    Grayscale
                  </label>
                </div>
              </div>

              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={onApplyFilters}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Loading...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sync-alt me-2"></i>
                      Refresh
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;