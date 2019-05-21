import React from "react";
import { Icon } from "@rmwc/icon";
import { Ripple } from "@rmwc/ripple";
import "./Card.css";

const Card = props => {
  const { name, dist, type, desc, exp, link } = props;
  const calcExpense = rate => {
    let n = rate;
    for (n; n > 0; n -= n) return "$";
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header__column1">
          <div className="icon" />
        </div>
        <div className="card-header__row2">
          <h2 className="card-head">{name}</h2>
          <h4 className="card-sub">
            {dist ? <span>{dist} &#183; </span> : null}
            {type}
            {exp ? <span> &#183; {calcExpense(exp)} </span> : null}
          </h4>
        </div>
        <div className="card-header__column3">
          <a href={link}>
            <Ripple unbounded>
              <Icon strategy="ligature" use="arrow_forward_ios" />
            </Ripple>
          </a>
        </div>
      </div>
      <div className="card-divider" />
      <h4 className="card-desc">{desc}</h4>
    </div>
  );
};
export default Card;
