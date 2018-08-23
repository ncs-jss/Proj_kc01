import React from "react";
import "./Societies.css";
import Masonry from "react-masonry-component";
import Card from "../../components/Card/Card";

const Societies = props => (
  <div className="societies" id="container">
    <div className="societies-content" id="myContent">
      <Masonry>
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
      </Masonry>
    </div>
  </div>
);
export default Societies;
