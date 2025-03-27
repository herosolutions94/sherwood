import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("rates", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Rates({ result }) {
  const { content, page_title, site_settings , testimonials } = result;

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

        <section id="rate_card">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section1_top_heading} </h2>
              <p>{content?.section1_text}</p>
            </div>
            <div className="table-container">
             <Text string={ content?.section1_table_text}/>
            </div>
          </div>
        </section>

        <section id="proshop" className="rateblock">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image5)} />
                </div>
              </div>
              <div className="col2">
                <h2>{content?.section4_heading} </h2>
                <Text string={ content?.section4_text}/>

                <div className="btn_blk">
                  <Link href={content?.section4_link_url}  className="site_btn">
                  {content?.section4_link_text} 
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
      </main>
    </>
  );
}
