import React, { useState } from 'react';

const Size = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 text-gray-700 font-semibold">
        STYLE SIZE: {selectedSize}
      </div>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <label
            key={size}
            className={`
              w-8 h-8 flex items-center justify-center
              border border-gray-300 cursor-pointer
              ${selectedSize === size ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
            `}
          >
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              className="sr-only"
            />
            <span className="text-sm">{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Size;