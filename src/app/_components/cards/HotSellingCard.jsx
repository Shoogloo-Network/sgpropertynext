import { useRouter } from 'next/navigation';
import './HotSellingCard.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';

const HotSellingCard = ({ title, description, descriptionPrice,iconCardData ,onClick, url }) => {
  const router = useRouter();

  const onImageClick = () => {
    router.push('/detail-page');
  };

  return (
    <div className="hotselling-card hotselling-fade-in hotselling-card-cursor">
       
        <div className="hotselling-card-content" onClick={onClick}>
             <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
        </div>
        <div className="hotselling-card-content" onClick={onClick} style={{display:"flex",flexDirection:"column",gap:"0",alignItems:"flex-start"}}>
            <h3 className="hotselling-card-title">{title}</h3>
            <div >
              {/* <IconCard data={iconCardData} /> */}
              <div style={{display:"flex",alignItems:"center",gap:"2px"}}><img src='/images/building.png' alt='icon image' height={20} width={20} />
             <div>
             <p>Configuration</p>
             <p>165 unit, 1.25 Acres</p>
             </div>
             </div>
            
            </div>
        </div>
        <div className="hotselling-card-content" onClick={onClick} style={{display:"flex",flexDirection:"column",gap:"0",alignItems:"flex-start"}}>
            <h3 className="hotselling-card-description">{description}</h3>
           <div style={{display:"flex",alignItems:"center",gap:"2px"}}><img src='/images/building.png' alt='icon image' height={20} width={20} />
             <div>
             <p>Configuration</p>
             <p>165 unit, 1.25 Acres</p>
             </div>
             </div>
        </div>
        <div className="hotselling-card-content" onClick={onClick} style={{display:"flex",flexDirection:"column",gap:"0",alignItems:"flex-start"}}>
        <h3 className="hotselling-card-description">Price Range</h3>
            <p className="hotselling-card-description-color">{descriptionPrice}</p>
        </div>
     
    </div>
  );
};

export default HotSellingCard;
