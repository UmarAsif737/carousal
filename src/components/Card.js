import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="carousal-image" src={card.imageSrc} alt="imga" />
      </div>
      <div>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </div>
    </div>
  );
};

export default Card;
