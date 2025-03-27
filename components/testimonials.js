import React from "react";
import Link from "next/link";
import Slider from "react-slick";
export default function Testimonials() {
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
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
            <div className="item">
              <div className="inner">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
                <div className="profile">
                  <div className="image">
                    <img src="/images/dp1.png" />
                  </div>
                  <div className="text">
                  <h5>Jack Albert</h5>
                  <h6>- Team Trainer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
                <div className="profile">
                  <div className="image">
                    <img src="/images/dp1.png" />
                  </div>
                  <div className="text">
                  <h5>Jack Albert</h5>
                  <h6>- Team Trainer</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
                <div className="profile">
                  <div className="image">
                    <img src="/images/dp1.png" />
                  </div>
                  <div className="text">
                  <h5>Jack Albert</h5>
                  <h6>- Team Trainer</h6>
                  </div>
                </div>
              </div>
            </div>
   
      </Slider>
    </>
  );
}
