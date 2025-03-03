
import HotProduct from "./_components/home/HotProduct";
import IconCardBtnWithoutHover from "./_components/cards/IconCardBtnWithoutHover";
import RealStateBanner from "./_components/home/RealStateBanner";
import CardWithList from "./_components/cards/CardWithList";
import "./page.css";
import dynamic from 'next/dynamic';
import HomeCategory from "./_components/home/HomeCategory";
import DemandSupplyChart from "./_components/home/DemandSupplyChart";
import HighlightPlusService from "./_components/home/HighlightPlusService"
import ReadyToMove from "./_components/home/ReadyToMove";
import { propFilter } from "./_components/utils/GenericFunction";
import HotProductBackup from "./_components/home/HotProductBackup";
import Btn from "./_components/buttons/Btn";
const UnderConstruction = dynamic(() => import("./_components/home/UnderConstruction"));

const Home = () => {
  const iconDataForButton = [
    {
      img: "building-img.svg", // Static assets path
      title: "Best Sellers in India",
      description:"Our freshly brewed list of the best residential projects from top rated builders in the country, backed by our award-winning start-to-finish services.",
      buttonName: "View All",
    },
  ];
  
  return (
    <div id="webid">
      <RealStateBanner />
      <div className="hspace"></div>
      <div className="home-container">
        <h1 className="homeh1">Hot Selling Projects in India</h1>
        <div className="home-content" >
         <div className="hotsellingbestsellerdesktop">
         <IconCardBtnWithoutHover
            data={iconDataForButton}
            onClick="/search"
          />
          </div> 
          <div className="hotsellingbestsellermobile">
         <Btn onClick="/search">
          View All
         </Btn>
          </div>
          <HotProduct />
          {/* <HotProductBackup/> */}
        </div>
        <div className = "hspace"></div>
      </div>
      <div className="hspace"></div>
      <div>
        <h1 className="homeh1"> Ready to Move</h1>
        <ReadyToMove />
      </div>
      <div className="hspace"></div>
      <div className="home-under-construction-section">
        <h1 className="homeh1"> New under-construction projects</h1>
        <UnderConstruction />
      </div>
      <div className="hspace"></div>
      <div >
        <h1 className="homeh1"> Home Interior Projects</h1>
        <HomeCategory />
      </div>
      <div className="hspace"></div>
      <div >
        <h1 className="homeh1"> New under-construction projects</h1>
        <HighlightPlusService />
      </div>
      <div className="hspace"></div>
      <div className="real-estate-sections">
        <div className="real-estate-section">
          <h1 className="section-title">For Real Estate Developers</h1>
          <CardWithList backgroundColor="#ddf5ff" />
        </div>
        <div className="real-estate-section" style={{ backgroundColor: "#fff" }} >
          <h1 className="section-title">For Agents</h1>
          <CardWithList backgroundColor="#fff6e7" />
        </div>
      </div>
      {/* <div className="home-under-construction-section">
      <h1 > New under-construction projects</h1>
      <div style={{display:"flex",justifyContent:"center",gap:"20px"}} > 
     
     <DemandSupplyChart/>
     <DemandSupplyChart/>
     <DemandSupplyChart/>
   </div>
      </div> */}
    </div>
  );
};

export default Home;
