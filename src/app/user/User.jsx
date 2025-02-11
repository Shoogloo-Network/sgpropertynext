'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import './User.css'

const Profile = dynamic(() => import('./Profile'), { suspense: true });
const UserSectionList = dynamic(() => import('./UserSectionList'), { suspense: true });
const Activity = dynamic(() => import('./Activity'), { suspense: true });
const PostProperty = dynamic(() => import('./PostProperty'), { suspense: true });
const AgentPostPropertyForm1 = dynamic(() => import('./../agentforms/forms/AgentPostPropertyForm1'), { suspense: true });
const Amenities = dynamic(() => import('./../agentforms/forms/Amenities'), { suspense: true });


const User = () => {
    const searchParams = useSearchParams();
    const [activeSection, setActiveSection] = useState('profile');
    const [activeForm1, setActiveForm1] = useState(false);
    const [activeForm2, setActiveForm2] = useState(false);

    useEffect(() => {
        const section = searchParams.get('section');
        if (section) setActiveSection(section);
    }, [searchParams]);

    const handleClick = (item) => {
        setActiveSection(item.id);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <Profile />;
            case 'activity':
                return <Activity />;
            case 'postproperty':
                return (
                    <>
                        {!activeForm1 && <PostProperty active={setActiveForm1} />}
                        {activeForm1 && !activeForm2 && <AgentPostPropertyForm1 active={setActiveForm2} />}
                        {activeForm2 && <Amenities />}
                    </>
                );
            default:
                return <Profile />;
        }
    };

    return (
        <div className="user-container">
            <div className="user-sidebar">
                <Suspense fallback={<div>Loading sidebar...</div>}>
                    <UserSectionList onClick={handleClick} />
                </Suspense>
            </div>
            <div className="user-content">
                <Suspense fallback={<div>Loading content...</div>}>
                    {renderContent()}
                </Suspense>
            </div>
        </div>
    );
};

export default User;
