import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("about-page", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  const [tabs, setTabs] = useState(0);
  const [activeTab, setActiveTab] = useState(3);
  const { content, page_title, site_settings , teams } = result;
  const eventIndexes = [3, 4, 5, 6];
  const tabData = [3, 4, 5];
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
        <section id="about">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image2)} />
                </div>
              </div>
              <div className="col2">
                <h2>{content?.section1_heading}</h2>
                <Text string={content?.section1_text} />
              </div>
            </div>
          </div>
        </section>
        <section id="history">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section2_heading}</h2>
            </div>
            {/*  */}

            <div className="flex">
              <div className="col left">
                {eventIndexes.map((i, index) =>
                  index % 2 === 0 ? (
                    <div className="text mb" key={i}>
                      <h5>{content?.[`sec2_date${i}`]}</h5>
                      <Text string={content?.[`section2_text${i}`]} />
                    </div>
                  ) : null
                )}
              </div>

              <div className="col">
                <div className="image">
                  <img src="/images/tree.png" alt="Center Image" />
                </div>
              </div>

              <div className="col right">
                {eventIndexes.map((i, index) =>
                  index % 2 !== 0 ? (
                    <div className="text mb" key={i}>
                      <h5>{content?.[`sec2_date${i}`]}</h5>
                      <Text string={content?.[`section2_text${i}`]} />
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/*  */}
          </div>
        </section>

        <section id="instructors">
          <div className="contain">
            <div className="flex">
              <div className="content_center">
              <h2>{content?.section3_top_heading}</h2>
              </div>
              
              
              <div className="flex">
                {teams.map((team, index) => (
                            
                              <div className="coll">
                              <div className="inner">
                                <div className="image">
                                  <img src={cmsFileUrl(team.image, 'team')} />
                                </div>
                                <h4>{team.title}</h4>
                                <p>{team.content}</p>
                              </div>
                            </div>
                          
                        ))}
              
          
              </div>
            </div>
          </div>
        </section>
        <section id="teach">
          <div className="contain">
            <div className="content_center">
              <h2>We provide top-tier instructors to teach you golf</h2>
            </div>
            <div className="image">
              <img src="images/map2.png" />
            </div>
          </div>
        </section>
        <section id="story">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image3)} alt="Section Image" />
                </div>
              </div>

              <div className="col2">
                <h2>{content?.section4_top_heading}</h2>

                <div className="tabs_nav">
                  {tabData.map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={activeTab === i ? "active" : ""}
                      onClick={() => setActiveTab(i)}
                    >
                      {content?.[`sec4_heading${i}`] || `Tab ${i}`}
                    </button>
                  ))}
                </div>

                {tabData.map(
                  (i) =>
                    activeTab === i && (
                      <div key={i}>
                        <Text string={content?.[`sec2_text${i}`] } />

                        
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="manager">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>{content?.section5_heading}</h2>
                <Text string={content?.section5_text} />
              </div>
              <div className="col2">
                <div className="image">
                  <img src={cmsFileUrl(content?.image4)} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
