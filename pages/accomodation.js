import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("accommodations", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};


export default function Accomodation({result}) {
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
 
        <section id="chalets">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section1_heading}</h2>
              <Text string={content?.section1_text} />
            </div>
            <div className="flex">
               {Array.from({ length: 3 }, (_, i) => {
                                    
                            
                                    return (
                                      <div className="coll">
                                      <div className="inner">
                                        <div className="image">
                                          <img src={cmsFileUrl(content?.[`image${i + 14}`])} />
                                        </div>
                                        <div className="text">
                                        <h4>{content?.[`sec5_heading${i + 2}`]}</h4>
                                        <Text
                                        string={content?.[`sec5_text${i + 2}`]}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                     
                                    
                                    );
                                  })}
           
              
            </div>
          </div>
        </section>

        <section id="map_img">
          <div className="contain">
            <div className="image1">
              <img src={cmsFileUrl(content?.image3)} />
            </div>
            <div className="flex">
            {Array.from({ length: 4 }, (_, i) => {
                                    
                            
                                    return (
                                      <div className="col1">
                <div className="image2">
                  <img src={cmsFileUrl(content?.[`image${i + 5}`])}  />
                </div>
                <div className="text">
                  <img src={cmsFileUrl(content?.[`image${i + 10}`])}  />
                  <h4>{content?.[`sec1_heading${i + 2}`]}</h4>
                  </div>
              </div>
                                     
                                     
                                    
                                    );
                                  })}
              
              
            </div>
            <Text string={content?.section2_text} />

          </div>
        </section>
        <section id="rental">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src={cmsFileUrl(content?.image19)} />
                </div>
              </div>
              <div className="col2">
              <h2>{content?.section4_heading}</h2>
              <Text string={content?.section4_text} />
              <div className="btn_blk">
                  <Link href={content?.banner_link_url_sec21} className="site_btn ">
                  {content?.banner_link_text_sec21}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
