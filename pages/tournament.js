import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";
import { blogDate } from "@/helpers/helpers";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("tournaments", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Tournament({result}) {
   const { content, page_title, site_settings , events  } = result;
  
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

        <section id="golf">
          <div className="contain">
            <div className="content_center">
            <h2>{content?.section1_heading}</h2>
            <Text string={content?.section1_text} />
            </div>
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image2)} />
                </div>
              </div>
              <div className="col2">
                 {events.length > 0 ? (
                                events.map((event) => (
                                  <div className="block" key={event.id}>
                                  <div className="inner">
                                    <div className="text">
                                      <h4>{event.title}</h4>
                                      <Text string={event.detail} />
                                     
                                    </div>
                                    <div className="blc_inn">
                                      <ul>
                                        <li>
                                          <img src="/images/clock.svg" />
                                         {blogDate(event.blog_date)}
                                        </li>
                                        <li>
                                          <img src="/images/loc.svg" />
                                          {event.s_time} - {event.e_time}
                                        </li>
                                        <li>
                                          <img src="/images/cal.svg" />
                                          {event.location}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                            
                                ))
                              ) : (
                                <p>No event available</p>
                              )}
               
               
              </div>
            </div>
          </div>
        </section>

        {/* <section id="boutique" className=" golfclub">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>{content?.section3_heading}</h2>
                <Text string={content?.section3_text} />
                <div className="btn_blk">
                  <Link href={content?.banner_link_url_sec31}className="site_btn">
                  {content?.banner_link_text_sec31}
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src={cmsFileUrl(content?.image3)} />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="whychoose">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section3_top_heading}</h2>
            </div>
            <div className="flex">
            {Array.from({ length: 3 }, (_, i) => {
                      
              
                      return (
                        <div className="coll">
                     
                          <h4>{content?.[`sec1_heading${i + 2}`]}</h4>
                          <p>
                          {content?.[`sec1_text${i + 2}`]}
                            </p>
                           
                      </div>
                      );
                    })}
            </div>
          </div>
        </section>
        <section id="reserveform">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image6)}  />
                  <div className="text">
                    <h3> {content?.section4_v_heading}</h3>
                    <p> {content?.section4_v_text}</p>
                  </div>
                  <div className="playicon">
                  <Link href={content?.section4_v_link}>
               
                    <img src="/images/play.svg" />
                 
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="outer">
                  <h3> {content?.section4_heading}</h3>
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
                        {content?.section4_link_text}
                        </button>
                      </div>
                    </div>
                  </form>
                </div> 
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
