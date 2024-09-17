import React from "react";

import "../Card/styles.scss";
import { ReactComponent as StarIcon } from "../../assets/icons/icStar.svg";
import { ReactComponent as StarHalfFilledIcon } from "../../assets/icons/icHalfFilledStar.svg";

const Card = ({ product }) => {
  const { title, image, price, rating } = product;

  const getStarIcon = (index) => {
    if (index < Math.floor(rating.rate)) {
      return <StarIcon />;
    } else if (index < rating.rate) {
      return <StarHalfFilledIcon />;
    }
  };

  return (
    <div className="product-container">
      <img src={image} alt="product-image" className="product-image" />
      <h4  className="product-title">{title}</h4>
      <h4 className="product-price">₹ {price}</h4>
      <div className="rating-container">
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>{getStarIcon(index)}</span>
          ))}
        </div>
        <h4 className="product-rate">({rating.count})</h4>
      </div>
    </div>
  );
};

export default Card;
