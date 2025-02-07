"use client"
import React, { useState } from "react";

const LivingRoomColorIdeas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colorIdeas = [
    { name: "Pista Green Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/pistagreen-lr_10" },
    { name: "Yellow Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/yellow-lr_10" },
    { name: "Multicolour Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/multicolour-lr_10" },
    { name: "Green Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/green-lr_10" },
    { name: "Pink Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/pink-lr_10" },
    { name: "Orange Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/orange-lr_10" },
    { name: "Light Beige Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/lightbeige-lr_10" },
    { name: "Off White Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/offwhite-lr_10" },
    { name: "Neutral Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/neutral-lr_10" },
    { name: "Grey Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/grey-lr_10" },
    { name: "Purple Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/purple-lr_10" },
    { name: "Royal Blue Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/royalblue-lr_10" },
    { name: "White Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/white-lr_10" },
    { name: "Teal Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/teal-lr_10" },
    { name: "Ivory Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/ivory-lr_10" },
    { name: "Terracotta Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/terracotta-lr_10" },
    { name: "Wooden Brown Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/woodenbrown-lr_10" },
    { name: "Dark Blue Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/darkblue-lr_10" },
    { name: "Navy Blue Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/navyblue-lr_10" },
    { name: "Peach Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/peach-lr_10" },
    { name: "Natural Brown Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/naturalbrown-lr_10" },
    { name: "Olive Green Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/olivegreen-lr_10" },
    { name: "Mint Green Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/mintgreen-lr_10" },
    { name: "Mustard Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/mustard-lr_10" },
    { name: "Red Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/red-lr_10" },
    { name: "Blue Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/blue-lr_10" },
    { name: "Multi-Colour Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/multicolour-lr_10" },
    { name: "Beige Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/beige-lr_10" },
    { name: "Brown Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/brown-lr_10" },
    { name: "Skin Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/skin-lr_10" },
    { name: "Black Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/black-lr_10" },
    { name: "Gold Color Living Room", url: "https://www.interiorcompany.com/in/interior-design-ideas/living-room/gold-lr_10" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? colorIdeas.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === colorIdeas.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Living Room Color Ideas</h2>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        >
          &#8592;
        </button>
        <div className="flex-1 text-center">
          <a
            href={colorIdeas[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-500 hover:underline"
          >
            {colorIdeas[currentIndex].name}
          </a>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default LivingRoomColorIdeas;
