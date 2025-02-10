import { useRouter } from 'next/navigation';
import './HotSellingCard.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';

const HotSellingCard = ({ title, description, descriptionPrice, onClick, url }) => {
  const router = useRouter();

  const onImageClick = () => {
    router.push('/detail-page');
  };

  return (
    <div className="hotselling-card hotselling-fade-in hotselling-card-cursor">
      {url ? (
        <div className="hotselling-card-flex-row">
          <div className="hotselling-card-image-wrapper">
            <img
              src={"/images/" + url}
              alt="card"
              className="hotselling-card-image-style"
              onClick={onImageClick}
            />
          </div>
          <div className="hotselling-card-content hotselling-card-content-half" onClick={onClick}>
            <div className="hotselling-card-title-row">
            <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
              <h3 className="hotselling-card-title">{title}</h3>
              <p className="hotselling-card-description">{description}</p>
            </div>
            <p className="hotselling-card-description-color">{descriptionPrice}</p>
           
            
          </div>
        </div>
      ) : (
        <div className="hotselling-card-content" onClick={onClick}>
             <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
          <h3 className="hotselling-card-title">{title}</h3>
          <p className="hotselling-card-description">{description}</p>
          <p className="hotselling-card-description-color">{descriptionPrice}</p>
          
         
        </div>
      )}
    </div>
  );
};

export default HotSellingCard;
