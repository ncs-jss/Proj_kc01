import React from "react";
import "./Societies.css";
import Card from "../../components/Card/Card";

const Societies = props => (
  <div className="nearby" id="container">
    <div className="nearby-content" id="myContent">
      {props.data.map(p => (
        <Card
          name={p.name}
          dist={p.dist}
          type={p.type}
          desc={p.desc}
          link={p.link}
          key={p._id}
        />
      ))}
    </div>
  </div>
);
export default Societies;
