import { useRouter } from 'next/navigation';
import './HotSellingCard.css';
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';

const HotSellingCard = ({ title, address, descriptionPrice, iconCardData ,click}) => {
    const router = useRouter();

    const onImageClick = () => {
        router.push('/detail-page');
    };

    return (
        <><div className="hotselling-card hotselling-fade-in hotselling-card-cursor">

            <div className="hotselling-card-content desktop"  >
                <BtnPrimaryWithIcon iconName="FaPhone" cnt="Contact" />
            </div>

            <div className="hotselling-card-content hotselling-flex-column" >
                <h3 className="hotselling-card-title">{title}</h3>
                <div className="hotselling-info-wrapper">
                    <img src='/images/building.png' alt='icon image' className="hotselling-icon-image" />
                    <div className="hotselling-info-wrapper-div">
                        <p>{iconCardData[0].title}</p>
                        <p>{iconCardData[0].description}</p>
                    </div>
                </div>
            </div>

            <div className="hotselling-card-content hotselling-flex-column" >
                <h3 className="hotselling-card-description">{address}</h3>
                <div className="hotselling-info-wrapper">
                    <img src='/images/building.png' alt='icon image' className="hotselling-icon-image" />
                    <div className="hotselling-info-wrapper-div">
                        <p>{iconCardData[1].title}</p>
                        <p>{iconCardData[1].description}</p>
                    </div>
                </div>
            </div>
            <div className="hotselling-card-content hotselling-flex-column" >
                <h3 className="hotselling-card-description">Price Range</h3>
                <p className="hotselling-card-description-color">{`${descriptionPrice.lowerprice} - ${descriptionPrice.higherprice}`}</p>
            </div>
        </div>
        <div className="hotselling-card-content hotselling-card-content-btn mobile" >
                <BtnPrimaryWithIcon iconName="FaPhone" cnt="Contact" />
            </div>
        </>
    );
};

export default HotSellingCard;
