import React from "react";
import Slider from "react-slick";
import Text from "@/components/text";

export default function Testimonials({ testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1025,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 769,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials && testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div className="item" key={index}>
            <div className="inner">
              <Text string={testimonial.message} />
              <div className="profile">
                <div className="text">
                  <h5>{testimonial.name}</h5>
                  <h6>{testimonial.post}</h6>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No testimonials available</p>
      )}
    </Slider>
  );
}
