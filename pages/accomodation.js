import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Accomodation() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Accommodations</h1>
          </div>
        </section>
        <section id="chalets">
          <div className="contain">
            <div className="content_center">
              <h2>Welcome to Our Chalets</h2>
              <p>
                Experience luxury and comfort with our beautifully designed
                chalets, offering a perfect retreat for golf enthusiasts and
                nature lovers alike. Nestled amidst scenic landscapes, our
                accommodations provide a relaxing escape with modern amenities.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/cl1.png" />
                  </div>
                  <div className="text">
                    <h4>2-Bedroom Chalet</h4>
                    <p>
                      Cozy and well-furnished for a relaxing stay.One-bedroom
                      with a private balcony.Fully equipped kitchenette and
                      ensuite bathroom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/cl2.png" />
                  </div>
                  <div className="text">
                    <h4>3-Bedroom Chalet</h4>
                    <p>
                      Spacious living with premium interiors.Two-bedroom setup,
                      ideal for families or groups.Private patio with
                      breathtaking golf course views.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/cl3.png" />
                  </div>
                  <div className="text">
                    <h4>5-Bedroom Chalet</h4>
                    <p>
                      Ultimate comfort with exclusive amenities.Three-bedroom
                      suite with a fireplace & lounge.Complimentary golf access
                      and VIP services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="map_img">
          <div className="contain">
            <div className="image1">
              <img src="images/map.png" />
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image2">
                  <img src="images/mp1.png" />
                </div>
                <div className="text">
                  <img src="images/mli1.png" />
                  <h4>Fully equipped kitchens</h4>
                </div>
              </div>
              <div className="col1">
                <div className="image2">
                  <img src="images/mp2.png" />
                </div>
                <div className="text">
                  <img src="images/mli2.png" />
                  <h4>Television</h4>
                </div>
              </div>
              <div className="col1">
                <div className="image2">
                  <img src="images/mp3.png" />
                </div>
                <div className="text">
                  <img src="images/mli3.png" />
                  <h4>BBQ</h4>
                </div>
              </div>
              <div className="col1">
                <div className="image2">
                  <img src="images/mp4.png" />
                </div>
                <div className="text">
                  <img src="images/mli4.png" />
                  <h4>Fire Pit</h4>
                </div>
              </div>
            </div>
            <p>
              Hosting a golf tournament has never been easier! At Sherwood, we
              take care of every detail, from organizing tee times and
              scorekeeping to providing catering and on-course amenities.
              Whether it's a corporate event, charity fundraiser, or a friendly
              competition, our expert team ensures a seamless and memorable
              experience for all participants. Let us handle the logistics while
              you focus on enjoying the game and strengthening connections.
            </p>
          </div>
        </section>
        <section id="rental">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="images/rental.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Chalet Rental Only</h2>
                <p>
                  Looking for a corporate retreat, wedding venue, or family
                  reunion? We offer customized group packages tailored to your
                  needs.
                </p>
              <ul>
                <li>Group discounts for 5+ chalets.</li>
                <li>Private event planning services.</li>
                <li>Personalized golf tournaments & activities.</li>
              </ul>
              <div className="btn_blk">
                  <Link href="/" className="site_btn ">
                    Book Now
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
