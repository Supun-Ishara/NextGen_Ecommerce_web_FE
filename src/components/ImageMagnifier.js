import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'; // Import the CSS

const ImageMagnifier = () => {
  return (
    <div style={{ width: '400px' }}> {/* Adjust the container width */}
      <InnerImageZoom
        src="https://calabro.com.au/cdn/shop/products/lace-v-back-chiffon-bridesmaid-dresses-566321_800x800.webp?v=1704183427"
        zoomSrc="https://calabro.com.au/cdn/shop/products/lace-v-back-chiffon-bridesmaid-dresses-566321_800x800.webp?v=1704183427" // Optional, can be the same image
        zoomType="hover" // Defines zoom behavior (hover or click)
        alt="Product Image"
        zoomPreload={true} // Preload zoomed image for better performance
      />
    </div>
  );
};

export default ImageMagnifier;

