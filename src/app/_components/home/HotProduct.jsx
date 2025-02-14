"use client";
import Stories from "react-insta-stories";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IconCard from '../cards/IconCard';
import FormPopup from "../userform/FormPopup";

import { fetchData } from "../api/data";
import HotSellingCard from "../cards/HotSellingCard";
const HotProduct = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState([]);

  // Fetch card data from the API
  useEffect(() => {
    fetchData("cardData", setCardData);
  }, []);
  useEffect(() => {
    if (cardData?.length > 0) {
      setCurrentIndex(0); // Reset to the first story
    }
  }, [cardData]);

  const addToLocalStorage = (item) => {
    const existingData = JSON.parse(
      localStorage.getItem("clickedCardsHistory") || "[]"
    );
    const newData = [...existingData, item];
    localStorage.setItem("clickedCardsHistory", JSON.stringify(newData));
  };
const onHandleClick = (item)=>{
router.push(`/in/projects/${item.city}/${item.title}/${item.id}`)
}
  const stories = cardData?.map((item, index) => ({
    content: ({ action, isPaused }) =>
      item.backgroundImage ? (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url("images/${item.backgroundImage}")`,
            height: "360px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
            
            position: "relative",
          }}
         
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowForm(true);
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "30%",
              height: "100%",
              cursor: "pointer",
            }}
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            onHandleClick(item);
              addToLocalStorage(item);
            }}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "70%",
              height: "100%",
              zIndex: 2,
              cursor: "pointer",
            }}
          />
          <div
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              display: "flex",
              flexDirection: "column",
              gap: "180px",
              margin: "0 auto",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                marginBottom: "5px",
                position: "relative",
                top: "0",
                pointerEvents: "none",
              }}
            >

            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

              <HotSellingCard
                image={"/images/" + item.image}
                title={item.title}
                description={item.description}
                descriptionPrice={item.descriptionPrice}
                iconCardData={item.iconCardData}
              />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100%", width: "100%", backgroundColor: "red" }}>
          <p>Error: Missing background image</p>
        </div>
      ),
    duration: 5000,
  }));

  const handleAllStoriesEnd = () => {
    // console.log("All stories ended");
    setCurrentIndex(0);
  };

  const handleNextStory = (index) => {
    // console.log("Next story", index);
    setCurrentIndex(index);
  };

  const handlePreviousStory = (index) => {
    // console.log("Previous story", index);
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Stories
        key={cardData?.length > 0 ? "loaded" : "loading"} // Forces Stories to reinitialize
        stories={
          stories?.length > 0
            ? stories
            : [{ content: () => <div>No stories available</div> }]
        }
        loop={true}
        defaultInterval={2000}
        width="100%"
        height="100%"
        keyboardNavigation={true}
        preventDefault={true}
        onAllStoriesEnd={handleAllStoriesEnd}
        onNext={(s, st) => handleNextStory(st)}
        onPrevious={(s, st) => handlePreviousStory(st)}
        currentIndex={currentIndex}
      />
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default HotProduct;
