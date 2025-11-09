// src/components/LoremPicsum/ImageModal.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ImageModal = ({ image, onClose }) => {
  return (
    <>
      <Helmet>
        <title>{`${image.author} - Lorem Picsum Gallery`}</title>
        <meta property="og:image" content={image.download_url} />
      </Helmet>

      <div
        className="modal fade show d-block"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="fas fa-info-circle me-2 text-primary"></i>
                Image Details
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={image.download_url}
                    alt={`By ${image.author}`}
                    className="img-fluid rounded"
                    style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column h-100">
                    <h6 className="text-primary mb-3">Image Information</h6>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-muted mb-1">Author</label>
                      <p className="fs-6 mb-0">{image.author}</p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-muted mb-1">Dimensions</label>
                      <p className="fs-6 mb-0">{image.width} × {image.height} pixels</p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-muted mb-1">Image URL</label>
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          value={image.url}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => window.open(image.url, '_blank')}
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => window.open(image.download_url, '_blank')}
                      >
                        <i className="fas fa-download me-2"></i>
                        Download Image
                      </button>
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

export default ImageModal;