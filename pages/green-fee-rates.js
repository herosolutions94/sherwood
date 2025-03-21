import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";

export default function Rates() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Green Fee Rates</h1>
          </div>
        </section>

        <section id="rate_card">
          <div className="contain">
            <div className="content_center">
              <h2>Green Fee Rates </h2>
              <p>Experience the Golf Trip of Your Dreams With Us</p>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Weekday Rate</th>
                    <th>Weekend Rate</th>
                    <th>Twilight Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18-Hole Round</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <td>9-Hole Round</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <td>Junior Rate</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <td>Senior Rate</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <td>Cart Rental (Per Player)</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      
        <section id="proshop" className="rateblock">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/greenrate.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Play on Nova Scotia’s #1 Hidden Gem Golf Course</h2>
                <p>
                Enjoy competitive green fees, premium facilities, and an unforgettable golfing experience at Sherwood Golf & Country Club.
                </p>
                <div className="btn_blk">
                <Link href="/" className="site_btn">
                Book Your Tee Time
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" className="mb">
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
      </main>
    </>
  );
}
