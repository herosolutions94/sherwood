import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Request() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Booking Requests</h1>
          </div>
        </section>

        <section id="request-form">
          <div className="contain">
            <div className="content_center">
              <h2>Booking Request Form</h2>
              <p>
                Experience luxury and comfort with our beautifully designed
                chalets, offering a perfect retreat for golf enthusiasts and
                nature lovers alike. Nestled amidst scenic landscapes, our
                accommodations provide a relaxing escape with modern amenities.
              </p>
            </div>
            <div className="outer">
              <form className="booking-form">
                <div className="form-blk col-xs-12">
                  <label>What are you looking to do?</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="lookingToDo"
                        className="input"
                      />{" "}
                      Stay Only
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="lookingToDo"
                        className="input"
                      />{" "}
                      Stay & Play
                    </label>
                  </div>
                </div>

                <div className="form-blk col-xs-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input"
                    required
                  />
                </div>
                <div className="form-blk col-xs-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-6">
                  <label>Email</label>
                  <input type="email" name="email" className="input" required />
                </div>
                <div className="form-blk col-xs-6">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-6">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="input"
                    required
                  />
                </div>
                <div className="form-blk col-xs-6">
                  <label>State/Province</label>
                  <input
                    type="text"
                    name="stateProvince"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>How would you like us to contact you?</label>
                  <select name="contactMethod" className="input">
                    <option>Please Select</option>
                  </select>
                </div>

                <div className="form-blk col-xs-6">
                  <label>Arrival Date</label>
                  <input
                    type="date"
                    name="arrivalDate"
                    className="input"
                    required
                  />
                </div>
                <div className="form-blk col-xs-6">
                  <label>Departure Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label className="checkbox-group ">
                    <input
                      type="checkbox"
                      name="flexibleDates"
                      className="input"
                    />{" "}
                    My dates are flexible
                  </label>
                </div>

                <div className="form-blk col-xs-12">
                  <label># of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>
                    Would you like us to pick you up from the airport?
                  </label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="airportPickup"
                        className="input"
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="airportPickup"
                        className="input"
                      />{" "}
                      No
                    </label>
                  </div>
                </div>

                <div className="form-blk col-xs-12">
                  <label>Number of Rooms Required</label>
                  <input
                    type="number"
                    name="rooms"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>Please select your preferred room type</label>
                  <a href="#" className="link">
                    Accommodation Rates and Cancellation Policy
                  </a>
                  <div className="radio-group">
                    <div className="flex">
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Lodge - King Room
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Lodge - Double Room
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Home Type - 1 Bedroom
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Home Type - 2 Bedroom
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Home Type - 3 Bedroom
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Home Type - 4 Bedroom
                      </label>
                      <label className="col-xs-4">
                        <input type="radio" name="roomType" className="input" />{" "}
                        Home Type - 5 Bedroom
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-blk col-xs-12">
                  <label>
                    Anything else we should know about your accommodation
                    preferences?
                  </label>
                  <p>(e.g. specific details, special requirements)</p>
                  <textarea
                    name="accommodationPreferences"
                    className="input"
                  ></textarea>
                </div>

                <div className="form-blk col-xs-12">
                  <label>
                    How many rounds would you like to play during your stay?
                  </label>
                  <input
                    type="number"
                    name="rounds"
                    className="input"
                    required
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>What courses would you like to play?</label>
                  <p>Select all courses you would like to play.</p>
                  <a href="#" className="link">
                    Golf Rates
                  </a>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="courses"
                        value="Cabot Links"
                        className="input"
                      />{" "}
                      Cabot Links
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="courses"
                        value="Cabot Cliffs"
                        className="input"
                      />{" "}
                      Cabot Cliffs
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="courses"
                        value="The Nest"
                        className="input"
                      />{" "}
                      The Nest
                    </label>
                  </div>
                </div>

                <div className="form-blk col-xs-12">
                  <label>When would you like to golf?</label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="golfTime" className="input" />{" "}
                      Anytime
                    </label>
                    <label>
                      <input type="radio" name="golfTime" className="input" />{" "}
                      Morning
                    </label>
                    <label>
                      <input type="radio" name="golfTime" className="input" />{" "}
                      Afternoon
                    </label>
                    <label>
                      <input type="radio" name="golfTime" className="input" />{" "}
                      Twilight
                    </label>
                  </div>
                </div>

                <div className="form-blk col-xs-12">
                  <label>
                    Anything else we should know about your tee time
                    preferences?
                  </label>
                  <p>
                    (e.g. specific details about tee times, special
                    requirements)
                  </p>
                  <input type="text" name="" className="input" />
                </div>

                <div className="form-blk col-xs-12">
                  <label>How did you hear about us?</label>
                  <select name="hearAboutUs" className="input">
                    <option>Please Select</option>
                  </select>
                </div>

                <div className="form-blk col-xs-12">
                  <label>Are you celebrating a special occasion?</label>
                  <input type="text" name="specialOccasion" className="input" />
                </div>

                <div className=" col-xs-12">
                <p>
                  Sherwood Golf & Country Club is committed to protecting and
                  respecting your privacy. From time to time, we would like to
                  contact you about our products and services, as well as other
                  content that may be of interest to you. If you consent to us
                  contacting you for this purpose, please tick below:
                </p>
                </div>

                <div className="form-blk col-xs-12">
                  <label className="checkbox-group">
                    <input type="checkbox" name="consent" className="input" /> I
                    agree to receive other communications from Sherwood Golf &
                    Country Club
                  </label>
                </div>

                <div className=" form-blk  col-xs-12">
                <p>
                I give my consent to receive electronic communications from Sherwood Golf & Country Club regarding upcoming communities, current communities, news, events, promotions and all other related electronic communications. I also understand that I can unsubscribe from receiving electronic communications from Sherwood Golf & Country Club at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
                By clicking submit below, you consent to allow Sherwood Golf & Country Club to store and process the personal information submitted above to provide you the content requested.
                </p>
                </div>
                <button type="submit" className="site_btn">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
