import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Testemonial = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://einfotech.in/images/einfo/ayush.jpeg"
            alt="..."
          ></img>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="para">Best app with future requirements of youth.</p>
          <h3>Ayush Maheshwari</h3>
        </div>
        <div>
          <img
            src="https://einfotech.in/images/einfo/jame_sir.jpg"
            alt="..."
          ></img>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="para">
            The best ever news app in the world I would say!!!. I mean it.
            Delivers exactly what you need
          </p>
          <h3 className="para">James Joel</h3>
        </div>
        <div>
          <img
            src="https://einfotech.in/images/einfo/shubham.jpeg"
            alt="..."
          ></img>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="para">
            Great thought and perfect implementation. App is very good with its
            content.
          </p>
          <h3 className="para">Shubham Gupta</h3>
          <p></p>
        </div>
      </Slider>
    </div>
  );
};

export default Testemonial;
