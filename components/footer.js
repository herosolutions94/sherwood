import Link from "next/link"
import React from 'react'

export default function Footer() {
  const data = {
    list_02: [
      {
        id: 1,
        text: "About us",
        link: "/",
      },
      {
        id: 2,
        text: "ProShop & boutique",
        link: "/about",
      },
      {
        id: 3,
        text: "Partnerships",
        link: "/",
      }
    ],
    list_03: [
      {
        id: 1,
        text: "Course overview and details",
        link: "/",
      },
      {
        id: 3,
        text: "Green fee rates",
        link: "/",
      },
      {
        id: 4,
        text: "Scorecard",
        link: "/",
      }
    ],
    list_04: [
      {
        id: 1,
        text: "Accommodations overview",
        link: "/",
      },
      {
        id: 3,
        text: "Stay & Play packages & rates",
        link: "/",
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
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/facebook.svg" alt="" />
                    </Link>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/instagram.svg" alt="" />
                    </Link>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/linkedin.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              Sherwood-Golf @ 2025. All rights reserved.
              </p>
              <ul className="footer_nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Memberships</Link></li>
              <li><Link href="/">Events</Link></li>
              <li><Link href="/">Reviews</Link></li>
              <li><Link href="/">About</Link></li>
              </ul>
            </div>
          </div>
        </footer>
    )
  }