import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";
import Galleria from "@/components/galleria";
export const getServerSideProps = async (context) => {
  const result = await http
    .post("wedding-at-sherwood-golf", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Weddings({result}) {
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
        <section id="boutique" className="pt">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>{content?.section1_heading}</h2>
            <Text string={ content?.section1_text}/>
               
                <div className="btn_blk">
                  <Link href={content?.banner_link_url_1} className="site_btn">
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

        <section id="wedding_packages">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section2_heading}</h2>
              <Text string={ content?.section2_text}/>

            </div>
            <div className="flex">
                 {Array.from({ length: 3 }, (_, i) => {
                      
              
                      return (
                        <div className="coll">
                        <div className="inner">
                     
                          <h4>{content?.[`sec1_heading${i + 2}`]}</h4>
                          <p>
                          {content?.[`sec1_text${i + 2}`]}
                            </p>
                           
                        </div>
                      </div>
                      );
                    })}
            </div>
            <div className="btn_blk">
              <Link href={content?.banner_link_url_sec31} className="site_btn ">
              {content?.banner_link_text_sec31}
              </Link>
            </div>
          </div>
        </section>

        {/* <section id="proshop" className="catering">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image3)} />
                </div>
              </div>
              <div className="col2">
              <h2>{content?.section3_heading}</h2>
              <Text string={ content?.section3_text}/>
                <div className="btn_blk">
                <Link href={content?.section3_heading} className="site_btn">
                {content?.section3_heading}
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id="boutique" className="">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>{content?.section4_heading}</h2>
                <Text string={ content?.section4_text}/>

                <div className="btn_blk">
                  <Link href={content?.banner_link_url_sec41} className="site_btn">
                  {content?.banner_link_text_sec41}
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src={cmsFileUrl(content?.image4)} />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="galleria">
          <div className="contain">
          <Galleria content={content} />
          </div>
          <div className="btn_blk">
              <Link href={content?.banner_link_url_sec41} className="site_btn ">
              {content?.banner_link_text_sec41}
              </Link>
            </div>
        </section>


      </main>
    </>
  );
}
