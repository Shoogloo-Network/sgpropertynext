import React from 'react';
import ContactForm from '../_components/userform/SearchContactForm';
import InteriorDesginBanner from './_components/InteriorDesginBanner';
import InteriorDesginSlider from './_components/InteriorDesginSlider';
import './page.css'
import TabComponent from './_components/TabComponent';

const Page = () => {
  return (
    <div className="interior-page-container">
       <h1  className="homeh1"> Interior Desgin Plans</h1>
      <div className="interior-banner-contact-container">
     
        <div className="interior-banner-container">
       
          <InteriorDesginBanner />
        </div>
        <div className="interior-contact-form-container">
          <ContactForm />
        </div>
      </div>
      <div className="interior-slider-container">
      <h1  className="homeh1"> New Interior Desgin</h1>
      <InteriorDesginSlider />
      </div>
      <div>
      <TabComponent/>
      </div>
    </div>
  );
}

export default Page;
