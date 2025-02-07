"use client"
import { useState } from "react";
import styles from "./TabComponent.module.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Cozy");

  const ideas = {
    Cozy: "Create a warm and inviting space with soft lighting, plush throws, and neutral tones.",
    Modern: "Go sleek and minimal with clean lines, bold accents, and functional furniture.",
    "Budget-Friendly": "Repurpose existing items, add DIY decor, and incorporate affordable yet stylish options."
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {Object.keys(ideas).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <p>{ideas[activeTab]}</p>
      </div>
    </div>
  );
};

export default TabComponent;
