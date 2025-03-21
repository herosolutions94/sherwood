import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";

export default function Scorecard() {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Course Guide & Scorecard</h1>
          </div>
        </section>

        <section id="instructors" className="pt courseguide">
          <div className="contain">
            <div className="content_center">
              <h2>Course Guide</h2>
              <p>
                Welcome to our Course Guide, designed to help you navigate each
                hole with ease and precision. Our course features a variety of
                challenges, from wide open fairways to tricky doglegs and scenic
                water hazards.
              </p>
            </div>
            <Slider {...settings}>
              <div className="item">
                <div className="inner">
                  <div className="image">
                    <img src="/images/cou1.png" />
                  </div>
                  <h4>The Open Tee</h4>
                  <p>
                    A challenging par 4 with wide fairways. Watch out for the
                    sand traps that guard the green on both sides.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner">
                  <div className="image">
                    <img src="/images/cou2.png" />
                  </div>
                  <h4>The Water Hazard</h4>
                  <p>
                    A par 3 featuring a scenic lake in front of the green.
                    Precision is key to avoid the water hazard.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner">
                  <div className="image">
                    <img src="/images/cou3.png" />
                  </div>
                  <h4>The Dogleg</h4>
                  <p>
                    A tricky dogleg left with a narrow fairway. Keep your drive
                    straight to avoid the trees on the left.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="inner">
                  <div className="image">
                    <img src="/images/cou4.png" />
                  </div>
                  <h4>The Uphill Challenge</h4>
                  <p>
                    A par 5 with an uphill climb. The fairway is tight, but a
                    well-placed drive can set you up for a great score.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section id="rate_card">
          <div className="contain">
            <div className="content_center">
              <h2>Sherwood Golf & Country Club – Official Scorecard</h2>
              <p>
                Track your game and improve your skills with our detailed
                scorecard.
              </p>
            </div>
            <div className="table-container">
              <table className="golf-table">
                <thead>
                  <tr>
                    <th>Hole</th>
                    <th>Par</th>
                    <th>Handicap</th>
                    <th>Black Tees</th>
                    <th>Blue Tees</th>
                    <th>White Tees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>4</td>
                    <td>12</td>
                    <td>112</td>
                    <td>112</td>
                    <td>112</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>5</td>
                    <td>8</td>
                    <td>234</td>
                    <td>234</td>
                    <td>234</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>564</td>
                    <td>564</td>
                    <td>564</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>4</td>
                    <td>15</td>
                    <td>875</td>
                    <td>875</td>
                    <td>875</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>3</td>
                    <td>17</td>
                    <td>322</td>
                    <td>322</td>
                    <td>322</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>5</td>
                    <td>5</td>
                    <td>632</td>
                    <td>632</td>
                    <td>632</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>4</td>
                    <td>10</td>
                    <td>463</td>
                    <td>463</td>
                    <td>463</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>4</td>
                    <td>13</td>
                    <td>464</td>
                    <td>464</td>
                    <td>464</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>2</td>
                    <td>2</td>
                    <td>135</td>
                    <td>135</td>
                    <td>135</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
