import IconCard from '../../_components/cards/IconCard';
import IconCardWithButton from '../../_components/cards/IconCardWithButton';
import "./PropertyInfo.css";
import BtnPrimaryWithIcon from '../../_components/buttons/BtnPrimaryWithIcon';
import { useEffect, useState } from 'react';
import FormPopup from '../../_components/userform/FormPopup';
import { fetchData } from '../../_components/api/data';
const iconData =[
    {
        img:'/verified.png',
        description:'RERA Registered',

    },
    {
        img:'/home-button.png',
        description:'Residential',

    },
] ;

const iconData1 =[
    {
        img:'/building.png',
        description:'New Launch',

    },
    {
        img:'/building-1.png',
        description:'2,3 BHK Flats',

    },
    {
        img:'/maps.png',
        description:'986 Sq. Ft. to 1494 Sq. Ft. (Saleable)',

    },
   
] ; 
const PropertyInfo = () => {
    const [showForm, setShowForm] = useState(false);
    const [iconDataForButton , setIconDataForButton] =useState([]);
   
useEffect(()=>{
 fetchData("iconDataForButton",setIconDataForButton);
    },[])

   return (
        <div className="property-info-container">
            <div className="property-info-header">
                <div className="icon-card-group"><IconCard data={iconData}  /></div>
                <div className="rating">
                    <span className="stars">★★★★★</span>
                    <a >10 Rating</a>
                </div>
            </div>

            <div className="property-title-section">
                <h1 className="property-name">Provident Botanico</h1>
                <div className="property-location">
                    <h4>Whitefield, Bangalore</h4>
                    <div className="map-link">
                        <img src="src/assets/icon/location.png" alt="location" />
                        <p>See On Map</p>
                    </div>
                </div>
            </div>

            <div className="property-pricing-section">
                <div>

                <div className="price-info">
                    <h2 className="price-range">₹86.00 Lac - 1.49 Cr</h2>
                    <img src="src/assets/icon/info.png" alt="Info" className="info-icon" />
                </div>
                <div className="additional-info"><IconCard data={iconData1} /></div>
                </div>
                
                
                <BtnPrimaryWithIcon 
                   iconName='FaPhone'
                    cnt="Request More Information or a callback"
                    onClick={() => setShowForm(true)}
                />
            </div>

            <div className="property-additional-services">
                <IconCardWithButton data={iconDataForButton} />
            </div>

            {showForm && <FormPopup onClose={() => setShowForm(false)} />}
        </div>
    );
};

export default PropertyInfo;
