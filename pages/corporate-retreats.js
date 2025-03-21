import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Corporate() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Corporate Events</h1>
          </div>
        </section>

        <section id="categories" className="corporate">
          <div className="contain">
            <div className="content_center">
              <h2>Mark Your Calendar Upcoming Golf Events</h2>
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
                    <img src="images/corp1.png" />
                  </div>
                  <div className="text">
                    <h4>Executive Retreats</h4>
                    <p>
                      Exclusive golf & conference experiences for corporate
                      executives.
                    </p>
                    <Link href="/" className="arrow-btn">
                      View Details
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/corp2.png" />
                  </div>
                  <div className="text">
                    <h4>Team Building Events</h4>
                    <p>
                      Boost teamwork with customized golf activities and
                      workshops.
                    </p>
                    <Link href="/" className="arrow-btn">
                      View Details
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/corp3.png" />
                  </div>
                  <div className="text">
                    <h4>Client Appreciation Days</h4>
                    <p>
                      Impress your clients with an unforgettable day on the
                      greens.
                    </p>
                    <Link href="/" className="arrow-btn">
                      View Details
                      <img src="/images/tick.svg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        </section>
      </main>
    </>
  );
}
