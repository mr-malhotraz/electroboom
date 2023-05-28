import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categories.css";

class MultiItemCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            arrows: false,

            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            arrows: false,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container categories">
        <Slider {...settings} className="slider">
          <div className="slide">
            <img src="images/c1.png" className="img-fluid" />
            <div class="slide__caption">Computers & Tablets</div>
          </div>
          <div className="slide">
            <img src="images/c2.png" className="img-fluid" />
            <div class="slide__caption">Home Appliances</div>
          </div>
          <div className="slide">
            <img src="images/c3.png" className="img-fluid" />
            <div class="slide__caption">Accessories</div>
          </div>
          <div className="slide">
            <img src="images/c4.png" className="img-fluid" />
            <div class="slide__caption">Phones & Wearables</div>
          </div>
          <div className="slide">
            <img src="images/c5.png" className="img-fluid" />
            <div class="slide__caption">Audio & Video</div>
          </div>
          <div className="slide">
            <img src="images/c6.png" className="img-fluid" />
            <div class="slide__caption">Televisions</div>
          </div>
          <div className="slide">
            <img src="images/c7.webp" className="img-fluid" />
            <div class="slide__caption">Kitchen Appliances</div>
          </div>
          <div className="slide">
            <img src="images/c8.png" className="img-fluid" />
            <div class="slide__caption">Smart Devices</div>
          </div>
          <div className="slide">
            <img src="images/c9.png" className="img-fluid" />
            <div class="slide__caption">Gaming</div>
          </div>
          <div className="slide">
            <img src="images/c10.png" className="img-fluid" />
            <div class="slide__caption">Cameras</div>
          </div>
          <div className="slide">
            <img src="images/c11.png" className="img-fluid" />

            <div class="slide__caption">Personal Care</div>
          </div>
          <div className="slide">
            <img src="images/c12.png" className="img-fluid" />
            <div class="slide__caption">Health & Fitness</div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default MultiItemCarousel;
