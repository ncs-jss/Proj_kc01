import React from "react";
import "./Explore.css";
import Maps from '../../components/Maps/Maps';

const Explore = () => (
  <div className="explore">
    <div className="explore-content">
      <div className="mapContainer">
      <Maps/>
      </div>
    </div>
  </div>
);
export default Explore;
