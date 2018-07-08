import React from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';
import './Card.css';

const Component = (props) => {
  const {
    name, dist, type, desc, link,
  } = props;
  if (dist) {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header__column1">
            <div className="icon" />
          </div>
          <div className="card-header__row2">
            <h2 className="card-head">
              {name}
            </h2>
            <h4 className="card-sub">
              {dist}
              {' '}
&#183;
              {' '}
              {type}
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
        <h4 className="card-desc">
          {desc}
        </h4>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header__column1">
          <div className="icon" />
        </div>
        <div className="card-header__column2">
          <h2 className="card-head">
            {name}
          </h2>
          <h4 className="card-sub">
            {type}
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
      <h4 className="card-desc">
        {desc}
      </h4>
    </div>
  );
};
export default Component;
