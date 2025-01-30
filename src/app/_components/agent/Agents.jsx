import { useState, useEffect } from "react";
import AgentsCard from "./AgentsCard";
import "./Agents.css";
import TopAgents from "./TopAgents";

const Agents = () => {
  const [agents, setAgents] = useState(false);
  const [location, setLocation] = useState(false);
  const [propertyType, setPropertyType] = useState(false);
  const [agentData, setAgentData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [propertyTypeData, setPropertyTypeData] = useState([]);

  useEffect(() => {
    fetchData("agentsHeader", setAgentData);
    fetchData("locations", setLocationData);
    fetchData("propertyTypes", setPropertyTypeData);
  }, []);

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(`http://localhost:8000/${endpoint}`);
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  return (
    <>
      <div className="tab-container">
        <div className="tab-agent tab-agent-1" onClick={() => setAgents(!agents)}>
          <i className="fa-solid fa-user"></i>
          <p className="tab-agent-name">Agent</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-2" onClick={() => setLocation(!location)}>
          <p className="tab-agent-name">Location</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="tab-agent tab-agent-3" onClick={() => setPropertyType(!propertyType)}>
          <p className="tab-agent-name">Property Type</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      {agents && (
        <div className="agent-sub-menu">
          {agentData.map((agent) => (
            <div className="tab-agent" key={agent.id}>
              <i className={agent.icon}></i>
              <p className="tab-agent-name">{agent.name}</p>
            </div>
          ))}
        </div>
      )}

      {location && (
        <div className="location-sub-menu">
          {locationData.map((loc) => (
            <label className="location-label" key={loc.id}>
              <input type="checkbox" />
              {loc.name}
            </label>
          ))}
        </div>
      )}

      {propertyType && (
        <div className="propertyType-submenu">
          {propertyTypeData.map((type) => (
            <label className="location-label" key={type.id}>
              <input type="radio" name="propertyType" />
              {type.name}
            </label>
          ))}
        </div>
      )}

      <div  className="agents-card-main-div">
        <div className="agents-card-div">
          <AgentsCard />
        </div>
        <div style={{  }} className="top-agents-card-div">
          <TopAgents />
        </div>
      </div>
    </>
  );
};

export default Agents;
