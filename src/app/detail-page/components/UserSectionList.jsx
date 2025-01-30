import { useState, useEffect } from 'react';
import IconCard from '../../cards/IconCard';
import { FaUserCircle } from 'react-icons/fa';
import './UserSectionList.css';

const UserSectionList = ({ onClick, logout }) => {
    const [userData, setUserData] = useState(null);
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        placeOfBirth: '',
        propertyRequirement: '',
        profileImage: 'src/assets/icon/profile.svg'
    });

    useEffect(() => {
        // Get user data from localStorage
        const storedUser = localStorage.getItem('user');
        const storedProfile = localStorage.getItem('userProfile');

        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }

        if (storedProfile) {
            setUserProfile((prev) => ({
                ...prev,
                ...JSON.parse(storedProfile),
            }));
        }
    }, []); // Empty dependency array means this runs once on mount

    const iconData = [
        { img: 'src/assets/icon/profile.svg', title: 'PROFILE', id: 'profile' },
        { img: 'src/assets/icon/my-activity.svg', title: 'MY ACTIVITY', id: 'activity' },
        { img: 'src/assets/icon/my-interaction.svg', title: 'MY INTERACTIONS', id: 'interactions' },
        { img: 'src/assets/icon/post-your-property.svg', title: 'POST PROPERTY', id: 'postproperty' },
        { img: 'src/assets/icon/my-properties.svg', title: 'MY LISTINGS', id: 'mylistings' },
        { img: 'src/assets/icon/my-rent-agreement.svg', title: 'RENTAL AGREEMENTS', id: 'rentalagreements' },
        { img: 'src/assets/icon/my-rent-payments.svg', title: 'RENT PAYMENTS', id: 'rentpayments' },
        { img: 'src/assets/icon/refer-and-earn.svg', title: 'REFER AND EARN', id: 'referandearn' },
        {
            img: 'src/assets/icon/lock-unlock.svg',
            title: userData ? 'LOGOUT' : 'LOGIN',
            id: 'logout',
        },
    ];

    return (
        <>
            <div className="user-section-header">
                {userProfile.profileImage ? (
                    <img
                        src={userProfile.profileImage}
                        alt="profile"
                        className="user-profile-image"
                    />
                ) : (
                    <FaUserCircle size={50} color="#808080" />
                )}
                <div>
                    <h4 className="user-name">{userData?.name || 'Guest'}</h4>
                    <a href="/login">
                        <p className="user-email">{userData?.email || 'Please login'}</p>
                    </a>
                </div>
            </div>
            <IconCard
                data={iconData}
                onClick={onClick}
                logout={logout}
                containerClass="icon-card-container"
                imgClass="icon-card-image"
            />
        </>
    );
};

export default UserSectionList;
