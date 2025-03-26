import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Galleria from "@/components/galleria";

export default function Weddings() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Wedding at Sherwood Golf</h1>
          </div>
        </section>

        <section id="boutique" className="pt">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>A Dream Wedding in a Stunning Natural Setting</h2>
                <p>
                  Celebrate your special day at Sherwood Golf & Country Club,
                  surrounded by breathtaking landscapes, elegant venues, and a
                  touch of luxury. Our serene environment provides the perfect
                  backdrop for an unforgettable wedding experience.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    Plan Your Wedding
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/wedding.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wedding_packages">
          <div className="contain">
            <div className="content_center">
              <h2>Tailored Wedding Packages for Your Perfect Day</h2>
              <p>
                Make your wedding day truly unforgettable with our thoughtfully
                designed wedding packages. Whether you prefer an intimate
                gathering or a grand celebration, Sherwood Golf & Country Club
                offers tailored options to suit your dream vision.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <h4>Classic Wedding Package</h4>
                  <p>
                    A simple yet elegant package for couples looking for a
                    beautiful ceremony with essential wedding services.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Premium Wedding Package</h4>
                  <p>
                    A refined wedding experience with enhanced services and
                    luxury elements to elevate your big day.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Custom Wedding Package</h4>
                  <p>
                    A fully customizable package designed to match your unique
                    wedding vision with exclusive services tailored to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn_blk">
              <Link href="/" className="site_btn ">
                Inquire Now
              </Link>
            </div>
          </div>
        </section>

        {/* <section id="proshop" className="catering">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/wedding2.png" />
                </div>
              </div>
              <div className="col2">
                <h2> Catering & Dining</h2>
                <ul>
                  <li>
                  Custom Menus: Curated by our expert chefs to match your preferences.
                  </li>
                  <li>
                  Buffet & Plated Options: Flexible choices to suit your guests.
                  </li>
                  <li>
                  Signature Drinks & Bar Services: Enhance your celebration with custom cocktails and premium beverages
                  </li>
                </ul>
                <div className="btn_blk">
                <Link href="/" className="site_btn">
                Book Now
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id="boutique" className="">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Exclusive Services</h2>
                <ul>
                  <li>
                  Dedicated wedding coordinator to assist with planning.
                  </li>
                  <li>
                  On-site accommodations for the couple and guests.
                  </li>
                  <li>
                  Décor, lighting, and entertainment coordination.
                  </li>
                </ul>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    Plan Your Wedding
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/wedding3.png" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="galleria">
          <div className="contain">
          <Galleria />
          </div>
          <div className="btn_blk">
              <Link href="/" className="site_btn ">
                Inquire Now
              </Link>
            </div>
        </section>


      </main>
    </>
  );
}
