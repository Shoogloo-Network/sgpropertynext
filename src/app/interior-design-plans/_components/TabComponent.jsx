"use client"
import { useState } from "react";
import styles from "./TabComponent.module.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Cozy");

  const ideas = {
    Cozy: <div className={styles.interiorTabBtnDiv}>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
      <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    </div>,
    Modern: <div className={styles.interiorTabBtnDiv}>
    <button className={styles.interiorTabBtn}>Gold Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
  </div>,
    "Budget-Friendly": <div className={styles.interiorTabBtnDiv}>
    <button className={styles.interiorTabBtn}>White Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
    <button className={styles.interiorTabBtn}>Green Color Living Room</button>
  </div>
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
        <div>{ideas[activeTab]}</div>
      </div>
    </div>
  );
};

export default TabComponent;
