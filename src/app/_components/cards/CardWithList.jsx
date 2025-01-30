import BtnPrimaryWithIcon from "../buttons/BtnPrimaryWithIcon";
import "./CardWithList.css";

const CardWithList = ({ url, backgroundColor }) => {
  return (
    <>
      <div
        className="developer-card"
        style={{
          backgroundImage: url,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: backgroundColor,
        }}
      >
        <div className="developer-card-header">
          <img
            src="images/propvr.svg"
            alt="ListCard Icon"
            className="developer-card-icon"
          />
          <div className="developer-card-title">
            <h1>PropVR</h1>
          </div>
        </div>
        <div className="developer-card-content">
          <div className="developer-card-item">
            <img
              src="images/check-mark.png"
              alt="icon"
              className="developer-card-check-icon"
            />
            <p>Get all 3D visualisation under one roof</p>
          </div>
          <div className="developer-card-item">
            <img
              src="images/check-mark.png"
              alt="icon"
              className="developer-card-check-icon"
            />
            <p>Get all 3D visualisation under one roof</p>
          </div>
          <div className="developer-card-item">
            <img
              src="images/check-mark.png"
              alt="icon"
              className="developer-card-check-icon"
            />
            <p>Get all 3D visualisation under one roof</p>
          </div>
        </div>
        <div className="developer-card-footer">
          <BtnPrimaryWithIcon iconName="FaArrowRight" cnt="Know More" />
        </div>
      </div>
    </>
  );
};

export default CardWithList;
