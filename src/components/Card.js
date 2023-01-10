import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="carousal-image" src={card.imageSrc} alt="imga" />
      </div>
      <div className="text-container">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
