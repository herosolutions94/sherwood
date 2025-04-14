import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Gallery from "@/components/gallery";
import FAQ from "@/components/faq";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("proshop-boutique", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};


export default function Proshop({result}) {
  const { content, page_title, site_settings , faqs} = result;
  console.log(faqs);

  return (
    <>
     <MetaGenerator page_title={page_title + " - " + site_settings?.site_name} site_settings={site_settings} meta_info={content} />
    
      <main>
      <section
          id="smallbanner"
          style={{ backgroundImage: `url(${cmsFileUrl(content?.image1)})` }}
        >
          <div className="contain">
            <h1>{content?.overview_heading}</h1>
          </div>
        </section>

        <section id="proshop">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image2)} />
                </div>
              </div>
              <div className="col2">
                <h2>{content?.section1_heading}</h2>
                <div className="italic">
                {content?.section1_gheading}
                </div>
              
              <Text string={content?.section1_text} />
              </div>
            </div>
          </div>
        </section>
        <section id="boutique">
          <div className="contain">
            <div className="flex">
              <div className="col1">
              <h2>{content?.section2_heading}</h2>
              <Text string={content?.section2_text} />

              </div>
              <div className="col2">
                <div className="image">
                <img src={cmsFileUrl(content?.image3)} />
                <div className="small_img">
                <img src={cmsFileUrl(content?.image4)} />
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="destination">
          <div className="contain">
            <div className="content_center">
            <h2>{content?.section3_heading}</h2>
            <Text string={content?.section3_text} />
            </div>
            <div className="flex">
            {Array.from({ length: 4 }, (_, i) => {
        

        return (
          <div className="coll">
          <div className="inner">
            <div className="icon">
              <img src={cmsFileUrl(content?.[`image${i + 5}`])} />
            </div>
            <h4>{content?.[`sec1_heading${i + 2}`]}</h4>
            <p>
            {content?.[`sec1_text${i + 2}`]}
              </p>
             
          </div>
        </div>
        );
      })}
           
            </div>
          </div>
        </section>
        <section id="clubhouse">
          <div className="contain">
            <div className="content_center">
            <h2>{content?.section4_heading}</h2>
            </div>
            <div className="timeline-container">
              <div className="timeline">
              {Array.from({ length: 4 }, (_, i) => {
        

        return (
          <div className="timeline-item">
                  <h3>{content?.[`sec4_heading${i + 2}`]}</h3>
                  <p>
                  {content?.[`sec4_text${i + 2}`]}
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
     
        );
      })}
          
                <div className="timeline-item">
                  <h3>Locker Rooms</h3>
                  <p>
                    The driving range gives golfers a chance to learn basics
                    course
                  </p>
                  <a href="#">Book Now &gt;</a>
                </div>
              
              </div>
              <div className="timeline-line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="contain">
            <div className="content_center">
            <h2>{content?.section5_heading}</h2>
            </div>
            <FAQ faqs={faqs}/>
          </div>
        </section>
      </main>
    </>
  );
}
