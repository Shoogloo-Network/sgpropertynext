import React from 'react';
import './OwnerPlan.css'
import { Link } from 'react-router-dom';

const plans = [
    {
      title: "Basic",
      price:'FREE',
      features: [
        "Standard Visibility",
        "Up to 3 Enquiries",
        "No Matching Leads",
        "No Relationship Manager",
        "No Assisted Listing",
        "No Automated Video Listing",
        "No Property Valuation",
        "No Free Escrow Agreement",
        "No Cashback on New Property",
        "No Discount on Home Interiors",
        "No Loan Processing Fee Waiver",
        "No Discount on Property Registration",
      ],
      buttonLabel: "Choose Basic",
      url:'/user?section=postproperty'
    },
    {
      title: "Seller Prime",
      price:'$299',
      features: [
        "10x More Visibility",
        "Unlimited Enquiries",
        "20 Matching Leads",
        "Relationship Manager (RM)",
        "Assisted Listing",
        "Automated Video Listing",
        "No Property Valuation",
        "No Free Escrow Agreement",
        "No Cashback on New Property",
        "No Discount on Home Interiors",
        "No Loan Processing Fee Waiver",
        "No Discount on Property Registration",
      ],
      buttonLabel: "Choose Prime",
      url:'/user?section=postproperty'
    },
    {
      title: "Seller Prime Plus",
      price:'$349',
      features: [
        "10x More Visibility",
        "Unlimited Enquiries",
        "20 Matching Leads",
        "Relationship Manager (RM)",
        "Assisted Listing",
        "Automated Video Listing",
        "Property Valuation Worth ₹1,000",
        "Free Escrow Agreement Worth ₹1,000",
        "Cashback on New Property Worth ₹25,000",
        "Discount on Home Interiors Worth ₹25,000",
        "Loan Processing Fee Waiver Worth ₹15,000",
        "Discount on Property Registration",
      ],
      buttonLabel: "Choose Prime Plus",
      url:'/user?section=postproperty'
    },
  ];
  
  const featuresTitles = [
    "Visibility",
    "Enquiries on Your Property",
    "Matching Buyers Leads",
    "Relationship Manager (RM)",
    "Assisted Listing",
    "Automated Video Listing",
    "Property Valuation Worth ₹1,000",
    "Free Escrow Agreement Worth ₹1,000",
    "Cashback on New Property Worth ₹25,000",
    "Discount on Home Interiors Worth ₹25,000",
    "Loan Processing Fee Waiver Worth ₹15,000",
    "Discount on Property Registration",
  ];
  
  
const OwnerPlan = () => {
    
    return (
        <div className="price-listing-grid">
          {/* Column Headers */}
          {/* Important Because it keep the other three headers in place  */}
          <div className='hide-in-mobile'></div> 
          {plans.map((plan) => (
            <div key={plan.title} >
               <div className="grid-header">
                <h1>{plan.price}</h1>
                <div className='grid-header-plan'>
                <h2>{plan.title}</h2>
                </div>
              
               </div>
              
            </div>
          ))}
    
          {/* Feature Rows */}
          {featuresTitles.map((featureTitle, rowIndex) => (
            <React.Fragment key={featureTitle}>
              <div className="grid-cell feature-title">{featureTitle}</div>
              {plans.map((plan, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`grid-cell ${
                    plan.features[rowIndex].startsWith("No") ? "disabled" : ""
                  }`}
                >
                  {plan.features[rowIndex]}
                </div>
              ))}
            </React.Fragment>
          ))}
    
          {/* Buttons */}
          <div className="feature-title"></div>
          {plans.map((plan) => (
            <div key={`${plan.title}-button`} className="grid-cell">
              <Link to={plan.url} ><button className="choose-plan-button">{plan.buttonLabel}</button></Link>
            </div>
          ))}
        </div>
      );
}

export default OwnerPlan
