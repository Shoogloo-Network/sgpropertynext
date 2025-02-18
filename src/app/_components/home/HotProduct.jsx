"use client";
import Stories from "react-insta-stories";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IconCard from "../cards/IconCard";
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
    fetchData(process.env.NEXT_PUBLIC_API_HOTSELLING, setCardData, { publish: "ondeck" });
  }, []);

  console.log("Card Data:", cardData);

  useEffect(() => {
    if (cardData?.payload?.length > 0) {
      setCurrentIndex(0); // Reset to the first story when data is available
    }
  }, [cardData]);

  // Add clicked card to local storage
  const addToLocalStorage = (item) => {
    console.log("Adding to local storage:", item);
    const existingData = JSON.parse(localStorage.getItem("clickedCardsHistory") || "[]");
    const newData = [...existingData, item];
    localStorage.setItem("clickedCardsHistory", JSON.stringify(newData));
  };

  // Handle story click navigation
  const onHandleClick = (item) => {
    console.log("Navigating to:", item);
    router.push(`/in/projects/${item.city.toLowerCase()}/${item.slug}/${item.id}`);
  };

  // Prepare stories
  const stories = cardData?.payload?.length
    ? cardData.payload.map((item, index) => ({
        content: ({ action, isPaused }) =>
          item.imagexl ? (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                backgroundImage: `url("/images/${item.imagexl}")`,
                height: "360px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              {/* Click to Show Form */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowForm(true);
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "20%",
                  height: "40%",
                  cursor: "pointer",
                }}
              />

              {/* Click to Navigate & Store Data */}
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
                  width: "80%",
                  height: "100%",
                  zIndex: 2,
                  cursor: "pointer",
                }}
              />

              {/* Bottom Section */}
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
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <HotSellingCard
                    image={`/images/${item.image}`}
                    title={item.title}
                    address={item.address}
                    descriptionPrice={{
                      higherprice: item.higherprice,
                      lowerprice: item.lowerprice,
                    }}
                    iconCardData={item.buildproperties ? JSON.parse(item.buildproperties) : {}}
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
      }))
    : [];

  // Handle story navigation
  const handleAllStoriesEnd = () => {
    console.log("All stories ended");
    setCurrentIndex(0);
  };

  const handleNextStory = (index) => {
    console.log("Next story", index);
    setCurrentIndex(index);
  };

  const handlePreviousStory = (index) => {
    console.log("Previous story", index);
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Stories
        key={cardData?.payload?.length > 0 ? "loaded" : "loading"} // Forces Stories to reinitialize
        stories={stories.length ? stories : [{ content: () => <div>No stories available</div> }]}
        loop={true}
        defaultInterval={2000}
        width="100%"
        height="100%"
        keyboardNavigation={true}
        preventDefault={true}
        onAllStoriesEnd={handleAllStoriesEnd}
        currentIndex={currentIndex}
      />
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default HotProduct;
