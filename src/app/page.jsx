"use client";
import HotProduct from "./_components/home/HotProduct";
import IconCardBtnWithoutHover from "./_components/cards/IconCardBtnWithoutHover";
import RealStateBanner from "./_components/home/RealStateBanner";
import CardWithList from "./_components/cards/CardWithList";
import { useRouter } from "next/navigation"; // Use Next.js router
import "./page.css";
const Home = () => {
  const iconDataForButton = [
    {
      img: "building-img.svg", // Static assets path
      title: "Best Sellers in India",
      description:
        "Our freshly brewed list of the best residential projects from top rated builders in the country, backed by our award-winning start-to-finish services.",

      buttonName: "View All",
    },
  ];

  const router = useRouter(); // Use the Next.js router

  return (
    <div id="webid">
      <RealStateBanner />
      <div className="home-container">
        <h1>Hot Selling Projects in India</h1>
        <div className="home-content" style={{ cursor: "pointer" }}>
          <IconCardBtnWithoutHover
            data={iconDataForButton}
            onClick={() => {
              router.push("/search");
            }} // Navigate with Next.js router
          />
          <HotProduct />
        </div>
        <div className="real-estate-sections">
          <div className="real-estate-section">
            <h1 className="section-title">For Real Estate Developers</h1>
            <CardWithList
             
              backgroundColor="#ddf5ff"
            />
          </div>
          <div
            className="real-estate-section"
            style={{ backgroundColor: "#fff" }}
          >
            <h1 className="section-title">For Agents</h1>
            <CardWithList
             
              backgroundColor="#fff6e7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
