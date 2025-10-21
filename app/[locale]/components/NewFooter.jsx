"use client";
import React, { useEffect, useRef } from "react";
import "./app.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const TextPressure = dynamic(() => import('./TextPressure'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function NewFooter() {
  const footerRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    const targets = footerRef.current.querySelectorAll(".footer-animate");

    targets.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
          filter: "blur(30px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  React.useEffect(() => setMounted(true), []);

  return (
    <section className="footer" ref={footerRef} >
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <div className="container" style={{paddingTop: "20px"}}>
        <div className="footer-email-row" >
          <a
            href="mailto:hello@finlay.studio"
            className="footer-top-heading email-animate"
          >
            <span className="footer-email-icon-wrap">
              <span className="footer-icon-wrap">
                <img
                  src="https://cdn.prod.website-files.com/67ed8747a07565224d85b333/67ee8b55a19679baad70ddf9_arrow-right%20(2).svg"
                  alt=""
                  className="footer-arrow-icon arrow-orange"
                  loading="lazy"
                />
                {/* <img
                  src="https://cdn.prod.website-files.com/67ed8747a07565224d85b333/67fb6925ee648dcac77e467f_arrow-right%20(1).svg"
                  alt=""
                  className="footer-arrow-icon arrow-black"
                  loading="lazy"
                /> */}
              </span>
            </span>
            <span className="footer-email-text">ScaleSol@gmail.com</span>
          </a>
        </div>
         <div className="footer-top-wrap">
          <div className="footer-content-wrap">
            <div className="footer-menu-wrap footer-animate">
              <p className="paragraph-small text-gray-2">(MAIN PAGES)</p>
              <div className="footer-menu-link">
                {["Home 01", "Home 02", "Company", "Pricing", "Works", "Contact"].map((text, i) => (
                  <a href="#" className="menu-link-list paragraph-large" key={i}>
                    {text}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-menu-wrap footer-menu-02 footer-animate">
              <p className="paragraph-small text-gray-2">(OFFICE)</p>
              <div className="footer-menu-link">
                <p className="paragraph-large">
                  123 Maplewood Drive<br />
                  Springfield, IL 62704<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-wrap footer-animate" >
          <div className="text-pressure-container">
  {mounted && (
    <TextPressure
      text="Scaled Solutions"
      flex
      alpha={false}
      stroke={false}
      width
      weight
      italic
      textColor="#ffffff"
      strokeColor="#ff0000"
      minFontSize={10}
    />
  )}
</div>

          <div className="footer-bottom-right">
            <p className="paragraph-large text-gray-2">
              © 2025 - Design & Developed by Scaled Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
