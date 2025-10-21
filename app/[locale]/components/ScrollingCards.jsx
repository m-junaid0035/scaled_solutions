"use client";
import React, { useEffect, useRef } from "react";
import "./NewsletterSection.css";
import { ScrollObserver, valueAtPercentage } from "aatjs";
import gsap from "gsap";
const ScrollingCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = cardsRef.current;

    if (!cardsContainer || cards.length === 0) return;

    // Set CSS variables for dynamic sizing
    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );
// ✅ Entrance animation (fade + slide up)
// ✅ Elegant entrance animation with nazakat ✨
gsap.fromTo(
  cards,
  {
    y: 60,        // start lower
    opacity: 0,   // hidden
    scale: 0.95,  // slightly smaller
  },
  {
    y: 0,
    opacity: 1,   // fade visible
    scale: 1,     // grow to full
    duration: 1.2,
    stagger: 0.3,
    ease: "power4.out", // smooth & elegant
  }
);


    // ✅ Scroll-based effects (your original logic)
    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".card__inner");

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        });

        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`;
      });
    });
  }, []);

  const cardData = [
    {
      title: "Integration Services",
      description: [
        "Seamlessly connect applications across platforms.",
        "Automate workflows for efficiency and speed.",
        "Retrieve deeper value from your data integration.",
      ],
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Security Services",
      description: [
        "Protect systems with advanced threat detection.",
        "Ensure compliance with global security standards.",
        "Visualize risks to safeguard your data.",
      ],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Cloud Services",
      description: [
        "Scale infrastructure with on-demand resources.",
        "Maximize uptime with reliable cloud hosting.",
        "Unlock the full value of your cloud data.",
      ],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Product Development",
      description: [
        "Transform ideas into innovative digital products.",
        "Iterate quickly with agile development practices.",
        "Build the future by leveraging data-driven design.",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=100",
    },
  ];

  return (
    <>
      <div className="cards">
        <div className="forphone">

        {cardData.map((card, index) => (
          <div
            key={index}
            className="card"
            
            data-index={index}
            ref={(el) => (cardsRef.current[index] = el)}
            // style={{border: "2px solid red"}}
          >
            <div className="card__inner"  >
             <div className="card__content">
  <div className="card__content-inner">
    <h1 className="card__title">{card.title}</h1>
    <ul style={{ paddingTop: "20px" }}>
      {card.description.map((line, i) => (
        <p key={i} style={{ marginBottom: "10px" }}>
          {line}
        </p>
      ))}
    </ul>
    <div className={'buttonRow'}>
  <button className={'btn'}>Services</button>
  <button className={'btn'}>Testimonials</button>
</div>
  </div>
</div>

              <div className="card__image-container" >
                 <video
        src="/videos/final.mp4" // use the new video file
        loop
        autoPlay
        muted
        playsInline
        
      />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
        <div className="space"></div>
    </>
  );
};

export default ScrollingCards;
