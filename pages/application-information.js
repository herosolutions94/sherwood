import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("memberships-application", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Application({ result }) {
  const { content, page_title, site_settings } = result;

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
        <section id="wedding_packages" className="appliaction">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section2_heading}</h2>
            </div>
            <div className="flex">

            {Array.from({ length: 5 }, (_, i) => {
  return (
    <div className="coll" key={i}>
      <div className="inner">
        <h4>Step {i + 1}:</h4>
        <p>{content?.[`section2_text${i + 3}`]}</p>
      </div>
    </div>
  );
})}


            </div>
            <div className="btn_blk">
              <Link href="/" className="site_btn  color">
              {content?.banner_link_text_sec41}
              </Link>
              <Link href="/" className="site_btn ">
              {content?.banner_link_text_sec42} <img src="images/download.svg" />
              </Link>
            </div>
          </div>
        </section>

        <section id="rules">
          <div className="contain">
            <h2>{content?.section3_top_heading}</h2>
            <Text string={content?.section4_text} />

          </div>
        </section>
      </main>
    </>
  );
}
