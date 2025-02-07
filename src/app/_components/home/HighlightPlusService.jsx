"use client"
import Image from "next/image";
import Link from "next/link";

import "./HighlightPlusService.css";

const HighlightPlusService = ()=>{
    return (
        <>
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
        

        {Array(3)
          .fill({
            imgSrc: "wedesign.svg",
            title: "Complete Turnkey Services",
            text: "With an emphasis on details, extraordinary designs, and exceptional customer service, we bring your dreams to life.",
          })
          .map((card, index) => (
            <div key={index} className="specialCard interiorCards">
              <Image src={"/images/"+card.imgSrc} alt="design" width={100} height={100} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
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
      </section>
        </>
    )
}


export default HighlightPlusService ;