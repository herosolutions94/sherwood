import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cmsFileUrl } from "@/helpers/helpers";

export default function Header(siteSettings) {
  console.log(siteSettings);
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
            <img src={cmsFileUrl(siteSettings?.site_logo, 'images')} alt={siteSettings?.site_name} />
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
                  <Link href="/">Proshop & Boutique</Link>
                </li>
                <li>
                  <Link href="/">Partnerships</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/" onClick={ToggleAction}>
                The Course
              </Link>
            </li>
            <li>
              <Link href="/" onClick={ToggleAction}>
                The Chalets
              </Link>
            </li>
            <li>
              <Link href="/" onClick={ToggleAction}>
                Corporate & Events
              </Link>
            </li>
            <li>
              <Link href="/" onClick={ToggleAction}>
                Memberships
              </Link>
            </li>
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            <li>
              <Link href="/" className="site_btn md color">
                Book a Chalet
              </Link>
            </li>
            <li>
              <Link href="/" className="site_btn blank md">
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
