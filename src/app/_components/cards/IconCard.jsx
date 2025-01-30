import './IconCard.css';
import { useState } from 'react';
const IconCard = ({ data , onClick ,style,imgStyle,logout}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="icon-card-container" style={style}>
      {/* style={style} */}
      {data.map((item, index) => (
        <div key={index} className="icon-card" onClick={()=>{
          onClick(item,index,setHoveredIndex); 
          setHoveredIndex(index);
          if(logout&&index===8){
            logout();
          }
        }} style={{backgroundColor:hoveredIndex===index?'#f0f0f0':'transparent'}} >
          <img src={item.img} alt={item.description} className="icon-card-image" style={imgStyle} />
          <div className="icon-card-content">
            {item.title && <h4 className="icon-card-title">{item.title}</h4>}
            <p className="icon-card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconCard;
