import { useState, useEffect } from 'react';
import UserSectionList from './UserSectionList';
import Activity from '../../Components/Activity';
import Profile from '../../Components/Profile';
import { useSearchParams } from 'react-router-dom';
import PostProperty from '../../Components/PostProperty';
import AgentPostPropertyForm1 from '../../agentForms/forms/AgentPostPropertyForm1';
import Amenities from '../../agentForms/forms/Amenities';
import './User.css';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeSection, setActiveSection] = useState('profile');
    const [activeForm1, setActiveForm1] = useState(false);
    const [activeForm2, setActiveForm2] = useState(false);

    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            setActiveSection(section);
        }
    }, [searchParams]);

    const handleClick = (item) => {
        setActiveSection(item.id);
        setSearchParams({ section: item.id });
    };

    return (
        <div className="user-container">
            <div className="user-sidebar">
                <UserSectionList onClick={handleClick} />
            </div>
            <div className="user-content">
                {activeSection === 'profile' && <Profile />}
                {activeSection === 'activity' && <Activity />}

                {activeSection === 'postproperty' && (
                    <>
                        {!activeForm1 && <PostProperty active={setActiveForm1} />}
                        {activeForm1 && !activeForm2 && <AgentPostPropertyForm1 active={setActiveForm2} />}
                        {activeForm2 && <Amenities />}
                    </>
                )}
            </div>
        </div>
    );
};

export default User;
