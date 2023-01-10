import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { cardData } from "./data";

const Carousal = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: "-5%",
          zIndex: "1",
          height: "50px",
          width: "50px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "-5%",
          zIndex: "1",
          height: "50px",
          width: "50px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-container">
        <Slider {...settings}>
          {cardData.map((card) => (
            <Card card={card} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousal;
