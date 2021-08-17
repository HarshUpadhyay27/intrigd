import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../image/pic1.jpg";
import pic2 from "../image/pic2.jpg";
import pic3 from "../image/pic3.jpg";
import pic4 from "../image/pic4.jpg";
import pic5 from "../image/pic5.jpg";
import pic6 from "../image/pic6.jpg";

const Screenshot = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  return (
    <div>
      <h1>APP SCREENSHOTS</h1>
      <Slider {...settings}>
        <div>
          <img src={pic1} alt="..." />
        </div>
        <div>
          <img src={pic2} alt="..." />
        </div>
        <div>
          <img src={pic3} alt="..." />
        </div>
        <div>
          <img src={pic4} alt="..." />
        </div>
        <div>
          <img src={pic5} alt="..." />
        </div>
        <div>
          <img src={pic6} alt="..." />
        </div>
      </Slider>
    </div>
  );
};

export default Screenshot;
