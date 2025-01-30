import  { useState, useRef, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import './RealStateHomeSearchBar.css';

const RealStateHomeSearchBar = ({   iconCard , style , budgetRange , propertyTypeData}) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [selectedUnitTypes, setSelectedUnitTypes] = useState([]);
  const [budget, setBudget] = useState({ min: '', max: '' });
  const dropdownRef = useRef(null);
  const iconCards = iconCard;
  const budgetRanges = budgetRange;
  const propertyTypes = propertyTypeData;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        setShowPropertyDropdown(false);
        setShowBudgetDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBudgetSelect = (type, value) => {
    setBudget(prev => ({
      ...prev,
      [type]: value
    }));
    console.log('Budget selected:', type, value);
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
    console.log('Property type changed:', type);
  };

  const handleUnitTypeSelection = (type) => {
    setSelectedUnitTypes(prev => {
      const newTypes = prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type];
      console.log('Unit types selected:', newTypes);
      return newTypes;
    });
  };

  const handleSearch = () => {
    const searchData = {
      searchType: activeTab,
      location: searchInput,
      budget: {
        minimum: budget.min,
        maximum: budget.max
      },
      propertyCategory: propertyType,
      propertyTypes: selectedUnitTypes,
      timestamp: new Date().toISOString()
    };

    console.log('Final Search Data:', searchData);
  };

  return (
    <div style={style.searchWrapper} ref={dropdownRef}>
      <div className={iconCards ? "icon-cards-container" : ""}>
        {iconCards&&iconCards?.map((card) => (
          <div
            key={card.id}
            className={`icon-card ${activeTab === card.id ? 'active' : ''}`}
            onClick={() => setActiveTab(card.id)}
          >
            {card.isNew && <span className="new-badge">New</span>}
            <div className="icon-wrapper">
              {card.icon}
            </div>
            <div className="card-text">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div  style={style.searchContainer}>
        <div className="search-input">
          <FaMapMarkerAlt className="location-icon" />
          <input 
            type="text" 
            placeholder="Search for locality, project"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="dropdown-container">
          <button 
            className="dropdown-btn"
            onClick={() => {
              setShowBudgetDropdown(!showBudgetDropdown);
              setShowPropertyDropdown(false);
            }}
          >
            {budget.min && budget.max 
              ? `${budget.min} - ${budget.max}` 
              : 'Budget'}
            {showBudgetDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {showBudgetDropdown && (
            <div className="dropdown-content budget-dropdown">
              <div className="budget-columns">
                <div className="budget-column">
                  <h4>Min Budget</h4>
                  {budgetRanges?.min?.map(price => (
                    <div 
                      key={price}
                      className={`budget-option ${budget.min === price ? 'selected' : ''}`}
                      onClick={() => handleBudgetSelect('min', price)}
                    >
                      {price}
                    </div>
                  ))}
                </div>
                <div className="budget-column">
                  <h4>Max Budget</h4>
                  {budgetRanges?.max?.map(price => (
                    <div 
                      key={price}
                      className={`budget-option ${budget.max === price ? 'selected' : ''}`}
                      onClick={() => handleBudgetSelect('max', price)}
                    >
                      {price}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button 
            className="dropdown-btn"
            onClick={() => {
              setShowPropertyDropdown(!showPropertyDropdown);
              setShowBudgetDropdown(false);
            }}
          >
           {
            propertyType
           } 
            {showPropertyDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {showPropertyDropdown && (
            <div className="dropdown-content property-dropdown">
              <div className="property-type-radio">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="propertyType"
                    checked={propertyType === 'residential'}
                    onChange={() => handlePropertyTypeChange('residential')}
                  />
                  <span>Residential</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="propertyType"
                    checked={propertyType === 'commercial'}
                    onChange={() => handlePropertyTypeChange('commercial')}
                  />
                  <span>Commercial</span>
                </label>
              </div>
              <div className="property-options">
                {propertyTypes[propertyType]?.map(type => (
                  <label key={type} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedUnitTypes.includes(type)}
                      onChange={() => handleUnitTypeSelection(type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="search-btn" onClick={handleSearch}>
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
};

export default RealStateHomeSearchBar;
