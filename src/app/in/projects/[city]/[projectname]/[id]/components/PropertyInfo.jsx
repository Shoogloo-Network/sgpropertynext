
import IconCard from '../../../../../../_components/cards/IconCard';
import IconCardWithButton from '../../../../../../_components/cards/IconCardWithButton';
import "./PropertyInfo.css";
import BtnPrimaryWithIcon from '../../../../../../_components/buttons/BtnPrimaryWithIcon';
import { useEffect, useState } from 'react';
import FormPopup from '../../../../../../_components/userform/FormPopup';
import axios from 'axios';
import { fetchData } from '../../../../../../_components/api/data';
const iconData =[
    {
        img:'verified.png',
        description:'RERA Registered',

    },
    {
        img:'home-button.png',
        description:'Residential',

    },
] ;


   
 
const PropertyInfo = () => {
    const [showForm, setShowForm] = useState(false);
    const [iconDataForButton , setIconDataForButton] =useState([]);
    const [detailPageData , setDetailPageData] =useState([]);
   
useEffect(()=>{
 fetchData("iconDataForButton",setIconDataForButton);
 fetchData("detail-page",setDetailPageData);

    },[])
    const fetchData = async (endpoint, setter) => {
        try {
            const response = await axios.get( `http://localhost:8000/${endpoint}`);
            setter(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
   return (
        <div className="property-info-container">
            <div className="property-info-header">
                <div className="icon-card-group"><IconCard data={iconData}  /></div>
                <div className="rating">
                    <span className="stars">★★★★★</span>
                    <a>10 Rating</a>
                </div>
            </div>
           {
            detailPageData['projectUnit']?.map((item , index)=>{
                return (
                    <div key={index}>
<div className="property-title-section" >
                    <h1 className="property-name">{item.projectTitle}</h1>
                    <div className="property-location">
                        <h4>{item.projectAddress}</h4>
                        <div className="map-link">
                            <img src="/images/location.png" alt="location" />
                            <p>See On Map</p>
                            
                        </div>
                        <p>{item.areaMarketRate}</p>
                    </div>
                </div>
                <div className="property-pricing-section">
                <div>
                <div className="price-info">
                    <h2 className="price-range">₹{item.lowerPrice} Lac - {item.higherPrice} Lac</h2>
                    <img src="/images/info.png" alt="Info" className="info-icon" />
                </div>
                <div className="additional-info"><IconCard data={item.projectProperties} /></div>
                </div>
                <BtnPrimaryWithIcon 
                   iconName='FaPhone'
                    cnt="Request More Information or a callback"
                    onClick={() => setShowForm(true)}
                />
            </div>
                    </div>
                    
                )
            })
           }
             
            <div className="property-additional-services">
                <IconCardWithButton data={iconDataForButton} />
            </div>
            {showForm && <FormPopup onClose={() => setShowForm(false)} id={detailPageData['projectid']}/>}
               
        </div>
    );
};

export default PropertyInfo;
