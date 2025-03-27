import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("reviews", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Reviews({result}) {
  const { content, page_title, site_settings , testimonials  } = result;

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
               <h1>{content?.banner_heading}</h1>
             </div>
           </section>

        <section id="reviews">
          <div className="contain">
            <h2>{content?.section1_heading}</h2>
         
          <div className="flex">
                {testimonials.map((testimonial, index) => (
                    <div className="coll">
                    <div className="inner">
                      <div className="icon"><img src="images/quote.svg"/></div>
                     <Text string={testimonial.message} />
                      <div className="foot">
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.post} </p>
                      </div>
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
