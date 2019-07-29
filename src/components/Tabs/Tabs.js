import React from "react";
import { TabBar, Tab } from "rmwc/Tabs";
import { NavLink } from "react-router-dom";
import "./Tabs.css";

const Tabs = () => (
  <TabBar>
    <NavLink to="/" exact>
      <Tab stacked restrictIndicator icon="explore" label="Explore" />
    </NavLink>
    <NavLink to="/nearby" exact>
      <Tab stacked restrictIndicator icon="near_me" label="NearBy" />
    </NavLink>
    <NavLink to="/societies" exact>
      <Tab stacked restrictIndicator icon="people" label="Societies" />
    </NavLink>
  </TabBar>
);
export default Tabs;
