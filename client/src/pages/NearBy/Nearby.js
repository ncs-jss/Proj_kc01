import React from "react";
import "./Nearby.css";
import Masonry from "react-masonry-component";
import Card from "../../components/Card/Card";

const Nearby = props => (
  <div className="nearby" id="container">
    <div className="nearby-content" id="myContent">
      <Masonry>
        {props.data.map(p => (
          <Card
            name={p.name}
            dist={p.dist}
            type={p.type}
            desc={p.desc}
            link={p.link}
            exp={p.expense}
            key={p._id}
          />
        ))}
      </Masonry>
    </div>
  </div>
);
export default Nearby;
