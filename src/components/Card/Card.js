import React from 'react';
import { Icon } from 'rmwc/Icon';
import { Ripple } from 'rmwc/Ripple';
import './Card.css';
const Component = props => {
  if (props.dist) { return (<div className="card">
                            <div className="card-header">
                              <div className="card-header__column1"><div className="icon"></div>
                              </div>
                              <div className="card-header__row2">
                                <h2 className="card-head">{props.name}</h2>
                                <h4 className="card-sub">{props.dist} &#183; {props.type}</h4>
                              </div>
                              <div className="card-header__column3">
                                <a href={props.link}><Ripple unbounded><Icon strategy="ligature" use="arrow_forward_ios"/></Ripple></a>
                              </div>
                            </div>
                            <div className="card-divider"></div>
                            <h4 className="card-desc">{props.desc}</h4>
                            </div>)
                  }
                  return (<div className="card">
                            <div className="card-header">
                              <div className="card-header__column1"><div className="icon"></div>
                              </div>
                              <div className="card-header__column2">
                                <h2 className="card-head">{props.name}</h2>
                                <h4 className="card-sub">{props.type}</h4>
                              </div>
                              <div className="card-header__column3">
                                <a href={props.link}><Ripple unbounded><Icon strategy="ligature" use="arrow_forward_ios"/></Ripple></a>
                              </div>
                            </div>
                            <div className="card-divider"></div>
                            <h4 className="card-desc">{props.desc}</h4>
                          </div>);
                  }
export default Component;
