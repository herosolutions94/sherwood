import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Partnerships() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Hospitality Group & Commitments</h1>
          </div>
        </section>
        <section id="partner">
          <div className="contain">
            <div className="content_center">
              <h2>Our Trusted Partners</h2>
              <p>
                Building Strong Relationships to Deliver Excellence and
                Innovation in Every Collaboration.
              </p>
            </div>
            <ul>
              <li>
                <div className="image">
                  <img src="/images/logo1.png" />
                </div>
                <div className="text">
                  <h4>Google Pay</h4>
                  <p>
                    Seamlessly make payments with Google Pay—fast, secure, and
                    convenient.
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="/images/logo2.png" />
                </div>
                <div className="text">
                  <h4>Apple Pay</h4>
                  <p>
                    Enjoy effortless transactions with Apple Pay—secure, fast,
                    and easy.
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="/images/logo3.png" />
                </div>
                <div className="text">
                  <h4>Strike</h4>
                  <p>
                    Make secure and seamless payments with Stripe—trusted and
                    reliable for all your transactions.
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="/images/logo4.png" />
                </div>
                <div className="text">
                  <h4>Visa</h4>
                  <p>
                    Pay with ease and security using Visa—accepted worldwide for
                    all your purchases.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="group">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Why ParHospitality Group Ownershiptner with Sherwood?</h2>
                <p>
                  Experience luxury and convenience at Eden Hotels & Resorts
                  with our exclusive Pro Shop Boutique. Whether you're looking
                  for premium apparel, stylish accessories, or high-quality
                  essentials, we have everything to enhance your stay. Enjoy a
                  curated selection of branded merchandise, refreshing
                  beverages, and delicious snacks—all in a sophisticated
                  shopping environment. Elevate your experience with the perfect
                  blend of style, comfort, and convenience, only at Eden Hotels
                  & Resorts.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn color">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/group1.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsor">
          <div className="contain">
            <div className="content_center">
              <h2>Our Sponsorships & Social Commitments</h2>
              <p>
                With their expertise, we deliver reliable, scalable, and
                efficient solutions tailored to meet the needs of our clients.
              </p>
            </div>
            <div className="flex">
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
