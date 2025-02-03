"use client";
import Stories from "react-insta-stories";
import Card from "../cards/Card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormPopup from "../userform/FormPopup";

import { fetchData } from "../api/data";
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
  // console.log(cardData);

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

  const stories = cardData?.map((item, index) => ({
    content: ({ action, isPaused }) =>
      item.backgroundImage ? (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url("images/${item.backgroundImage}")`,
            height: "100%",
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
              // console.log("Clicked Card Data (Form):", item);
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
              router.push("/detail-page");
              // console.log("Clicked Card Data (Navigate):", item);
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
              width: "40%",
              marginTop: "25px",
              position: "relative",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "5px",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "orange",
                  color: "black",
                  gap: "10px",
                  padding: "5px 15px",
                  pointerEvents: "none",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                <img
                  src="images/story.png"
                  alt="Exclusive"
                  height={20}
                  width={20}
                />
                <p>Exclusive</p>
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fff",
                  color: "black",
                  gap: "10px",
                  padding: "5px 15px",
                  pointerEvents: "none",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                <img
                  src="images/story.png"
                  alt="Square Assured"
                  height={20}
                  width={20}
                />
                <p>Square Assured</p>
              </div>
            </div>
            <Card
              image={`images/${item.image}`}
              title={item.title}
              description={item.description}
              descriptionPrice={item.descriptionPrice}
              iconCardData={item.iconCardData}
            />
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
