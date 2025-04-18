import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cmsFileUrl } from "@/helpers/helpers";


export default function Header(siteSettings) {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };

  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src={cmsFileUrl(siteSettings.siteSettings.site_logo, 'images')} alt={siteSettings.siteSettings.site_name} />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="/" onClick={ToggleAction} className="drop_btn">
                The Club
              </Link>
              <ul className="sub">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/proshop">Proshop & Boutique</Link>
                </li>
                <li>
                  <Link href="/partnerships">Partnerships</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/course" onClick={ToggleAction}>
                The Course
              </Link>
            </li>
            <li>
              <Link href="/accomodation" onClick={ToggleAction}>
                The Chalets
              </Link>
            </li>
            <li>
              <Link href="/corporate-retreats" onClick={ToggleAction}>
                Corporate & Events
              </Link>
            </li>
            <li>
              <Link href="/memberships" onClick={ToggleAction}>
                Memberships
              </Link>
            </li>
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            <li>
              <Link href="/booking-request" className="site_btn md color">
                Book a Chalet
              </Link>
            </li>
            <li>
              <Link href="/booking-request" className="site_btn blank md">
                Book a Tee Time
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
