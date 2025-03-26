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

        <section id="proshop" className="minu_padding">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/m1.png" />
                </div>
              </div>
              <div className="col2">
                <h2>Member Referral Program</h2>

                <p>
                  Become a valued member of Sherwood Golf & Country Club and
                  enjoy premium access to our stunning 18-hole golf course,
                  top-tier amenities, and a welcoming golf community. We offer
                  flexible membership options tailored to your lifestyle.
                </p>
                <div className="btn_blk">
                  <Link href="/" className="site_btn color">
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="memberships_hexa">
          <div className="contain">
            <div className="content_center">
              <h2>Our Membership Packages</h2>
            </div>
            <div className="hexagon-container">
              <div className="hexagon">
                <div className="label">Platinum</div>
                <p>Unlimited Golf Cart (Annual Fee: $1,600)</p>
                <div className="footer">Annual Fee</div>
              </div>
              <div className="hexagon">
                <div className="label">Platinum</div>
                <p>Unlimited Golf Cart (Annual Fee: $1,600)</p>
                <div className="footer">Annual Fee</div>
              </div>
              <div className="hexagon">
                <div className="label">Platinum</div>
                <p>Unlimited Golf Cart (Annual Fee: $1,600)</p>
                <div className="footer">Annual Fee</div>
              </div>
              <div className="hexagon">
                <div className="label">Platinum</div>
                <p>Unlimited Golf Cart (Annual Fee: $1,600)</p>
                <div className="footer">Annual Fee</div>
              </div>
              <div className="hexagon">
                <div className="label">Platinum</div>
                <p>Unlimited Golf Cart (Annual Fee: $1,600)</p>
                <div className="footer">Annual Fee</div>
              </div>
            </div>
            <div className="btn_blk">
                  <Link href="/" className="site_btn ">
                  Apply for Membership
                  </Link>
                </div>
          </div>
        </section>

        <section id="boutique" className="pt bt1">
     
            <div className="flex">
              <div className="contain col1">
              <div className="">
                <h2> Ultimate Golf Perks - Reciprocal Network.</h2>
                <p>
                  As a member of our club, you gain access to the Ultimate Golf
                  Perks through our Reciprocal Network. This exclusive network
                  allows you to enjoy tee times, discounts, and privileges at
                  some of the finest golf courses across the country. Whether
                  you're traveling or seeking new challenges, our reciprocal
                  partnerships ensure that your golf experience is never
                  limited. Take advantage of this premium benefit and play at
                  top-tier courses with ease and flexibility.
                </p>
              </div>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/bt1.png" />
                </div>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
