import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
export default function About() {
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <h1>About Us</h1>
          </div>
        </section>
        <section id="about">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="image">
                  <img src="/images/about1.png" />
                </div>
              </div>
              <div className="col2">
                <h2>We Have Best Insturctors Teach, You Golfing mates.</h2>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to
                  predefined chunks as necessary, making this the first true
                  generator on net utperspiciatis un omniste natus error sit
                  volupta accusantium words. When an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="history">
          <div className="contain">
            <div className="content_center">
              <h2>We Have a Great History to Start Our Company.</h2>
            </div>
            {/*  */}

            <div className="flex">
              <div className="col left">
                <div className="text mb">
                  <h5>May 2020</h5>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to pre
                    chunks as necessary, making this the first true on net. Uses
                    ipsum dictionary of over good always true.
                  </p>
                </div>
                <div className="text">
                  <h5>May 2020</h5>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to pre
                    chunks as necessary, making this the first true on net. Uses
                    ipsum dictionary of over good always true.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="image">
                  <img src="/images/tree.png" />
                </div>
              </div>
              <div className="col right">
              <div className="text mb">
                  <h5>May 2020</h5>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to pre
                    chunks as necessary, making this the first true on net. Uses
                    ipsum dictionary of over good always true.
                  </p>
                </div>
                <div className="text">
                  <h5>May 2020</h5>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to pre
                    chunks as necessary, making this the first true on net. Uses
                    ipsum dictionary of over good always true.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </section>

        <section id="instructors">
          <div className="contain">
            <div className="flex">
              <div className="content_center">
                <h2>We provide top-tier instructors to teach you golf</h2>
              </div>
              <div className="flex">
                <div className="coll">
                  <div className="inner">
                    <div className="image">
                      <img src="/images/t1.png" />
                    </div>
                    <h4>Robert Fox</h4>
                    <p>Sr. Golf Coach</p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="image">
                      <img src="/images/t2.png" />
                    </div>
                    <h4>Robert Fox</h4>
                    <p>Sr. Golf Coach</p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="image">
                      <img src="/images/t3.png" />
                    </div>
                    <h4>Robert Fox</h4>
                    <p>Sr. Golf Coach</p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="image">
                      <img src="/images/t4.png" />
                    </div>
                    <h4>Robert Fox</h4>
                    <p>Sr. Golf Coach</p>
                  </div>
                </div>
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
                  <img src="/images/story.png" />
                </div>
              </div>
              <div className="col2">
                <h2>The Stories From Behind The Scenes & Famous Golfers</h2>
                <div className="tabs_nav">
                  <button
                    type="button"
                    className={tabs == 0 ? "active" : ""}
                    onClick={() => setTabs(0)}
                  >
                    Mission
                  </button>
                  <button
                    type="button"
                    className={tabs == 1 ? "active" : ""}
                    onClick={() => setTabs(1)}
                  >
                    Vision
                  </button>
                  <button
                    type="button"
                    className={tabs == 2 ? "active" : ""}
                    onClick={() => setTabs(2)}
                  >
                    Our Values
                  </button>
                </div>
                {tabs === 0 && (
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley arcu mauris duis diam, There are
                      many variations of passages of Lorem Ipsum available, but
                      the majority have suffered alteration..
                    </p>
                    <ul>
                      <li>300+ Golf Competitions</li>
                      <li>50+ Proficient Instructors</li>
                      <li>Amateur Championships</li>
                      <li>Amateur Championships</li>
                    </ul>
                  </div>
                )}
                {tabs === 1 && (
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley arcu mauris duis diam, There are
                      many variations of passages of Lorem Ipsum available, but
                      the majority have suffered alteration..
                    </p>
                    <ul>
                      <li>300+ Golf Competitions</li>
                      <li>50+ Proficient Instructors</li>
                      <li>Amateur Championships</li>
                      <li>Amateur Championships</li>
                    </ul>
                  </div>
                )}
                {tabs === 2 && (
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley arcu mauris duis diam, There are
                      many variations of passages of Lorem Ipsum available, but
                      the majority have suffered alteration..
                    </p>
                    <ul>
                      <li>300+ Golf Competitions</li>
                      <li>50+ Proficient Instructors</li>
                      <li>Amateur Championships</li>
                      <li>Amateur Championships</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="manager">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <h2>Meet Our General Manager</h2>
                <p>
                  At the heart of Sherwood's success stands our esteemed General
                  Manager, [Name], whose dedication and leadership have shaped
                  our journey over the years. With a deep passion for excellence
                  and a wealth of experience in the industry, [Name] has been an
                  integral part of Sherwood for [X] years, ensuring the highest
                  standards in operations, customer service, and innovation.
                </p>
                <p>
                  Under his guidance, Sherwood has continued to grow, evolving
                  into a trusted name known for its commitment to quality and
                  professionalism. His vision and strategic approach have played
                  a crucial role in fostering a culture of excellence, making
                  Sherwood a leader in its field.
                </p>
              </div>
              <div className="col2">
                <div className="image">
                  <img src="/images/manager.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
