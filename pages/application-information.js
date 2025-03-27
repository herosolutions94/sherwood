import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Application() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Memberships Application</h1>
          </div>
        </section>
        <section id="wedding_packages" className="appliaction">
          <div className="contain">
            <div className="content_center">
              <h2>Application Information & Membership Form</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <h4>Step 1:</h4>
                  <p>Choose your membership category.</p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Step 2:</h4>
                  <p>Download the application form below.</p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Step 3:</h4>
                  <p>Fill out your details and payment info.</p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Step 4:</h4>
                  <p>Await confirmation from our team.</p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Step 5:</h4>
                  <p>Submit the form via email or in person.</p>
                </div>
              </div>
            </div>
            <div className="btn_blk">
              <Link href="/" className="site_btn  color">
                Apply Now
              </Link>
              <Link href="/" className="site_btn ">
                Download Pdf Form <img src="images/download.svg" />
              </Link>
            </div>
          </div>
        </section>

        <section id="rules">
          <div className="contain">
            <h2>Rules & Regulations</h2>
            <p>
              To ensure an enjoyable experience for all golfers, we kindly ask
              you to follow our course etiquette and dress code guidelines.
            </p>
            <ul>
              <li>
                <strong>Course Etiquette:</strong> ⛳
              </li>
              <ul>
                <li>
                  Respect the Pace of Play – Keep up with the group ahead and
                  allow faster players to play through when necessary.
                </li>
                <li>
                  Repair Divots & Ball Marks – Help maintain the course by
                  fixing divots and pitch marks on greens.
                </li>
                <li>
                  Rake Bunkers – Smooth out the sand after playing from a bunker
                  to leave it in good condition for the next golfer.
                </li>
                <li>
                  Keep Noise Levels Down – Be mindful of fellow golfers and
                  maintain a respectful, quiet environment.
                </li>
                <li>
                  Follow Cart Rules – Use designated paths and avoid driving
                  near greens and tee boxes.
                </li>
              </ul>

              <li>
                <strong>Dress Code:</strong> 🎽
              </li>
              <ul>
                <li>
                 Men – Collared shirts, golf slacks or shorts,
                  and golf shoes are required. No denim, t-shirts, or athletic
                  shorts.
                </li>
                <li>
                 Women – Golf tops, skirts, slacks, or shorts
                  are required. No tank tops, denim, or gym wear.
                </li>
                <li>
                 Footwear – Soft-spiked or spikeless golf
                  shoes are required to protect the greens.
                </li>
              </ul>

              <li>
                We appreciate your cooperation in maintaining the integrity and
                quality of our course. Enjoy your game!
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
