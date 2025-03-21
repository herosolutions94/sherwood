import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CounterSection from "@/components/counter";

export default function Course() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>The Course</h1>
          </div>
        </section>
        {/* <section id="course">
          <div className="contain">
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Courses & Instructors</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Golf Accommodation</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Fitness Center</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Golf Practice</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Skill Development</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Basic Foundation</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="membership_benefit">
          <div className="contain">
            <div className="content_center">
              <h2>#1 Hidden Gem Golf Course in Canada</h2>
              <p>
                Nestled in a breathtaking natural landscape, this hidden gem is
                Canada’s best-kept golfing secret. Designed for both challenge
                and enjoyment, the course offers immaculately maintained
                fairways, rolling greens, and stunning scenery at every turn.
                Whether you're a seasoned golfer or a weekend enthusiast, the
                serene atmosphere and world-class course design provide an
                unforgettable experience. With top-tier facilities, a welcoming
                clubhouse, and an uncrowded, exclusive feel, this course stands
                out as a true golfer’s paradise. Discover why it's ranked #1 in
                Canada and experience golf at its finest.
              </p>
        
            </div>
            <div className="btn_blk">
                  <Link href="/" className="site_btn ">
                  Green Fee Rate
                  </Link>
                  <Link href="/" className="site_btn ">
                  Book a Tee Time
                  </Link>
                  <Link href="/" className="site_btn ">
                  Course Guide
                  </Link>
                </div>
            {/* <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene1.svg" />
                  </div>
                  <div className="text">
                    <h4>Golf Courses</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene2.svg" />
                  </div>
                  <div className="text">
                    <h4>Tournaments</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene3.svg" />
                  </div>
                  <div className="text">
                    <h4>Our Caddies</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <CounterSection />

        <section id="proshop" >
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/dress.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Dress Code & Clubhouse Information</h2>
                <p>
                  Designed for all skill levels, Sherwood Golf & Country Club
                  offers pristine fairways, scenic landscapes, and a challenge
                  for every golfer.
                </p>
                <ul>
                  <li>
                    Sed ut perspiciatis unde omnis iste natus error sit volupta
                  </li>
                  <li>Accusantium doloremque laudantium, totam rem aperi</li>
                  <li>Dolore magnam aliquam quaerat voluptatem</li>
                  <li>Ut enim ad minima veniam, quis nostrum exercitatio</li>
                </ul>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    View Course Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="bg2" className="mb">
          <div className="contain">
            <div className="content">
              <h2>Take Your Game To The Next Level.</h2>
              <p>
                We provide the high quality of championship grulf, striking
                views and outstanding service that we offer our valued guests.
              </p>
              <div className="btn_blk">
                <Link href="/" className="site_btn  color">
                  Become a Member
                </Link>
                <Link href="/" className="site_btn blank ">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
