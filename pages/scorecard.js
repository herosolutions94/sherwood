import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("course-guide-scorecard", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Scorecard({ result }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { content, page_title, site_settings } = result;
  const slides = [2, 3, 4, 5];
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

        <section id="instructors" className="pt courseguide">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section1_top_heading}</h2>
              <Text string={content?.section1_text} />
            </div>
            <Slider {...settings}>
              {slides.map((i) => (
                <div key={i} className="item">
                  <div className="inner">
                    <div className="image">
                      <img
                        src={cmsFileUrl(content?.[`image${i}`])}
                        alt={`Slide ${i}`}
                      />
                    </div>
                    
                    <h4>
                      {content?.[`sec1_heading${i}`] || "Default Heading"}
                    </h4>
                    <p>
                      {content?.[`sec1_text${i}`] || "Default text content"}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section id="rate_card">
          <div className="contain">
            <div className="content_center">
              <h2> {content?.section2_top_heading}</h2>
              <p>{content?.section2_text}</p>
            </div>
         
            <div dangerouslySetInnerHTML={{ __html: content?.section2_text_content || "" }} />

          </div>
        </section>
      </main>
    </>
  );
}
