// src/components/LoremPicsum/LoremPicsum.js
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";

import axios from 'axios';
import ImageGrid from './ImageGrid';
import FilterControls from './FilterControls';
import ImageModal from './ImageModal';
import HowToUse from './HowToUse';
import './LoremPicsum.css';

const LoremPicsum = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'how-to-use'
  const [filters, setFilters] = useState({
    width: 300,
    height: 300,
    grayscale: false,
    blur: 0
  });

  // Fetch random images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const newImages = [];
      for (let i = 0; i < 9; i++) {
        const url = `https://picsum.photos/${filters.width}/${filters.height}?random=${Date.now() + i}`;
        newImages.push({
          id: Date.now() + i,
          url: url,
          infoUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/info`
        });
      }
      setImages(newImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  // Fetch image details
  const fetchImageDetails = async (image) => {
    try {
      const response = await axios.get(image.infoUrl);
      setSelectedImage(response.data);
    } catch (error) {
      console.error('Error fetching image details:', error);
      setSelectedImage({
        author: 'Unknown',
        width: filters.width,
        height: filters.height,
        download_url: image.url,
        url: image.url
      });
    }
  };

  // Load images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleApplyFilters = () => {
    fetchImages();
  };

  const generateImageUrl = (image) => {
    let url = `https://picsum.photos/${filters.width}/${filters.height}?random=${image.id}`;
    if (filters.grayscale) url += '&grayscale';
    if (filters.blur > 0) url += `&blur=${filters.blur}`;
    return url;
  };

  return (
    <>
      <Helmet>
        <title>Lorem Picsum Gallery — Free Random Images, Photos & Stock Collection</title>
        <meta
          name="description"
          content="Explore the Lorem Picsum Gallery — a free collection of random, high-quality, and customizable images. Download beautiful photos, set custom sizes, apply filters, and use them for your design or web projects instantly."
        />
        <meta
          name="keywords"
          content="lorem picsum, lorem picsum gallery, random images, free stock photos, placeholder images, random photo generator, free image gallery, picsum photos, image API, dummy images, photo collection, web design resources, hd photos, image generator, creative photos, sample images"
        />
        <meta property="og:title" content="Lorem Picsum Gallery — Free Random Images & Beautiful Photos" />
        <meta
          property="og:description"
          content="Discover beautiful, random, and free photos from Lorem Picsum. Perfect for design, development, and creative projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lorem Picsum Gallery — Free Random Images & Beautiful Photos" />
        <meta
          name="twitter:description"
          content="Free random photos and images from Lorem Picsum. Ideal for web design, development, and creative use."
        />
        <meta name="twitter:image" content="https://picsum.photos/1200/630" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container py-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="text-center">
              <h1 className="display-4 fw-bold text-primary mb-3">Lorem Picsum Gallery</h1>
              <p className="lead text-muted">Beautiful random images for your projects</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-white border-0">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
                      onClick={() => setActiveTab('gallery')}
                      type="button"
                    >
                      <i className="fas fa-images me-2"></i>
                      Image Gallery
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'how-to-use' ? 'active' : ''}`}
                      onClick={() => setActiveTab('how-to-use')}
                      type="button"
                    >
                      <i className="fas fa-book me-2"></i>
                      How to Use
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="tab-pane fade show active">
              {/* Filter Controls */}
              <FilterControls
                filters={filters}
                loading={loading}
                onFilterChange={handleFilterChange}
                onApplyFilters={handleApplyFilters}
              />

              {/* Image Grid */}
              <ImageGrid
                images={images}
                filters={filters}
                loading={loading}
                onImageClick={fetchImageDetails}
                generateImageUrl={generateImageUrl}
              />
            </div>
          )}

          {/* How to Use Tab */}
          {activeTab === 'how-to-use' && (
            <div className="tab-pane fade show active">
              <HowToUse filters={filters} />
            </div>
          )}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </>
  );
};

export default LoremPicsum;