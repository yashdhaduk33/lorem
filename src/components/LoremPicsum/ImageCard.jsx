// src/components/LoremPicsum/ImageCard.js
import React from 'react';

const ImageCard = ({ image, index, filters, onImageClick, generateImageUrl }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div 
        className="card h-100 shadow-sm image-card"
        onClick={() => onImageClick(image)}
        style={{ cursor: 'pointer' }}
      >
        <div className="card-img-wrapper" style={{ height: '250px', overflow: 'hidden' }}>
          <img
            src={generateImageUrl(image)}
            className="card-img-top h-100 object-fit-cover"
            alt={`Random image ${index + 1}`}
            loading="lazy"
          />
        </div>
        <div className="card-body text-center">
          <h6 className="card-title text-truncate">Image #{index + 1}</h6>
          <small className="text-muted">
            {filters.width} × {filters.height}px
            {filters.grayscale && ' • Grayscale'}
            {filters.blur > 0 && ` • Blur: ${filters.blur}`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;