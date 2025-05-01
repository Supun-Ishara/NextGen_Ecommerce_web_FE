import React, { useState, useEffect } from "react";

const PriceRangeSlider = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, priceRange }) => {
  // Default price range if not provided
  const defaultRange = priceRange || { min: 0, max: 10000 };
  
  // Local state for the slider values
  const [sliderMin, setSliderMin] = useState(minPrice || defaultRange.min);
  const [sliderMax, setSliderMax] = useState(maxPrice || defaultRange.max);

  // Update parent component state when slider values change
  useEffect(() => {
    if (setMinPrice) setMinPrice(Number(sliderMin));
    if (setMaxPrice) setMaxPrice(Number(sliderMax));
  }, [sliderMin, sliderMax, setMinPrice, setMaxPrice]);

  return (
    <div className="price-filter mb-4">
      <div className="d-flex justify-content-between mb-2">
        <span>${sliderMin}</span>
        <span>${sliderMax}</span>
      </div>
      
      <div className="price-slider-container mb-3">
        <input
          type="range"
          className="form-range"
          min={defaultRange.min}
          max={defaultRange.max}
          step="50"
          value={sliderMin}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value < sliderMax) {
              setSliderMin(value);
            }
          }}
        />
        <input
          type="range"
          className="form-range mt-1"
          min={defaultRange.min}
          max={defaultRange.max}
          step="50"
          value={sliderMax}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value > sliderMin) {
              setSliderMax(value);
            }
          }}
        />
      </div>
      
      <div className="d-flex align-items-center gap-10">
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="minPriceInput"
            placeholder="From"
            value={sliderMin}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= defaultRange.min && value < sliderMax) {
                setSliderMin(value);
              }
            }}
          />
          <label htmlFor="minPriceInput">From</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="maxPriceInput"
            placeholder="To"
            value={sliderMax}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value <= defaultRange.max && value > sliderMin) {
                setSliderMax(value);
              }
            }}
          />
          <label htmlFor="maxPriceInput">To</label>
        </div>
      </div>

      <button 
        className="btn btn-primary btn-sm w-100 mt-3"
        onClick={() => {
          // This button is to explicitly apply the filter
          if (setMinPrice) setMinPrice(Number(sliderMin));
          if (setMaxPrice) setMaxPrice(Number(sliderMax));
        }}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default PriceRangeSlider;