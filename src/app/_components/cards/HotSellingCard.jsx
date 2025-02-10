import { useRouter } from 'next/navigation';
import './HotSellingCard.css';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';

const HotSellingCard = ({ title, description, descriptionPrice, onClick }) => {
    const router = useRouter();

    const onImageClick = () => {
        router.push('/detail-page');
    };

    return (
        <div className="hotselling-card hotselling-fade-in hotselling-card-cursor">

            <div className="hotselling-card-content" onClick={onClick}>
                <BtnPrimaryWithIcon iconName="FaPhone" cnt="Contact" />
            </div>

            <div className="hotselling-card-content hotselling-flex-column" onClick={onClick}>
                <h3 className="hotselling-card-title">{title}</h3>
                <div className="hotselling-info-wrapper">
                    <img src='/images/building.png' alt='icon image' className="hotselling-icon-image" />
                    <div className="hotselling-info-wrapper-div">
                        <p>Project Size</p>
                        <p>165 unit, 1.25 Acres</p>
                    </div>
                </div>
            </div>

            <div className="hotselling-card-content hotselling-flex-column" onClick={onClick}>
                <h3 className="hotselling-card-description">{description}</h3>
                <div className="hotselling-info-wrapper">
                    <img src='/images/building.png' alt='icon image' className="hotselling-icon-image" />
                    <div className="hotselling-info-wrapper-div">
                        <p>Configuration</p>
                        <p>2-BHK, 3-BHK Flats</p>
                    </div>
                </div>
            </div>

            <div className="hotselling-card-content hotselling-flex-column" onClick={onClick}>
                <h3 className="hotselling-card-description">Price Range</h3>
                <p className="hotselling-card-description-color">{descriptionPrice}</p>
            </div>

        </div>
    );
};

export default HotSellingCard;
