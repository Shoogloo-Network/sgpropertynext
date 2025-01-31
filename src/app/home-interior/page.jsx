"use client";

import Image from "next/image";
import Link from "next/link";
import HomeInteriorCategory from "./HomeInteriorCategory";
import "./HomeInterior.css";

const HomeInterior = () => {
  return (
    <div className="homeInterior">
      {/* Main Section */}
      <section className="HomeInteriorMainDiv">
        <h2>Interior Design that Speaks of You</h2>
        <p>From Foundation to Furnishing, Decoration, Designing, and more.</p>
        <button>Book Free Consultation</button>
      </section>

      {/* Highlights Section */}
      <section className="HomeInteriorHighlights">
        {Array(5)
          .fill({
            icon: "fa-users",
            count: "5000+",
            text: "Interior Projects",
          })
          .map((highlight, index) => (
            <div key={index} className="HomeInteriorHighlightsDiv">
              <i className={`fa-solid ${highlight.icon}`}></i>
              <div>
                <h2>{highlight.count}</h2>
                <p>{highlight.text}</p>
              </div>
            </div>
          ))}
      </section>

      {/* Service Cards */}
      <section className="HomeInteriorCards">
        <div className="specialCard">
          <div>
            <h2>Complete Turnkey Services</h2>
            <p>
              With an emphasis on details, extraordinary designs, and exceptional
              customer service, we bring your dreams to life.
            </p>
          </div>
          <Link href="#">
            <p>
              Know More <i className="fa-solid fa-chevron-right"></i>
            </p>
          </Link>
        </div>

        {Array(3)
          .fill({
            imgSrc: "wedesign.svg",
            title: "Complete Turnkey Services",
            text: "With an emphasis on details, extraordinary designs, and exceptional customer service, we bring your dreams to life.",
          })
          .map((card, index) => (
            <div key={index} className="specialCard interiorCards">
              <Image src={`/images/${card.imgSrc}`} alt="design" width={100} height={100} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
      </section>

      {/* Video Section */}
      <section className="HomeInteriorVideo">
        <h2>From Concept to Creation: Your Furniture’s Journey</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/pv9z_JGaBl2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Categories */}
      <section>
        <HomeInteriorCategory />
      </section>
    </div>
  );
};

export default HomeInterior;
