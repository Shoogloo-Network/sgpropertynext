
import './IconCardBtnWithoutHover.css';
const IconCardBtnWithoutHover = ({data,onClick}) => {
  return (
    <div className="icon-card-with-button-container-without-hover" onClick={onClick}>
    {data.map((item, index) => (
      <div key={index+1} className="cardBtnMain-without-hover">
        <div className="cardBtnContent-without-hover">
          <div className="cardBtnImage-without-hover">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="cardBtnText-without-hover">
            <h4 className="cardBtnTitle-without-hover">{item.title}</h4>
            <p className="cardBtnDescription-without-hover">{item.description}</p>
          </div>
        </div>
        <div className="cardBtn-without-hover">
          
          <button className="cardBtnAction-without-hover">{item.buttonName}</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default IconCardBtnWithoutHover
