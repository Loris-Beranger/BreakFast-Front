import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import './styles.scss';

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i++;
        //console.log(ratingValue);

        return (
          <label>
            <input
              type="radio"
              name="rating"
              // TODO key="test", faire boucle dans l'index
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar className="star" color={ratingValue <= rating ? "#402218" : "#C68B59"} />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;