import { useState, useEffect } from 'react';
import './Profile.css';
import { Avatar, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    placeOfBirth: '',
    propertyRequirement: '',
    profileImage: null
  });
  const userName = JSON.parse(localStorage.getItem('user')) || { name: 'Guest' };

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setUserProfile(storedProfile);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({
      ...prev,
      [name]: value
    }));
   
   
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserProfile(prev => ({
        ...prev,
        profileImage: URL.createObjectURL(file)
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    alert('Profile updated successfully!');
  }
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{userName.name}</h1>
        <p>Manage your personal information</p>
      </div>
      
      <div className="profile-image-section">
        <div className="image-container">
          <Avatar
            src={userProfile.profileImage || '/default-avatar.png'}
            alt="Profile"
            sx={{
              width: 150,
              height: 150,
              border: '4px solid #fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          />
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-input"
              className="image-input"
            />
            <label htmlFor="image-input">
              <IconButton component="span" className="upload-button">
                <PhotoCameraIcon />
              </IconButton>
            </label>
          </div>
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <PersonIcon className="input-icon" />
            <div className="input-container">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={userProfile.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="form-group">
            <EmailIcon className="input-icon" />
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userProfile.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <PhoneIcon className="input-icon" />
            <div className="input-container">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={userProfile.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-group">
            <LocationOnIcon className="input-icon" />
            <div className="input-container">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={userProfile.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="form-group">
            <PublicIcon className="input-icon" />
            <div className="input-container">
              <label>Place of Birth</label>
              <input
                type="text"
                name="placeOfBirth"
                value={userProfile.placeOfBirth}
                onChange={handleInputChange}
                placeholder="Enter your place of birth"
              />
            </div>
          </div>
        </div>

        <div className="full-width-groups">
          <div className="form-group">
            <HomeIcon className="input-icon" />
            <div className="input-container">
              <label>Address</label>
              <textarea
                name="address"
                value={userProfile.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
              />
            </div>
          </div>

          <div className="form-group">
            <BusinessIcon className="input-icon" />
            <div className="input-container">
              <label>Property Requirement</label>
              <textarea
                name="propertyRequirement"
                value={userProfile.propertyRequirement}
                onChange={handleInputChange}
                placeholder="Describe your property requirements"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile
