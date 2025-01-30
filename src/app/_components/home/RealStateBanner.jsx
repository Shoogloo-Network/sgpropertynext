
import RealStateHomeSearchBar from './RealStateHomeSearchBar';
import './RealStateBanner.css';
import { FaBuilding, FaHome, FaKey, FaBed, FaMap, FaCity } from 'react-icons/fa';

const RealStateBanner = () => {
 
  const style = {
    searchWrapper:{
    width: '100%',
    maxWidth: '1200px',
    flexWrap:'wrap',
    margin: '0 auto',
    padding: '40px 10px',
    position: 'relative',
    zIndex: 100,
    background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
    },
    searchContainer:{
      display: 'flex',
      alignItems:' center',
      flexWrap:'wrap',
      gap: '15px',
      marginTop: '20px',
      background: 'white',
      padding: '10px 5px',
     
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const iconCards = [
    {
      id: 'new',
      icon: <FaBuilding />,
      title: "New",
      subtitle: "Projects",
      isNew: true
    },
    {
      id: 'buy',
      icon: <FaHome />,
      title: "Buy",
      subtitle: "Properties"
    },
    {
      id: 'rent',
      icon: <FaKey />,
      title: "Rent",
      subtitle: "Properties"
    },
    {
      id: 'pg',
      icon: <FaBed />,
      title: "PG /",
      subtitle: "Co-Living"
    },
    {
      id: 'plot',
      icon: <FaMap />,
      title: "Plot",
      subtitle: "& Land"
    },
    {
      id: 'commercial',
      icon: <FaCity />,
      title: "Commercial",
      subtitle: "Properties"
    }
  ];
  
  const budgetRanges = {
    min: ['5 Lac', '10 Lac', '20 Lac', '30 Lac', '40 Lac', '50 Lac', '60 Lac', '70 Lac', '80 Lac', '90 Lac', '1 Cr'],
    max: ['10 Lac', '20 Lac', '30 Lac', '40 Lac', '50 Lac', '60 Lac', '70 Lac', '80 Lac', '90 Lac', '1 Cr', '2 Cr']
  };
  const propertyTypes = {
    residential: [
      'Apartment/Flat',
      'Independent House/Villa',
      'Plot/Land',
      'Builder Floor',
      'Penthouse',
    ],
    commercial: [
      'Office Space',
      'Shop/Showroom',
      'Commercial Land',
      'Warehouse/Godown',
      'Industrial Building',
    ]
  };
  
  return (
    <div className="banner-container">
      <div className="banner-content">
       <h1>Real Estate Made Real Easy</h1>
        <RealStateHomeSearchBar 
          iconCard={iconCards}
          style={style}
          budgetRange={budgetRanges}
          propertyTypeData={propertyTypes}
        />
      </div>
    </div>
  );
};

export default RealStateBanner;
