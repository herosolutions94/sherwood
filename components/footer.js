import Link from "next/link"
import React from 'react'

export default function Footer( siteSettings ) {
  const data = {
    list_02: [
      {
        id: 1,
        text: "About us",
        link: "/about",
      },
      {
        id: 2,
        text: "ProShop & boutique",
        link: "/proshop",
      },
      {
        id: 3,
        text: "Partnerships",
        link: "/partnerships",
      }
    ],
    list_03: [
      {
        id: 1,
        text: "Course overview and details",
        link: "/course",
      },
      {
        id: 3,
        text: "Green fee rates",
        link: "/green-fee-rates",
      },
      {
        id: 4,
        text: "Scorecard",
        link: "/scorecard",
      }
    ],
    list_04: [
      {
        id: 1,
        text: "Accommodations overview",
        link: "/accomodation",
      },
      {
        id: 3,
        text: "Stay & Play packages & rates",
        link: "/stay-play-packages",
      }
    ],
    
  }
    return (
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
          
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  The club
                  </h4>
                  <ul className="list">
                    {data.list_02.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  The Course
                  </h4>
                  <ul className="list">
                    {data.list_03.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  The Chalets
                  </h4>
                  <ul className="list">
                    {data.list_04.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4>Contact Us</h4>
                  <div className="social_logon">
  {siteSettings?.siteSettings?.site_facebook && (
    <a
      href={siteSettings.siteSettings.site_facebook}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/facebook.svg" alt="Facebook" />
    </a>
  )}
  {siteSettings?.siteSettings?.site_instagram && (
    <a
      href={siteSettings.siteSettings.site_instagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/instagram.svg" alt="Instagram" />
    </a>
  )}
  {siteSettings?.siteSettings?.site_linkedin && (
    <a
      href={siteSettings.siteSettings.site_linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/linkedin.svg" alt="LinkedIn" />
    </a>
  )}
</div>

                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              {siteSettings.siteSettings.site_copyright}              </p>
              <ul className="footer_nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Memberships">Memberships</Link></li>
              <li><Link href="/corporate-retreats">Events</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </footer>
    )
  }