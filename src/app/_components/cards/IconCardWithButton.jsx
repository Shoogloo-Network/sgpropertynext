
import './IconCardWithButton.css';

const IconCardWithButton = ({ data }) => {
  return (
    <div className="icon-card-with-button-container">
      {data.map((item, index) => (
        <div key={index+1} className="cardBtnMain">
          <div className="cardBtnContent">
            <div className="cardBtnImage">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="cardBtnText">
              <h4 className="cardBtnTitle">{item.title}</h4>
              <p className="cardBtnDescription">{item.description}</p>
            </div>
          </div>
          <div className="cardBtnHover">
            <ul className="cardBtnList">
              {item.listDescription.map((description, descIndex) => (
                <li key={descIndex} className="cardBtnListItem">
                  {description.list}
                </li>
              ))}
            </ul>
            <button className="cardBtnAction">{item.buttonName}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconCardWithButton;
