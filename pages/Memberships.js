import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Membership() {
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>Membership</h1>
          </div>
        </section>

        <section id="boutique" className="pt">
          <div className="contain">
            <div className="btn_blk">
              <Link href="/" className="site_btn">
                Download Membership Form
              </Link>
            </div>
            <div className="flex">
              <div className="col1">
                <h2> Membership Benefits</h2>
                <p>
                  Become a valued member of Sherwood Golf & Country Club and
                  enjoy premium access to our stunning 18-hole golf course,
                  top-tier amenities, and a welcoming golf community. We offer
                  flexible membership options tailored to your lifestyle.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn">
                    Become a Member
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/membership.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="memberships">
          <div className="contain">
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="images/" />
                  </div>
                  <h4>Basic Course</h4>
                  <p>$190/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
