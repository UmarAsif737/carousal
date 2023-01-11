import React, { useEffect, useState } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { cardData } from "./data";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const Carousal = () => {
  const size = useWindowSize();
  // if (size.width>=) {

  // }
  console.log(size.width);
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
    infinite: false,
    dots: true,
    initialSlide: 0,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  console.log(settings.slidesToShow);
  return (
    <>
      <div className="main-container">
        <SlickSlider {...settings}>
          {size.width <= 750
            ? cardData
                .slice(0, 5)
                .map((card) => <div>{card.title && <Card card={card} />}</div>)
            : size.width <= 1024
            ? cardData
                .slice(0, 6)
                .map((card) => <div>{card.title && <Card card={card} />}</div>)
            : cardData.map((card) => (
                <div>{card.title && <Card card={card} />}</div>
              ))}
        </SlickSlider>
      </div>
    </>
  );
};

export default Carousal;
