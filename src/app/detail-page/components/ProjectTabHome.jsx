import './ProjectTabHome.css';
import { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import axios from 'axios';
import UnitTable from './UnitTable';
import IconCard from '../../_components/cards/IconCard';
import { fetchData } from '../../_components/api/data';
const ProjectTabHome = () => {
  const [activeSection, setActiveSection] = useState('');
  const [activeDiv, setActiveDiv] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [unitData, setUnitData] = useState([]);
  const [iconCardData, setIconCardData] = useState([]);

  useEffect(() => {
    fetchData("units",setUnitData);
   fetchData('iconCards', setIconCardData);
   
   Events.scrollEvent.register('begin', function () {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  const fetchData = async (endpoint, setter) => {
    try {
        const response = await axios.get( `http://localhost:8000/${endpoint}`);
        setter(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleDivClick = (index) => {
    setActiveDiv(index === activeDiv ? null : index);
  };

  const handleAccordionClick = (index, event) => {
    event.stopPropagation();
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      <div className="navbarHome">
        <ul className="navList">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About Provident Botanico
            </Link>
          </li>
          <li>
            <Link
              to="overview"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'overview' ? 'active' : ''}
            >
              Project Overview
            </Link>
          </li>
          <li>
            <Link
              to="experts"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              onSetActive={handleSetActive}
              className={activeSection === 'experts' ? 'active' : ''}
            >
              Top Experts
            </Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <section id="about" className="section">
          <h2>About Provident Botanico</h2>
          <div className="info-divs" id="aboutInfoDivs">
            {['Project Overview', 'RERA Registered', 'Price List', 'Why Invest?', 'FAQ'].map((title, index) => (
              <div
                key={index}
                className={`info-div ${activeDiv === index ? 'active' : ''}`}
                onClick={() => handleDivClick(index)}
              >
                <h3>{title}</h3>
              </div>
            ))}
          </div>
          <div style={{ padding: '2px 10px' }}>
            {activeDiv === 0 && (
              <p>
                Introducing Provident Botanico, a prestigious real-estate project located in the heart of Whitefield, Bangalore. Strategically
                situated near Dabaspete Hosur Highway and Whitefield Main Road, this project offers seamless connectivity to major employment
                hubs, educational institutions, and entertainment spots. Surrounded by lush greenery, Provident Botanico is designed to be
                an eco-friendly and serene oasis amidst the bustle of city life.
              </p>
            )}
          </div>
          <div style={{ padding: '2px 10px' }}>
            {activeDiv === 1 && <p>SgProperty RERA Reg. A51800000454 .</p>}
          </div>
          <div style={{ padding: '2px 10px' }}>
            {activeDiv === 2 && <UnitTable data={unitData} />}
            {activeDiv === 3 && (
              <div className="infoDivList">
                <ul>
                  <li>Unbeatable location near Dabaspete and Whitefield Main Road.</li>
                  <li>Strategically connected to Hosur Highway and major highways.</li>
                  <li>Spacious apartments with master bedrooms featuring oil-bound distemper walls.</li>
                  <li>Pristine amenities include 24x7 security, power backup, and rainwater harvesting.</li>
                  <li>Convenient access to major IT hubs and commercial centers.</li>
                </ul>
              </div>
            )}
            {activeDiv === 4 && (
              <div className="accordion">
                {['Accordion Item 1', 'Accordion Item 2', 'Accordion Item 3', 'Accordion Item 4'].map((item, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                    onClick={(e) => handleAccordionClick(index, e)}
                  >
                    <div className="accordion-title">
                      <h3>{item}</h3>
                      <i className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    <div className="accordion-content">
                      {activeAccordion === index && (
                        <p>{`This is content for ${item}`}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="overview" className="section">
          <h2>Provident Botanico Project Overview</h2>
          <div className="overviewSectionCardDiv">
            <IconCard data={iconCardData} style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'row', }} />
          </div>
        </section>

        <section id="experts" className="section">
          <h2>Top Experts</h2>
          <div>
            <p>Content of Top Experts</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectTabHome;
