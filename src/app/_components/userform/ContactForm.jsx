"use client"
import  { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { postData } from '../api/data'; 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India code
    phone: '',
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        return { ...prevData, interests: newInterests };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await postData( process.env.NEXT_PUBLIC_API_USER_REGISTER, {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        lastname: "Dash",
        message: "message",
        status: 0,
        password: "test@1234",
      });
      console.log(response);
      // Optionally, notify the user of success (e.g., using alert, toast, or state)
      // alert("Form submitted successfully!");
      onClose(); // Close the popup if needed
    } catch (error) {
      console.error(error);
      // Optionally, notify the user of the error
      alert("Error submitting form: " + error.message);
    }
    alert('Your inquiry has been submitted!');
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__form-group">
          <label className="contact__label">Name</label>
          <input
            className="contact__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="contact__form-group">
          <label className="contact__label">Email ID</label>
          <input
            className="contact__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="contact__form-group">
          <label className="contact__label">Phone Number</label>
          <div className="contact__phone-wrapper">
            <select
              className="contact__country-select"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+49">+49 (Germany)</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              className="contact__input contact__input--phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="contact__form-group">
          <label className="contact__label">Interested in</label>
          <div className="contact__interests">
            <div className="contact__interest-item">
              <input
               className="contact__checkbox-button"
                type="checkbox"
                name="interests"
                value="Buying"
                checked={formData.interests.includes('Buying')}
                onChange={handleChange}
              />
              <span className="contact__checkbox-label">Buying</span>
            </div>
            <div className="contact__interest-item">
              <input
                className="contact__checkbox-button"
                type="checkbox"
                name="interests"
                value="Selling"
                checked={formData.interests.includes('Selling')}
                onChange={handleChange}
              />
              <span className="contact__checkbox-label">Selling</span>
            </div>
            <div className="contact__interest-item">
              <input
                className="contact__checkbox-button"
                type="checkbox"
                name="interests"
                value="Home Loan"
                checked={formData.interests.includes('Home Loan')}
                onChange={handleChange}
              />
              <span className="contact__checkbox-label">Home Loan</span>
            </div>
            <div className="contact__interest-item">
              <input
                className="contact__checkbox-button"
                type="checkbox"
                name="interests"
                value="Interiors"
                checked={formData.interests.includes('Interiors')}
                onChange={handleChange}
              />
              <span className="contact__checkbox-label">Interiors</span>
            </div>
          </div>
        </div>
        <button type="submit" className="contact__submit-btn">
          Contact Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
