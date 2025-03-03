// components/FloorPlansComponent.js

import { useState } from 'react';
import styles from './TopExperts.module.css';


const TopExperts = () => {
  const [activeTab, setActiveTab] = useState('2_bhk');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className={styles.npWhiteBody}>
      <div className={`${styles.npSeoContent} ${styles.active}`}>
        <div className={styles.npSeoContentBody}>
          <div className={styles.readMoreSeoP}>
            Krisala 41 Zillenia offers a variety of floor plans designed to meet the needs of different families and lifestyles.
            Whether you are looking for a cosy space or a more spacious home,  there’s something for everyone. Check the floor plan and price list below:
          </div>
        </div>
        <div className={styles.readMoreBtn}>
          <button className={styles.btn}>Read Less</button>
        </div>
      </div>

      <ul className={`${styles.npTab} ${styles.scrollBarHide} ${styles.floorPlanLi}`}>
        <li
          className={activeTab === '2_bhk' ? styles.activeTab : ''}
          onClick={() => handleTabClick('2_bhk')}
        >
          2 BHK
        </li>
        <li
          className={activeTab === '3_bhk' ? styles.activeTab : ''}
          onClick={() => handleTabClick('3_bhk')}
        >
          3 BHK
        </li>
      </ul>

      {activeTab === '2_bhk' && (
        <div className={styles.floorPlansSlider}>
          <div className={styles.unitCard}>
            <figure>
              <img
                className={styles.unitCoverBg}
                src="https://static.squareyards.com/resources/images/pune/unit-image/krisala-41-zillenia-apartment-2-bhk-720sqft-20231805151812-3d-9737.jpg"
                alt="2 BHK 722 Sq. Ft. Apartment"
              />
              <div className={styles.actionBox}>
                <div className={styles.switchBox}>
                  <div className={styles.switchItem}>3D</div>
                  <div className={styles.switchItem}>2D</div>
                </div>
                <div className={styles.badge}>3D Floor Plans</div>
              </div>
            </figure>

            <div className={styles.unitCaption}>
              <div className={styles.unitFlexDetail}>
                <div className={styles.unitFlex1}>
                  <div className={styles.unitTitle}>
                    <strong>2 BHK 722 Sq. Ft. Apartment</strong>
                  </div>
                  <span>2 Bedrooms</span>
                </div>
                <div className={styles.unitFlex}>
                  <label className={styles.unitLabel}>Carpet</label>
                  <strong className={styles.unitLabelData}>722 Sq. Ft.</strong>
                </div>
                <div className={styles.unitFlex}>
                  <label className={styles.unitLabel}>Price</label>
                  <strong className={styles.unitLabelData}>₹ 63.75 Lac</strong>
                </div>
              </div>
              <button className={styles.btnPrimary}>Get a Call Back</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === '3_bhk' && (
        <div className={styles.floorPlansSlider}>
          <div className={styles.unitCard}>
            <figure>
              <img
                className={styles.unitCoverBg}
                src="https://static.squareyards.com/resources/images/pune/unit-image/krisala-41-zillenia-apartment-3-bhk-904sqft-20245123175121-3d-9108.jpg"
                alt="3 BHK 904 Sq. Ft. Apartment"
              />
              <div className={styles.actionBox}>
                <div className={styles.switchBox}>
                  <div className={styles.switchItem}>3D</div>
                  <div className={styles.switchItem}>2D</div>
                </div>
                <div className={styles.badge}>3D Floor Plans</div>
              </div>
            </figure>

            <div className={styles.unitCaption}>
              <div className={styles.unitFlexDetail}>
                <div className={styles.unitFlex1}>
                  <div className={styles.unitTitle}>
                    <strong>3 BHK 904 Sq. Ft. Apartment</strong>
                  </div>
                  <span>3 Bedrooms</span>
                </div>
                <div className={styles.unitFlex}>
                  <label className={styles.unitLabel}>Carpet</label>
                  <strong className={styles.unitLabelData}>904 Sq. Ft.</strong>
                </div>
                <div className={styles.unitFlex}>
                  <label className={styles.unitLabel}>Price</label>
                  <strong className={styles.unitLabelData}>₹ 79.82 Lac</strong>
                </div>
              </div>
              <button className={styles.btnPrimary}>Get a Call Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopExperts;
