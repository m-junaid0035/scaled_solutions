"use client";

import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./teamExpansion.css";

export default function TeamExpansionPage() {
  return (
    <>
      <NavBar />

      {/* ===== Hero Section ===== */}
      <section className="team-hero">
        <div className="aligned-container">
          {/* Left Column */}
          <div className="left-column">
            <h1>
              <span className="highlight">Subscription</span> Based<br />Development.
            </h1>
            <p>Hire top 3% developers in a simple month to month subscription based model.</p>

            <button className="cta-btn">Let’s Collaborate</button>
            <button className="cta-btn cta-btn2">Case Studies</button>
          </div>

          {/* Right Column */}
          <div className="right-column"></div>
        </div>
      </section>






      {/* ===== The Offer Section ===== */}
      <section className="the-offer-section">


        <div className="main-offer-sec">

    

        <div className="offer-header">
          <div className="offer-left">
            <h2 className="offer-title">The <span className="highlight">Offer</span></h2>
            <div className="offer-checklist">
              <p><span className="check-icon">&#10003;</span> A pool of 1100+ pre-vetted developers across web, mobile, blockchain and AI.</p>
              <p><span className="check-icon">&#10003;</span> Available in a simple month to month.</p>
              <p><span className="check-icon">&#10003;</span> Subscription based model.</p>
            </div>
          </div>
          
          <div className="offer-header-icon">
            <div className="offer-circle-icon">
                <span className="icon-people"></span>
                <span className="icon-chat"></span>
            </div>
          </div>
        </div>

       <div className="offer-cards-container">
  <a href="#directdevelopers" className="offer-card">
    <div className="card-icon"><span className="code-icon">&lt;/&gt;</span></div>
    <h3>Direct Develops</h3>
    <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
  </a>

  <a href="#softwaredev" className="offer-card">
    <div className="card-icon"><span className="code-icon">&lt;/&gt;</span></div>
    <h3>Software Dev</h3>
    <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
  </a>

  <a href="#agilesquad" className="offer-card">
    <div className="card-icon"><span className="code-icon">&lt;/&gt;</span></div>
    <h3>Agile Squad</h3>
    <p>Ventrilo develops innovative data solutions for humans in charge of making informed decisions.</p>
  </a>
</div>



        </div>
      </section>
      {/* ------------------------------------------- */}










      {/* ===== Image Sections ===== */}
<section className="team-image-group">
  <div className="image-section">
    <h2 className="image-section-title" id="directdevelopers">Direct Developers</h2>
    <img 
      src="https://scaledsols.my.canva.site/_assets/media/fa5edcbc47a0baabf9448a29b319ac30.png" 
      alt="Direct Developers" 
      className="image-section-img" 
    />
  </div>

  {/* 2️⃣ Software Development Team */}
  <div className="image-section" id="softwaredev">
    <h2 className="image-section-title">Software Development Team</h2>
    <img 
      src="https://scaledsols.my.canva.site/_assets/media/3ff24e31e7f25081a8791b6f8ef44732.png" 
      alt="Software Development Team" 
      className="image-section-img" 
    />
  </div>

  {/* 3️⃣ Agile Squad */}
  <div className="image-section" id="agilesquad">
    <h2 className="image-section-title">Agile Squad</h2>
    <img 
      src="https://scaledsols.my.canva.site/_assets/media/be290c6512d40e2694bfd8f35160f4b8.png" 
      alt="Agile Squad" 
      className="image-section-img" 
    />
  </div>

</section>


     

      <NewFooter />
    </>
  );
}
