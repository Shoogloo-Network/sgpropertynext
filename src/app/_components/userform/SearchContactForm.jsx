import  { useState } from 'react';
import './SearchContactForm.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your inquiry has been submitted!');
  };

  return (
    <div className="contact-search">
    {/* <h2 className="contact-search__title">Contact Us</h2> */}
    <form onSubmit={handleSubmit} className="contact-search__form">
      <div className="contact-search__form-group">
        {/* <label className="contact-search__label">Name</label> */}
        <input
          className="contact-search__input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="contact-search__form-group">
        {/* <label className="contact-search__label">Email ID</label> */}
        <input
          className="contact-search__input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="contact-search__form-group">
        {/* <label className="contact-search__label">Phone Number</label> */}
        <div className="contact-search__phone-wrapper">
          <select
            className="contact-search__country-select"
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
            className="contact-search__input contact-search__input--phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>
      <div className="contact-search__form-group">
        <label className="contact-search__label">Interested in</label>
        <div className="contact-search__interests">
          <div className="contact-search__interest-item">
            <input
              className="contact-search__checkbox-button"
              type="checkbox"
              name="interests"
              value="Buying"
              checked={formData.interests.includes('Buying')}
              onChange={handleChange}
            />
            <span className="contact-search__checkbox-label">Buying</span>
          </div>
          <div className="contact-search__interest-item">
            <input
              className="contact-search__checkbox-button"
              type="checkbox"
              name="interests"
              value="Selling"
              checked={formData.interests.includes('Selling')}
              onChange={handleChange}
            />
            <span className="contact-search__checkbox-label">Selling</span>
          </div>
          <div className="contact-search__interest-item">
            <input
              className="contact-search__checkbox-button"
              type="checkbox"
              name="interests"
              value="Home Loan"
              checked={formData.interests.includes('Home Loan')}
              onChange={handleChange}
            />
            <span className="contact-search__checkbox-label">Home Loan</span>
          </div>
          {/* <div className="contact-search__interest-item">
            <input
              className="contact-search__checkbox-button"
              type="checkbox"
              name="interests"
              value="Interiors"
              checked={formData.interests.includes('Interiors')}
              onChange={handleChange}
            />
            <span className="contact-search__checkbox-label">Interiors</span>
          </div> */}
        </div>
      </div>
      <button type="submit" className="contact-search__submit-btn">
        Contact Us
      </button>
    </form>
  </div>
  
  );
};

export default ContactForm;
