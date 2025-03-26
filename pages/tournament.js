import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Tournament() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Tournaments</h1>
          </div>
        </section>

        <section id="golf">
          <div className="contain">
            <div className="content_center">
              <h2>Upcoming Tournaments</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tempor turpis quis libero imperdiet, vel semper mauris eleifend.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/golf.png" />
                </div>
              </div>
              <div className="col2">
                <div className="block">
                  <div className="inner">
                    <div className="text">
                      <h4>Event 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis
                      </p>
                      <span>To participate contact us at</span>
                      <Link href="/" className="">
                        info@sherwoodgolf.com
                      </Link>
                    </div>
                    <div className="blc_inn">
                      <ul>
                        <li>
                          <img src="/images/clock.svg" />
                          August 26, 202
                        </li>
                        <li>
                          <img src="/images/loc.svg" />
                          09:00 - 17:00
                        </li>
                        <li>
                          <img src="/images/cal.svg" />
                          Royal Golf
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="inner">
                    <div className="text">
                      <h4>Event 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis
                      </p>
                      <span>To participate contact us at</span>
                      <Link href="/" className="">
                        info@sherwoodgolf.com
                      </Link>
                    </div>
                    <div className="blc_inn">
                      <ul>
                        <li>
                          <img src="/images/clock.svg" />
                          August 26, 202
                        </li>
                        <li>
                          <img src="/images/loc.svg" />
                          09:00 - 17:00
                        </li>
                        <li>
                          <img src="/images/cal.svg" />
                          Royal Golf
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="inner">
                    <div className="text">
                      <h4>Event 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis
                      </p>
                      <span>To participate contact us at</span>
                      <Link href="/" className="">
                        info@sherwoodgolf.com
                      </Link>
                    </div>
                    <div className="blc_inn">
                      <ul>
                        <li>
                          <img src="/images/clock.svg" />
                          August 26, 202
                        </li>
                        <li>
                          <img src="/images/loc.svg" />
                          09:00 - 17:00
                        </li>
                        <li>
                          <img src="/images/cal.svg" />
                          Royal Golf
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="boutique" className=" golfclub">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Golf Tournaments at Sherwood Club</h2>
                <div className="italic">
                  Experience the Thrill of Competitive Golf
                </div>
                <p>
                  Join us for an exhilarating lineup of golf tournaments
                  designed for players of all skill levels. Whether you're a
                  seasoned professional or an enthusiastic amateur, our
                  beautifully maintained course provides the perfect backdrop
                  for exciting competition.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/golfclub.png" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="whychoose">
          <div className="contain">
            <div className="content_center">
              <h2>Why Choose Sherwood</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="icon">
                  <img src="images/wc1.png" />
                </div>
                <h4>Championship-level course</h4>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="images/wc2.png" />
                </div>
                <h4>Professional event coordination</h4>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
              <div className="coll">
                <div className="icon">
                  <img src="images/wc3.png" />
                </div>
                <h4>Exclusive hospitality & dining options</h4>
                <p>
                  Sit amet consectetur adipiscing elit eiusmod tempor incididunt
                  ut labore dolore
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reserveform">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/reserve.png" />
                  <div className="text">
                    <h3>Plan Your Perfect Golf Experience – Book Now!</h3>
                    <p>Seamless Reservations for Tournaments & Events</p>
                  </div>
                  <div className="playicon">
                    <img src="/images/play.svg" />
                  </div>
                </div>
              </div>
              <div className="col2">
                {/* <div className="outer">
                  <h3>Reserve Your Spot</h3>
                  <form>
                    <div className="row">
                      <h4>Personal Information</h4>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="Full Name"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type="text"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Phone Number"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id="frm-email"
                          type="email"
                          name="email"
                          autoComplete="tel"
                          placeholder="Email Address"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type=""
                          name=""
                          autoComplete=""
                          placeholder="Company Name"
                          className="input"
                          required
                        />
                      </div>
                      <h4>Booking Details</h4>
                      <div className="form_blk col-xs-6">
                        <select name="" className="input">
                          <option>Event Type</option>
                          <option value="electrician">1</option>
                          <option value="Plumber">2</option>
                          <option value="Handyman">3</option>
                        </select>
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type="text"
                          name=""
                          autoComplete=""
                          placeholder="Date & Time"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type=""
                          name=""
                          autoComplete=""
                          placeholder="Number of Players"
                          className="input"
                          required
                        />
                      </div>
                      <div className="form_blk col-xs-6">
                        <input
                          id=""
                          type=""
                          name=""
                          autoComplete=""
                          placeholder="Preferred Package"
                          className="input"
                          required
                        />
                      </div>
                      <h4>Additional Services Needed</h4>
                      <div className="">
                        <label className="flex label">
                          <input type="checkbox" className="w-4 h-4" />
                          <span>Golf Cart Rental</span>
                        </label>
                        <label className="flex label">
                          <input type="checkbox" className="w-4 h-4" />
                          <span>Catering Services</span>
                        </label>
                        <label className="flex label">
                          <input type="checkbox" className="w-4 h-4" />
                          <span>Private Instructor</span>
                        </label>
                        <label className="flex label">
                          <input type="checkbox" className="" />
                          <span>Club & Equipment Rental</span>
                        </label>
                      </div>
                      <div className="btn_blk">
                        <button type="submit" className="site_btn min_wid">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
                <h2>Let us plan your next tournament for you</h2>
                <p>
                  Hosting a golf tournament has never been easier! At Sherwood,
                  we take care of every detail, from organizing tee times and
                  scorekeeping to providing catering and on-course amenities.
                  Whether it's a corporate event, charity fundraiser, or a
                  friendly competition, our expert team ensures a seamless and
                  memorable experience for all participants. Let us handle the
                  logistics while you focus on enjoying the game and
                  strengthening connections.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn ">
                  Contact Us
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
