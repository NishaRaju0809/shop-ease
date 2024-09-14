import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummyImg1 from "../../assets/images/dummyImg1.png";
import dummyImg2 from "../../assets/images/dummyImg2.png";
import './styles.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
  };

  return (
    <div>
      <Slider {...settings}>
          <img src={dummyImg1}  alt="dummy-image"/>
          <img src={dummyImg2}  alt="dummy-image"/>
          <img src={dummyImg1}  alt="dummy-image"/>
      </Slider>
    </div>
  );
};

export default Carousel;
