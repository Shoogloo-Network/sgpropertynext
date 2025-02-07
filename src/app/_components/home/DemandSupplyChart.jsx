"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import "./DemandSupplyChart.css"
const data = [
  { name: 'Apartment', demand: 89, supply: 90 },
  { name: 'Builder Floor', demand: 1, supply: 3 },
  { name: 'Office Space', demand: 2, supply: 2 },
  { name: 'Shop', demand: 1, supply: 0 },
  { name: 'Villa', demand: 2, supply: 0 }
];

const DemandSupplyChart = () => {
  return (
    <div className="demandSupplyChartCard">
      <strong className="demandSupplyTableHeading">By Property Type</strong>
      <ResponsiveContainer width="100%" height={250}> {/* Reduced height for a smaller card size */}
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="demand" fill="#8884d8" name="Demand" />
          <Bar dataKey="supply" fill="#82ca9d" name="Supply" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemandSupplyChart;
