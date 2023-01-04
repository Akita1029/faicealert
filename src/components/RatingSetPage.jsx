import React, { useState } from 'react';

import { Rating } from 'react-simple-star-rating';

export default function RatingSetPage(props) {
  const [ratingValue, setRatingValue] = React.useState(0);
  const customIcons = [
      { icon: <i className="bi bi-fire rounded m-2 fs-4"/> },
      { icon: <i className="bi bi-fire rounded m-2 fs-4"/> },
      { icon: <i className="bi bi-fire rounded m-2 fs-4"/> },
      { icon: <i className="bi bi-fire rounded m-2 fs-4"/> },
      { icon: <i className="bi bi-fire rounded m-2 fs-4"/> }
    ]

  const handleRating = (rate) => {
      setRatingValue(rate)
  }

  return (
      <Rating
        transition
        ratingValue={ratingValue}
        customIcons={customIcons}
      />
    
  );
};