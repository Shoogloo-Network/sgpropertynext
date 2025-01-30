import "./BtnPrimaryWithIcon.css";
import * as FaIcons from "react-icons/fa"; // Import the arrow icon from Font Awesome
import React from "react";

const BtnPrimaryWithIcon = ({ iconName, cnt, onClick }) => {
  return (
    <>
      <div className="callback-request" onClick={onClick}>
        <div className="callback-request-div">
          <p>{cnt}</p>
          {FaIcons[iconName] ? (
            React.createElement(FaIcons[iconName], {
              style: {
                color: "#fff",
                fontSize: "24px",
              },
            })
          ) : (
            <span>Icon not found: {iconName}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default BtnPrimaryWithIcon;
