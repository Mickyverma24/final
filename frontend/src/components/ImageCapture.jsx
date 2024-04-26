import React, { useState } from 'react';

const ImageScanner = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div>
      <input type="file" accept="image/*" capture="camera" onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt="Captured" />}
    </div>
  );
};

export default ImageScanner;
