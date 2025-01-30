// import { useState } from 'react'

import "./HomeInterior.css";
import HomeInteriorCategory from "./HomeInteriorCategory";

const HomeInterior = () => {
  return (
    <div className="homeInterior">
      <section className="HomeInteriorMainDiv">
        <h2>Interior Design that Speaks of You</h2>
        <p>
          From Foundation to furnishing , Decoration , Designing and many More
        </p>
        <button>Book Free Consultation</button>
      </section>
      <section className="HomeInteriorHighlights">
        <div className="HomeInteriorHighlightsDiv">
          <i className="fa-solid fa-users"></i>
          <div>
            <h2>5000+</h2>
            <p>Interior Projects</p>
          </div>
        </div>
        <div className="HomeInteriorHighlightsDiv">
          <i className="fa-solid fa-users"></i>
          <div>
            <h2>5000+</h2>
            <p>Interior Projects</p>
          </div>
        </div>
        <div className="HomeInteriorHighlightsDiv">
          <i className="fa-solid fa-users"></i>
          <div>
            <h2>5000+</h2>
            <p>Interior Projects</p>
          </div>
        </div>
        <div className="HomeInteriorHighlightsDiv">
          <i className="fa-solid fa-users"></i>
          <div>
            <h2>5000+</h2>
            <p>Interior Projects</p>
          </div>
        </div>
        <div className="HomeInteriorHighlightsDiv">
          <i className="fa-solid fa-users"></i>
          <div>
            <h2>5000+</h2>
            <p>Interior Projects</p>
          </div>
        </div>
      </section>
      <section className="HomeInteriorCards">
        <div className="specialCard">
          <div>
            <h2>Complete Turnkey Services</h2>
            <p>
              With an emphasis on details, extraordinary designs and exceptional
              customer service, we bring your dreams to life.
            </p>
          </div>
          <p>
            Know More <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <div className="specialCard interiorCards">
          <img
            src="../src/assets/icon/wedesign.svg"
            alt="webdesgin"
            width={100}
          />
          <h3>Complete Turnkey Services</h3>
          <p>
            With an emphasis on details, extraordinary designs and exceptional
            customer service, we bring your dreams to life.
          </p>
        </div>

        <div className="specialCard interiorCards">
          <img
            src="../src/assets/icon/wedesign.svg"
            alt="webdesgin"
            width={100}
          />
          <h3>Complete Turnkey Services</h3>
          <p>
            With an emphasis on details, extraordinary designs and exceptional
            customer service, we bring your dreams to life.
          </p>
        </div>
        <div className="specialCard interiorCards">
          <img
            src="../src/assets/icon/wedesign.svg"
            alt="webdesgin"
            width={100}
          />
          <h3>Complete Turnkey Services</h3>
          <p>
            With an emphasis on details, extraordinary designs and exceptional
            customer service, we bring your dreams to life.
          </p>
        </div>
      </section>
      <section className="HomeInteriorVideo">
        <h2>From Concept to Creation: Your Furnitures Journey</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/pv9z_JGaBl2jcn_L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section>
        <HomeInteriorCategory />
      </section>
    </div>
  );
};

export default HomeInterior;
