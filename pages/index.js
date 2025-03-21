import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/testimonials";
import CounterSection from "@/components/counter";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <>
      <main>
        <section id="banner">
          <div className="contain">
            <div className="content">
              <h1>#1 Hidden Gem Golf Course in Canada</h1>
            </div>
          </div>
        </section>
        <section id="intro">
          <div className="contain">
            <div className="flex">
              <div className="col pr">
                <div className="image">
                  <img src="/images/intro1.png" />
                </div>
              </div>
              <div className="colr">
                <h2>A grateful championship 18 hole golf club wide range</h2>
                <p>
                  Sherwood Golf & Country Club blends a rich history in
                  hospitality with a deep passion for golf. As a private,
                  family-owned 18-hole course open to the public, we offer an
                  exceptional golf experience alongside luxury "Stay & Play"
                  accommodations.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="col">
                <h2>Stay & Play Packages at Sherwood</h2>
                <p>
                  Experience the ultimate golf getaway with our exclusive Stay &
                  Play packages at Sherwood. Enjoy luxurious accommodations,
                  world-class golfing, and breathtaking landscapes—all in one
                  unforgettable experience.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn color">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="colr pl">
                <div className="image">
                  <img src="/images/intro2.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CounterSection />

        <section id="tournament">
          <div className="contain">
            <div className="flex-heading">
              <h2>Our Annual Golf Tournament</h2>
              <p>
                As a member of our golf club, you gain access to an array of
                exclusive benefits and privileges. We ensure that your
                experience with us is nothing short of exceptional.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="text">
                    <span>01</span>
                    <h4>
                      <img src="/images/calendar.svg" />
                      8:00 am - 5:00 pm (March 18, 2024)
                    </h4>
                  </div>
                  <div className="image">
                    <img src="/images/tournament1.png" />
                  </div>
                  <div className="flex-heading">
                    <h4>Spectacular Golf Tournament</h4>
                    <p>
                      Our meticulously designed 18-hole championship course
                      offers a tournament.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="text">
                    <span>01</span>
                    <h4>
                      <img src="/images/calendar.svg" />
                      8:00 am - 5:00 pm (March 18, 2024)
                    </h4>
                  </div>
                  <div className="image">
                    <img src="/images/tournament2.png" />
                  </div>
                  <div className="flex-heading">
                    <h4>N40 Golf Club Championship</h4>
                    <p>
                      Our meticulously designed 18-hole championship course
                      offers a tournament.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_blk">
              <Link href="/" className="site_btn">
                Explore More Tournaments
              </Link>
            </div>
          </div>
        </section>

        <section id="categories">
          <div className="contain">
            <div className="content_center">
              <h2>Explore Sherwood</h2>
              <p>
                Sherwood delight ourselves on the high quality of championship
                grulf and marvellous service that we offer our valued visitors.
                Membership includes the opportunity to play in weekly and
                monthly.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/c1.png" />
                  </div>
                  <div className="text">
                    <h4>The Club</h4>
                    <p>
                      A luxurious retreat with fine dining and premium
                      amenities.
                    </p>
                    <Link href="/" className="arrow-btn">
                      Learn More
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/c2.png" />
                  </div>
                  <div className="text">
                    <h4>The Course</h4>
                    <p>
                      A scenic, challenging golf course designed for all skill
                      levels.
                    </p>
                    <Link href="/" className="arrow-btn">
                      Learn More
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/c3.png" />
                  </div>
                  <div className="text">
                    <h4>The Charlets</h4>
                    <p>
                      Elegant, cozy accommodations surrounded by nature’s beauty
                      and tranquility.
                    </p>
                    <Link href="/" className="arrow-btn">
                      Learn More
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="flex">
            <div className="col1">
              <div className="image">
                <img src="/images/testi1.png" />
              </div>
            </div>
            <div className="col2">
              <div className="contain">
                <Testimonials />
              </div>
            </div>
          </div>
        </section>
        <section id="corporate">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Corporate & Events</h2>
                <p>
                  Sherwood Golf & Country Club blends a rich history in
                  hospitality with a deep passion for golf. As a private,
                  family-owned 18-hole course open to the public, we offer an
                  exceptional golf experience alongside luxury "Stay & Play"
                  accommodations.
                </p>
                <div className="image">
                  <img src="/images/cor1.png" />
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/cor2.png" />
                </div>
                <div className="block">
                  <div className="inner">
                    <div className="flx">
                      <div className="first">
                        <div className="img">
                          <img src="/images/ci1.svg" />
                        </div>
                        <h4>Fix your wrists to fix your swing faults</h4>
                      </div>
                      <span>01</span>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="inner">
                    <div className="flx">
                      <span>02</span>
                      <div className="first">
                        <div className="img">
                          <img src="/images/ci2.svg" />
                        </div>
                        <h4>Fix your wrists to fix your swing faults</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="inner">
                    <div className="flx">
                      <div className="first">
                        <div className="img">
                          <img src="/images/ci3.svg" />
                        </div>
                        <h4>Fix your wrists to fix your swing faults</h4>
                      </div>
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="contain">
            <div className="content_center">
              <h2>Guest Gallery</h2>
              <p>
                Follow <a href="">@Sherwood </a>for more photos
              </p>
            </div>
            <Gallery />
          </div>
        </section>
      </main>
    </>
  );
}
