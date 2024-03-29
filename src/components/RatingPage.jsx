import React, { useState } from 'react';

import { Rating } from 'react-simple-star-rating';

export default function RatingPage(props) {
  const [ratingValue, setRatingValue] = React.useState(0);
  const customIcons = [
      { icon: <i className="bi bi-fire" size={50} /> },
      { icon: <i className="bi bi-fire" size={50} /> },
      { icon: <i className="bi bi-fire" size={50} /> },
      { icon: <i className="bi bi-fire" size={50} /> },
      { icon: <i className="bi bi-fire" size={50} /> }
    ]

  const handleRating = (rate) => {
      setRatingValue(rate)
  }

  return (
      <Rating
        readonly
        transition
        ratingValue={ratingValue}
        customIcons={customIcons}
      />
    
  );
};