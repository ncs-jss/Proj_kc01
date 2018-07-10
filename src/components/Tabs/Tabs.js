import React from "react";
import { TabBar, Tab, TabIcon, TabIconText } from "rmwc/Tabs";
import { NavLink } from "react-router-dom";
import "./Tabs.css";

const Tabs = () => (
  <TabBar>
    <NavLink to="/">
      <Tab>
        <TabIcon>explore</TabIcon>
        <TabIconText>Explore</TabIconText>
      </Tab>
    </NavLink>
    <NavLink to="/nearby">
      <Tab>
        <TabIcon>near_me</TabIcon>
        <TabIconText>NearBy</TabIconText>
      </Tab>
    </NavLink>
    <NavLink to="/societies">
      <Tab>
        <TabIcon>people</TabIcon>
        <TabIconText>Societies</TabIconText>
      </Tab>
    </NavLink>
  </TabBar>
);
export default Tabs;
