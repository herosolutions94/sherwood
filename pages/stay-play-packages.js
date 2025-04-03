import React from "react";
import Link from "next/link";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { cmsFileUrl } from "@/helpers/helpers";
import Text from "@/components/text";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  try {
    const result = await http
      .post("stay-play-packages", doObjToFormData({ token: "" }))
      .then((response) => response.data)
      .catch((error) => ({ error: error.response?.data?.message || "Failed to fetch data" }));

    return { props: { result } };
  } catch (err) {
    return { props: { result: { error: "Something went wrong" } } };
  }
};

export default function Packages({ result }) {
  if (result?.error) {
    return <div className="error-message">Error: {result.error}</div>;
  }

  const { content, page_title, site_settings, packages = [], packages_wed = [] } = result || {};

  return (
    <>
      <MetaGenerator
        page_title={page_title ? `${page_title} - ${site_settings?.site_name}` : "Packages"}
        site_settings={site_settings}
        meta_info={content}
      />

      <main>
        <section
          id="smallbanner"
          style={{ backgroundImage: `url(${cmsFileUrl(content?.image1)})` }}
        >
          <div className="contain">
            <h1>{content?.overview_heading || "Packages"}</h1>
          </div>
        </section>

        <section id="packages">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section1_heading}</h2>
            </div>

            {/* Sunday to Wednesday */}
            <div className="head">
              <span>01</span>Sunday to Wednesday
            </div>
            <div className="flex mb">
              {packages.length > 0 ? (
                packages.map((pkg) => (
                  <div className="coll" key={pkg.id}>
                    <div className="inner">
                      <h4>{pkg.title}</h4>
                      <p>{pkg.short_detail}</p>
                      <Text string={pkg.detail} />
                    </div>
                  </div>
                ))
              ) : (
                <p>No packages available for Sunday to Wednesday.</p>
              )}
            </div>

            {/* Thursday to Saturday */}
            <div className="head">
              <span>02</span>Thursday to Saturday
            </div>
            <div className="flex">
              {packages_wed.length > 0 ? (
                packages_wed.map((pkg) => (
                  <div className="coll" key={pkg.id}>
                    <div className="inner">
                      <h4>{pkg.title}</h4>
                      <p>{pkg.short_detail}</p>
                      <Text string={pkg.detail} />
                    </div>
                  </div>
                ))
              ) : (
                <p>No packages available for Thursday to Saturday.</p>
              )}
            </div>
          </div>
        </section>

        <section id="rates">
          <div className="contain">
            <div className="content_center">
              <h2>{content?.section1_title}</h2>
            </div>
            <h4>{content?.section2_heading}</h4>

            <div className="bloc">
              {content?.image2 && (
                <div className="image">
                  <img src={cmsFileUrl(content.image2)} alt="Package Image" />
                </div>
              )}
              <Text string={content?.section1_text} />
            </div>

            <h4>{content?.section3_heading}</h4>

            <div className="bloc">
              {content?.image3 && (
                <div className="image">
                  <img src={cmsFileUrl(content.image3)} alt="Package Image" />
                </div>
              )}
              <Text string={content?.section3_text} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
