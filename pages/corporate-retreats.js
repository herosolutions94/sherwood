import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Gallery from "@/components/gallery";


export default function Corporate() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Corporate Retreats & Meetings</h1>
          </div>
        </section>

        <section id="packages">
          <div className="contain">
            <div className="content_center">
              <h2>Corporate Packages</h2>
              <p>
                Sherwood delight ourselves on the high quality of championship
                grulf and marvellous service that we offer our valued visitors.
                Membership includes the opportunity to play in weekly and
                monthly.
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/pk1.png" />
                  </div>
                  <h3>Corporate Passes</h3>
                  <p>
                    Gain access to premium golf facilities with our exclusive
                    corporate passes. Perfect for businesses looking to offer
                    employees or clients a first-class golfing experience with
                    added privileges and benefits.
                  </p>
                  <div className="btn_blk">
                    <Link href="/" className="site_btn ">
                      Choose Your Package
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/pk2.png" />
                  </div>
                  <h3>Corporate Stay & Play</h3>
                  <p>
                    Combine business with leisure in our luxurious chalets while
                    enjoying unlimited golf access. Ideal for corporate
                    retreats, team-building events, or executive getaways in a
                    tranquil and inspiring environment.
                  </p>
                  <div className="btn_blk">
                    <Link href="/" className="site_btn color">
                      Choose Your Package
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="image">
                    <img src="images/pk3.png" />
                  </div>
                  <h3>Corporate Golf Tournament</h3>
                  <p>
                    Host an unforgettable corporate golf tournament with our
                    fully managed event services. From course reservations to
                    catering and prizes, we ensure a seamless and prestigious
                    experience for your business and guests.
                  </p>
                  <div className="btn_blk">
                    <Link href="/" className="site_btn color">
                      Choose Your Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="tournament">
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
        <section id="destination">
          <div className="contain">
            <div className="content_center">
              <h2>Customization & Services</h2>
              <p>
                Sherwood delight ourselves on the high quality of championship
                grulf and marvellous service that we offer our valued visitors
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cus1.png" />
                  </div>
                  <h4>Professional Event Planners</h4>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cus2.png" />
                  </div>
                  <h4>Branded Merchandise for Corporate Gifts</h4>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cus3.png" />
                  </div>
                  <h4>Catering & Gourmet Dining</h4>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cus4.png" />
                  </div>
                  <h4>Golf Clinics for Attendees</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bg2" className="custom_ser">
          <div className="contain">
            <div className="ballimage">
              <img src="/images/ball.png" />
            </div>
            <div className="flex">
              <div className="coll">
                <div className="head">
                  <img src="/images/ball1.svg" />
                  <h4>100% Success Rate</h4>
                </div>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
              <div className="coll">
                <div className="head">
                  <img src="/images/ball2.svg" />
                  <h4>Expert Legal Services</h4>
                </div>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
              <div className="coll">
                <div className="head">
                  <img src="/images/ball3.svg" />
                  <h4>Highly Recommend</h4>
                </div>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="boutique" className="even_setting pt">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Unforgettable Corporate Events in a Stunning Setting</h2>
                <p>
                  Host your next corporate event in a luxurious and tranquil
                  environment. Whether it's a business meeting, team-building
                  retreat, or client appreciation event, our golf club provides
                  an unmatched experience tailored to your needs.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    Plan Your Corporate Event
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/es1.png" />
                  <div className="small_img">
                    <img src="/images/es2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="proshop" className="rateblock">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/venue.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Venue & Facilities</h2>
                <p>
                  Our club offers a range of indoor and outdoor venues, equipped
                  with state-of-the-art technology and premium amenities
                </p>
                <ul>
                  <li>Conference Rooms with AV Setup</li>
                  <li>Outdoor Banquet Areas Overlooking the Greens</li>
                  <li>Private Dining & Catering Services</li>
                  <li>Lounge & Cocktail Bar</li>
                </ul>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    View Our Venues
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="sher_offer">
          <div className="contain">
            <div className="content_center">
              <h2>What Sherwood has to Offer</h2>
              <p>
                Sherwood is more than just a destination—it’s an unparalleled
                experience that blends luxury, nature, and recreation. Whether
                you're here for a relaxing getaway, an unforgettable round of
                golf, or a refined dining experience, Sherwood has something for
                everyone.
              </p>
            </div>
            <div className="col">
              <div className="inner">
                <div className="icon">
                  <div className="image">
                    <img src="/images/of1.png" alt="Club House" />
                  </div>
                  <h4>Club House</h4>
                </div>
                <div className="text">
                  <ul>
                    <li>A welcoming hub of relaxation and socialization</li>
                    <li>
                      Fine dining and casual options with exceptional service
                    </li>
                    <li>Lounge areas to unwind after a round of golf</li>
                    <li>
                      Exclusive member benefits and access to private events
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <div className="icon">
                  <div className="image">
                    <img src="/images/of2.png" alt="Meeting Rooms" />
                  </div>
                  <h4>Meeting Rooms</h4>
                </div>
                <div className="text">
                  <ul>
                    <li>
                      State-of-the-art event spaces for business meetings,
                      conferences, and retreats
                    </li>
                    <li>
                      Fully equipped with modern technology and comfortable
                      seating
                    </li>
                    <li>
                      Customizable setups for corporate events, workshops, and
                      private gatherings
                    </li>
                    <li>
                      Professional event planning and catering services
                      available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <div className="icon">
                  <div className="image">
                    <img src="/images/of3.png" alt="Chalets" />
                  </div>
                  <h4>Chalets</h4>
                </div>
                <div className="text">
                  <ul>
                    <li>
                      Luxurious and cozy accommodations with modern amenities
                    </li>
                    <li>Stunning views of the surrounding landscapes</li>
                    <li>
                      Perfect for weekend getaways, family vacations, or
                      romantic retreats
                    </li>
                    <li>Access to dining, golf, and outdoor activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <div className="icon">
                  <div className="image">
                    <img src="/images/of4.png" alt="Golf Course" />
                  </div>
                  <h4>Golf Course</h4>
                </div>
                <div className="text">
                  <ul>
                    <li>
                      Championship-level course with pristine fairways and
                      scenic greens
                    </li>
                    <li>
                      Designed for all skill levels, offering both challenge and
                      playability
                    </li>
                    <li>
                      Peaceful and uncrowded environment for an enjoyable round
                    </li>
                    <li>On-site pro shop with premium golf gear and apparel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="contain">
            <Gallery />
          </div>
        </section>

      </main>
    </>
  );
}
