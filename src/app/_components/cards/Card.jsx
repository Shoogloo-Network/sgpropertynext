import { useRouter } from 'next/navigation';
import './Card.css';
import IconCard from './IconCard';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';

const Card = ({ title, description, descriptionPrice, iconCardData, onClick, url }) => {
  const router = useRouter();

  const onImageClick = () => {
    router.push('/detail-page');
  };

  return (
    <div className="card fade-in card-cursor">
      {url ? (
        <div className="card-flex-row">
          <div className="card-image-wrapper">
            <img
              src={`images/${url}`}
              alt="card"
              className="card-image-style"
              onClick={onImageClick}
            />
          </div>
          <div className="card-content card-content-half" onClick={onClick}>
            <div className="card-title-row">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
            <p className="card-description-color">{descriptionPrice}</p>
            <div>
              <IconCard data={iconCardData} />
            </div>
            <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
          </div>
        </div>
      ) : (
        <div className="card-content" onClick={onClick}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <p className="card-description-color">{descriptionPrice}</p>
          <div>
            <IconCard data={iconCardData} />
          </div>
          <BtnPrimaryWithIcon iconName="FaPhone" cnt="Get a Callback" />
        </div>
      )}
    </div>
  );
};

export default Card;
