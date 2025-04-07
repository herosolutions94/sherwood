import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("memberships-overview", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Membership({result}) {
const { content, page_title, site_settings , packages} = result;

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
                <h2> {content?.section1_heading}</h2>
                           <Text string={content?.section1_text} />
               
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

        <section id="proshop" className="minu_padding">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                <img src={cmsFileUrl(content?.image3)} />
                </div>
              </div>
              <div className="col2">
              <h2> {content?.section2_heading}</h2>
              <Text string={content?.section2_text} />
                <div className="btn_blk">
                <Link href={content?.banner_link_url_sec21} className="site_btn color">
                  {content?.banner_link_text_sec21}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="memberships_hexa">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section3_heading}</h2>
            </div>
            <div className="hexagon-container">
              {packages.length > 0 ? (
                              packages.map((pkg) => (
                                <div className="hexagon" key={pkg.id}>
                                <div className="label">{pkg.type}</div>
                                <p>{pkg.title}</p>
                                <div className="footer">{pkg.fee_duration}</div>
                              </div>
                               
                              ))
                            ) : (
                              <p>No packages available </p>
                            )}
             
              
            </div>
            <div className="btn_blk">
            <Link href={content?.banner_link_url_sec41} className="site_btn">
                  {content?.banner_link_text_sec41}
                  </Link>
                </div>
          </div>
        </section>

        <section id="boutique" className="pt bt1">
     
            <div className="flex">
              <div className="contain col1">
              <div className="">
              <h2> {content?.section4_heading}</h2>
              <Text string={content?.section4_text} />
              </div>
              </div>
              <div className="col2">
                <div className="image">
                <img src={cmsFileUrl(content?.image4)} />

                </div>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
