import  { useEffect, useState } from 'react';
import './AgentsCard.css'
import BtnPrimaryWithIcon from '../buttons/BtnPrimaryWithIcon';
import logo from '../assets/icon/whatsappLogo-removebg-preview.png';
import { Link } from 'react-router-dom';
import FormPopup from '../userform/FormPopup';
import { fetchData } from '../api/data';
const AgentsCard = () => {
    const [dataRes, setDataRes] = useState([]);
 const [showForm,setShowForm] = useState(false);
    useEffect(() => {
        fetchData("agents", setDataRes);
       
    }, []);
 
    const onButtonClick = ()=>{
        console.log("Button clicked");
    }
    return (
        <div className="agents-card">
        {dataRes.map((item) => (
            <div key={item.id} className="agent">
                
                <Link to={`/agents/agent-details`} className='agentsCardDesktop'> <div className="agent-profile">
                    <img src={item.profileImage} alt={item.title} height={130} width={130} />
                <p>View Profile</p>
                </div></Link>
                <Link to={`/agents/agent-details`} className='agentsCardMobile'> <div className="agent-profile">
                   <div className='agent-profile-image-div'>
                   <img src={item.profileImage} alt={item.title} height={130} width={130} />
                   {/* <p> View Profile </p> */}
                   </div>
                <div className="agent-contact">
                        {/* <div className="whatsapp">
                            <img src={logo} alt='whatsapp logo ' height={42} width={42}/>
                        </div> */}
                        <div className="appointment" onClick={()=>{setShowForm(!showForm)}}>
                          <BtnPrimaryWithIcon iconName='FaMobileAlt' cnt="Connect Now"  onClick={onButtonClick}/>
                        </div>
                    </div>
                </div></Link>
                <div className="agent-details">
                    <div className="agent-partners">
                        <div className="trusted-partner listing-flex">
                        <i className="fa-solid fa-certificate"></i>  <p>Trusted Partner</p>
                        </div>
                        <div className="preferred-partner listing-flex">
                        <i className="fa-solid fa-circle-check"></i><p>Preferred Partner</p>
                        </div>
                    </div>
                    <div className="agent-name">
                        <p>{item.agentName}</p>
                    </div>
                    <div className="agent-company-location">
                        <div className="company-name">
                            <p>{item.agentCompanyName}</p>
                        </div>
                        <div className="location">
                            <p>{item.agentLocation}</p>
                        </div>
                    </div>
                    <div className="agent-experience-language-listing">
                        <div className="experience listing-flex">
                        <i className="fa-solid fa-calendar-minus"></i> <p>{item.agentExperience}</p>
                        </div>
                        <div className="listing listing-flex">
                        <i className="fa-regular fa-rectangle-list"></i> <p>{item.listing}</p>
                        </div>
                        <div className="language listing-flex">
                        <i className="fa-solid fa-language"></i> <p>{item.agentLanguage}</p>
                        </div>
                       
                    </div>
                    <div className="agent-contact agentsCardDesktop">
                        <div className="whatsapp ">
                            <img src={logo} alt='whatsapp logo ' height={42} width={42}/>
                        </div>
                        <div className="appointment" onClick={()=>{setShowForm(!showForm)}}>
                          <BtnPrimaryWithIcon iconName='FaMobileAlt' cnt="Connect Now"  onClick={onButtonClick}/>
                        </div>
                    </div>
                </div>
                {showForm && <FormPopup  onClose={() => setShowForm(false)}/>} 
            </div>
        ))}
        </div>
    );
};

export default AgentsCard;
