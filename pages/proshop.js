import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Gallery from "@/components/gallery";
import FAQ from "@/components/faq";

export default function Proshop() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>ProShop & Boutique</h1>
          </div>
        </section>

        <section id="proshop">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/proshop.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Welcome to the Sherwood ProShop & Boutique</h2>
                <div className="italic">
                  Everything You Need for the Perfect Golf Experience
                </div>
                <p>
                  Gear up with the best in performance and style! Our Pro Shop
                  offers a premium selection of clothing, accessories, and
                  must-have essentials to keep you looking sharp and feeling
                  comfortable. Whether you're searching for high-quality
                  apparel, top-tier accessories, or exclusive branded
                  merchandise, we have everything you need.
                </p>
                <ul>
                  <li>
                    Premium Apparel – Stylish and functional clothing for every
                    occasion
                  </li>
                  <li>
                    Accessories – From gloves to hats, elevate your game with
                    the right gear
                  </li>
                  <li>
                    Exclusive Merchandise – Branded items you won’t find
                    anywhere else
                  </li>
                  <li>
                    Top-Quality Materials – Designed for durability and comfort
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="boutique">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Boutique: Lifestyle & Leisure Shopping</h2>
                <ul>
                  <li>
                    <h4>Luxury Apparel & Accessories</h4>
                    <p>
                      Casual wear, branded Sherwood merchandise, and premium
                      gifts.
                    </p>
                  </li>
                  <li>
                    <h4>Exclusive Golf Memorabilia</h4>
                    <p>Collectible items and souvenirs for golf enthusiasts.</p>
                  </li>
                  <li>
                    <h4>Health & Wellness Essentials</h4>
                    <p>
                      Sunscreens, hydration packs, and relaxation accessories.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/bou1.png" />
                  <div className="small_img">
                    <img src="/images/bou2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="destination">
          <div className="contain">
            <div className="content_center">
              <h2>A One-Stop Destination!</h2>
              <p>Discover Our Boutique</p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/d1.png" />
                  </div>
                  <h4>Shop with Style</h4>
                  <p>
                    Explore a curated selection of premium apparel, accessories,
                    and essentials.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/d2.png" />
                  </div>
                  <h4>Snacks & Treats</h4>
                  <p>Grab a quick bite with our range of delicious snacks.</p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/d3.png" />
                  </div>
                  <h4>Bar & Beverages</h4>
                  <p>
                    Refresh with our selection of soft drinks, coffee, and
                    cocktails.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/d4.png" />
                  </div>
                  <h4>Exclusive Merchandise</h4>
                  <p>
                    Discover unique items and specialty products you won’t find
                    anywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clubhouse">
          <div className="contain">
            <div className="content_center">
              <h2>Clubhouse Services & Amenities</h2>
            </div>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline-item">
                  <h3>Locker Rooms</h3>
                  <p>
                    The driving range gives golfers a chance to learn basics
                    course
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
                <div className="timeline-item">
                  <h3>Lounge & Dining</h3>
                  <p>
                    Lorem ipsum dolor sit amet, lore consec tetur adipiscing
                    elite
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
                <div className="timeline-item">
                  <h3>Equipment Rentals</h3>
                  <p>
                    Lorem ipsum dolor sit amet, lore consec tetur adipiscing
                    elite
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
                <div className="timeline-item">
                  <h3>Concierge Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet, lore consec tetur adipiscing
                    elite
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
              </div>
              <div className="timeline-line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="contain">
            <div className="content_center">
              <h2>Frequently Asked Questions</h2>
            </div>
            <FAQ />
          </div>
        </section>
      </main>
    </>
  );
}
