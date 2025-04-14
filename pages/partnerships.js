import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("hospitality-group-commitments", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Partnerships({ result }) {

  const { content, page_title, site_settings, sponsers } = result;

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
        <section id="partner">
          <div className="contain">
            <div className="content_center">
              <h2>Our Trusted Partners</h2>
              <p>
                Building Strong Relationships to Deliver Excellence and
                Innovation in Every Collaboration.
              </p>
            </div>
            <ul>
                {Array.from({ length: 4 }, (_, i) => {
                      
              
                      return (
                        <li>
                        <div className="image">
                          <img src={cmsFileUrl(content?.[`image${i + 3}`])} />
                        </div>
                        <div className="text">
                        <h4>{content?.[`sec1_heading${i + 2}`]}</h4>
                          <p>
                          {content?.[`sec1_text${i + 2}`]}
                            </p>
                        </div>
                      </li>
                      
                      );
                    })}
            
            
            </ul>
          </div>
        </section>
        <section id="group">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                 <h2>{content?.section1_heading}</h2>
                              <Text string={content?.section1_text} />
                <div className="btn_blk">
                  <Link href={content?.banner_link_url_1} className="site_btn color">
                  {content?.banner_link_text_1}
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src={cmsFileUrl(content?.image2)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsor">
          <div className="contain">
            <div className="content_center">
            <h2>{content?.section3_top_heading}</h2>
            <Text string={content?.section3_text} />
            </div>
            <div className="flex">
            {sponsers.map((image, index) => (
              <div className="item">
              <div className="inner">
                <img src={cmsFileUrl(image.image, 'sponsership')} />
              </div>
            </div>
          
        ))}
           
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
