import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CounterSection from "@/components/counter";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("courses", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Course({result}) {
  const { content, page_title, site_settings  } = result;
 
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
        {/* <section id="course">
          <div className="contain">
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Courses & Instructors</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Golf Accommodation</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Fitness Center</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Golf Practice</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Skill Development</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/course1.png" />
                  </div>
                  <div className="text">
                    <h4>Basic Foundation</h4>
                    <p>Nam quis dolor sit amet consectetur elit.</p>
                  </div>
                  <a href="#" className="arrow-btnn">
                    <img src="/images/arrow-btn1.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="membership_benefit">
          <div className="contain">
            <div className="content_center">
              <h2>#1 Hidden Gem Golf Course in Canada</h2>
              <p>
                Nestled in a breathtaking natural landscape, this hidden gem is
                Canada’s best-kept golfing secret. Designed for both challenge
                and enjoyment, the course offers immaculately maintained
                fairways, rolling greens, and stunning scenery at every turn.
                Whether you're a seasoned golfer or a weekend enthusiast, the
                serene atmosphere and world-class course design provide an
                unforgettable experience. With top-tier facilities, a welcoming
                clubhouse, and an uncrowded, exclusive feel, this course stands
                out as a true golfer’s paradise. Discover why it's ranked #1 in
                Canada and experience golf at its finest.
              </p>
        
            </div>
            <div className="btn_blk">
                  <Link href="/" className="site_btn ">
                  Green Fee Rate
                  </Link>
                  <Link href="/" className="site_btn ">
                  Book a Tee Time
                  </Link>
                  <Link href="/" className="site_btn ">
                  Course Guide
                  </Link>
                </div>
            {/* <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene1.svg" />
                  </div>
                  <div className="text">
                    <h4>Golf Courses</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene2.svg" />
                  </div>
                  <div className="text">
                    <h4>Tournaments</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/bene3.svg" />
                  </div>
                  <div className="text">
                    <h4>Our Caddies</h4>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <CounterSection content={content} sectionPrefix="sec3" />

        <section id="proshop" >
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image5)} />
                </div>
              </div>
              <div className="col2">
              <h2>{content?.section4_heading}</h2>
                <Text string={content?.section4_text} />
                <div className="btn_blk">
                  <Link href={content?.section4_link_url} className="site_btn">
                  {content?.section4_link_text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="bg2" className="mb">
          <div className="contain">
            <div className="content">
            <h2>{content?.section2_top_heading}</h2>
                <Text string={content?.section2_text} />
                <div className="btn_blk">
                  <Link href={content?.section2_link_url} className="site_btn color">
                  {content?.section2_link_text}
                  </Link>
                  <Link href={content?.section2_link_url2} className="site_btn blank">
                  {content?.section2_link_text2}
                  </Link>
                </div>
           
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
