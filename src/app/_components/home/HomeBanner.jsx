import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import './HomeBanner.css';

const HomeBanner = () => {
  const [activeTab, setActiveTab] = useState('tabNewp');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('New Projects');
  const router = useRouter(); // Initialize useRouter

  const handleTabClick = (tab, option) => {
    setActiveTab(tab);
    setSelectedOption(option);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    console.log(`Searching for ${searchQuery} in ${selectedOption}`);
    // If you want to perform a routing action upon search, you can use router.push()
    // Example: router.push(`/search?query=${searchQuery}&option=${selectedOption}`);
  };

  return (
    <div className="homeDesktopBanner">
      <img
        width="1366"
        height="560"
        src="/assets/images/desktop-banner.jpeg" // Ensure your image is inside the 'public' folder
        alt="home banner"
      />
      <div className="container contentBox">
        <h1 className="realEstateHeading">Real Estate Made Real Easy</h1>
        <div className="homeDesktopTabBox">
          <ul>
            <li
              id="newProjectHomeTab"
              data-tab="tabNewp"
              className={`Home_Search_L1 ${activeTab === 'tabNewp' ? 'active' : ''}`}
              onClick={() => handleTabClick('tabNewp', 'New Projects')}
            >
              <button className="tab Home_Search_L1">
                <em className="hti hti-icon1 Home_Search_L1"></em>
                <span className="Home_Search_L1">
                  New <br />
                  Projects
                </span>
              </button>
            </li>
            {/* Repeat similar structure for other tabs */}
          </ul>
        </div>
        <div id="newdAutoForm" className="homeBlackBox noTrendingSearch">
          <div className="homeDesktopSearchBox">
            <form onSubmit={handleSearchSubmit}>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="New Projects">New Projects</option>
                <option value="Buy Properties">Buy Properties</option>
                <option value="Rent Properties">Rent Properties</option>
                <option value="PG / Hostels">PG / Hostels</option>
                <option value="Plot & Land">Plot & Land</option>
                <option value="Commercial Properties">Commercial Properties</option>
                <option value="Find Agents">Find Agents</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
