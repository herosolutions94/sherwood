import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Packages() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Stay & Play Packages and Specials</h1>
          </div>
        </section>

        <section id="packages">
          <div className="contain">
            <div className="content_center">
              <h2>Stay & Play Packages</h2>
            </div>
            <div className="head">
              <span>01</span>Sunday to Wednesday
            </div>
            <div className="flex mb">
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="head">
              <span>02</span>Thursday to Saturday
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Weekend Golf Retreat</h4>
                  <p>2 nights in a deluxe chalet + 2 rounds of golf.</p>
                  <ul>
                    <li>2 nights in a deluxe chalet + 2 rounds of golf.</li>
                    <li>
                      Complimentary breakfast & 10% off pro shop purchases.
                    </li>
                    <li>Quick weekend getaways with friends or family.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rates">
          <div className="contain">
            <div className="content_center">
              <h2>Specials", with early bird special rates</h2>
            </div>
            <h4>Early Bed Specials</h4>
            <div className="bloc">
              <div className="image">
                <img src="images/rt1.png" />
              </div>
    
              <ul>
              <h4>INFO</h4>
                <li>2 round of Golf with Golf Cart </li>
                <li>1 Person: $320</li>
                <li>2 People: $269 pp </li>
                <li>3 People: $259 pp </li>
                <li>4 People: $240 pp </li>
              </ul>
            </div>
            <h4>Fall Specials</h4>
            <div className="bloc">
              <div className="image">
                <img src="images/rt1.png" />
              </div>
    
              <ul>
              <h4>INFO</h4>
                <li>2 round of Golf with Golf Cart </li>
                <li>1 Person: $320</li>
                <li>2 People: $269 pp </li>
                <li>3 People: $259 pp </li>
                <li>4 People: $240 pp </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
