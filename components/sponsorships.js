import React from "react";
import Link from "next/link";
import Slider from "react-slick";
export default function Sponsorships() {
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="inner">
            <img src="/images/sp1.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp2.png" />
          </div>
        </div>

        <div className="item">
          <div className="inner">
            <img src="/images/sp3.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp4.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp5.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp6.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp7.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp8.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp9.png" />
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <img src="/images/sp10.png" />
          </div>
        </div>

      </Slider>
    </>
  );
}
