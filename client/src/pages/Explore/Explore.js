import React from "react";
import "./Explore.css";
import Maps from "../../components/Maps/Maps";

const Explore = props => (
  <div className="explore">
    <div className="explore-content">
      <div className="mapContainer">
        <Maps data={props.data} />
      </div>
    </div>
  </div>
);
export default Explore;
