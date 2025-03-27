import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/testimonials";
import CounterSection from "@/components/counter";
import Gallery from "@/components/gallery";
import http from "@/helpers/http";
import { doObjToFormData , generateContentArray } from "@/helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import Tournaments from "@/components/tournaments";


export const getServerSideProps = async (context) => {
  
  const result = await http
    .post("home-page", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};


export default function Home( {result} ) {
  const {content, page_title,site_settings, tournaments , testimonials , gallery}=result
  const sec2_arr=generateContentArray(content, 3, 6, 2)

  return (
    <>
        <MetaGenerator page_title={page_title + " - " + site_settings?.site_name} site_settings={site_settings} meta_info={content} />

      <main>
        <section id="banner" style={{ backgroundImage: `url(${cmsFileUrl(content?.image1)})` }}>
          <div className="contain">
            <div className="content">
              <h1>{content?.banner_heading1}</h1>
            </div>
          </div>
        </section>
        <section id="intro">
          <div className="contain">
            <div className="flex">
              <div className="col pr">
                <div className="image">
                  <img src={cmsFileUrl(content?.image2)} />
                </div>
              </div>
              <div className="colr">
                <h2>{content?.section1_heading}</h2>
                <Text string={content?.section1__text} />

                
              </div>
            </div>
            <div className="flex">
              <div className="col">
              <h2>{content?.section2_heading}</h2>
              <Text string={content?.section2__text} />
                <div className="btn_blk">
                  <Link href={content?.banner_link_url_1}className="site_btn color">
                  {content?.banner_link_text_1}
                  </Link>
                </div>
              </div>
              <div className="colr pl">
                <div className="image">
                <img src={cmsFileUrl(content?.image3)} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CounterSection content={content} sectionPrefix="sec3" />

        <section id="tournament">
          <div className="contain">
            <div className="flex-heading">
              <h2>{content?.section4_heading}</h2>
              <Text string={content?.section4_text} />

            </div>
            <div className="flex">
             
            {tournaments.map((tournament) => (
        <Tournaments key={tournament.id} tournament={tournament} />
      ))}

            </div>
            <div className="btn_blk">
              <Link href={content?.section4_link_url} className="site_btn">
              {content?.section4_link_text}
              </Link>
            </div>
          </div>
        </section>

        <section id="categories">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section5_heading}</h2>
              <Text string={content?.section5_text} />

            </div>
            <div className="flex">
             
              {Array.from({ length: 3 }, (_, i) => {
        

            return (
              <div className="coll">
              <div className="inner">
                <div className="image">
                  <img src={cmsFileUrl(content?.[`image${i + 10}`])} />
                </div>
                <div className="text">
                <h4>{content?.[`sec5_heading${i + 2}`]}</h4>
                <p>
                {content?.[`sec5_text${i + 2}`]}
                  </p>
                  <Link href={content?.[`sec5_link${i + 2}`]} className="arrow-btn">
                    Learn More
                    <img src="/images/tick.svg" />
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="flex">
            <div className="col1">
              <div className="image">
              <img src={cmsFileUrl(content?.image7)} />
              </div>
            </div>
            <div className="col2">
              <div className="contain">
              <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </section>
        <section id="corporate">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>{content?.sec6_heading}</h2>
                <Text string={content?.sec6_text} />

               

                <div className="image">
                <img src={cmsFileUrl(content?.image5)} />

                </div>
              </div>
              <div className="col2">
                <div className="image">
                <img src={cmsFileUrl(content?.image6)} />
                </div>

                
                {Array.from({ length: 3 }, (_, i) => {


  return (
    <div className="block" key={i}>
      <div className="inner">
        <div className="flx">
          {i % 2 === 0 ? (
            <>
              <div className="first">
                <div className="img">
                  <img src={cmsFileUrl(content?.[`image${i + 16}`])} alt={`Event ${i + 1}`} />
                </div>
                <h4>{content?.[`sec6_heading_event${i + 2}`]}</h4>
              </div>
              <span>0{i + 1}</span>
            </>
          ) : (
            <>
              <span>0{i + 1}</span>
              <div className="first">
                <div className="img">
                  <img src={cmsFileUrl(content?.[`image${i + 16}`])} alt={`Event ${i + 1}`} />
                </div>
                <h4>{content?.[`sec6_heading_event${i + 2}`]}</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
})}

              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section7_heading}</h2>
              <Text string={content?.section7_text} />

            </div>
            <Gallery gallery={gallery}/>
          </div>
        </section>
      </main>
    </>
  );
}
