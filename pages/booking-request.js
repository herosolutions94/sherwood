import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader"; 

export const getServerSideProps = async (context) => {
  const result = await http
    .post("booking-requests", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Request({ result }) {
  const { content, page_title, site_settings } = result;
  const [isProcessing, setProcessingTo] = useState(false);
  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const onSubmit = async (frmData) => {
    setProcessingTo(true);
    const response = await http
      .post(
        "/save-booking-request",
        doObjToFormData({
          ...frmData,
          services: JSON.stringify(frmData?.services),
        })
      )
      .then((response) => response.data)
      .catch((error) => error);
    setProcessingTo(false);
    if (response?.status) {
      toast.success(response?.msg);
      setTimeout(() => {
        reset();
      }, 2000);
    } else {
      toast.error(response?.msg);
    }
  };

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        site_settings={site_settings}
        meta_info={content}
      />

      <main>
        <section
          id="smallbanner"
          style={{ backgroundImage: `url(${cmsFileUrl(content?.image1)})` }}
        >
          <div className="contain">
            <h1>{content?.overview_heading}</h1>
          </div>
        </section>

        <section id="request-form">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.sec1_heading}</h2>
              <Text string={content?.section2_text} />
            </div>
            <div className="outer">
              <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-blk col-xs-12">
                  <label>What are you looking to do?</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        value="Stay Only"
                        {...register("lookingToDo", {
                          required: "Please select an option",
                        })}
                      />
                      Stay Only
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Stay & Play"
                        {...register("lookingToDo")}
                      />
                      Stay & Play
                    </label>
                  </div>
                  {errors.lookingToDo && (
                    <p className="error">{errors.lookingToDo.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>First Name</label>
                  <input
                    className="input"
                    {...register("firstName", {
                      required: "First name is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Only letters and spaces allowed",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <p className="error">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Last Name</label>
                  <input
                    className="input"
                    {...register("lastName", {
                      required: "Last name is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Only letters and spaces allowed",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="input"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="input"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9\s\-+()]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="error">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    className="input"
                    {...register("postalCode", {
                      required: "Postal Code is required",
                    })}
                  />
                  {errors.postalCode && (
                    <p className="error">{errors.postalCode.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>State/Province</label>
                  <input
                    type="text"
                    className="input"
                    {...register("stateProvince", {
                      required: "State/Province is required",
                    })}
                  />
                  {errors.stateProvince && (
                    <p className="error">{errors.stateProvince.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>How would you like us to contact you?</label>
                  <select
                    className="input"
                    {...register("contactMethod", {
                      required: "Please select a contact method",
                    })}
                  >
                    <option value="">Please Select</option>
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                  {errors.contactMethod && (
                    <p className="error">{errors.contactMethod.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Arrival Date</label>
                  <input
                    type="date"
                    className="input"
                    {...register("arrivalDate", {
                      required: "Arrival date is required",
                    })}
                  />
                  {errors.arrivalDate && (
                    <p className="error">{errors.arrivalDate.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-6">
                  <label>Departure Date</label>
                  <input
                    type="date"
                    className="input"
                    {...register("departureDate", {
                      required: "Departure date is required",
                    })}
                  />
                  {errors.departureDate && (
                    <p className="error">{errors.departureDate.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label className="checkbox-group">
                    <input type="checkbox" {...register("flexibleDates")} /> My
                    dates are flexible
                  </label>
                </div>

                <div className="form-blk col-xs-12">
                  <label># of Guests</label>
                  <input
                    type="number"
                    className="input"
                    {...register("guests", {
                      required: "Number of guests is required",
                      min: 1,
                    })}
                  />
                  {errors.guests && (
                    <p className="error">{errors.guests.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>
                    Would you like us to pick you up from the airport?
                  </label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        value="Yes"
                        {...register("airportPickup", {
                          required: "Please choose one",
                        })}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="No"
                        {...register("airportPickup")}
                      />{" "}
                      No
                    </label>
                  </div>
                  {errors.airportPickup && (
                    <p className="error">{errors.airportPickup.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>Number of Rooms Required</label>
                  <input
                    type="number"
                    className="input"
                    {...register("rooms", {
                      required: "Number of rooms is required",
                      min: 1,
                    })}
                  />
                  {errors.rooms && (
                    <p className="error">{errors.rooms.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>Please select your preferred room type</label>
                  <a href="#" className="link">
                    Accommodation Rates and Cancellation Policy
                  </a>
                  <div className="radio-group ">
                    <div className="flex">
                      {[
                        "Lodge - King Room",
                        "Lodge - Double Room",
                        "Home Type - 1 Bedroom",
                        "Home Type - 2 Bedroom",
                        "Home Type - 3 Bedroom",
                        "Home Type - 4 Bedroom",
                        "Home Type - 5 Bedroom",
                      ].map((type, i) => (
                        <label key={i} className="col-xs-4">
                          <input
                            type="radio"
                            className="input"
                            value={type}
                            {...register("roomType", {
                              required: "Please select a room type",
                            })}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  {errors.roomType && (
                    <p className="error">{errors.roomType.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>Accommodation Preferences</label>
                  <p>(e.g. specific details, special requirements)</p>
                  <textarea
                    className="input"
                    {...register("accommodationPreferences")}
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>Rounds of Golf</label>
                  <input
                    type="number"
                    className="input"
                    {...register("rounds", {
                      required: "Please enter number of rounds",
                      min: 0,
                    })}
                  />
                  {errors.rounds && (
                    <p className="error">{errors.rounds.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>What courses would you like to play?</label>
                  <p>Select all courses you would like to play.</p>
                  <a href="#" className="link">
                    Golf Rates
                  </a>
                  <div className="checkbox-group">
                    {["Cabot Links", "Cabot Cliffs", "The Nest"].map(
                      (course, i) => (
                        <label key={i}>
                          <input
                            type="checkbox"
                            value={course}
                            {...register("courses")}
                          />{" "}
                          {course}
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div className="form-blk col-xs-12">
                  <label>Preferred Golf Time</label>
                  <div className="radio-group">
                    {["Anytime", "Morning", "Afternoon", "Twilight"].map(
                      (time, i) => (
                        <label key={i}>
                          <input
                            type="radio"
                            value={time}
                            {...register("golfTime", {
                              required: "Please select one",
                            })}
                          />
                          {time}
                        </label>
                      )
                    )}
                  </div>
                  {errors.golfTime && (
                    <p className="error">{errors.golfTime.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>Tee Time Preferences</label>
                  <p>(e.g. specific tee time requirements)</p>
                  <input
                    type="text"
                    className="input"
                    {...register("teeTimePreferences")}
                  />
                </div>

                <div className="form-blk col-xs-12">
                  <label>How did you hear about us?</label>
                  <select
                    className="input"
                    {...register("hearAboutUs", {
                      required: "Please select one",
                    })}
                  >
                    <option value="">Please Select</option>
                    <option>Google</option>
                    <option>Friend/Referral</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                  </select>
                  {errors.hearAboutUs && (
                    <p className="error">{errors.hearAboutUs.message}</p>
                  )}
                </div>

                <div className="form-blk col-xs-12">
                  <label>Special Occasion</label>
                  <input
                    type="text"
                    className="input"
                    {...register("specialOccasion")}
                  />
                </div>

                <div className="col-xs-12">
                  <p>
                    Sherwood Golf & Country Club is committed to protecting and
                    respecting your privacy...
                  </p>
                </div>

                <div className="form-blk col-xs-12">
  <label className="checkbox-group">
    <input
      type="checkbox"
      {...register("consent", {
        required: "You must agree before submitting",
      })}
    />
    I agree to receive other communications
  </label>

  {errors.consent && (
    <p className="error">{errors.consent.message}</p>
  )}
</div>

                <div className="form-blk col-xs-12">
                  <Text string={content?.sec2_heading} />
                </div>

                <button
                  type="submit"
                  className="site_btn"
                  disabled={isProcessing}
                >
                    {isProcessing ? (
                      <ClipLoader color="#fff" loading={isProcessing} size={20} />
                    ) : (
                      "Submit Inquiry"
                    )}

                  <ToastContainer />

                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
