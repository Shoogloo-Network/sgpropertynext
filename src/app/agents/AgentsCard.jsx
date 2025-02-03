'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './AgentsCard.css';
import BtnPrimaryWithIcon from '../_components/buttons/BtnPrimaryWithIcon';
import FormPopup from '../_components/userform/FormPopup';
import { fetchData } from '../_components/api/data';

const AgentsCard = () => {
    const [dataRes, setDataRes] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchData("agents", setDataRes);
    }, []);

    const onButtonClick = () => {
        // console.log("Button clicked");
    };

    return (
        <div className="agents-card">
            {dataRes.map((item) => (
                <div key={item.id} className="agent">
                    {/* Desktop Profile Link */}
                    <Link href={`/agents/agent-details`} className="agentsCardDesktop">
                        <div className="agent-profile">
                            <img src={"/images/"+item.profileImage} alt={item.title} height={130} width={130} />
                            <p>View Profile</p>
                        </div>
                    </Link>

                    {/* Mobile Profile Link */}
                    <Link href={`/agents/agent-details`} className="agentsCardMobile">
                        <div className="agent-profile">
                            <div className="agent-profile-image-div">
                                <img src={"/images/"+item.profileImage} alt={item.title} height={130} width={130} />
                            </div>
                            <div className="agent-contact">
                                <div className="appointment" onClick={() => setShowForm(!showForm)}>
                                    <BtnPrimaryWithIcon iconName="FaMobileAlt" cnt="Connect Now" onClick={onButtonClick} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Agent Details */}
                    <div className="agent-details">
                        <div className="agent-partners">
                            <div className="trusted-partner listing-flex">
                                <i className="fa-solid fa-certificate"></i> <p>Trusted Partner</p>
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
                        {/* Contact Options (Desktop) */}
                        <div className="agent-contact agentsCardDesktop">
                            <div className="whatsapp">
                                <img src="/images/whatsappLogo-removebg-preview.png" alt="whatsapp logo" height={42} width={42} />
                            </div>
                            <div className="appointment" onClick={() => setShowForm(!showForm)}>
                                <BtnPrimaryWithIcon iconName="FaMobileAlt" cnt="Connect Now" onClick={onButtonClick} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form Popup */}
                    {showForm && <FormPopup onClose={() => setShowForm(false)} />}
                </div>
            ))}
        </div>
    );
};

export default AgentsCard;
