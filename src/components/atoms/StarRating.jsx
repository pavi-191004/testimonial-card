import React from "react";

const StarRating = ({ count }) => (
  <div className="stars">
    {Array(count)
      .fill("⭐")
      .map((star, index) => (
        <span key={index}>{star}</span>
      ))}
  </div>
);

export default StarRating;
