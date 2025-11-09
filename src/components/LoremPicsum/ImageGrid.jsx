// src/components/LoremPicsum/ImageGrid.js
import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ images, filters, loading, onImageClick, generateImageUrl }) => {
  if (images.length === 0 && !loading) {
    return (
      <div className="row">
        <div className="col-12 text-center py-5">
          <div className="text-muted">
            <i className="fas fa-images fa-3x mb-3"></i>
            <h4>No images to display</h4>
            <p>Click the refresh button to load images</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          image={image}
          index={index}
          filters={filters}
          onImageClick={onImageClick}
          generateImageUrl={generateImageUrl}
        />
      ))}
    </div>
  );
};

export default ImageGrid;